import Link from "next/link"

export default function CeoMessage() {
    return (
        <section className="klb-ceo-section">
            <div className="container">
                <div className="row align-items-stretch">
                    <div className="col-lg-5">
                        <div className="klb-ceo__image-wrap" data-aos="fade-right" data-aos-duration={1000}>
                            <img src="/assets/images/klb/gallery/image-3.jpg" alt="KLB Law Firm Leadership" />
                            <div className="klb-ceo__image-badge">
                                <span className="klb-ceo__badge-since">Since</span>
                                <span className="klb-ceo__badge-year">1997</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="klb-ceo__content" data-aos="fade-left" data-aos-duration={1200}>
                            <span className="klb-ceo__eyebrow">A Message from KLB Law Firm</span>
                            <h2 className="klb-ceo__title">Trust, Integrity &amp; Unwavering Dedication</h2>
                            <p className="klb-ceo__greeting">Dear clients, partners and associates,</p>

                            <div className="klb-ceo__body">
                                <p>At KLB Law Firm, our path has always been steered by principles of trust, integrity, and unwavering dedication. For us, the practice of law extends beyond resolving disputes; it is about fostering meaningful partnerships and crafting solutions that empower and protect our clients.</p>

                                <p>Throughout the years, we have remained steadfast in upholding the highest standards of legal excellence while delivering innovative, practical strategies tailored to complex challenges. Every matter entrusted to us reflects our responsibility to safeguard our clients&apos; interests and to pursue justice with focus and resolve.</p>

                                <p>The trust placed in us by individuals, corporations, and communities is the strongest validation of our mission. As we look ahead, our vision is unwavering — to be a reliable partner in every legal challenge, offering guidance that is clear, transparent, and client-centered.</p>
                            </div>

                            <div className="klb-ceo__signature">
                                <p className="klb-ceo__sig-name">— Chief Executive Officer</p>
                                <p className="klb-ceo__sig-firm">KLB Law Firm</p>
                            </div>

                            <Link href="/about" className="font-ks font-16 weight-700 color lineh-16 shedulebtn3 margin-t32">
                                Learn About Our Firm
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
