import { Kumbh_Sans, Nunito, Outfit,Lora } from 'next/font/google'
import "../public/assets/css/plugins/bootstrap.min.css"
import "../public/assets/css/plugins/font-awesome-pro.css"
import "../public/assets/css/plugins/nice-select.css"
import "../public/assets/css/plugins/swiper.bundle.css"
import "../public/assets/icon/font-awesome/css/all.css"
// import "../public/assets/css/plugins/owl.carousel.min.css"
import "../public/assets/css/plugins/modal-video.min.css"
import "../public/assets/css/plugins/mobile.css"
import "../public/assets/css/plugins/aos.css"
import "../public/assets/css/typography.css"
import "../public/assets/css/master.css"
import "../public/assets/css/plugins/responsive.css"
import "../public/assets/css/klb-overrides.css"
import Disclaimer from "@/components/Disclaimer"
import SilenceDevtoolsNoise from "@/components/SilenceDevtoolsNoise"

const nunito = Nunito({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--nunito-font-family",
    display: 'swap',
})
const outfit = Outfit({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--outfit-font-family",
    display: 'swap',
})
const kumbh = Kumbh_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--kumbh-font-family",
    display: 'swap',
})
const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--lora-font-family",
    display: 'swap',
})

export const metadata = {
    title: 'KLB Law Firm | Trusted & Comprehensive Legal Services',
    description: 'KLB Kumar & Associates — championing justice and individual rights across India since 1997.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${nunito.variable} ${outfit.variable} ${kumbh.variable} ${lora.variable}`}>
                <SilenceDevtoolsNoise />
                <Disclaimer />
                {children}
            </body>
        </html>
    )
}
