import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";

const cardData = [
  {
    icon: "🚀",
    title: "5+ Industry Projects",
    description:
      "Delivered sleek, responsive websites with modern UI and dynamic features tailored to real-world clients.",
  },
  {
    icon: "💡",
    title: "Creative + Technical",
    description:
      "Skilled in React and full-stack development. Collaborate efficiently via Figma Dev Mode and build seamless backends using Node.js & MongoDB.",
  },
  {
    icon: "🧠",
    title: "ML & Python Powered",
    description:
      "Built a face recognition system using Python, OpenCV, and machine learning — bridging software with smart automation.",
  },
];

const Services = () => {
  return (
    <div className='services'>
      <div className='sSection left'>
        <h2 className='aboutHeadline'>
          Full Stack Developer
          <br />
          Crafting Impactful Web Experiences
        </h2>

        <div className='aboutCards'>
          {cardData.map((card, i) => (
            <div className='aboutCard' key={i}>
              <div className='cardIcon'>{card.icon}</div>
              <div className='cardContent'>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='skillsGrid'>
          {[
            "React.js",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "Django",
            "AWS",
            "Shopify",
            "Python",
          ].map((skill, i) => (
            <div className='skill animated-skill' key={i}>
              {skill}
            </div>
          ))}
        </div>

        <p className='aboutTagline'>
          Driven by curiosity. Defined by solutions. ✨
        </p>
      </div>

      <div className='sSection right'>
        <ComputerModelContainer />
      </div>
    </div>
  );
};

export default Services;
