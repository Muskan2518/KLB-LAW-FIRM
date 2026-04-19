
import Link from "next/link"

const attorneys = [
    { name: "Balaji", role: "Company Law", image: "/assets/images/klb/team/balaji.jpg" },
    { name: "Siva Krishna", role: "Civil & Family Law", image: "/assets/images/klb/team/siva.jpg" },
    { name: "Kanakayya", role: "Criminal Law", image: "/assets/images/klb/team/kanakayya.jpg" },
    { name: "Sumalatha", role: "Civil Law", image: "/assets/images/klb/team/sumalatha.jpg" },
];

export default function Team2() {
    return (
        <>

            <div className="team7-scetion-area section-padding5">
                <img src="/assets/images/elementor/elementor45.png" alt="" className="elementors11" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="team7-textarea text-center margin-b60" data-aos="fade-up" data-aos-duration={800}>
                                <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1">Our Advocates</span>
                                <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20">Meet Our Legal Team</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {attorneys.map((person, idx) => (
                            <div key={person.name} className="col-lg-3 margin-b30 col-md-6" data-aos="zoom-in-up" data-aos-duration={700} data-aos-delay={120 * idx}>
                                <div className="itemall">
                                    <div className="project-item-two ">
                                        <div className="project-thumb-two">
                                            <img src={person.image} alt={person.name} style={{ width: "100%", height: 320, objectFit: "cover" }} />
                                        </div>
                                        <div className="project-content-two projectteam-item">
                                            <ul>
                                                <li><Link href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fa-brands fa-facebook" /></Link></li>
                                                <li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fa-brands fa-linkedin" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="team-pera text-center margin-t">
                                            <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12"><Link href="/team-details" className="color-29">{person.name}</Link></h1>
                                            <p className="font-16 lineh-16 weight-500 color-30 font-ks">{person.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor46.png" alt="" className="elementors12" />
            </div>
        </>
    )
}
