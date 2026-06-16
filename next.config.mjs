/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about-ntec", destination: "/about", permanent: false },
      { source: "/kai-handt", destination: "/about/kai-handt", permanent: false },
      { source: "/our-team", destination: "/about/team", permanent: false },
      { source: "/awards", destination: "/about/awards", permanent: false },
      { source: "/ntec-facilities", destination: "/about/facilities", permanent: false },
      { source: "/ntec-rate-schedule", destination: "/pricing", permanent: false },
      { source: "/about/pricing", destination: "/pricing", permanent: false },
      { source: "/riding-lessons", destination: "/lessons", permanent: false },
      { source: "/riding-lessons/english-horseback-riding", destination: "/lessons/english", permanent: false },
      { source: "/riding-lessons/dressage-riding", destination: "/lessons/dressage", permanent: false },
      { source: "/riding-lessons/hunter-jumper-riding", destination: "/lessons/hunter-jumper", permanent: false },
      { source: "/horse-boarding", destination: "/boarding", permanent: false },
      { source: "/horse-training", destination: "/training", permanent: false },
      { source: "/about-summer-camp", destination: "/summer-camp", permanent: false },
      { source: "/horse-riding-blog", destination: "/blog", permanent: false },
      { source: "/contact-us", destination: "/contact", permanent: false },
      {
        source: "/young-horses",
        destination: "/horses-for-sale/young-horses",
        permanent: false
      },
      {
        source: "/horses-for-sale/dressage-horses",
        destination: "/horses-for-sale/dressage",
        permanent: false
      },
      {
        source: "/horses-for-sale/hunter-jumper-horses",
        destination: "/horses-for-sale/hunter-jumper",
        permanent: false
      },
      {
        source: "/young-stock-horses",
        destination: "/horses-for-sale/young-horses",
        permanent: false
      },
      {
        source: "/sold-horses",
        destination: "/horses-for-sale/sold",
        permanent: false
      },
      {
        source: "/horse-finder-form",
        destination: "/horse-finder",
        permanent: false
      },
      {
        source: "/ntec-christmas-show",
        destination: "/events/christmas-show",
        permanent: false
      },
      {
        source: "/para-equestrian-clinic",
        destination: "/events/para-equestrian-clinic",
        permanent: false
      },
      {
        source: "/talent-search-para-dressage-emerging-athlete-center",
        destination: "/events/talent-search",
        permanent: false
      },
      {
        source: "/upcoming-horse-shows",
        destination: "/events/horse-shows",
        permanent: false
      },
      {
        source: "/past-events",
        destination: "/events/past",
        permanent: false
      },
      {
        source: "/summer-camp-what-is-included",
        destination: "/summer-camp",
        permanent: false
      },
      {
        source: "/gallery-2",
        destination: "/gallery/awards-events",
        permanent: false
      },
      {
        source: "/videos",
        destination: "/gallery/videos",
        permanent: false
      },
      {
        source: "/board-agreement",
        destination: "/forms/board-agreement",
        permanent: false
      },
      {
        source: "/release-and-contact-form",
        destination: "/forms/release-contact",
        permanent: false
      },
      {
        source: "/north-texas-equestrian-center-policy-and-procedures",
        destination: "/forms/policies",
        permanent: false
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "images.pexels.com"
      }
    ]
  }
};

export default nextConfig;
