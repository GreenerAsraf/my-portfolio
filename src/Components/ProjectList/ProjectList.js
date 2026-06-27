import netflix from "../../resale-here.png";
import skillbridgeImg from "../../Image/skillbridge_mockup.png";

const portfolioData = [
  {
    name: "Skill Bridge",
    Image: skillbridgeImg,
    type: "Mern",
    description: "A comprehensive platform to bridge skills. Use Admin Email: admin@example.com, Password: password123 to test.",
    technologys: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS"
    ],
    links: [
      {
        linkType: "Demo",
        link: "https://skill-bridge-client-pi.vercel.app/"
      },
      {
        linkType: "Video",
        link: "https://www.loom.com/share/f855e8f222b1468fa88fd56bcfb13328"
      },
      {
        linkType: "Front-end",
        link: "https://github.com/GreenerAsraf/skillBridge_client"
      },
      {
        linkType: "Back-end",
        link: "https://github.com/GreenerAsraf/skillBridge_backend"
      }
    ],
  },
  {
    name: "Resale Laptop Website",
    Image: netflix,
    type: "React",
    technologys: ["React.js", "Firebase", "ReactcBootstrap"],
    links: [
      { linkType: "Demo",
       link: "https://resale-here.web.app/" 
      },
      {
        linkType: "Front-end",
        link: "https://github.com/GreenerAsraf/resale-here",
      },
    ],
  },
  {
    name: "Advoza The Law Firm",
    Image: netflix,
    type: "Mern",
    technologys: ["React.js", "Firebase", "React-Bootstrap"],
    links: [
      { linkType: "Demo", 
      link: "https://advoza-a0c0b.web.app/" 
    },
      {
        linkType: "Front-end",
        link: "https://github.com/GreenerAsraf/advoza-the-law-firm",
      },
      {
        linkType: "Back-end",
        link: "https://assignment-eleven-server-six.vercel.app/",
      },
    ],
  },
  {
    name: "Learning bee",
    Image: netflix,
    type: "Mern",
    technologys: [
      "React.js",
      "Firebase",
      "React-Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    links: [
      { linkType: "Demo",
       link: "https://programming-bee.web.app/" 
      },
      {
        linkType: "Front-end",
        link: "https://github.com/GreenerAsraf/learning-bee",
      },
      {
        linkType: "Back-end",
        link: "https://programming-bee-server.vercel.app/",
      },
    ],
  },
];
export default portfolioData;


