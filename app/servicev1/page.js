'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

const slugify = (s) => s.toLowerCase().replace(/\s+/g, "-");

const services = [
    {
        title: "Civil Law",
        image: "/assets/images/klb/practice/civil.jpeg",
        icon: "/assets/images/klb/icon/p-icon-1.png",
        intro: "Civil law deals with disputes between private parties covering contracts, property, torts, and consumer rights. It provides avenues for conflict resolution and compensation. Our experienced team at KLB Law Firm offers strategic counsel to protect your rights and interests in varied civil matters across India.",
        benefits: [
            "Contract dispute resolution",
            "Property and real estate claims",
            "Tort and personal injury cases",
            "Litigation and arbitration",
            "Debt recovery",
            "Public liability claims",
            "Negotiation and settlement",
            "Consumer protection",
            "Legal documentation and filing",
            "Landlord and tenant disputes",
            "Intellectual property",
            "Defamation and privacy issues",
        ],
        advantage: [
            "Our committed civil law attorneys combine legal skill with practical problem-solving to secure favorable outcomes and protect your interests. We handle a broad range of civil disputes with diligence and strategic insight, whether through negotiation, mediation, or litigation.",
            "With clear communication and diligent advocacy, we guide you confidently through civil disputes, helping resolve issues efficiently while minimizing stress — trusted, empathetic, solution-focused support.",
        ],
    },
    {
        title: "Criminal Law",
        image: "/assets/images/klb/practice/criminal.jpg",
        icon: "/assets/images/klb/icon/p-icon-4.png",
        intro: "Criminal law involves handling offenses against the state, including charges like theft, assault, fraud, and more serious crimes. It aims to protect public safety while ensuring fair legal treatment for defendants. At KLB Law Firm, we prioritize protecting your rights with an expert defense approach grounded in deep knowledge of India's criminal justice system and courtroom experience.",
        benefits: [
            "In-depth legal consultation",
            "Thorough case investigation",
            "Skilled trial advocacy",
            "Bail and bond assistance",
            "Negotiation with prosecutors",
            "Appeals and post-conviction",
            "Forensic and evidence",
            "Client-centered strategy",
            "Confidential handling",
            "Alternative dispute resolution",
            "Legal advice for victims",
            "Protection of constitutional",
        ],
        advantage: [
            "With KLB Law Firm, you receive dedicated legal representation designed to defend your freedom and secure the best possible outcome. We combine strong courtroom advocacy with strategic planning tailored to your unique situation.",
            "Whether you're facing criminal charges, navigating a complex civil dispute, or seeking guidance on business or family matters, we stand by your side with integrity, diligence, and unwavering advocacy.",
        ],
    },
    {
        title: "Corporate Law",
        image: "/assets/images/klb/practice/corporate.jpg",
        icon: "/assets/images/klb/icon/p-icon-3.png",
        intro: "Corporate law governs company formation, governance, financing, mergers, compliance, intellectual property, contracts, and litigation. It ensures businesses operate within legal fabrics pivotal for success. KLB Law Firm's attorneys offer customized counsel to help Indian corporations thrive by navigating complex regulations efficiently.",
        benefits: [
            "Business formation & registration",
            "Corporate governance advisory",
            "Regulatory compliance audits",
            "Contract drafting and review",
            "Health care compliance",
            "Mergers and acquisitions",
            "Restructuring planning",
            "Shareholder agreements",
            "Employment law compliance",
            "Risk management consultation",
            "Anti-corruption and compliance",
            "Cross-border transaction advice",
        ],
        advantage: [
            "Our firm brings a blend of legal expertise and business insight, enabling clients to tackle challenges proactively and cost-effectively. We empower our clients to anticipate risks, seize opportunities, and navigate complex legal landscapes with confidence and efficiency.",
            "By partnering with KLB Law Firm, you gain access to a resourceful legal team dedicated to protecting your corporate interests and guiding you through India's dynamic legal landscape.",
        ],
    },
    {
        title: "Education Law",
        image: "/assets/images/klb/practice/education.jpg",
        icon: "/assets/images/klb/icon/p-icon-2.png",
        intro: "Education law regulates the rights and duties of students, educators, and institutions. It involves compliance with policies, dispute resolution, and protection of educational rights. KLB Law Firm provides deep legal insight to help educational stakeholders across India stay compliant and resolve conflicts effectively.",
        benefits: [
            "Regulatory compliance",
            "Student rights protection",
            "Policy drafting and review",
            "Institutional governance advice",
            "Dispute negotiation",
            "Special education advocacy",
            "Accreditation and licensing",
            "Contract review",
            "Intellectual property",
            "Government grant compliance",
            "Legal advice for school boards",
            "Handling harassment cases",
        ],
        advantage: [
            "We offer tailored legal solutions that balance regulatory demands with the unique needs of educators and institutions. Our lawyers actively protect your interests while promoting fair, lawful educational environments.",
            "Our consultative approach ensures you stay informed about evolving regulations and helps reduce legal risks through proactive planning and defense. Our forward-thinking strategies not only safeguard your operations but also strengthen your long-term business resilience.",
        ],
    },
    {
        title: "Family Law",
        image: "/assets/images/klb/practice/civil.jpeg",
        icon: "/assets/images/klb/icon/p-icon-1.png",
        intro: "Family law addresses marriage, divorce, child guardianship, relinquishment, conservation, and heritage controversies. Its sensitive nature requires careful, empathetic, yet effective legal counsel. At KLB Law Firm, we help you resolve family matters while protecting your rights with professionalism and compassion.",
        benefits: [
            "Guidance on marriage",
            "Divorce and annulment",
            "Child custody and visitation",
            "Spousal and child maintenance",
            "Adoption and guardianship",
            "Property and inheritance",
            "Mediation and dispute",
            "Domestic violence protection",
            "Legal separation agreements",
            "Prenuptial and postnuptial",
            "Surrogacy and reproductive",
            "Parental rights enforcement",
        ],
        advantage: [
            "We understand the personal challenges family law cases bring and provide supportive legal guidance to protect your emotional and financial well-being. With compassion and discretion, we tailor our approach to meet your unique family dynamics and goals.",
            "KLB Law Firm advocates vigorously for your rights, striving to achieve amicable resolutions whenever possible and ensuring your interests are prioritized in court.",
        ],
    },
    {
        title: "Divorce Law",
        image: "/assets/images/klb/practice/criminal.jpg",
        icon: "/assets/images/klb/icon/p-icon-4.png",
        intro: "Divorce law governs marital dissolution, covering aspects like alimony, child custody, spousal support, and asset division. These emotionally charged cases bear sensitive yet effective legal counsel. Our firm offers compassionate support while skillfully protecting your legal rights, helping to navigate the complexities of family law in India.",
        benefits: [
            "Personalized case assessment",
            "Child custody and visitation",
            "Spousal and child support",
            "Property and asset division",
            "Mediation and arbitration",
            "Representation in contested",
            "Pre-nuptial and post-nuptial",
            "Domestic violence protection",
            "Legal advice on maintenance",
            "Assistance with annulments",
            "Counseling on parental rights",
            "Support for relocation",
        ],
        advantage: [
            "At KLB Law Firm, we understand the emotional impact of divorce and strive to provide a respectful and supportive environment. Our approach balances advocacy with empathy to protect your interests and those of your family.",
            "We work tirelessly to minimize conflict through negotiation and mediation, focusing on practical solutions that facilitate amicable resolutions while safeguarding your future.",
        ],
    },
];

