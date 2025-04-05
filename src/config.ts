import icon from "../src/assets/icon2.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Sudais Khan",
    job: "Full Stack Web Developer",
    started: "2022-01-01",
    stack: "MERN",
    hobby: "practice my visual designing skills",
    projectLink: "https://github.com/Skaps664?tab=repositories",
  },
  socials: {
    // twitter: "https://twitter.com/skaps64",
    github: "https://github.com/Skaps664",
    linkedIn: "https://www.linkedin.com/in/sudaisk",
    behance: "https://www.behance.net/sudaiskhan",
    myAgency: "https://www.skordl.com/",
  },
  projects: {
    "CNN-Emotion-detection": {
      url: "https://github.com/Skaps664/CNN-Emotion-detection",
      tags: ["python", "keras", "cnn", "pandas"],
    },
    "Pinterest Backend Clone": {
      url: "https://github.com/Skaps664/pinterest_like",
      tags: ["ES6", "node", "express", "mongoDB"],
    },
    
  },
  og: {
    image: icon.src,
  },
};
