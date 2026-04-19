
import Link from "next/link"

export default function Cta7() {
    return (
        <>

            <div className="cta7-section-area section-padding4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta7-textarea">
                                <h1 className="font-lora font-48 lineh-52 weight-500 color margin-b">Need Legal Advice You Can Trust?</h1>
                                <p className="font-ks font-16 weight-400 color-21 lineh-26">Speak with a KLB advocate today. Free initial consultation, confidential discussion, and clear next steps for your matter.</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                        </div>
                        <div className="col-lg-4">
                            <div className="cta7-btnarea">
                                <Link href="tel:+917386276699" className=" font-ks font-16 weight-700 color lineh-16 contactbtn8">Call Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
