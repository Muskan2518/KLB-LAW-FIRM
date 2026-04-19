'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useState } from "react"

const cases = [
    {
        title: "Suit for Cancellation of Sale Deeds",
        category: "Civil",
        image: "/assets/images/klb/cases/sale-deeds.jpg",
        summary: "Civil suit challenging registered sale deeds on grounds of fraud and lack of title, secured under Section 31 of the Specific Relief Act.",
        client: "Chakrapani",
        background: "The matter involved challenging registered sale deeds on grounds recognised in Indian jurisprudence — fraud, misrepresentation, and lack of title — requiring a focused evidentiary strategy and meticulous documentary preparation.",
        issues: [
            "Establishing legally cognisable grounds for cancellation (fraud, misrepresentation, mistake, or lack of title)",
            "Navigating limitation issues where accrual runs from the date of knowledge",
            "Framing the suit with precise pleadings under the Specific Relief Act and CPC",
            "Addressing registration implications and the protection afforded to bona fide purchasers",
        ],
        strategy: [
            "Built a robust documentary trail and corroborating witness testimony",
            "Countered Order 7 Rule 11 CPC objections raised at threshold",
            "Coordinated procedural steps — notice, evidence, rebuttals — through every stage",
            "Argued Transfer of Property Act principles on title chains and constructive notice",
        ],
        outcome: "Secured a resolution aligned with statutory remedies available for void and voidable instruments under Indian law, with the court granting reliefs consistent with Section 31 of the Specific Relief Act.",
    },
    {
        title: "Forgery and Cheating Criminal Case",
        category: "Criminal",
        image: "/assets/images/klb/cases/forgery-cheating.jpg",
        summary: "Defence in a criminal case under IPC §420 and §468 involving allegations of fabricated commercial documents.",
        client: "Confidential",
        background: "The accused was charged under IPC §420 (cheating) and §468 (forgery for the purpose of cheating) following a commercial dispute that escalated into criminal proceedings.",
        issues: [
            "Challenging the authenticity of allegedly forged signatures",
            "Procedural lapses in the prosecution's chain of custody for documentary exhibits",
            "Establishing absence of mens rea required under §420 IPC",
            "Application for discharge under §227 CrPC",
        ],
        strategy: [
            "Engaged a forensic document examiner to compare standard and disputed signatures",
            "Cross-examined investigating officer on lapses in seizure and sealing of documents",
            "Highlighted contemporaneous correspondence demonstrating bona fide intent",
        ],
        outcome: "Secured acquittal at trial after demonstrating procedural lapses in the prosecution's documentary chain of custody and the absence of dishonest intention.",
    },
    {
        title: "Breach of Trust Criminal Case",
        category: "Criminal",
        image: "/assets/images/klb/cases/breach-of-trust.jpg",
        summary: "Acted for the complainant in a criminal breach of trust matter under IPC §406; recovered misappropriated assets and secured conviction.",
        client: "Confidential",
        background: "The complainant entrusted assets to the accused who subsequently misappropriated them. KLB was retained to pursue both criminal prosecution and asset recovery.",
        issues: [
            "Establishing entrustment and dishonest misappropriation under §405/406 IPC",
            "Tracing and recovering misappropriated funds and assets",
            "Coordinating parallel civil recovery proceedings",
            "Securing interim protection over identifiable assets",
        ],
        strategy: [
            "Filed a comprehensive private complaint with documentary proof of entrustment",
            "Pursued asset tracing through bank records and registered property searches",
            "Used cross-examination to establish the dishonest intent of the accused",
        ],
        outcome: "Recovered the misappropriated assets in full and secured conviction at the trial court, with restitution ordered to the complainant.",
    },
    {
        title: "Harassment and Cruelty Criminal Case",
        category: "Criminal",
        image: "/assets/images/klb/cases/harassment.jpeg",
        summary: "Represented the wife in a §498A IPC matter alongside parallel matrimonial proceedings.",
        client: "Confidential (wife)",
        background: "The client approached KLB after experiencing sustained matrimonial cruelty. The matter required coordinated criminal action under §498A IPC and parallel matrimonial relief.",
        issues: [
            "Establishing matrimonial cruelty under §498A IPC and §3 of the Dowry Prohibition Act",
            "Securing maintenance under §125 CrPC and DV Act",
            "Recovery of stridhan and personal belongings",
            "Coordinating with police authorities for FIR registration and investigation",
        ],
        strategy: [
            "Filed a detailed complaint supported by medical and witness evidence",
            "Pursued interim maintenance and protection orders concurrently",
            "Engaged in structured negotiation while keeping criminal proceedings active",
        ],
        outcome: "Achieved a favourable settlement covering ongoing maintenance, full stridhan recovery, and a registered mutual-consent decree.",
    },
    {
        title: "Scholarship Scam — Criminal Appeal",
        category: "Criminal",
        image: "/assets/images/klb/cases/scholarships-scam.jpeg",
        summary: "Argued a criminal appeal arising from a multi-crore education-scholarship fraud at the High Court.",
        client: "Confidential (appellant)",
        background: "The client was convicted by the trial court in a high-profile multi-crore education-scholarship fraud. KLB was retained to argue the criminal appeal at the High Court.",
        issues: [
            "Identifying material contradictions in prosecution evidence",
            "Establishing grounds for suspension of sentence pending appeal",
            "Securing bail at the appellate stage",
            "Challenging the trial court's appreciation of documentary and oral evidence",
        ],
        strategy: [
            "Drew up a detailed appeal memorandum highlighting evidentiary infirmities",
            "Made an early application for suspension of sentence and bail",
            "Argued that the conviction relied on inadmissible or untested evidence",
        ],
        outcome: "Secured suspension of sentence and bail pending appeal at the High Court, with the substantive appeal admitted for full hearing.",
    },
    {
        title: "Defamation — Criminal & Civil",
        category: "Mixed",
        image: "/assets/images/klb/cases/defamation.jpg",
        summary: "Concurrent criminal and civil action under IPC §499/500 and tortious defamation; secured damages and a public retraction.",
        client: "Confidential",
        background: "The client suffered reputational damage from defamatory statements made publicly. KLB pursued both criminal proceedings under §499/500 IPC and a parallel civil suit for damages.",
        issues: [
            "Distinguishing fair comment from actionable defamation",
            "Quantifying reputational damage for civil claim",
            "Securing interim injunction restraining further publication",
            "Coordinating relief across criminal and civil tracks",
        ],
        strategy: [
            "Filed concurrent criminal complaint and civil suit with overlapping evidence",
            "Sought and obtained an early interim injunction against further defamatory statements",
            "Engaged in pre-trial mediation with a clearly framed settlement proposal",
        ],
        outcome: "Secured monetary damages and a public retraction following pre-trial mediation, with injunctive relief against further defamatory publication.",
    },
    {
        title: "Cheating, Forgery & Misappropriation",
        category: "Criminal",
        image: "/assets/images/klb/cases/cheating-misapp.jpg",
        summary: "Complex multi-accused matter involving §409, §420, and §468 IPC; cross-examination dismantled the prosecution's principal witness.",
        client: "Confidential (accused)",
        background: "A complex multi-accused matter under IPC §409 (criminal breach of trust by public servant), §420 (cheating), and §468 (forgery for cheating). KLB defended one of the principal accused.",
        issues: [
            "Severance of trial from co-accused on grounds of distinct allegations",
            "Discrediting the prosecution's principal witness through cross-examination",
            "Establishing absence of dominion over the alleged misappropriated property",
            "Challenging the validity of disputed documentary exhibits",
        ],
        strategy: [
            "Methodical witness preparation and a structured cross-examination plan",
            "Forensic examination of disputed documents",
            "Application for discharge under §227 CrPC at the earliest stage",
        ],
        outcome: "Cross-examination of the prosecution's principal witness exposed material contradictions, leading to discharge of the client at the framing-of-charges stage.",
    },
    {
        title: "Partition Suit — Civil & Criminal",
        category: "Mixed",
        image: "/assets/images/klb/cases/partition.jpg",
        summary: "Joint family property partition with parallel criminal trespass proceedings; concluded with an equitable family settlement.",
        client: "Confidential (joint family)",
        background: "A joint family property dispute requiring both a civil partition suit and parallel criminal proceedings to address physical trespass and obstruction by certain co-sharers.",
        issues: [
            "Establishing the existence and quantum of joint family property",
            "Securing interim injunction to prevent dispossession during proceedings",
            "Filing criminal trespass proceedings against obstructive co-sharers",
            "Negotiating an equitable family settlement",
        ],
        strategy: [
            "Filed for partition with detailed pedigree and property schedule",
            "Sought concurrent injunction relief and criminal action",
            "Mediated structured family settlement with judicial supervision",
        ],
        outcome: "Negotiated an equitable family settlement and registered partition deed, with criminal proceedings withdrawn upon performance of the settlement terms.",
    },
    {
        title: "Dishonoured Cheques — §138 NI Act",
        category: "Criminal",
        image: "/assets/images/klb/cases/cheques.jpg",
        summary: "Recovered dues for a corporate client under §138 of the Negotiable Instruments Act; secured conviction and full payment via execution.",
        client: "Corporate client",
        background: "A corporate client was unable to recover commercial dues after multiple cheques were returned dishonoured. KLB pursued criminal proceedings under §138 of the NI Act.",
        issues: [
            "Compliance with statutory notice requirements under §138 NI Act",
            "Proving the existence of legally enforceable debt",
            "Rebutting the §139 NI Act presumption arguments raised by accused",
            "Execution of the resulting decree for full recovery",
        ],
        strategy: [
            "Issued statutory notice within the prescribed limitation period",
            "Filed a comprehensive complaint with bank-return memos and ledger evidence",
            "Pursued execution proceedings to attach assets of the accused",
        ],
        outcome: "Secured conviction at trial and recovered the full outstanding amount via execution proceedings, including interest and litigation costs.",
    },
];

