import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useIsMobile } from '../../hooks/useIsMobile';
import { RootState } from '../../store';
import { countriesActions } from '../../store/countries';
import ArrowLeftIcon from '../ArrowLeftIcon';
import Country from '../Country';
import {
  BackButton,
  ModalBody,
  ModalDialog,
  ModalTopBar,
} from './CountryModal.styled';

/**
 * Mobile-only fullscreen view of the selected country, built on a native <dialog>
 * (top layer, focus trap, inert background and focus restore come for free).
 *
 * Opening pushes a history entry so the browser/OS Back button closes the modal
 * instead of leaving the app. Every way of closing goes through history.back(),
 * and the popstate listener is the single place that actually closes the modal.
 */
const CountryModal = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state: RootState) => state.countries.modalOpen);
  const country = useSelector((state: RootState) => state.countries.country);
  const isMobile = useIsMobile();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const historyEntryPushed = useRef(false);

  // The country (and its map) mounts only once the dialog is open and has a size
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (modalOpen) {
      if (dialog && !dialog.open && typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
      setShown(true);
      if (!historyEntryPushed.current) {
        window.history.pushState(
          { ...window.history.state, countryModal: true },
          '',
        );
        historyEntryPushed.current = true;
      }
    } else {
      setShown(false);
      if (dialog?.open) dialog.close();
      // closed without Back (e.g. resized to desktop): drop the entry we pushed
      if (historyEntryPushed.current) {
        historyEntryPushed.current = false;
        window.history.back();
      }
    }
  }, [modalOpen]);

  // The modal only exists on mobile: if the viewport grows to desktop, close it
  useEffect(() => {
    if (!isMobile) dispatch(countriesActions.closeModal());
  }, [isMobile, dispatch]);

  useEffect(() => {
    const handlePopState = () => {
      if (!modalOpen) return;
      historyEntryPushed.current = false;
      dispatch(countriesActions.closeModal());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [modalOpen, dispatch]);

  // Another country picked (borders / map) -> start from the top again
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [country]);

  const close = () => {
    if (historyEntryPushed.current) window.history.back(); // -> popstate closes it
    else dispatch(countriesActions.closeModal());
  };

  const handleCancel = (event: React.SyntheticEvent) => {
    // Esc: don't let the dialog close itself, route it through close()
    event.preventDefault();
    close();
  };

  return (
    <ModalDialog
      ref={dialogRef}
      aria-label="Country details"
      onCancel={handleCancel}
    >
      <ModalTopBar>
        <BackButton type="button" onClick={close}>
          <ArrowLeftIcon />
          <span>Back to Countries list</span>
        </BackButton>
      </ModalTopBar>
      <ModalBody ref={bodyRef}>{modalOpen && shown && <Country flat />}</ModalBody>
    </ModalDialog>
  );
};

export default CountryModal;
