import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Clients from "@/components/sections/Clients";
import Link from "next/link";

const attorneys = [
    { name: "Balaji", role: "Company Law", image: "/assets/images/klb/team/balaji.jpg" },
    { name: "Siva Krishna", role: "Civil & Family Law", image: "/assets/images/klb/team/siva.jpg" },
    { name: "Kanakayya", role: "Criminal Law", image: "/assets/images/klb/team/kanakayya.jpg" },
    { name: "Sumalatha", role: "Civil Law", image: "/assets/images/klb/team/sumalatha.jpg" },
];

const faqs = [
    {
        q: "What services does KLB Law Firm provide?",
        a: "At KLB Law Firm, we offer a broad spectrum of legal services including business law, criminal defense, family law, education law, and real estate legal support. Our experienced team provides personalized counsel to meet the unique needs of each client.",
    },
    {
        q: "How can I schedule a consultation?",
        a: "You can easily schedule a consultation by calling our helpline at +91 98765 43210 or by filling out the inquiry form on our website. We offer multiple services and considering the party we offer both in-person and virtual consultations. This is crucial to accommodate your preferences.",
    },
    {
        q: "How do I request a document review?",
        a: "To request a document review, simply contact our office via phone or email with your documents attached. Our legal experts will thoroughly analyze the paperwork and provide clear, actionable feedback promptly.",
    },
    {
        q: "What is included in the Business Compliance Bundle?",
        a: "The Business Compliance Bundle includes legal audits, drafting and review of contracts, regulatory compliance checks, and ongoing advisory services that ensure your business operates within Indian legal frameworks effectively.",
    },
    {
        q: "Is there a retainer option for ongoing legal support?",
        a: "Yes, KLB Law Firm offers retainer agreements for clients who need continuous legal assistance. This option provides priority access to our lawyers and tailored services that fit your long-term legal needs.",
    },
    {
        q: "How can I inquire about customized legal services?",
        a: "You can inquire about customized legal services by reaching out through our contact channels. Our team will assess your specific situation and design solutions that best fit your legal requirements and goals.",
    },
];

