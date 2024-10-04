import office from "../assets/projects/office.png";
import FullStack from "../assets/projects/FullStack.png";
import ATM from "../assets/projects/ATM.png";
import NumberGuessing from "../assets/projects/NumberGuessing.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React and Vite.js, as well as back-end technologies like MySQL, PostgreSQL, and Java. I am also proficient in Spring Boot, Spring, HTML, CSS, SQL, and tools like Postman and GitHub. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With professional experience, I have worked with a variety of technologies, including Java, SpringBoot, React and MySQL. My journey in full-stack development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 (May)- Present",
    role: "Full Stack Developer",
    company: "EPTIQ TECHNOLOGIES, India",
    description: `Developed and maintained web applications using Java, React.js, Vite.js, HTML, CSS, MySQL, and Spring Boot. Designed and implemented RESTful APIs and ensured seamless integration with MySQL databases. Collaborated with stakeholders to define project requirements and timelines, driving the successful delivery of scalable and efficient solutions.`,
    technologies: ["Java","Springboot", "React.js", "Vite.js","Tailwind", "MySQL"],
  },
  {
    year: "Feb 2024 - Apr 2024",
    role: "Frontend Developer",
    company: "O2O Mavericks Private Limited, India",
    description: `Designed and developed user interfaces for web applications using React.js, Vue.js, and HTML/CSS. Collaborated with backend developers to integrate frontend components with APIs. Implemented responsive designs and optimized frontend performance for a seamless user experience.`,
    technologies: ["HTML", "CSS", "React.js","Vue.js","Next.js"],
  },
  {
    year: "Jan 2024 - Jan 2024",
    role: "Full Stack Web Development Intern",
    company: "Bharat Intern, India",
    description: `Gained hands-on experience in front-end development during the Bharat Intern Full Stack Development Internship. Worked with technologies like HTML, CSS, Bootstrap, and React.js to enhance user interfaces. Improved understanding of the full development lifecycle and contributed to UI design enhancements through practical application.`,
    technologies: ["HTML", "CSS", "Bootstrap", "React.js"],
  },
  {
    year: "Nov 2024 - Dec 2024",
    role: "Java Developer Intern",
    company: "Oasis Infobyte, India",
    description: `Applied theoretical knowledge of Java to real-world projects during the Oasis Infobyte internship, strengthening core Java skills and problem-solving abilities. Enhanced coding and debugging proficiency through hands-on experience with Java, Spring Boot, and Hibernate. Elevated development expertise by adhering to industry best practices in a supportive learning environment.`,
    technologies: ["Java", "SpringBoot"],
  },
];

export const PROJECTS = [
  {
    title: "Office Managament System",
    image: office,
    description:
      "Developed a full-stack Office Management System using Java, Spring Boot, React.js, HTML, CSS, Tailwind, Axios, and MySQL. The system includes a dashboard, client data management, office expenses tracking, and multiple office-related pages for streamlined office operations. Integrated and tested APIs using Postman for seamless functionality.",
    technologies: ["Java", "SpringBoot", "HTML", "CSS", "React.js", "Postman", "Tailwind.CSS", "MySQL"],
  },
  {
    title: "Task Management App",
    image: FullStack,
    description:
      "Developed a full-stack CRUD application utilizing Java, Spring Boot, React.js, and MySQL for seamless data handling. Designed RESTful APIs and tested them with Postman, while the React.js front-end interacted with the back-end for efficient data management. The application streamlined Create, Read, Update, and Delete operations, ensuring smooth and responsive user interaction.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "ATM Interface",
    image: ATM,
    description:
      " Developed a Java-based ATM console application with five different classes. It prompts users for their ID and pin to unlock functionalities, allowing operations such as transaction history, withdrawals, deposits, transfers, and the option to quit.",
    technologies: ["Java"],
  },
  {
    title: "Number Guessing" ,
    image: NumberGuessing,
    description:
      "Guess a randomly generated number between 1 and 100, receiving feedback on whether your guess is correct, too high, or too low. Players can have multiple rounds, with scores tracked based on attempts or rounds won.",
    technologies: ["Java"]
  },
];

export const CONTACT = {
  address: "Baner, Pune-411045 ",
  phoneNo: "+91 8605601575 ",
  email: "pratikludarkar@gmail.com",
};
