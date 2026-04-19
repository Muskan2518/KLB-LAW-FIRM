import Link from "next/link"

export default function Footer7() {
    return (
        <footer className="klb-footer">
            <div className="container">
                <div className="row klb-footer__row">
                    {/* Brand */}
                    <div className="col-lg-5 col-md-12 klb-footer__col">
                        <Link href="/" className="klb-footer__brand">
                            <img src="/assets/images/klb/klb-logo-footer.png" alt="KLB Law Firm" />
                        </Link>
                        <p className="klb-footer__lead">
                            Trusted and comprehensive legal services since 1997. KLB Law Firm
                            champions justice, integrity, and individual rights across India.
                        </p>
                        <div className="klb-footer__socials">
                            <Link href="https://www.facebook.com/share/19gTUDepAo/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fa-brands fa-facebook-f" />
                            </Link>
                            <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fa-brands fa-linkedin-in" />
                            </Link>
                            <Link href="https://share.google/JFx2d4KJJL1iE16fE" target="_blank" rel="noopener noreferrer" aria-label="Google">
                                <i className="fa-brands fa-google" />
                            </Link>
                        </div>
                    </div>

                    {/* Practice Areas */}
                    <div className="col-lg-3 col-md-6 klb-footer__col">
                        <h4 className="klb-footer__heading">Practice Areas</h4>
                        <ul className="klb-footer__links">
                            <li><Link href="/servicev1?open=civil-law">Civil Law</Link></li>
                            <li><Link href="/servicev1?open=criminal-law">Criminal Law</Link></li>
                            <li><Link href="/servicev1?open=corporate-law">Corporate Law</Link></li>
                            <li><Link href="/servicev1?open=family-law">Family Law</Link></li>
                            <li><Link href="/servicev1?open=divorce-law">Divorce Law</Link></li>
                            <li><Link href="/servicev1?open=education-law">Education Law</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-4 col-md-6 klb-footer__col">
                        <h4 className="klb-footer__heading">Contact Us</h4>
                        <ul className="klb-footer__contact">
                            <li>
                                <span className="klb-footer__icon klb-footer__icon--mail">
                                    <i className="fa-regular fa-envelope" />
                                </span>
                                <Link href="mailto:klblawfirm.legal@gmail.com">klblawfirm.legal@gmail.com</Link>
                            </li>
                            <li>
                                <span className="klb-footer__icon klb-footer__icon--wa">
                                    <i className="fa-brands fa-whatsapp" />
                                </span>
                                <Link href="https://wa.me/919866301129" target="_blank" rel="noopener noreferrer">+91 98663 01129</Link>
                            </li>
                            <li>
                                <span className="klb-footer__icon klb-footer__icon--phone">
                                    <i className="fa-solid fa-phone" />
                                </span>
                                <Link href="tel:+917386276699">+91 73862 76699</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="klb-footer__divider" />

                <div className="klb-footer__bottom">
                    <p>© {new Date().getFullYear()} KLB Law Firm. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
