// ✏️ EDIT THIS FILE: everything on the site comes from here.
// Any link left as "" is hidden automatically.
export const site = {
  name: "Axhamit",
  role: "Full-stack developer for hire",
  headline: "I build web apps and stores that clients can launch and run.",
  intro:
    "I build complete software and dynamic websites end to end: planning, design, frontend, backend, database, payments, video calls, AI, Android apps and cloud deployment. One developer, fully finished product.",
  rotating: ["websites", "online stores", "Android apps", "AI-powered apps", "real-time apps", "custom software"],
  about: [
    "I'm a full-stack freelance developer who builds complete products on my own: websites, dynamic web apps, Android apps and custom software, from the first idea to a live, working launch.",
    "You work with one person for everything: design, frontend, backend, database, integrations, deployment and support. That means faster delivery, no hand-offs and a product that is fully complete.",
  ],
  email: "amit08.works@gmail.com",
  phone: "+91 82178 03252",
  phoneRaw: "918217803252",
  location: "Bengaluru, India · Working worldwide",
  availability: "Available for new projects",
  resume: "",                                // e.g. "/resume.pdf" (put file in /public)
  stats: [
    { label: "Projects shipped", value: "7+" },
    { label: "Delivery", value: "End to end" },
    { label: "Reply time", value: "< 24 hrs" },
  ],
};

// One link per platform: clients can hire you wherever they already shop.
export const platforms = [
  { name: "Upwork",   url: "",                              note: "Hourly or fixed-price contracts" },
  { name: "Fiverr",   url: "",                              note: "Fixed-price packages" },
  { name: "Contra",   url: "https://contra.com/axhamit",    note: "Commission-free projects" },
  { name: "GitHub",   url: "https://github.com/axhamit",    note: "Browse my code" },
];

export const skills = [
  { group: "Frontend", items: ["JavaScript", "Next.js", "React", "HTML5", "CSS3", "Tailwind CSS", "Responsive design"] },
  { group: "Backend and APIs", items: ["Node.js", "Express.js", "REST APIs", "JWT authentication", "WebSocket"] },
  { group: "Databases", items: ["SQL", "NoSQL", "MongoDB", "Redis"] },
  { group: "Real-time and messaging", items: ["WebSocket", "Kafka", "Redis pub/sub", "Live notifications"] },
  { group: "Cloud and delivery", items: ["AWS", "Git and GitHub", "Vercel", "Deployment and hosting"] },
  { group: "AI", items: ["AI integration", "Chatbots", "AI-powered features", "Automation"] },
  { group: "Integrations", items: ["Payment integration", "Video call integration", "Email and notifications", "Admin dashboards"] },
  { group: "Android and software", items: ["Android apps (APK)", "APK build and release", "Desktop software", "Custom software"] },
];

export const endToEnd = [
  { title: "Plan and design", text: "Requirements, page and app structure, and a clean UI before any code." },
  { title: "Frontend", text: "Fast, responsive interfaces for web and mobile, built with JavaScript, React and Next.js." },
  { title: "Backend and database", text: "Express APIs, JWT login, SQL or NoSQL databases, Redis, WebSocket and Kafka where needed." },
  { title: "Integrations", text: "Payments, video calls, AI features, email and notifications connected and tested." },
  { title: "Test and deploy", text: "Testing on real devices, then live deployment on AWS, Vercel or your own server." },
  { title: "Handover and support", text: "Source code, documentation, admin training and free fixes after launch." },
];

export const services = [
  { title: "Complete end-to-end projects", text: "Any website, dynamic web app or software built fully from scratch, tested and delivered ready to use.", from: "Idea to launch" },
  { title: "Business websites", text: "Fast, mobile-first sites that explain what you do and bring in enquiries.", from: "Landing pages, company sites" },
  { title: "E-commerce stores", text: "Catalog, cart, checkout and an admin panel to manage products and orders.", from: "Shops, marketplaces" },
  { title: "Custom web apps", text: "Logins, dashboards, booking and scheduling tools built around your workflow.", from: "SaaS, internal tools" },
  { title: "Payment integration", text: "Secure online payments, checkout, order confirmation and refund handling inside your site or app.", from: "Gateways, subscriptions" },
  { title: "Video call integration", text: "Live video calling and meetings built into your app, for consultations, classes and support.", from: "Calls, classrooms" },
  { title: "Real-time apps", text: "Live chat, notifications and dashboards that update instantly using WebSocket, Redis and Kafka.", from: "Chat, live tracking" },
  { title: "AI features", text: "Chatbots, smart search and automation added to your product to save time and answer customers.", from: "Chatbots, automation" },
  { title: "Backend and cloud (AWS)", text: "Secure APIs with JWT login, SQL or NoSQL databases and deployment on AWS built to scale.", from: "APIs, databases, hosting" },
  { title: "Android apps (APK)", text: "Mobile apps built, tested and delivered as a signed APK, ready to install or publish.", from: "Android, APK builds" },
  { title: "Software and tools", text: "Desktop software, automation scripts and business tools made for your exact workflow.", from: "Windows tools, automation" },
  { title: "Learning platforms", text: "Courses, student accounts, progress tracking and content management.", from: "LMS, course sites" },
];

