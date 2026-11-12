import { useEffect, useLayoutEffect, useRef, type RefObject } from 'react';

/**
 * Shared behaviour for full-screen overlays (menu, save-the-date modal):
 * locks body scroll, closes on Escape, moves focus in, optionally traps Tab,
 * and returns focus to whatever was focused before opening.
 */
export function useOverlay(
  open: boolean,
  onClose: () => void,
  focusRef: RefObject<HTMLElement>,
  trapRef?: RefObject<HTMLElement>,
) {
  const lastFocus = useRef<HTMLElement | null>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  // Layout effect so the scroll lock is released before an in-page anchor navigates.
  useLayoutEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    focusRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      lastFocus.current?.focus?.({ preventScroll: true });
    };
  }, [open, focusRef]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeRef.current();
        return;
      }
      const box = trapRef?.current;
      if (e.key !== 'Tab' || !box) return;
      const f = [...box.querySelectorAll<HTMLElement>('a[href], button')];
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === box)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, trapRef]);
}
