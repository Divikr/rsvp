import { useState } from 'react';
import { IMG } from '../assets';
import { FAMILY_BLESSINGS } from '../content';
import { ChevronLeft, ChevronRight } from './icons';

const ITEMS = FAMILY_BLESSINGS;
const N = ITEMS.length;

/** Carousel of short blessings from the couple's families. */
export function FamilyBlessings() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v + N - 1) % N);
  const next = () => setI((v) => (v + 1) % N);

  const b = ITEMS[i];
  const p = ITEMS[(i + N - 1) % N];
  const n = ITEMS[(i + 1) % N];

  return (
    <section className="faq" id="families" aria-labelledby="families-h">
      <div className="wrap">
        <p className="eyebrow">With love</p>
        <h2 className="h2" id="families-h">
          Blessings From Our Families
        </h2>
        <div className="qstage">
          <button className="qside qside--prev" type="button" aria-label={`Previous blessing: ${p.title}`} onClick={prev}>
            <img src={IMG[p.img]} alt="" style={{ objectPosition: p.pos }} />
            <span>{p.title}</span>
          </button>
          <div className="qcard" aria-live="polite">
            <img src={IMG[b.img]} alt="" style={{ objectPosition: b.pos }} />
            {/* key re-mounts the body so the fade animation replays on every change */}
            <div className="qcard__body fade" key={i}>
              <span className="qmark" aria-hidden="true">
                “
              </span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
              <p className="who-sig">— {b.from}</p>
            </div>
          </div>
          <button className="qside qside--next" type="button" aria-label={`Next blessing: ${n.title}`} onClick={next}>
            <img src={IMG[n.img]} alt="" style={{ objectPosition: n.pos }} />
            <span>{n.title}</span>
          </button>
        </div>
        <div className="qnav">
          <button className="arrow" type="button" aria-label="Previous blessing" onClick={prev}>
            <ChevronLeft />
          </button>
          <span className="qcount">
            {i + 1} / {N}
          </span>
          <button className="arrow arrow--fill" type="button" aria-label="Next blessing" onClick={next}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
