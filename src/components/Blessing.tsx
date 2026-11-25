import { IMG } from '../assets';
import { BLESSING, COUPLE } from '../content';

export function Blessing() {
  return (
    <section id="blessing" aria-labelledby="blessing-h">
      <div className="wrap">
        <div className="banner">
          <img loading="lazy" decoding="async" src={IMG.dusk} alt={`${COUPLE.first} and ${COUPLE.second} embracing beside a tree at dusk`} />
          <a className="badge" href="#families" aria-label="Family blessings">
            <svg className="ring" viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="ring" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
              </defs>
              {/* path circumference is 2π·44 ≈ 276; textLength keeps the longer names from overlapping */}
              <text textLength="276" lengthAdjust="spacing">
                <textPath href="#ring">Family blessings · {COUPLE.full} ·</textPath>
              </text>
            </svg>
            <svg className="mid" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
              <path d="M4 11h14M12 5l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="dress">
          <div>
            <p className="eyebrow">{BLESSING.eyebrow}</p>
            <h2 className="h2" id="blessing-h">
              {BLESSING.title}
            </h2>
          </div>
          <blockquote className="verse">
            <p>“{BLESSING.verse}”</p>
            <cite>— {BLESSING.cite}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
