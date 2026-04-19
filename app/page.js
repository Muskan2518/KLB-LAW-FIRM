import Layout from "@/components/layout/Layout"
import About7 from "@/components/sections/About7"
import Blog7 from "@/components/sections/Blog7"
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview"
import CeoMessage from "@/components/sections/CeoMessage"
import Client5 from "@/components/sections/Client5"
import Clients from "@/components/sections/Clients"
import Team2 from "@/components/sections/Team2"
import Testimonial7 from "@/components/sections/Testimonial7"
import Welcome7 from "@/components/sections/Welcome7"

export default function Home() {
    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <Welcome7 />
                <About7 />
                <Client5 />
                <Clients />
                <CaseStudiesPreview />
                <Team2 />
                <CeoMessage />
                <Testimonial7 />
                <Blog7 />
            </Layout>
        </>
    )
}
