import { SCHEDULE } from '../content';
import { MapPinIcon } from './icons';

const mapsUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export function Schedule() {
  return (
    <section className="sched" id="schedule" aria-labelledby="sched-h">
      <div className="wrap">
        <h2 className="h2" id="sched-h">
          Venue &amp; Schedule
        </h2>
        <div className="ncards">
          {SCHEDULE.map((s) => (
            <article className="ncard" key={s.title}>
              <a
                className="ncard__pin"
                href={mapsUrl(s.map)}
                target="_blank"
                rel="noopener"
                aria-label={`Open ${s.map} in Google Maps`}
                title="Open in Google Maps"
              >
                <MapPinIcon />
              </a>
              <h3>{s.title}</h3>
              <p className="when">{s.when}</p>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
