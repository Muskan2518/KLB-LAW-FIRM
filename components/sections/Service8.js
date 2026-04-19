
import Link from "next/link"

const practiceAreas = [
    {
        title: "Civil Law",
        desc: "Resolving disputes over property, contracts, and personal rights with strategic, results-oriented representation.",
        image: "/assets/images/klb/practice/civil.jpeg",
    },
    {
        title: "Criminal Law",
        desc: "Skilled defence attorneys protecting your rights and liberty in critical criminal matters.",
        image: "/assets/images/klb/practice/criminal.jpg",
    },
    {
        title: "Corporate Law",
        desc: "Strategic counsel on mergers, compliance, contracts, and the legal foundations of growing businesses.",
        image: "/assets/images/klb/practice/corporate.jpg",
    },
    {
        title: "Education Law",
        desc: "Guiding institutions, educators, and students through the complexities of educational regulations.",
        image: "/assets/images/klb/practice/education.jpg",
    },
    {
        title: "Family Law",
        desc: "Compassionate counsel for matrimonial matters, custody, maintenance, and family disputes.",
        image: "/assets/images/klb/practice/civil.jpeg",
    },
    {
        title: "Divorce Law",
        desc: "Sensitive, confidential representation through every stage of separation and divorce proceedings.",
        image: "/assets/images/klb/practice/criminal.jpg",
    },
];

export default function Service8() {
    return (
        <>

            <div className="service7-section-area section-padding5">
                <img src="/assets/images/elementor/elementor45.png" alt="" className="elementors11" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="service7-textarea text-center margin-b60">
                                <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1">Our Practice Areas</span>
                                <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20">Comprehensive Legal Services</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {practiceAreas.map((area, idx) => (
                            <div key={area.title} className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={1000 + idx * 200}>
                                <div className="service3-boxarea margin-b30">
                                    <div className="row">
                                        <div className="col-lg-7 ">
                                            <div className="service3-text2">
                                                <Link href="/servicemiddle">
                                                    <h1 className="font-lora font-22 lineh-24 color-h7 weight-600 margin-b">{area.title}</h1>
                                                </Link>
                                                <p className="font-ks font-16 lineh-26 weight-500 color-hp">{area.desc}</p>
                                                <Link href="/servicemiddle" className="font-ks font-16 lineh-16 color-ks1 weight-700 margin-t d-inline-block laearnmore2">Learn More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="service3-imag1">
                                                <img src={area.image} alt={area.title} style={{ borderRadius: 8, objectFit: "cover", width: "100%", height: "100%" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="homepage7all-btn margin-t32" data-aos="fade-up" data-aos-duration={1400}>
                                <Link href="/contact1" className="font-ks font-16 weight-700 color lineh-16 shedulebtn3">Request a Consultation</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor46.png" alt="" className="elementors12" />
            </div>
        </>
    )
}
