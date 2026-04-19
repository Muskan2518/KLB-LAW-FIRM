import Link from "next/link";

const posts = [
    {
        title: "Understanding Cybercrime Law in India: Rights & Remedies",
        date: "12 Mar 2026",
        image: "/assets/images/klb/blog/cybercrime.jpg",
    },
    {
        title: "Corporate Compliance: A Practical Guide for Indian Businesses",
        date: "05 Feb 2026",
        image: "/assets/images/klb/blog/corporate.jpg",
    },
    {
        title: "Family Law Matters: Custody, Maintenance & Mediation",
        date: "18 Jan 2026",
        image: "/assets/images/klb/blog/family.jpg",
    },
];

export default function Blog7() {
    return (
        <>
            <div className="blog-7-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="blog-7-header text-center margin-b60" data-aos="fade-up" data-aos-duration={800}>
                                <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1">Legal Insights</span>
                                <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20">News &amp; Articles</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {posts.map((post, idx) => (
                            <div key={post.title} className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={700} data-aos-delay={150 * idx}>
                                <div className=" blog7boxarea">
                                    <div className="blog1-img">
                                        <img src={post.image} alt={post.title} style={{ width: "100%", height: 240, objectFit: "cover" }} />
                                    </div>
                                    <div className=" blog-pdding2">
                                        <div className="blog1-text">
                                            <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                            <Link href="#" className="color-h7">
                                                <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">{post.date}</p>
                                            </Link>
                                        </div>
                                        <Link href="/blogmiddle" className="font-lora font-24 lineh-30 weight-500 color-h7 margin-b d-inline-block link-hover ts">
                                            {post.title}
                                        </Link>
                                        <p className="font-16 font-ks lineh-26 weight-500 color-hp ts">A practical look at the legal landscape from KLB&apos;s practising advocates.</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor47.png" alt="" className="elementors13" />
            </div>
        </>
    );
}
