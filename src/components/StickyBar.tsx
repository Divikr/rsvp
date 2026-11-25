import { useEffect, useState, type RefObject } from 'react';
import { COUPLE } from '../content';

type Props = { heroRef: RefObject<HTMLElement>; onOpenMenu: () => void };

/** Slim bar that slides in once the hero has scrolled away. */
export function StickyBar({ heroRef, onOpenMenu }: Props) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const io = new IntersectionObserver(([en]) => setOn(!en.isIntersecting), {
      rootMargin: '-80px 0px 0px 0px',
    });
    io.observe(hero);
    return () => io.disconnect();
  }, [heroRef]);

  return (
    <header className={`bar${on ? ' on' : ''}`}>
      <div className="wrap">
        <a className="bar__brand" href="#top">
          {COUPLE.monogram}
        </a>
        <div className="bar__right">
          <button className="nav__menu" type="button" onClick={onOpenMenu}>
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
