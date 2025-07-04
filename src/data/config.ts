const config = {
  title: "Farouk Jjingo | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Farouk, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects.",
    short:
      "Learn more about Farouk's projects.",
  },
  keywords: [
    "Farouk",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Farouk Jjingo",
  email: "jjingofaroukk@gmail.com",
  site: "https://jjingofarouk.xyz",

  get ogImg() {
    return this.site + "/assets/me.png";
  },
  social: {
    twitter: "https://x.com/farouq_jjingo",
    linkedin: "https://www.linkedin.com/in/farouq_jjingo/",
    instagram: "https://www.instagram.com/farouqjjingo",
    facebook: "https://www.facebook.com/farouqjjingo/",
    github: "https://github.com/jjingofarouk",
  },
};
export { config };
