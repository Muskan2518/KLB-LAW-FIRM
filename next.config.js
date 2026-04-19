/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable double-rendering in dev — eliminates the React DevTools
    // "We are cleaning up async info..." warning on Suspense boundaries.
    reactStrictMode: false,
}

module.exports = nextConfig
