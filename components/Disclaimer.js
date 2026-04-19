'use client'
import { useEffect, useState } from "react"

const STORAGE_KEY = "klb-disclaimer-agreed"

export default function Disclaimer() {
    const [open, setOpen] = useState(false)

    // Show on first visit only
    useEffect(() => {
        try {
            const agreed = window.localStorage.getItem(STORAGE_KEY)
            if (!agreed) setOpen(true)
        } catch {
            // localStorage may be unavailable (private mode); show modal anyway
            setOpen(true)
        }
    }, [])

    // Lock body scroll while modal is up
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => { document.body.style.overflow = "" }
    }, [open])

    const handleAgree = () => {
        try {
            window.localStorage.setItem(STORAGE_KEY, new Date().toISOString())
        } catch { /* ignore */ }
        setOpen(false)
    }

    if (!open) return null

    return (
        <div className="klb-disclaimer" role="dialog" aria-modal="true" aria-labelledby="klb-disclaimer-title">
            <div className="klb-disclaimer__dialog">
                <h2 id="klb-disclaimer-title" className="klb-disclaimer__title">Disclaimer</h2>
                <div className="klb-disclaimer__rule" />

                <div className="klb-disclaimer__body">
                    <p>
                        In compliance with the rules of the Bar Council of India, this website of
                        KLB Kumar &amp; Associates (the &ldquo;Firm&rdquo;) is meant solely for
                        information about the Firm, its practice areas, advocates and solicitors and
                        not for the purpose of advertising, soliciting work or inducement of any sort
                        by the Firm or any of its members. Nor is it to be construed as legal advice
                        of any nature or manner whatsoever.
                    </p>
                    <p>
                        The content of this website is also the Intellectual Property of the Firm.
                    </p>
                    <p>
                        Please read and accept our website&apos;s Terms of Use and our Privacy
                        Policy. By clicking on &lsquo;I AGREE&rsquo; below, the website visitor
                        acknowledges that the information provided is meant only for his/her
                        understanding of the Firm and its activities.
                    </p>
                </div>

                <button type="button" className="klb-disclaimer__btn" onClick={handleAgree}>
                    I Agree
                    <span aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}
