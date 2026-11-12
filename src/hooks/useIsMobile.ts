import { useSyncExternalStore } from 'react';

/** Keep in sync with styled-breakpoints' down('xl') (max-width: 1199.98px). */
export const MOBILE_MEDIA_QUERY = '(max-width: 1199.98px)';

const subscribe = (onChange: () => void) => {
  const query = window.matchMedia?.(MOBILE_MEDIA_QUERY);
  query?.addEventListener('change', onChange);
  return () => query?.removeEventListener('change', onChange);
};

const getSnapshot = () => window.matchMedia?.(MOBILE_MEDIA_QUERY).matches ?? false;

/** True while the viewport is in the mobile layout (below the `xl` breakpoint). */
export const useIsMobile = () =>
  useSyncExternalStore(subscribe, getSnapshot, () => false);
