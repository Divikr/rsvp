import { IMG } from '../assets';
import { COUPLE, EVENT, INVITE } from '../content';

export function Intro() {
  const { ceremony, reception } = EVENT;
  return (
    <section className="intro" aria-labelledby="intro-h">
      <div className="wrap intro__grid">
        <img
          className="intro__photo"
          loading="lazy"
          decoding="async"
          src={IMG.backtoback}
          alt={`${COUPLE.first} and ${COUPLE.second} standing back to back under a stone arch`}
        />
        <div className="intro__body">
          <h2 className="h2" id="intro-h">
            {COUPLE.full} Are Getting Married.
          </h2>
          <p className="small">
            With the grace of the Divine and the heavenly blessings of {INVITE.graceOf}, {INVITE.hosts} request
            the pleasure of your company at the marriage of their beloved son {INVITE.groomFull} with{' '}
            {INVITE.brideFull}, daughter of {INVITE.brideParents}
          </p>
          <p className="intro__facts">
            {[ceremony, reception].map((e) => (
              <span key={e.title} style={{ flexBasis: '100%' }}>
                <b>{e.dateLong}</b> · {e.title}, {e.time}, {e.place}, {e.town}
              </span>
            ))}
          </p>
        </div>
        <div className="pair" aria-hidden="true">
          <img loading="lazy" decoding="async" src={IMG.sky} alt="" style={{ objectPosition: '50% 65%' }} />
          <img loading="lazy" decoding="async" src={IMG.laugh} alt="" style={{ objectPosition: '50% 40%' }} />
        </div>
      </div>
    </section>
  );
}
