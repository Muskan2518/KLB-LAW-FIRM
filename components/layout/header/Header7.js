import Link from "next/link"


export default function Header7({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header header-sticky ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/images/klb/klb-logo.png" alt="KLB Law Firm" style={{ maxHeight: 68 }} /></Link>
                                    </div>
                                    <div className="main-menu-ex  homepage7 ">
                                        <ul>
                                            <li><Link href="/" className="font-ks font-16 weight-500 color">Home</Link></li>
                                            <li><Link href="/about" className="font-ks font-16 weight-500 color">About Us</Link></li>
                                            <li><Link href="/servicev1" className="font-ks font-16 weight-500 color">Services <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/servicev1?open=criminal-law" className="font-ks font-16 weight-500 color">Criminal Law</Link></li>
                                                    <li><Link href="/servicev1?open=divorce-law" className="font-ks font-16 weight-500 color">Divorce Law</Link></li>
                                                    <li><Link href="/servicev1?open=corporate-law" className="font-ks font-16 weight-500 color">Corporate Law</Link></li>
                                                    <li><Link href="/servicev1?open=education-law" className="font-ks font-16 weight-500 color">Education Law</Link></li>
                                                    <li><Link href="/servicev1?open=family-law" className="font-ks font-16 weight-500 color">Family Law</Link></li>
                                                    <li><Link href="/servicev1?open=civil-law" className="font-ks font-16 weight-500 color">Civil Law</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/case-studies" className="font-ks font-16 weight-500 color">Case Studies</Link></li>
                                            <li><Link href="/gallery" className="font-ks font-16 weight-500 color">Gallery</Link></li>
                                            <li><Link href="/contact1" className="font-ks font-16 weight-500 color">Legal Advice</Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <Link
                                            href="https://wa.me/919866301129?text=Hello%20KLB%20Law%20Firm%2C%20I%20would%20like%20to%20enquire%20about%20your%20legal%20services.%20Please%20get%20in%20touch%20with%20me."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Need Legal Help? Chat with us on WhatsApp"
                                            className="klb-whatsapp-btn"
                                        >
                                            <i className="fa-brands fa-whatsapp" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
