import Layout from "@/components/layout/Layout"
import Link from "next/link"

const attorneys = [
    { name: "Balaji", role: "Company Law", image: "/assets/images/klb/team/balaji.jpg" },
    { name: "Siva Krishna", role: "Civil & Family Law", image: "/assets/images/klb/team/siva.jpg" },
    { name: "Kanakayya", role: "Criminal Law", image: "/assets/images/klb/team/kanakayya.jpg" },
    { name: "Pavan", role: "Criminal Law", image: "/assets/images/klb/team/siva.jpg" },
    { name: "Sumalatha", role: "Civil Law", image: "/assets/images/klb/team/sumalatha.jpg" },
];

export default function Home() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <div>
                    <div className="team-innerpages-area section-padding8">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 margin-b60">
                                    <div className="team-section-textarea text-center">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Our Advocates</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Meet the KLB Legal Team</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30" style={{ maxWidth: 720, margin: "0 auto" }}>Our advocates bring decades of combined courtroom experience across civil, criminal, corporate, and family law — committed to client outcomes since 1997.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {attorneys.map((p) => (
                                    <div key={p.name} className="col-lg-3 col-md-6 margin-b30">
                                        <div className="teaminner-section">
                                            <div className="project-item-two">
                                                <div className="project-thumb-two">
                                                    <img src={p.image} alt={p.name} style={{ width: "100%", height: 340, objectFit: "cover" }} />
                                                </div>
                                                <div className="project-content-two">
                                                    <ul>
                                                        <li><Link href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fa-brands fa-facebook" /></Link></li>
                                                        <li><Link href="#"><i className="fa-brands fa-linkedin" /></Link></li>
                                                    </ul>
                                                </div>
                                                <div className="team-pera text-center margin-t">
                                                    <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                                                        <Link href="/team-details" className="color-29">{p.name}</Link>
                                                    </h1>
                                                    <p className="font-16 lineh-16 weight-500 color-30 font-ks">{p.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        </>
    )
}