function ServicesContent() {
    const [selected, setSelected] = useState(null);
    const searchParams = useSearchParams();
    const openSlug = searchParams.get("open");

    useEffect(() => {
        document.body.style.overflow = selected ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [selected]);

    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") setSelected(null); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Open a modal whenever ?open=<slug> changes (also fires on soft navigation
    // from the header dropdown when already on this page).
    useEffect(() => {
        if (!openSlug) {
            setSelected(null);
            return;
        }
        const match = services.find((s) => slugify(s.title) === openSlug);
        if (match) setSelected(match);
    }, [openSlug]);

    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <section className="section-padding5" style={{ background: "#fff" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto">
                                <div className="text-center margin-b60">
                                    <span className="about3span font-ks lineh-16 font-16 weight-600 d-inline-block margin-b24">Our Services</span>
                                    <h1 className="font-lora font-48 lineh-56 weight-600 margin-b20">Professional Legal Services by Experienced Lawyers</h1>
                                    <p className="font-ks font-16 lineh-26 weight-500">Six core practice areas. One trusted firm. Whether you need help resolving a dispute, drafting a contract, or navigating complex legal challenges — KLB&apos;s advocates are here to support you.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row klb-service-grid">
                            {services.map((s) => (
                                <div key={s.title} className="col-lg-4 col-md-6">
                                    <article className="klb-service-card" onClick={() => setSelected(s)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") setSelected(s); }}>
                                        <div className="klb-service-card__image">
                                            <img src={s.image} alt={s.title} loading="lazy" />
                                            <span className="klb-service-card__icon">
                                                <img src={s.icon} alt="" />
                                            </span>
                                        </div>
                                        <div className="klb-service-card__body">
                                            <h3 className="klb-service-card__title">{s.title}</h3>
                                            <p className="klb-service-card__summary">{s.intro.length > 140 ? `${s.intro.slice(0, 140).trim()}…` : s.intro}</p>
                                            <span className="klb-service-card__cta">
                                                Read More <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MODAL — KLB-style detail layout */}
                {selected && (
                    <div className="klb-modal" onClick={() => setSelected(null)}>
                        <div className="klb-svc-dialog" onClick={(e) => e.stopPropagation()}>
                            <button type="button" className="klb-modal__close" onClick={() => setSelected(null)} aria-label="Close">
                                <i className="fa-solid fa-xmark" />
                            </button>

                            <div className="klb-svc-dialog__body">
                                <h1 className="klb-svc__title">{selected.title}</h1>
                                <p className="klb-svc__intro">{selected.intro}</p>

                                <h2 className="klb-svc__h2">Benefits of Our Services</h2>
                                <ul className="klb-svc__benefits">
                                    {selected.benefits.map((b, i) => (
                                        <li key={i}>
                                            <i className="fa-solid fa-check-double" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="klb-svc__advantage">
                                    <div className="klb-svc__advantage-image">
                                        <img src={selected.image} alt={selected.title} />
                                    </div>
                                    <div className="klb-svc__advantage-text">
                                        <h2 className="klb-svc__h2">Advantage of Our Service</h2>
                                        {selected.advantage.map((p, i) => (
                                            <p key={i}>{p}</p>
                                        ))}
                                    </div>
                                </div>

                                <div className="klb-svc__cta">
                                    <Link href="https://wa.me/919866301129" target="_blank" rel="noopener noreferrer" className="klb-modal__btn klb-modal__btn--wa">
                                        <i className="fa-brands fa-whatsapp" /> Need Legal Help?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Layout>
        </>
    )
}

export default function Services() {
    return (
        <Suspense fallback={null}>
            <ServicesContent />
        </Suspense>
    )
}
