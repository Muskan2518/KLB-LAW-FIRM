'use client'
import { useEffect } from "react"

/**
 * The React Developer Tools browser extension sometimes prints
 *   "We are cleaning up async info that was not on the parent Suspense boundary."
 * with a 50-frame stack trace from the extension itself. The message is
 * harmless (no impact on rendering) but spams the console during development.
 *
 * This tiny client component installs a one-time console.error wrapper that
 * filters out only that specific string. It runs in dev only.
 */
export default function SilenceDevtoolsNoise() {
    useEffect(() => {
        if (process.env.NODE_ENV === "production") return
        if (typeof window === "undefined") return
        if (window.__klbDevtoolsFilterInstalled) return
        window.__klbDevtoolsFilterInstalled = true

        const originalError = console.error
        console.error = (...args) => {
            const first = args[0]
            if (
                typeof first === "string" &&
                first.includes("We are cleaning up async info that was not on the parent Suspense boundary")
            ) {
                return
            }
            originalError.apply(console, args)
        }
    }, [])

    return null
}
