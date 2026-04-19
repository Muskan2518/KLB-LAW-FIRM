import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <div>
                    <div className="cotactinner-section-area section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="contcat5-textarea5">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Contact Us</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">Get in Touch with KLB Law Firm</h1>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30">Tell us briefly about your matter. We respond to every enquiry within one business day, and urgent calls reach us 24/7.</p>

                                        <div className="klb-contact-cards margin-t32">
                                            <Link href="tel:+917386276699" className="klb-contact-card">
                                                <span className="klb-contact-card__icon"><i className="fa-solid fa-phone" /></span>
                                                <span className="klb-contact-card__body">
                                                    <span className="klb-contact-card__label">Call or Text</span>
                                                    <span className="klb-contact-card__value">+91 73862 76699</span>
                                                </span>
                                                <span className="klb-contact-card__arrow"><i className="fa-solid fa-arrow-right" /></span>
                                            </Link>

                                            <Link href="tel:+919866301129" className="klb-contact-card">
                                                <span className="klb-contact-card__icon"><i className="fa-solid fa-phone" /></span>
                                                <span className="klb-contact-card__body">
                                                    <span className="klb-contact-card__label">Alternate Line</span>
                                                    <span className="klb-contact-card__value">+91 98663 01129</span>
                                                </span>
                                                <span className="klb-contact-card__arrow"><i className="fa-solid fa-arrow-right" /></span>
                                            </Link>

                                            <Link
                                                href="https://wa.me/919866301129?text=Hello%20KLB%20Law%20Firm%2C%20I%20would%20like%20to%20enquire%20about%20your%20legal%20services."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="klb-contact-card"
                                            >
                                                <span className="klb-contact-card__icon klb-contact-card__icon--wa"><i className="fa-brands fa-whatsapp" /></span>
                                                <span className="klb-contact-card__body">
                                                    <span className="klb-contact-card__label">Need Legal Help?</span>
                                                    <span className="klb-contact-card__value">+91 98663 01129</span>
                                                </span>
                                                <span className="klb-contact-card__arrow"><i className="fa-solid fa-arrow-right" /></span>
                                            </Link>

                                            <Link
                                                href="https://maps.google.com/?q=Flat+No+208,+2nd+Floor,+Urmila+Prabakar+Residency,+Vijaya+Towers,+Shanti+Nagar+Rd,+AC+Guards,+Lakdikapul,+Hyderabad,+Telangana+500028"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="klb-contact-card"
                                            >
                                                <span className="klb-contact-card__icon"><i className="fa-solid fa-location-dot" /></span>
                                                <span className="klb-contact-card__body">
                                                    <span className="klb-contact-card__label">Office Address</span>
                                                    <span className="klb-contact-card__value" style={{ fontSize: 14, lineHeight: 1.45, fontWeight: 600 }}>Flat No 208, 2nd Floor, Urmila Prabakar Residency, Vijaya Towers, Shanti Nagar Rd, AC Guards, Lakdikapul, Hyderabad, Telangana 500028</span>
                                                </span>
                                                <span className="klb-contact-card__arrow"><i className="fa-solid fa-arrow-right" /></span>
                                            </Link>

                                            <div className="klb-contact-card klb-contact-card--static">
                                                <span className="klb-contact-card__icon"><i className="fa-regular fa-clock" /></span>
                                                <span className="klb-contact-card__body">
                                                    <span className="klb-contact-card__label">Working Hours</span>
                                                    <span className="klb-contact-card__value">24/7 Client Support</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="contact5-main-section">
                                        <div className="contact-main-text">
                                            <h1 className="font-lora font-24 lineh-24 weight-600 color">Send Us a Message</h1>
                                            <p className="font-ks font-16 lineh-26 weight-500 color margin-t">Share a few details about your matter and our team will get back to you with the next steps.</p>
                                        </div>
                                        <div className="contac5-input5area">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t32">
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t32">
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t">
                                                        <input type="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t">
                                                        <input type="tel" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-5area margin-t">
                                                        <input type="text" placeholder="Subject (e.g. Civil dispute, Corporate matter)" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-5area margin-t">
                                                        <textarea cols={30} rows={10} placeholder="Briefly describe your matter" />
                                                    </div>
                                                    <div className="contact5-btn5">
                                                        <button className="font-ks font-16 lineh-16 weight-700 color margin-t32 contcat5" type="submit">Submit Enquiry <span><i className="fa-solid fa-arrow-right" /></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== MAP=======*/}
                    <div className="klb-map-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="text-center margin-b60">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 d-inline-block margin-b24">Visit Us</span>
                                        <h1 className="font-lora font-48 lineh-52 weight-600 margin-b">Find Our Office</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500">FLAT NO 208, 2nd Floor, Urmila Prabakar Residency, Vijaya Towers, Shanti Nagar Rd, AC Guards, Lakdikapul, Hyderabad, Telangana 500028</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="klb-map-frame">
                                        <iframe
                                            src="https://maps.google.com/maps?q=Flat%20No%20208%2C%202nd%20Floor%2C%20Urmila%20Prabakar%20Residency%2C%20Vijaya%20Towers%2C%20Shanti%20Nagar%20Rd%2C%20AC%20Guards%2C%20Lakdikapul%2C%20Hyderabad%2C%20Telangana%20500028&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                            width="100%"
                                            height="450"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="KLB Law Firm — Office Location"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
