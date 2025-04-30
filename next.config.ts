/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [new URL("https://assets.example.com/account123/**")],
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "localhost:7549",
      "api.dan-ange.code-commando.com",
    ],
  },
};

export default nextConfig;