const categories = ["All", "Civil", "Criminal", "Mixed"];

export default function CaseStudies() {
    const [filter, setFilter] = useState("All");
    const [selected, setSelected] = useState(null);

    const filtered = filter === "All" ? cases : cases.filter((c) => c.category === filter);

    // Lock body scroll when modal open
    useEffect(() => {
        if (selected) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [selected]);

    // Close on ESC
    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") setSelected(null); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <section className="section-padding5" style={{ background: "#fff" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto">
                                <div className="text-center margin-b60">
                                    <span className="about3span font-ks lineh-16 font-16 weight-600 d-inline-block margin-b24">Case Studies</span>
                                    <h1 className="font-lora font-48 lineh-56 weight-600 margin-b20">A Track Record That Speaks for Itself</h1>
                                    <p className="font-ks font-16 lineh-26 weight-500">Selected matters from KLB Law Firm&apos;s practice — illustrating our experience across civil, criminal, and complex mixed-jurisdiction cases.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="klb-case-filters">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            type="button"
                                            className={`klb-case-filter ${filter === cat ? "is-active" : ""}`}
                                            onClick={() => setFilter(cat)}
                                        >
                                            {cat}
                                            {cat !== "All" && (
                                                <span className="klb-case-filter__count">
                                                    {cases.filter((c) => c.category === cat).length}
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="row klb-case-grid">
                            {filtered.map((c) => (
                                <div key={c.title} className="col-lg-4 col-md-6">
                                    <article className="klb-case-card" onClick={() => setSelected(c)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") setSelected(c); }}>
                                        <div className="klb-case-card__image">
                                            <img src={c.image} alt={c.title} loading="lazy" />
                                            <span className="klb-case-card__badge">{c.category}</span>
                                        </div>
                                        <div className="klb-case-card__body">
                                            <h3 className="klb-case-card__title">{c.title}</h3>
                                            <p className="klb-case-card__summary">{c.summary}</p>
                                            <span className="klb-case-card__cta">
                                                Read full case <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MODAL */}
                {selected && (
                    <div className="klb-modal" onClick={() => setSelected(null)}>
                        <div className="klb-modal__dialog" onClick={(e) => e.stopPropagation()}>
                            <button type="button" className="klb-modal__close" onClick={() => setSelected(null)} aria-label="Close">
                                <i className="fa-solid fa-xmark" />
                            </button>

                            <div className="klb-modal__hero">
                                <img src={selected.image} alt={selected.title} />
                                <div className="klb-modal__hero-overlay">
                                    <span className="klb-modal__badge">{selected.category}</span>
                                    <h2 className="klb-modal__title">{selected.title}</h2>
                                </div>
                            </div>

                            <div className="klb-modal__body">
                                <div className="klb-modal__main">
                                    <section className="klb-modal__section">
                                        <h3 className="klb-modal__h3">Background</h3>
                                        <p>{selected.background}</p>
                                    </section>

                                    <section className="klb-modal__section">
                                        <h3 className="klb-modal__h3">Legal Issues</h3>
                                        <ul className="klb-modal__list">
                                            {selected.issues.map((it, i) => (
                                                <li key={i}><i className="fa-solid fa-check" /><span>{it}</span></li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="klb-modal__section">
                                        <h3 className="klb-modal__h3">Our Strategy</h3>
                                        <ul className="klb-modal__list">
                                            {selected.strategy.map((it, i) => (
                                                <li key={i}><i className="fa-solid fa-gavel" /><span>{it}</span></li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="klb-modal__section">
                                        <h3 className="klb-modal__h3">Outcome</h3>
                                        <p>{selected.outcome}</p>
                                    </section>
                                </div>

                                <aside className="klb-modal__aside">
                                    <div className="klb-modal__card">
                                        <h4>Case Information</h4>
                                        <dl>
                                            <dt>Practice Area</dt>
                                            <dd>{selected.category}</dd>
                                            <dt>Lawyer</dt>
                                            <dd>KLB Law Firm</dd>
                                            <dt>Client</dt>
                                            <dd>{selected.client}</dd>
                                        </dl>
                                    </div>
                                    <div className="klb-modal__card klb-modal__card--cta">
                                        <h4>Have a similar matter?</h4>
                                        <p>Speak with a KLB advocate. Free initial consultation.</p>
                                        <Link href="https://wa.me/919866301129" target="_blank" rel="noopener noreferrer" className="klb-modal__btn klb-modal__btn--wa">
                                            <i className="fa-brands fa-whatsapp" /> Need Legal Help?
                                        </Link>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                )}
            </Layout>
        </>
    )
}
