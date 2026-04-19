const faqs = [
    {
        q: "What services does KLB Law Firm provide?",
        a: "At KLB Law Firm, we offer a broad spectrum of legal services including business law, criminal defense, family law, education law, and real estate legal support. Our experienced team provides personalized counsel to meet the unique needs of each client.",
    },
    {
        q: "How can I schedule a consultation?",
        a: "You can easily schedule a consultation by calling our helpline or by filling out the inquiry form on our website. We offer multiple services and considering the party we offer both in-person and virtual consultations.",
    },
    {
        q: "How do I request a document review?",
        a: "To request a document review, simply contact our office via phone or email with your documents attached. Our legal experts will thoroughly analyze the paperwork and provide clear, actionable feedback promptly.",
    },
    {
        q: "Is there a retainer option for ongoing legal support?",
        a: "Yes, KLB Law Firm offers retainer agreements for clients who need continuous legal assistance. This option provides priority access to our lawyers and tailored services that fit your long-term legal needs.",
    },
];

export default function Faq() {
    return (
        <section className="klb-faq-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 m-auto">
                        <div className="text-center margin-b60">
                            <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">FAQs</span>
                            <h2 className="font-lora font-44 lineh-52 weight-600 color-29 margin-b20">Frequently Asked Questions</h2>
                            <p className="font-ks font-16 lineh-26 weight-500 color-30">Quick answers to the questions our clients ask most often.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="klb-faq-list">
                            {faqs.map((faq, idx) => (
                                <details key={idx} className="klb-faq-item" {...(idx === 0 ? { open: true } : {})}>
                                    <summary className="klb-faq-question">
                                        <span className="klb-faq-question__text">{faq.q}</span>
                                        <span className="klb-faq-question__chevron">
                                            <i className="fa-solid fa-plus" />
                                        </span>
                                    </summary>
                                    <div className="klb-faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
