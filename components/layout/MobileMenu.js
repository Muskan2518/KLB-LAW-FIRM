'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [openKey, setOpenKey] = useState(null)
    const toggle = (k) => setOpenKey(openKey === k ? null : k)

    const closeMenu = () => {
        setOpenKey(null)
        if (isMobileMenu) handleMobileMenu()
    }

    return (
        <>
            {/* Top mobile bar — orange/whatsApp/burger */}
            <div className="klb-mobile-bar d-block d-lg-none">
                <div className="container-fluid">
                    <div className="klb-mobile-bar__inner">
                        <Link href="/" onClick={closeMenu} className="klb-mobile-bar__brand" aria-label="KLB Law Firm — Home">
                            <img src="/assets/images/klb/klb-logo.png" alt="KLB Law Firm" />
                        </Link>
                        <div className="klb-mobile-bar__actions">
                            <Link
                                href="https://wa.me/919866301129?text=Hello%20KLB%20Law%20Firm%2C%20I%20would%20like%20to%20enquire%20about%20your%20legal%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Need Legal Help? Chat on WhatsApp"
                                className="klb-mobile-bar__wa"
                            >
                                <i className="fa-brands fa-whatsapp" />
                            </Link>
                            <button type="button" className="klb-mobile-bar__burger" onClick={handleMobileMenu} aria-label="Open menu">
                                <i className="fa-solid fa-bars" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide-in side drawer */}
            <div
                className={`klb-mobile-overlay ${isMobileMenu ? "is-open" : ""}`}
                onClick={closeMenu}
                aria-hidden={!isMobileMenu}
            />

            <aside className={`klb-mobile-drawer ${isMobileMenu ? "is-open" : ""}`}>
                <div className="klb-mobile-drawer__head">
                    <Link href="/" onClick={closeMenu} className="klb-mobile-drawer__brand" aria-label="KLB Law Firm — Home">
                        <img src="/assets/images/klb/klb-logo.png" alt="KLB Law Firm" />
                    </Link>
                    <button type="button" className="klb-mobile-drawer__close" onClick={handleMobileMenu} aria-label="Close menu">
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>

                <nav className="klb-mobile-nav">
                    <ul>
                        <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link href="/about" onClick={closeMenu}>About Us</Link></li>
                        <li className={`klb-mobile-nav__has-sub ${openKey === "services" ? "is-open" : ""}`}>
                            <button type="button" onClick={() => toggle("services")}>
                                Services
                                <i className="fa-solid fa-chevron-down" />
                            </button>
                            <ul>
                                <li><Link href="/servicev1?open=civil-law" onClick={closeMenu}>Civil Law</Link></li>
                                <li><Link href="/servicev1?open=criminal-law" onClick={closeMenu}>Criminal Law</Link></li>
                                <li><Link href="/servicev1?open=corporate-law" onClick={closeMenu}>Corporate Law</Link></li>
                                <li><Link href="/servicev1?open=family-law" onClick={closeMenu}>Family Law</Link></li>
                                <li><Link href="/servicev1?open=divorce-law" onClick={closeMenu}>Divorce Law</Link></li>
                                <li><Link href="/servicev1?open=education-law" onClick={closeMenu}>Education Law</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/case-studies" onClick={closeMenu}>Case Studies</Link></li>
                        <li><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
                        <li><Link href="/contact1" onClick={closeMenu}>Legal Advice</Link></li>
                    </ul>
                </nav>

                <div className="klb-mobile-drawer__cta">
                    <Link
                        href="https://wa.me/919866301129?text=Hello%20KLB%20Law%20Firm%2C%20I%20would%20like%20to%20enquire%20about%20your%20legal%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="klb-mobile-drawer__btn"
                        onClick={closeMenu}
                    >
                        <i className="fa-brands fa-whatsapp" />
                        Need Legal Help?
                    </Link>
                </div>

                <div className="klb-mobile-drawer__contact">
                    <h4>Get in Touch</h4>
                    <a href="tel:+917386276699">
                        <i className="fa-solid fa-phone" />
                        <span>+91 73862 76699</span>
                    </a>
                    <a href="tel:+919866301129">
                        <i className="fa-solid fa-phone" />
                        <span>+91 98663 01129</span>
                    </a>
                    <a href="mailto:klblawfirm.legal@gmail.com">
                        <i className="fa-regular fa-envelope" />
                        <span>klblawfirm.legal@gmail.com</span>
                    </a>
                    <p>
                        <i className="fa-solid fa-location-dot" />
                        Flat No 208, 2nd Floor, Urmila Prabakar Residency, Vijaya Towers, Shanti Nagar Rd, AC Guards, Lakdikapul, Hyderabad, Telangana 500028
                    </p>
                </div>

                <div className="klb-mobile-drawer__socials">
                    <a href="https://www.facebook.com/share/19gTUDepAo/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
                    <a href="https://share.google/JFx2d4KJJL1iE16fE" target="_blank" rel="noopener noreferrer" aria-label="Google"><i className="fa-brands fa-google" /></a>
                </div>
            </aside>
        </>
    )
}
