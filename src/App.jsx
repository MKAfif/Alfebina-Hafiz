import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroInvitation from './assests/bg1.png';
import eventFlower from './assests/f1.jpg';
import cherryBlossom from './assests/f3.jpg';
import {
  BookOpen,
  CalendarDays,
  MapPin,
  Gift,
  Heart,
  Pencil,
  MonitorSmartphone,
  CloudDownload,
  ArrowRight,
  X,
  Menu,
  Flower2,
} from 'lucide-react';

const WEDDING_DATE = new Date('2026-12-10T11:30:00+05:30');

function useCountdown() {
  const calculate = () => {
    const distance = Math.max(0, WEDDING_DATE.getTime() - Date.now());
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calculate);
  useEffect(() => {
    const timer = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(timer);
  }, []);
  return time;
}

function FloralCorner({ className = '' }) {
  return <div aria-hidden="true" className={`floral-corner ${className}`}>
    <span className="flower flower-one">✿</span>
    <span className="flower flower-two">❀</span>
    <span className="flower flower-three">✿</span>
    <span className="flower flower-four">❀</span>
    <span className="flower flower-five">✿</span>
    <span className="leaf leaf-one">⌁</span><span className="leaf leaf-two">⌁</span>
  </div>;
}

function RSVPModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', attendance: 'Joyfully accepts', guests: '1', message: '' });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const text = `Wedding RSVP%0AName: ${encodeURIComponent(form.name)}%0AAttendance: ${encodeURIComponent(form.attendance)}%0AGuests: ${form.guests}%0AMessage: ${encodeURIComponent(form.message)}`;
    // Replace this number with the RSVP contact number before publishing.
    window.open(`https://wa.me/919447503279?text=${text}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };
  return <div className="modal-backdrop" onClick={onClose}>
    <motion.div className="rsvp-modal" initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
      onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close RSVP"><X size={19} /></button>
      {submitted ? <><Heart className="modal-heart" /><h2>Thank you!</h2><p>Your RSVP message has been prepared in WhatsApp.</p><button className="gold-button" onClick={onClose}>Close</button></> :
        <><p className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p><h2>Kindly RSVP</h2>
          <form onSubmit={submit}>
            <label>Your name<input name="name" value={form.name} onChange={update} required placeholder="Full name" /></label>
            <label>Response<select name="attendance" value={form.attendance} onChange={update}><option>Joyfully accepts</option><option>Regretfully declines</option></select></label>
            <label>Number of guests<select name="guests" value={form.guests} onChange={update}><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></label>
            <label>Message (optional)<textarea name="message" value={form.message} onChange={update} rows="3" placeholder="Send your wishes..." /></label>
            <button className="gold-button" type="submit">Send RSVP <ArrowRight size={15} /></button>
          </form>
        </>}
    </motion.div>
  </div>;
}

const cards = [
  { icon: BookOpen, title: 'THE FAMILIES', description: 'With the blessings of our families, we invite you to share our joy.', target: '#families', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=85' },
  { icon: CalendarDays, title: 'THE DETAILS', description: 'Thursday, 10 December 2026 · Nikah at 11:30 AM.', target: '#details', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=85' },
  { icon: MapPin, title: 'THE VENUE', description: 'Varsha Convention Centre, Punalur.', target: '#venue', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=700&q=85' },
  { icon: Heart, title: 'RSVP', description: 'Your presence and duas are our greatest blessings.', target: '#rsvp', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=85' },
];

function App() {
  const [showRSVP, setShowRSVP] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const countdown = useCountdown();

  const navItems = [['Our Story', '#story'], ['Details', '#details'], ['RSVP', '#rsvp'], ['Schedule', '#schedule'], ['Gallery', '#gallery']];
  const scrollTo = (id) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return <main>
  <header className="wedding-header">
  <button
    className="mobile-menu"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation"
  >
    {menuOpen ? <X size={23} /> : <Menu size={23} />}
  </button>

  <nav className={`wedding-nav ${menuOpen ? 'nav-open' : ''}`}>
    {/* Left navigation */}
    <div className="nav-group">
      {navItems.slice(0, 2).map(([label, target]) => (
        <button
          key={label}
          onClick={() => scrollTo(target)}
        >
          {label}
        </button>
      ))}
    </div>

    {/* Center monogram */}
    <button
      className="wedding-monogram"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      aria-label="Back to top"
    >
      <Flower2 className="monogram-flower" size={25} />

      <span className="monogram-names">
        A <i>&</i> A
      </span>

      <span className="monogram-caption">
        TOGETHER FOREVER
      </span>
    </button>

    {/* Right navigation */}
    <div className="nav-group">
      {navItems.slice(2).map(([label, target]) => (
        <button
          key={label}
          onClick={() => {
            if (target === '#rsvp') {
              setShowRSVP(true);
              setMenuOpen(false);
            } else {
              scrollTo(target);
            }
          }}
        >
          {label}
        </button>
      ))}
    </div>
  </nav>
</header>

    <section className="hero" id="story">
      <img className="hero-invitation" src={heroInvitation} alt="Elegant ivory and gold wedding invitation artwork" />
    </section>

    <section className="feature-strip" aria-label="Invitation features">
      <div><span className="feature-icon"><Pencil /></span><p><b>ELEGANT INVITATION</b><small>Thoughtfully made<br />for our special day</small></p></div>
      <div><span className="feature-icon"><MonitorSmartphone /></span><p><b>MOBILE + DESKTOP</b><small>Looks beautiful on<br />every device</small></p></div>
      <div><span className="feature-icon"><Heart /></span><p><b>SHARE THE JOY</b><small>Celebrate this day<br />with our families</small></p></div>
      <div><span className="feature-icon"><CloudDownload /></span><p><b>ALL THE DETAILS</b><small>Event, venue and<br />Nikah information</small></p></div>
    </section>

    <section className="countdown-section" id="details">
      <div className="countdown-block">
        <p className="eyebrow">THE WEDDING COUNTDOWN</p>
        <div className="countdown">
          {Object.entries(countdown).map(([unit, value]) => <div key={unit}><strong>{String(value).padStart(2, '0')}</strong><span>{unit.toUpperCase()}</span></div>)}
        </div>
      </div>
      <div className="couple-summary">
        <p className="script-name">Afebina &amp; Ameer</p>
        <p>10 December 2026 <span>•</span> 1 Rajab, 1448 AH</p>
        <button className="gold-button" onClick={() => setShowRSVP(true)}>RSVP NOW <ArrowRight size={14} /></button>
      </div>

    </section>

    <section className="cards-section" id="gallery">
      <div className="info-cards">
        {cards.map(({ icon: Icon, title, description, target, image }) => <button className="info-card" key={title} onClick={() => target === '#rsvp' ? setShowRSVP(true) : scrollTo(target)}>
          <img src={image} alt="" loading="lazy" />
          <span className="card-icon"><Icon size={21} /></span>
          <div className="card-copy"><h3>{title}</h3><p>{description}</p><span className="card-arrow">⟶</span></div>
        </button>)}
      </div>
    </section>

    <section className="families-section" id="families">
      <p className="eyebrow">WITH THE BLESSINGS OF OUR FAMILIES</p>
      <div className="family-columns">
        <div><h3>BRIDE'S FAMILY</h3><p>Mr. Nivas M.S &amp; Mrs. Hairuniza Beegam S</p><p className="address">Ruby Nivas, Nedumparambu Junction,<br />Pathanapuram</p><p className="family-small">Granddaughter of</p><p>P. Muhammed Hussain Sahib<br />&amp; Mrs. (Late) Subaida Beegam</p></div>
        <div className="family-divider">❧</div>
        <div><h3>GROOM'S FAMILY</h3><p>Mr. Muhammed Anzar &amp; Mrs. Saliha</p><p className="address">Madheena House, Narackal,<br />Perinad P.O., Kollam</p><p className="family-small">Karuva Stores</p><p>Hafiz Muhamed Ameer</p></div>
      </div>
    </section>

    <section style={{ border: '2px solid black', border: 'none' }} className="event-details" id="schedule">

      <div className="event-layout">
        <img className="event-flower" src={eventFlower} alt="Ivory and gold floral arrangement" />
        <div className="event-copy">
          <p className="eyebrow">SAVE THE DATE</p>
          <h2>Thursday <span>10</span> December 2026</h2>
          <p className="hijri-date">1 Rajab, 1448 AH</p>
          <div className="details-rule" />
          <h3>THE NIKAH</h3>
          <p className="event-time">11:30 AM – 12:00 PM</p>
          <h3 id="venue">VARSHA CONVENTION CENTRE</h3>
          <p className="venue-name">Punalur, Kerala</p>
          <a className="gold-button map-button" href="https://www.google.com/maps/search/?api=1&query=Varsha+Convention+Centre+Punalur" target="_blank" rel="noreferrer">VIEW LOCATION <MapPin size={15} /></a>
        </div>
      </div>
    </section>

    {/* <section className="closing-section" id="rsvp">
      <FloralCorner className="closing-floral-left"/>
      <FloralCorner className="closing-floral-right"/>
      <p className="script-quote">“Your presence and duas are our greatest blessings.”</p>
      <p className="sharing">SHARING HAPPINESS</p>
      <p>Alfasna, Alfara, Friends and Relatives</p>
      <p className="supporters">Niza Medicals, Pathanapuram &amp; NMR Super Market, Edamon</p>
      <button className="gold-button" onClick={() => setShowRSVP(true)}>KINDLY RSVP <Heart size={15}/></button>
    </section>

    <footer><span>A <i>♥</i> A</span><p>Made with love and duas · 10 December 2026</p><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO TOP ↑</button></footer>
    {showRSVP && <RSVPModal onClose={() => setShowRSVP(false)}/>} */}
    {showRSVP && <RSVPModal onClose={() => setShowRSVP(false)} />}
  </main>;
}

export default App;