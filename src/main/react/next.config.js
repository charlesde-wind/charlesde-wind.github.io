/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '/',
    output:"export",
    distDir: 'build',
    images: {
        unoptimized : true
    },
        env: {
            backendServer: 'http://127.0.0.1:8080',
            mongouri:"mongodb+srv://mongodb-read:IBqqL0t9i5n9VCVH@portfolio-cluster.a1hh92m.mongodb.net/PortfolioDB",
        }
}

module.exports = nextConfig
