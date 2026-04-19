'use client'
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Pagination } from "swiper/modules"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

const slides = [
    {
        image: "/assets/images/klb/gallery/DSC_1015.jpg",
        eyebrow: "KLB Kumar & Associates · Since 1997",
        title: ["Trusted", "By Clients."],
        lead: "Delivering trusted legal counsel backed by 19+ years of courtroom experience, 5,000+ successful cases, and unwavering client advocacy across India.",
    },
    {
        image: "/assets/images/klb/about/about-a.jpg",
        eyebrow: "Justice. Tradition. Innovation.",
        title: ["Comprehensive", "Legal Services."],
        lead: "Civil, Criminal, Corporate, Family, Education and Divorce Law — all under one trusted roof. Carefully crafted strategies that protect your interests.",
        align: "left",
    },
    {
        image: "/assets/images/klb/gallery/DSC_0995.jpg",
        eyebrow: "A Track Record That Speaks for Itself",
        title: ["5,000+", "Cases Won."],
        lead: "Decades of disciplined courtroom experience translated into outcomes our clients can count on — across individuals, businesses, and institutions nationwide.",
        hideCard: true,
    },
    {
        image: "/assets/images/klb/gallery/image-3.jpg",
        eyebrow: "A Message from KLB Law Firm",
        title: ["Justice. Integrity.", "Excellence."],
        lead: "At KLB Law Firm our path has always been steered by principles of trust, integrity, and unwavering dedication to safeguarding every client's interests.",
    },
    {
        image: "/assets/images/klb/gallery/image-1.jpg",
        eyebrow: "Pan-India Legal Counsel",
        title: ["Your Matter.", "Our Mission."],
        lead: "From Hyderabad in 1997 to clients across India today — KLB stands beside individuals, families, and corporations with clear advice and unwavering advocacy.",
    },
];

export default function Welcome7() {
    const sweepRef = useRef(null);
    const colorRef = useRef("orange");
    const swiperRef = useRef(null);

    const playSweep = () => {
        const el = sweepRef.current;
        if (!el) return;
        colorRef.current = colorRef.current === "orange" ? "black" : "orange";
        el.className = "klb-hero__sweep";
        // eslint-disable-next-line no-unused-expressions
        void el.offsetWidth;
        el.className = `klb-hero__sweep klb-hero__sweep--${colorRef.current} klb-hero__sweep--active`;
    };

    useEffect(() => {
        const tick = () => {
            playSweep();
            setTimeout(() => {
                swiperRef.current?.slideNext(0);
            }, 520);
        };
        const id = setInterval(tick, 5000);
        return () => clearInterval(id);
    }, []);

    const handleSwiper = (instance) => {
        swiperRef.current = instance;
    };

    return (
        <section className="klb-hero-banner">
            <div ref={sweepRef} className="klb-hero__sweep" aria-hidden="true" />

            <Swiper
                modules={[EffectFade, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                slidesPerView={1}
                speed={0}
                pagination={{
                    clickable: true,
                    el: ".klb-hero-banner__pagination",
                    bulletClass: "klb-hero__bullet",
                    bulletActiveClass: "klb-hero__bullet--active",
                }}
                onSwiper={handleSwiper}
                className="klb-hero-banner__deck"
            >
                {slides.map((s, idx) => {
                    const isLeft = s.align === "left";
                    return (
                    <SwiperSlide key={idx}>
                        <div className={`klb-hero-banner__slide klb-hero-banner__slide--${isLeft ? "left" : "right"}`}>
                            <div
                                className="klb-hero-banner__bg"
                                style={{ backgroundImage: `url(${s.image})` }}
                                aria-hidden="true"
                            />
                            {!s.hideCard && <div className="klb-hero-banner__shade" aria-hidden="true" />}
                            {!s.hideCard && (
                            <div className="container">
                                <div className={`row ${isLeft ? "justify-content-start" : "justify-content-end"}`}>
                                    <div className="col-lg-6 col-md-9">
                                        <div className="klb-hero-banner__card">
                                            <span className="klb-hero-banner__eyebrow klb-text-anim klb-text-anim--1">
                                                <i className="fa-solid fa-scale-balanced" />
                                                <span>{s.eyebrow}</span>
                                            </span>
                                            <h1 className="klb-hero-banner__title">
                                                <span className="klb-text-anim klb-text-anim--2">{s.title[0]}</span>
                                                <span className="klb-hero-banner__accent klb-text-anim klb-text-anim--3">{s.title[1]}</span>
                                            </h1>
                                            <p className="klb-hero-banner__lead klb-text-anim klb-text-anim--4">{s.lead}</p>
                                            <div className="klb-hero-banner__cta klb-text-anim klb-text-anim--5">
                                                <Link href="https://wa.me/919866301129" target="_blank" rel="noopener noreferrer" className="klb-hero-banner__btn klb-hero-banner__btn--ghost">
                                                    <i className="fa-brands fa-whatsapp" />
                                                    Need Legal Help?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </SwiperSlide>
                    );
                })}
            </Swiper>

            <div className="klb-hero-banner__pagination" />
        </section>
    )
}