export default function Home() {
    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <div>
                    {/*===== ABOUT STARTS=======*/}
                    <div className="about3-section-area section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about3-images1" style={{ textAlign: "center" }}>
                                        <img src="/assets/images/klb/about/about-a.jpg" alt="About KLB Law Firm" style={{ borderRadius: 12, maxWidth: 380, width: "100%", height: "auto" }} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about3-textarea1">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">About KLB Law Firm</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Justice. Tradition. Innovation.</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">KLB Law Firm champions justice and individual rights with a commitment shaped by decades in Indian courtrooms. Our advocates deliver thoughtful, strategic counsel customised to every client&apos;s circumstances — blending tradition with modern legal insight.</p>
                                        <div className="counter3-area3">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600"><CounterUp count={5000} />+</h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Successful Cases</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600"><CounterUp count={19} />+</h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Years of Experience</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600"><CounterUp count={95} />%</h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Client Success Rate</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600"><CounterUp count={50} />+</h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Awards for Excellence</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== HERITAGE TIMELINE =======*/}
                    <section className="klb-heritage-section">
                        <div className="container">
                            <div className="klb-heritage__header" data-aos="fade-up" data-aos-duration={1000}>
                                <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Our Heritage</span>
                                <h2 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">A Legacy Built on Trust &amp; Results</h2>
                                <p className="font-ks font-16 weight-500 lineh-26 color-30">
                                    From a single-city practice in Hyderabad to a firm serving clients across India — decades of dedication, recognition, and growth.
                                </p>
                            </div>

                            <div className="klb-timeline">
                                <div className="klb-timeline__track" aria-hidden="true" />
                                <div className="klb-timeline__row">
                                    {[
                                        { year: "1997", title: "Firm Founded", desc: "KLB Law Firm opens in Hyderabad with a commitment to integrity, accessibility, and rigorous legal craft.", icon: "fa-solid fa-flag", pos: "above" },
                                        { year: "2000", title: "Firm of the Year", desc: "Recognised early for client outcomes and ethical practice, setting the tone for decades of excellence.", icon: "fa-solid fa-trophy", pos: "below" },
                                        { year: "2023", title: "Legal Era Award", desc: "Honoured by Legal Era for sustained contribution to the Indian legal profession.", icon: "fa-solid fa-award", pos: "above" },
                                        { year: "2025", title: "Nationwide Expansion", desc: "Now serving clients across India with the same commitment we began with in 1997.", icon: "fa-solid fa-earth-asia", pos: "below" },
                                    ].map((m, idx) => (
                                        <div key={m.year} className={`klb-timeline__item klb-timeline__item--${m.pos}`}>
                                            <div className="klb-timeline__content" data-aos={m.pos === "above" ? "fade-down" : "fade-up"} data-aos-duration={800} data-aos-delay={200 + idx * 150}>
                                                <h3>{m.title}</h3>
                                                <p>{m.desc}</p>
                                            </div>
                                            <div className="klb-timeline__connector" data-aos="fade" data-aos-duration={600} data-aos-delay={150 + idx * 150} />
                                            <div className="klb-timeline__node" data-aos="zoom-in" data-aos-duration={600} data-aos-delay={100 + idx * 150}>
                                                <i className={m.icon} aria-hidden="true" />
                                            </div>
                                            <div className="klb-timeline__year" data-aos="fade" data-aos-duration={600} data-aos-delay={200 + idx * 150}>{m.year}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="klb-heritage__cta" data-aos="fade-up" data-aos-duration={800} data-aos-delay={800}>
                                <Link href="/team" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16">
                                    Meet Our Advocates <span><i className="fa-solid fa-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/*===== MISSION=======*/}
                    <div className="mission-area-starts section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="missionimg">
                                        <img src="/assets/images/klb/about/choose-1.png" alt="Why choose KLB" style={{ borderRadius: 12, width: "100%" }} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="missiontextarea">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Our Mission</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">To stand beside every client with clear advice, careful strategy, and unwavering advocacy — protecting individual rights and corporate interests with equal dedication.</p>
                                        <ul>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                Client-focused legal strategy
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                Transparent communication at every stage
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                Free initial consultation &amp; case evaluation
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17">
                                                <span><img src="/assets/images/icons/check1.png" alt="" /></span>
                                                24/7 client support
                                            </li>
                                        </ul>
                                        <Link href="/servicev1" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            View Practice Areas <span><i className="fa-solid fa-arrow-right" /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== CLIENTS=======*/}
                    <Clients />

                    {/*===== TEAM=======*/}
                    <div className="team1-section-area section-padding8">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="team-section-textarea text-center margin-b60">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Our Advocates</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">Meet Our Legal Team</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {attorneys.map((p) => (
                                    <div key={p.name} className="col-lg-3 margin-b30 col-md-6">
                                        <div className="project-item-two">
                                            <div className="project-thumb-two">
                                                <img src={p.image} alt={p.name} style={{ width: "100%", height: 320, objectFit: "cover" }} />
                                            </div>
                                            <div className="project-content-two">
                                                <ul>
                                                    <li><Link href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-facebook" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-linkedin" /></Link></li>
                                                </ul>
                                            </div>
                                            <div className="team-pera text-center margin-t">
                                                <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                                                    <Link href="/team-details" className="color-29">{p.name}</Link>
                                                </h1>
                                                <p className="font-16 lineh-16 weight-500 color-30 font-ks">{p.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/*===== FAQ=======*/}
                    <section className="klb-faq-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="text-center margin-b60">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">FAQs</span>
                                        <h2 className="font-lora font-44 lineh-52 weight-600 color-29 margin-b20">Frequently Asked Questions</h2>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Quick answers to the questions our clients ask most often.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="klb-faq-list">
                                        {faqs.map((faq, idx) => (
                                            <details key={idx} className="klb-faq-item" {...(idx === 0 ? { open: true } : {})}>
                                                <summary className="klb-faq-question">
                                                    <span className="klb-faq-question__text">{faq.q}</span>
                                                    <span className="klb-faq-question__chevron">
                                                        <i className="fa-solid fa-plus" />
                                                    </span>
                                                </summary>
                                                <div className="klb-faq-answer">
                                                    <p>{faq.a}</p>
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
