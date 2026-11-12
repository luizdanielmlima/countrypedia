import React, { useRef } from 'react';

import {
  Chunk,
  CloseButton,
  DialogContent,
  InfoButton,
  InfoDialogStyled,
  Label,
} from './InfoDialog.styled';

/** Info button that opens a native <dialog> with the app credits. */
const InfoDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    // a click on the backdrop lands on the <dialog> element itself
    if (event.target === dialogRef.current) close();
  };

  return (
    <>
      <InfoButton type="button" aria-label="about this app" onClick={open}>
        <svg
          viewBox="0 0 32 32"
          width="100%"
          height="100%"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M16 0a16 16 0 1 0 0 32 16 16 0 0 0 0-32zM16 6.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4zM14 14h4v11h-4z"
          />
        </svg>
      </InfoButton>

      <InfoDialogStyled
        ref={dialogRef}
        aria-label="About this app"
        onClick={handleDialogClick}
      >
        <DialogContent>
          <CloseButton type="button" aria-label="close" onClick={close}>
            &times;
          </CloseButton>
          <Chunk>
            <Label>Developed by:</Label>
            <a
              href="http://luizdaniellima.com.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="my website"
            >
              Luiz Daniel Lima
            </a>
          </Chunk>
          <Chunk>
            <Label>Data from:</Label>
            <a
              href="https://openweathermap.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="openweather"
            >
              Open Weather
            </a>
            <a
              href="https://restcountries.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="restcountries"
            >
              Rest Countries
            </a>
          </Chunk>
        </DialogContent>
      </InfoDialogStyled>
    </>
  );
};

export default InfoDialog;
