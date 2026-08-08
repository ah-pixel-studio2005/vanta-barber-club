"use client";
/* Remote Unsplash assets are pre-sized and art-directed for the masonry crops. */
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useEffect, useState } from "react";

const WA_LINK = "https://wa.me/51999999999?text=Hello%20Vanta%2C%20I%27d%20like%20to%20book%20a%20session.";
const services = [
  ["01", "Signature Cut", "Precision haircut, consultation and styling.", "$25"],
  ["02", "Beard Sculpt", "Beard shaping, trimming and finishing.", "$18"],
  ["03", "Cut + Beard", "Full haircut and beard grooming experience.", "$38"],
  ["04", "Hot Towel Shave", "Traditional razor shave with hot towel treatment.", "$22"],
  ["05", "The Vanta Experience", "Haircut + beard + hot towel + styling.", "$50"],
];
const gallery = [
  ["https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85", "Precision scissor work", "cut"],
  ["https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85", "Modern fade detail", "fade"],
  ["https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85", "Vanta studio interior", "interior"],
  ["https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=1100&q=82", "Beard refinement", "beard"],
  ["https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?auto=format&fit=crop&w=1000&q=85", "Tools of the craft", "tools"],
  ["https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85", "A considered finish", "finish"],
  ["https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=1000&q=85", "The hot towel ritual", "ritual"],
];
const testimonials = [
  ["Best haircut I’ve had in years. Great atmosphere, attention to detail and zero rush.", "Daniel R.", "SIGNATURE CUT"],
  ["They listen, they take their time, and the result is consistently sharp. Exactly what I was looking for.", "Marco T.", "CUT + BEARD"],
  ["A calm space, impeccable service and a barber who understands what suits you. I’ll be back.", "Andrés V.", "VANTA EXPERIENCE"],
];
const nav = [["Home","home"],["Services","services"],["About","about"],["Gallery","gallery"],["Reviews","reviews"],["Contact","contact"]];

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }
function Brand() { return <a className="brand" href="#home" aria-label="Vanta Barber Club, home"><strong>VANTA</strong><span>BARBER CLUB</span></a>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.14 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (!event.currentTarget.checkValidity()) return; setSent(true); event.currentTarget.reset(); };
  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}><Brand /><nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><a className="button button-small header-cta" href={WA_LINK} target="_blank" rel="noreferrer">Book a session <Arrow /></a><button className={`menu-toggle ${menuOpen ? "open" : ""}`} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i/><i/></button><div id="mobile-navigation" className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}><nav aria-label="Mobile navigation">{nav.map(([label,id], index) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}><span>0{index+1}</span>{label}</a>)}</nav><a className="button" href={WA_LINK} target="_blank" rel="noreferrer">Book a session <Arrow /></a></div></header>

      <section className="hero" id="home"><img className="hero-image" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2200&q=90" alt="Barber making a precision haircut in a dark, refined studio" fetchPriority="high" decoding="async" /><div className="hero-overlay" /><div className="hero-content"><p className="eyebrow hero-eyebrow"><span /> Premium barbershop · Est. 2026</p><h1>More than a haircut.<br/><em>A standard.</em></h1><div className="hero-bottom"><p>Precision cuts, timeless style and a premium grooming experience crafted for the modern gentleman.</p><div className="hero-actions"><a className="button button-light" href={WA_LINK} target="_blank" rel="noreferrer">Book your appointment <Arrow /></a><a className="text-link" href="#services">View services <span>↓</span></a></div></div></div><div className="hero-meta"><div><span>MON — SAT</span><strong>09:00 — 20:00</strong></div><div><span>LOCATION</span><strong>LIMA, PERU</strong></div><span className="scroll-cue">SCROLL <i/></span></div></section>

      <section className="intro light-section section-pad" id="about"><div className="section-label" data-reveal><span>01</span> Our philosophy</div><div className="intro-grid"><h2 data-reveal>Craft. Precision.<br/><em>Character.</em></h2><div className="intro-copy" data-reveal><p className="lead">Vanta combines the discipline of traditional barbering with the ease and intention of a contemporary grooming experience.</p><p>Every detail matters—from the first consultation to the final finish. We create considered cuts that feel effortless, personal and unmistakably yours.</p><a className="dark-link" href="#services">Explore our craft <Arrow /></a></div></div><figure className="wide-image" data-reveal><img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=2000&q=88" alt="Barber shaping a client's haircut with focused precision" loading="lazy"/><figcaption><span>THE VANTA STANDARD</span><span>PRECISION IN EVERY DETAIL</span></figcaption></figure></section>

      <section className="services section-pad" id="services"><div className="section-label gold" data-reveal><span>02</span> The menu</div><div className="section-heading" data-reveal><h2>Our services</h2><p>Thoughtful grooming, tailored to you. Every service includes a personal consultation and expert finish.</p></div><div className="service-list">{services.map(([num,title,desc,price]) => <article className="service-row" key={title} data-reveal><span className="service-num">{num}</span><h3>{title}</h3><p>{desc}</p><strong>{price}</strong><a href={WA_LINK} target="_blank" rel="noreferrer" aria-label={`Book ${title}`}><Arrow /></a></article>)}</div><p className="service-note">All prices in USD · Sessions by appointment</p></section>

      <section className="about light-section section-pad"><div className="about-grid"><div className="about-image" data-reveal><img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=88" alt="Professional barber refining a haircut" loading="lazy"/><span className="vertical-note">EST. LIMA — 2026</span></div><div className="about-content"><div className="section-label" data-reveal><span>03</span> About Vanta</div><h2 data-reveal>Where tradition meets <em>modern style.</em></h2><p className="lead" data-reveal>Vanta was created for men who appreciate precision, detail and timeless style.</p><p data-reveal>Every appointment is more than a haircut—it&apos;s a moment to reset, refine and leave sharper than you arrived.</p><div className="stats" data-reveal><div><strong>7+</strong><span>Years experience</span></div><div><strong>2,500+</strong><span>Clients</span></div><div><strong>4.9/5</strong><span>Rating</span></div></div></div></div></section>

      <section className="gallery section-pad" id="gallery"><div className="section-label gold" data-reveal><span>04</span> Selected work</div><div className="section-heading gallery-heading" data-reveal><h2>The Vanta look</h2><p>Clean lines. Natural texture.<br/>A finish that feels like you.</p></div><div className="gallery-grid">{gallery.map(([src,alt,type],i) => <figure key={src} className={`gallery-item item-${i+1}`} data-reveal><img src={src} alt={alt} loading="lazy"/><figcaption><span>0{i+1}</span>{type}</figcaption></figure>)}</div></section>

      <section className="process light-section section-pad" id="experience"><div className="section-label" data-reveal><span>05</span> The experience</div><div className="process-head" data-reveal><h2>Simple by design.<br/><em>Sharp by nature.</em></h2><p>No rush. No guesswork. Just a considered experience from the moment you book.</p></div><div className="steps">{[["01","Book","Choose your service and reserve your session."],["02","Experience","Relax while your barber crafts the perfect look."],["03","Leave sharp","Walk out confident, refined and ready."]].map(([n,t,p]) => <article key={n} data-reveal><span>{n}</span><div className="step-line"/><h3>{t}</h3><p>{p}</p></article>)}</div></section>

      <section className="reviews section-pad" id="reviews"><div className="section-label gold" data-reveal><span>06</span> Client notes</div><h2 data-reveal>What our clients say</h2><div className="review-grid">{testimonials.map(([quote,name,service],i) => <blockquote key={name} data-reveal><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><p>“{quote}”</p><footer><span>0{i+1}</span><div><strong>— {name}</strong><small>{service}</small></div></footer></blockquote>)}</div></section>

      <section className="cta"><img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2000&q=88" alt="Atmospheric premium barber shop interior" loading="lazy"/><div className="cta-overlay"/><div className="cta-content" data-reveal><p className="eyebrow"><span/>Your chair is waiting</p><h2>Ready for your<br/><em>next cut?</em></h2><p>Book your session and experience the Vanta standard.</p><a className="button button-light" href={WA_LINK} target="_blank" rel="noreferrer">Book on WhatsApp <Arrow /></a></div></section>

      <section className="visit light-section section-pad" id="contact"><div className="section-label" data-reveal><span>07</span> Visit & contact</div><div className="visit-head" data-reveal><h2>Visit Vanta</h2><p>Miraflores, Lima</p></div><div className="visit-grid"><div className="map" data-reveal><div className="map-lines"/><span className="map-pin">V</span><div className="map-address"><small>FIND US AT</small><strong>Av. Example 245<br/>Miraflores, Lima</strong><a href="https://maps.google.com/?q=Miraflores+Lima" target="_blank" rel="noreferrer">Get directions <Arrow /></a></div></div><div className="hours" data-reveal><h3>Opening hours</h3><div><span>Monday — Friday</span><strong>09:00 — 20:00</strong></div><div><span>Saturday</span><strong>09:00 — 18:00</strong></div><div><span>Sunday</span><strong>Closed</strong></div><p>Appointments recommended.<br/>Walk-ins subject to availability.</p></div></div><div className="contact-wrap"><div className="contact-intro" data-reveal><p className="eyebrow dark"><span/>Request a session</p><h2>Let&apos;s get you<br/><em>in the chair.</em></h2><p>Tell us what you need and your preferred date. We’ll confirm availability directly.</p><a href="tel:+51999999999">+51 999 999 999</a><a href="mailto:hello@vantabarber.com">hello@vantabarber.com</a></div><form onSubmit={submit} data-reveal><label><span>Name *</span><input name="name" autoComplete="name" required placeholder="Your full name"/></label><label><span>Phone / WhatsApp *</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="+51 000 000 000"/></label><label><span>Email *</span><input name="email" type="email" inputMode="email" autoComplete="email" required placeholder="you@email.com"/></label><label><span>Service *</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(([,name]) => <option key={name}>{name}</option>)}</select></label><label><span>Preferred date *</span><input name="date" type="date" required/></label><label className="full"><span>Message</span><textarea name="message" rows={3} placeholder="Anything we should know?"/></label><div className="form-footer"><p aria-live="polite">{sent ? "Request received. We’ll be in touch shortly." : "We’ll reply within business hours."}</p><button className="button button-dark" type="submit">Request appointment <Arrow /></button></div></form></div></section>

      <footer className="footer"><div className="footer-top"><Brand/><p>Precision cuts, timeless style,<br/>the Vanta standard.</p><nav aria-label="Footer navigation">{nav.slice(0,4).concat([nav[5]]).map(([l,id]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav><div className="socials"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <Arrow /></a><a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok <Arrow /></a></div></div><div className="footer-wordmark">VANTA</div><div className="footer-bottom"><span>© 2026 Vanta Barber Club. All rights reserved.</span><span>Concept Website / Barbershop Web Design</span><span>Website concept by <strong>AHPixel Studio</strong></span></div></footer>
    </main>
  );
}
