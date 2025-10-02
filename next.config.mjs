import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",   // where service worker file will go
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development", // disable in dev mode
});


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

export default withPWA(nextConfig);