export const process = [
  { title: "Discuss", text: "We talk through your goal, users and budget. You get a clear scope and price." },
  { title: "Design and plan", text: "I share the page structure and feature list so we agree before building." },
  { title: "Build", text: "Regular previews on a live link, so you see progress and give feedback early." },
  { title: "Launch and support", text: "Deployment, testing on real devices, and free fixes after handover." },
];

// Android/software projects: add `apk: "https://link-to-your.apk"` to any project to show a Download APK button.
// Add real client quotes here. Section stays hidden while this is empty.
export const testimonials = [
  // { quote: "Delivered on time and exactly what we needed.", name: "Client name", role: "Company" },
];

export const faqs = [
  { q: "Can you build the whole project by yourself?", a: "Yes. I handle design, frontend, backend, database, integrations, deployment and support, so you deal with one person and get a fully complete product." },
  { q: "How long does a project take?", a: "A business website usually takes 1 to 2 weeks. Stores and custom apps take 3 to 6 weeks depending on features." },
  { q: "How do you price projects?", a: "Fixed price per project after we agree the scope, or hourly for ongoing work. You always know the cost before I start." },
  { q: "Can you work through Upwork, Fiverr or Contra?", a: "Yes. Hire me on whichever platform you prefer, or contact me directly by email, call or WhatsApp." },
  { q: "Can you build and deliver an Android app?", a: "Yes. I build the app, test it on real devices and hand over a signed APK, plus help with Play Store publishing if you need it." },
  { q: "Can you add payments or video calls to my app?", a: "Yes. I integrate payment gateways and live video calling into new or existing websites and apps, including secure checkout, order handling and user accounts." },
  { q: "Do you offer support after launch?", a: "Yes. Every project includes free bug fixes after handover, and I offer monthly maintenance if you want it." },
];

export const projects = [
  // ✏️ Replace summaries, stack and add `live` URLs once you confirm them.
  { name: "Sara IT Consultancy", domain: "Business", summary: "Company website presenting IT services with clear service pages and an enquiry flow.", stack: ["Next.js", "React", "CSS"], repo: "https://github.com/axhamit/Sara_IT_Cons", live: "" },
  { name: "Aarohan Treasures", domain: "E-commerce", summary: "Online storefront for handcrafted treasures with product browsing and ordering.", stack: ["React", "Node.js", "MongoDB"], repo: "https://github.com/axhamit/aarohamtreasures", live: "" },
  { name: "New E-commerce", domain: "E-commerce", summary: "Full shopping experience: catalog, cart, checkout and order management.", stack: ["React", "Node.js", "MongoDB"], repo: "https://github.com/axhamit/new-e-commerce", live: "" },
  { name: "LMS", domain: "Education", summary: "Learning management system for courses, students and progress tracking.", stack: ["React", "Node.js", "MongoDB"], repo: "https://github.com/axhamit/lms-2", live: "" },
  { name: "Coastal Cabs", domain: "Booking", summary: "Cab booking website where riders pick a route and request a ride.", stack: ["React", "Node.js"], repo: "https://github.com/axhamit/costal-cabs", live: "" },
  { name: "Schedule Event", domain: "Web app", summary: "Event scheduling app to create, view and manage events and time slots.", stack: ["React", "Node.js"], repo: "https://github.com/axhamit/Schedule-event", live: "" },
  { name: "GSN", domain: "Web app", summary: "Custom web application built for a client. Add what it does and the results here.", stack: ["Next.js", "Node.js"], repo: "https://github.com/axhamit/GSN", live: "" },
];
