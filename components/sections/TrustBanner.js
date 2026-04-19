import Link from "next/link"

export default function TrustBanner() {
    return (
        <section className="klb-trust-banner" aria-label="Trusted By Clients">
            <div
                className="klb-trust-banner__bg"
                style={{ backgroundImage: "url('/assets/images/klb/gallery/DSC_1015.jpg')" }}
                aria-hidden="true"
            />
            <div className="klb-trust-banner__shade" aria-hidden="true" />

            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-6 col-md-9">
                        <div className="klb-trust-banner__card" data-aos="fade-left" data-aos-duration={1000}>
                            <h2 className="klb-trust-banner__title">
                                <span>Trusted</span>
                                <span className="klb-trust-banner__accent">By Clients.</span>
                            </h2>
                            <p className="klb-trust-banner__lead">
                                Delivering trusted legal counsel backed by 19+ years of courtroom
                                experience, 5,000+ successful cases, and unwavering client advocacy
                                across India.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
