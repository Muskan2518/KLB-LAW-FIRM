import Layout from "@/components/layout/Layout"
import Link from "next/link"

const testimonials = [
    { name: "Rajesh Kapoor", role: "Business Owner", quote: "KLB Law Firm helped me confidently resolve a complex business dispute. Their expertise and attention to detail were exceptional." },
    { name: "Arjun Verma", role: "IT Consultant", quote: "Thanks to KLB's skilled lawyers, my criminal case was handled with utmost professionalism and resulted in a positive outcome." },
    { name: "Meera Joshi", role: "Teacher", quote: "The dedication and legal knowledge that KLB provided during my family dispute truly restored my peace of mind." },
    { name: "Sunil Nair", role: "Real Estate Developer", quote: "KLB's team guided me through tough property litigation smoothly, demonstrating both empathy and legal skill." },
    { name: "Priya Sharma", role: "Entrepreneur", quote: "Their strategic advice in contract drafting saved my startup from potential legal pitfalls and ensured clear business terms." },
    { name: "Rohit Malhotra", role: "Construction Worker", quote: "KLB Law Firm's relentless advocacy won my personal injury case, and their compassionate support was much appreciated." },
    { name: "Kavita Singh", role: "School Administrator", quote: "I am grateful for KLB's expertise in education law that helped my institution comply with all regulatory requirements." },
    { name: "Arun Mehta", role: "Sales Manager", quote: "With KLB's representation, I felt empowered and well-prepared throughout my criminal defense proceedings." },
    { name: "Neha Gupta", role: "COO", quote: "They offered clear, practical legal solutions for my corporate restructuring needs, making the transition smooth and compliant." },
    { name: "Anil Deshmukh", role: "Retailer", quote: "KLB's personalized service and courtroom experience resulted in a quick and fair resolution of my civil lawsuit." },
    { name: "Sheetal Joshi", role: "Homemaker", quote: "Their understanding of Indian laws and attentive communication gave me confidence during a difficult divorce process." },
    { name: "Manish Patel", role: "Property Investor", quote: "KLB's real estate legal support helped me close important deals with complete transparency and security." },
    { name: "Deepa Rao", role: "HR Manager", quote: "I appreciate the proactive approach KLB took in resolving my employment dispute with excellent results." },
    { name: "Vikram Das", role: "Engineer", quote: "Their expert counsel and thorough case preparation made all the difference in my acquittal." },
    { name: "Reema Kapoor", role: "Journalist", quote: "KLB's lawyers are approachable, knowledgeable, and truly committed to safeguarding their clients' interests." },
    { name: "Ananya Iyer", role: "Teacher", quote: "The firm supported me through family law proceedings with compassion and professionalism." },
    { name: "Suresh Nair", role: "CEO", quote: "KLB provided thorough advice that strengthened my business contracts and helped me avoid costly litigation." },
    { name: "Jyoti Malhotra", role: "Consultant", quote: "Thanks to KLB Law Firm's expert defense, I was able to protect my rights and move forward with confidence." },
];

export default function Testimonials() {
    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <section className="klb-testimonials-section" style={{ paddingTop: 80 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 m-auto">
                                <div className="text-center margin-b60">
                                    <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1 d-inline-block margin-b24">Client Testimonials</span>
                                    <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20">What Our Clients Say</h1>
                                    <p className="font-ks font-16 lineh-26 weight-500 color-hp">Real words from real clients across India — individuals, professionals, and businesses who&apos;ve trusted KLB Law Firm with their legal matters.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row klb-testimonial-grid">
                            {testimonials.map((t) => (
                                <div key={t.name} className="col-lg-4 col-md-6">
                                    <article className="klb-testimonial-card">
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
                                </div>
                            ))}
                        </div>

                        <div className="row">
                            <div className="col-lg-12 text-center" style={{ marginTop: 40 }}>
                                <Link href="/contact1" className="font-ks font-16 weight-700 color lineh-16 shedulebtn3">
                                    Become Our Next Success Story
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
