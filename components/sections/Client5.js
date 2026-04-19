import Link from "next/link"
import CounterUp from "../elements/CounterUp"

const stats = [
    {
        count: 5000,
        suffix: "+",
        label: "Successful Cases",
        sub: "Won across India",
        icon: "fa-solid fa-gavel",
        anim: "zoom-in",
    },
    {
        count: 19,
        suffix: "+",
        label: "Years of Experience",
        sub: "Trusted since 1997",
        icon: "fa-solid fa-clock-rotate-left",
        anim: "zoom-out",
    },
    {
        count: 95,
        suffix: "%",
        label: "Client Success Rate",
        sub: "Outcomes our clients count on",
        icon: "fa-solid fa-circle-check",
        anim: "zoom-in",
    },
    {
        count: 50,
        suffix: "+",
        label: "Awards for Excellence",
        sub: "Including Legal Era 2023",
        icon: "fa-solid fa-award",
        anim: "zoom-out",
    },
];

export default function Client5() {
    return (
        <section className="klb-stats-section">
            <div className="klb-stats-section__bg" aria-hidden="true">
                <span className="klb-stats-section__glow klb-stats-section__glow--1" />
                <span className="klb-stats-section__glow klb-stats-section__glow--2" />
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="klb-stats-grid">
                            {stats.map((s, i) => (
                                <div
                                    key={s.label}
                                    className="klb-stat-card"
                                    data-aos={s.anim}
                                    data-aos-duration={800}
                                    data-aos-delay={150 * i}
                                >
                                    <span className="klb-stat-card__icon" aria-hidden="true">
                                        <i className={s.icon} />
                                    </span>
                                    <h3 className="klb-stat-card__num">
                                        <CounterUp count={s.count} />{s.suffix}
                                    </h3>
                                    <p className="klb-stat-card__label">{s.label}</p>
                                    <p className="klb-stat-card__sub">{s.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="klb-stats-copy" data-aos="fade-left" data-aos-duration={1000}>
                            <span className="klb-stats-copy__eyebrow">A Legacy of Results</span>
                            <h2 className="klb-stats-copy__title" data-aos="fade-left" data-aos-duration={1200}>
                                A Track Record That Speaks for Itself
                            </h2>
                            <p className="klb-stats-copy__lead">
                                Since 1997, KLB Law Firm has stood beside individuals and businesses across India.
                                Recognised as &ldquo;Firm of the Year&rdquo; in 2000 and honoured with the Legal Era
                                Award in 2023, our advocates combine experience with strategic clarity.
                            </p>

                            <ul className="klb-stats-copy__highlights">
                                <li>
                                    <i className="fa-solid fa-check" />
                                    <span>Decades of courtroom experience</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" />
                                    <span>Pan-India practice</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" />
                                    <span>24/7 client support</span>
                                </li>
                            </ul>

                            <div data-aos="fade-up" data-aos-duration={1400}>
                                <Link href="/contact1" className="klb-stats-copy__btn">
                                    Discuss Your Matter
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
