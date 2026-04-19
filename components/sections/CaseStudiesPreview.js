'use client'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const featured = [
    {
        title: "Suit for Cancellation of Sale Deeds",
        category: "Civil",
        excerpt: "Civil suit challenging registered sale deeds on grounds of fraud and lack of title — secured under Section 31 of the Specific Relief Act.",
        image: "/assets/images/klb/cases/sale-deeds.jpg",
        slug: "civil",
    },
    {
        title: "Forgery and Cheating",
        category: "Criminal",
        excerpt: "Defence in IPC §420 and §468 charges. Acquittal secured after cross-examining the prosecution's documentary chain of custody.",
        image: "/assets/images/klb/cases/forgery-cheating.jpg",
        slug: "criminal",
    },
    {
        title: "Defamation",
        category: "Mixed",
        excerpt: "Concurrent criminal and civil action. Damages and a public retraction secured following pre-trial mediation.",
        image: "/assets/images/klb/cases/defamation.jpg",
        slug: "mixed",
    },
    {
        title: "Breach of Trust",
        category: "Criminal",
        excerpt: "Acted for the complainant under IPC §406. Recovered the misappropriated assets in full and secured conviction.",
        image: "/assets/images/klb/cases/breach-of-trust.jpg",
        slug: "criminal",
    },
    {
        title: "Partition Suit",
        category: "Mixed",
        excerpt: "Joint family property partition with parallel criminal trespass proceedings — concluded with an equitable family settlement.",
        image: "/assets/images/klb/cases/partition.jpg",
        slug: "mixed",
    },
    {
        title: "Dishonoured Cheques — §138 NI Act",
        category: "Criminal",
        excerpt: "Recovered corporate dues under §138 of the Negotiable Instruments Act. Secured conviction and full payment via execution.",
        image: "/assets/images/klb/cases/cheques.jpg",
        slug: "criminal",
    },
    {
        title: "Harassment & Cruelty",
        category: "Criminal",
        excerpt: "Represented the wife in a §498A IPC matter. Achieved a favourable settlement covering ongoing maintenance and stridhan recovery.",
        image: "/assets/images/klb/cases/harassment.jpeg",
        slug: "criminal",
    },
    {
        title: "Scholarship Scam Appeal",
        category: "Criminal",
        excerpt: "Argued a criminal appeal arising from a multi-crore education-scholarship fraud at the High Court — secured suspension of sentence.",
        image: "/assets/images/klb/cases/scholarships-scam.jpeg",
        slug: "criminal",
    },
];

const swiperOptions = {
    modules: [Autoplay],
    spaceBetween: 28,
    loop: true,
    grabCursor: true,
    speed: 5500,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: false,
    },
    breakpoints: {
        320:  { slidesPerView: 1.1 },
        575:  { slidesPerView: 1.6 },
        767:  { slidesPerView: 2.2 },
        991:  { slidesPerView: 2.6 },
        1199: { slidesPerView: 3.2 },
        1500: { slidesPerView: 3.6 },
    },
};

export default function CaseStudiesPreview() {
    return (
        <section className="klb-cases-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="text-center margin-b60" data-aos="fade-up" data-aos-duration={800}>
                            <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Case Studies</span>
                            <h2 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">A Track Record That Speaks for Itself</h2>
                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                Selected matters from KLB&apos;s practice — illustrating our experience across
                                civil, criminal, and complex mixed-jurisdiction cases.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Auto-scrolling marquee — full-width so cards bleed to the edges */}
            <div className="klb-cases-marquee">
                <Swiper {...swiperOptions} className="klb-cases-marquee__swiper">
                    {featured.map((c) => (
                        <SwiperSlide key={c.title}>
                            <Link href="/case-studies" className="klb-case-tile">
                                <div className="klb-case-tile__image">
                                    <img src={c.image} alt={c.title} loading="lazy" />
                                    <span className={`klb-case-tile__badge klb-case-tile__badge--${c.slug}`}>{c.category}</span>
                                </div>
                                <div className="klb-case-tile__overlay">
                                    <h3 className="klb-case-tile__title">{c.title}</h3>
                                    <p className="klb-case-tile__excerpt">{c.excerpt}</p>
                                    <span className="klb-case-tile__cta">
                                        Read full case <i className="fa-solid fa-arrow-right-long" />
                                    </span>
                                </div>
                                <div className="klb-case-tile__base">
                                    <h3 className="klb-case-tile__base-title">{c.title}</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center" style={{ marginTop: 50 }} data-aos="fade-up" data-aos-duration={800}>
                        <Link href="/case-studies" className="klb-cases-section__cta">
                            View All Case Studies
                            <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
