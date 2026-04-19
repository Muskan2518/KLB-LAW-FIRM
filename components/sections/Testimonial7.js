'use client'
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const testimonials = [
    { name: "Rajesh Kapoor", role: "Business Owner", quote: "KLB Law Firm helped me confidently resolve a complex business dispute. Their expertise and attention to detail were exceptional." },
    { name: "Priya Sharma", role: "Entrepreneur", quote: "Their strategic advice in contract drafting saved my startup from potential legal pitfalls and ensured clear business terms." },
    { name: "Meera Joshi", role: "Teacher", quote: "The dedication and legal knowledge that KLB provided during my family dispute truly restored my peace of mind." },
    { name: "Arjun Verma", role: "IT Consultant", quote: "Thanks to KLB's skilled lawyers, my criminal case was handled with utmost professionalism and resulted in a positive outcome." },
    { name: "Neha Gupta", role: "COO", quote: "They offered clear, practical legal solutions for my corporate restructuring needs, making the transition smooth and compliant." },
    { name: "Kavita Singh", role: "School Administrator", quote: "I am grateful for KLB's expertise in education law that helped my institution comply with all regulatory requirements." },
    { name: "Sunil Nair", role: "Real Estate Developer", quote: "KLB's team guided me through tough property litigation smoothly, demonstrating both empathy and legal skill." },
    { name: "Anil Deshmukh", role: "Retailer", quote: "KLB's personalized service and courtroom experience resulted in a quick and fair resolution of my civil lawsuit." },
    { name: "Sheetal Joshi", role: "Homemaker", quote: "Their understanding of Indian laws and attentive communication gave me confidence during a difficult divorce process." },
];

const swiperOptions = {
    modules: [Autoplay],
    spaceBetween: 28,
    loop: true,
    grabCursor: true,
    speed: 4500,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
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

export default function Testimonial7() {
    const [activeName, setActiveName] = useState(null)
    const swiperRef = useRef(null)
    const dimTimer = useRef(null)

    const handleSwiper = (s) => { swiperRef.current = s }

    const toggleCard = (name) => {
        // Tap the same card again → unselect; otherwise select this one
        const next = activeName === name ? null : name
        setActiveName(next)

        // Pause the marquee while a card is highlighted, resume after 6s of inactivity
        if (swiperRef.current?.autoplay) {
            if (next) swiperRef.current.autoplay.stop()
            else swiperRef.current.autoplay.start()
        }

        if (dimTimer.current) clearTimeout(dimTimer.current)
        if (next) {
            dimTimer.current = setTimeout(() => {
                setActiveName(null)
                swiperRef.current?.autoplay?.start()
            }, 6000)
        }
    }

    return (
        <section className={`klb-testimonials-section ${activeName ? "is-focused" : ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 m-auto">
                        <div className="text-center margin-b60" data-aos="fade-up" data-aos-duration={800}>
                            <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1 d-inline-block margin-b24">Client Testimonials</span>
                            <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20">Trusted by Clients Across India</h1>
                            <p className="font-ks font-16 lineh-26 weight-500 color-hp">Tap any card to focus on that client&apos;s story.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="klb-marquee">
                <Swiper {...swiperOptions} onSwiper={handleSwiper} className="klb-marquee__swiper">
                    {testimonials.map((t) => {
                        const isActive = t.name === activeName
                        return (
                            <SwiperSlide key={t.name}>
                                <article
                                    className={`klb-testimonial-card ${isActive ? "is-active" : ""}`}
                                    onClick={() => toggleCard(t.name)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleCard(t.name) } }}
                                    aria-pressed={isActive}
                                >
                                    <span className="klb-testimonial-card__stars">
                                        {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star" />)}
                                    </span>
                                    <p className="klb-testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
                                    <div className="klb-testimonial-card__top">
                                        <span className="klb-testimonial-card__avatar">
                                            {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                        </span>
                                        <div>
                                            <h3 className="klb-testimonial-card__name">{t.name}</h3>
                                            <p className="klb-testimonial-card__role">{t.role}</p>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}
