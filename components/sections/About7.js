
import Link from "next/link"

export default function About7() {
    return (
        <>

            <div className="about7-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={1000}>
                            <div className="about7-images" style={{ textAlign: "center" }}>
                                <img src="/assets/images/klb/about/about-a.jpg" alt="About KLB Law Firm" className="about7images" style={{ borderRadius: 12, maxWidth: 360, width: "100%", height: "auto" }} />
                                <img src="/assets/images/elementor/elementor44.png" alt="" className="elementors10 keyframe3" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1400}>
                            <div className="about-7textarea">
                                <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1">About Our Firm</span>
                                <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20" data-aos="fade-left" data-aos-duration={1200}>Justice. Tradition. Innovation.</h1>
                                <p className="font-ks font-16 weight-500 color-hp lineh-26 margin-b24">KLB Law Firm blends decades of courtroom tradition with modern legal insight. Our advocates deliver carefully crafted strategies that protect both individual and corporate interests across India.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="uncommonlist">
                                            <div className="listarea1">
                                                <span><i className="fa-solid fa-check" /></span>
                                                <p className="font-ks font-16 weight-600 color-h7 lineh-16">19+ Years of Proven Experience</p>
                                            </div>
                                            <div className="listarea2">
                                                <span><i className="fa-solid fa-check" /></span>
                                                <p className="font-ks font-16 weight-600 color-h7 lineh-16">5,000+ Successful Cases</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="uncommonlist">
                                            <div className="listarea1">
                                                <span><i className="fa-solid fa-check" /></span>
                                                <p className="font-ks font-16 weight-600 color-h7 lineh-16">95% Client Success Rate</p>
                                            </div>
                                            <div className="listarea2">
                                                <span><i className="fa-solid fa-check" /></span>
                                                <p className="font-ks font-16 weight-600 color-h7 lineh-16">24/7 Client Support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-ks font-16 weight-500 color-hp lineh-26 margin-t28">Founded in Hyderabad in 1997 and recognised with the Legal Era Award in 2023, KLB has expanded its practice nationwide while remaining dedicated to client freedom and integrity.</p>
                                <div data-aos="fade-up" data-aos-duration={1400}>
                                    <Link href="/about" className="font-ks font-16 weight-700 color lineh-16 shedulebtn3 margin-t32">Learn More About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
