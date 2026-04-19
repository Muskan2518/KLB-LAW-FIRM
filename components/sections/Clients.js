const clients = [
    { name: "Siris Group of Companies", sector: "Conglomerate",  color: "#1E88E5", icon: "fa-solid fa-city" },
    { name: "MS Engineering Pvt Ltd.",  sector: "Engineering",   color: "#2E7D32", icon: "fa-solid fa-gears" },
    { name: "Rukmini Constructions",     sector: "Construction",  color: "#C62828", icon: "fa-solid fa-helmet-safety" },
    { name: "Shathabdi Group",           sector: "Conglomerate",  color: "#F9A825", icon: "fa-solid fa-building-columns" },
    { name: "Anuhya Constructions",      sector: "Construction",  color: "#00ACC1", icon: "fa-solid fa-trowel-bricks" },
    { name: "ICICI",                     sector: "Banking & Finance", color: "#0F0A07", icon: "fa-solid fa-landmark" },
];

export default function Clients() {
    return (
        <section className="klb-clients-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="text-center margin-b60" data-aos="fade-up" data-aos-duration={800}>
                            <span className="about3span font-ks lineh-16 font-16 weight-600 d-inline-block margin-b24">Trusted By</span>
                            <h2 className="font-lora font-44 lineh-52 weight-600 color-29 margin-b20">Our Clients</h2>
                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                A diverse roster of corporations and institutions across construction,
                                engineering, banking, and beyond — relying on KLB Law Firm for trusted
                                legal counsel.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row klb-clients-grid">
                    {clients.map((c, i) => (
                        <div key={c.name} className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={700} data-aos-delay={100 + (i % 3) * 120}>
                            <div className="klb-client-card" style={{ "--klb-client-color": c.color }}>
                                <span className="klb-client-card__icon" aria-hidden="true">
                                    <i className={c.icon} />
                                </span>
                                <div className="klb-client-card__body">
                                    <h3 className="klb-client-card__name">{c.name}</h3>
                                    <p className="klb-client-card__sector">{c.sector}</p>
                                </div>
                                <span className="klb-client-card__badge" aria-hidden="true">
                                    <i className="fa-solid fa-circle-check" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up" data-aos-duration={700} data-aos-delay={200}>
                        <p className="klb-clients-footnote">
                            <i className="fa-solid fa-shield-halved" />
                            <span>And many more — client confidentiality protected by attorney-client privilege.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
