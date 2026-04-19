import Layout from "@/components/layout/Layout"
import Link from "next/link"

const galleryImages = [
    "/assets/images/klb/gallery/DSC_0994.jpg",
    "/assets/images/klb/gallery/DSC_0995.jpg",
    "/assets/images/klb/gallery/DSC_0996.jpg",
    "/assets/images/klb/gallery/DSC_0997.jpg",
    "/assets/images/klb/gallery/DSC_1001.jpg",
    "/assets/images/klb/gallery/DSC_1009.jpg",
    "/assets/images/klb/gallery/DSC_1015.jpg",
    "/assets/images/klb/gallery/image-1.jpg",
    "/assets/images/klb/gallery/image-3.jpg",
    "/assets/images/klb/gallery/image-4.jpg",
    "/assets/images/klb/gallery/image-5.jpg",
];

export default function Gallery() {
    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <div className="section-padding5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 m-auto">
                                <div className="text-center margin-b60">
                                    <span className="about3span font-ks lineh-16 font-16 weight-600 d-inline-block margin-b24">Gallery</span>
                                    <h1 className="font-lora font-48 lineh-56 weight-600 margin-b20">Moments from KLB Law Firm</h1>
                                    <p className="font-ks font-16 lineh-26 weight-500">A glimpse into our practice — courtroom appearances, firm events, and the people behind KLB Law Firm.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4">
                            {galleryImages.map((src, idx) => (
                                <div key={src} className="col-lg-4 col-md-6">
                                    <div className="klb-gallery-item">
                                        <img
                                            src={src}
                                            alt={`KLB Law Firm gallery ${idx + 1}`}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}
