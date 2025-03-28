import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Linkedin, FileDown, Facebook, Menu, X, Rocket, Cloud, Lock, Zap } from 'lucide-react';

import ContactForm from "./components/ContactForm"

import img1 from "./photo.jpg"





import img2 from "./food.png"
import img3 from "./login.png"
import img4 from "./med.png"
import img5 from "./restro.png"
import img6 from "./p5.png"
import { img } from 'framer-motion/client'
import img15 from "./Node.js_logo.svg.png"



import im1 from "../src/coding/leet.png"
import im2 from "../src/coding/gfg.png"


// dashboard image 
import img10 from "./reactt (1).png"
import img11 from "./reactt (2).png"
import img12 from "./reactt (3).png"
import img13 from "../src/icon/reactt (4).png"








// including icon from 
import icon1 from "../src/icon/html.png"
import icon2 from "../src/icon/images.jpeg"
import icon3 from "../src/icon/images.png"
import icon4 from "../src/icon/javascript.png"
import icon5 from "../src/icon/nodejs.jpg"
import icon6 from "../src/icon/mongo.jpeg"
import icon7 from "../src/icon/taiwind.png"
import icon8 from "../src/icon/sql.png"
import icon9 from "../src/icon/material.jpeg"








function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "NIT Patna OLX",
      description: "A MERN stack platform for NITs students to sell items they didn’t carry back after leaving the hostel. – Implemented secure login/signup with JWT authentication and user session management.Tools and technologies used: Node.js, Express.js, React.js, MongoDB Atlas, JWT authentication, Postman ",
      live: "#",
      github: "https://github.com/Shubham1893/backend-3",
      image :img2,
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Patient Management System",
      description: "Developed a comprehensive platform for managing patient records, facilitating real-time chat support, and enabling medical report uploads with Google Maps integration.– Tools and technologies used: React 18, TypeScript, Vite, TailwindCSS, Google Maps API, React Router, ESLint,PostCSS",
      live: "https://medicare-kohl-eight.vercel.app/",
      github: "https://github.com/Shubham1893/HealthSync-",
      image: img4,
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Authentication",
      description: "Secure authentication system with Nodejs , MongoDB, Expressjs , Mongodb atlas, secure login and signup functionality , used material UI for front-end",
      live: "#",
      github: "#",
      image: img3,
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "myRestro",
      description: "Developed a responsive food ordering application using React.js and Tailwind CSS, featuring real-time price fetching and a user-friendly interface for adding items to cart and favorites.",
      live: "https://new-folder-1-w9qq.onrender.com/",
      github: "https://github.com/Shubham1893/New-folder",
      image: img5,
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Textify",
      description: "Implemented features like case conversion, extra space removal, dark mode, and real-time text preview for an enhanced user experience",
      live: "",
      github: "https://github.com/Shubham1893/text",
      image: img6,
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const techStack = [
    { 
      name: "HTML5",
      image: icon1
    },
    { 
      name: "CSS3",
      image: icon2
    },
    { 
      name: "JavaScript",
      image: icon4
    },
    { 
      name: "React",
      image: icon3
    },
    { 
      name: "Node.js",
      image: icon5
    },
    { 
      name: "Tailwind",
      image:icon7
    },
    { 
      name: "Material UI",
      image:icon9
    },
    { 
      name: "Express.js",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&auto=format&fit=crop&q=60"
    },
    { 
      name: "MongoDB",
      image: icon6
    },
    { 
      name: "SQL",
      image: icon8
    },
    { 
      name: "C++",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=60"
    }
  ];

  const navLinks = ['About', 'Projects', 'Tech', 'Contact'];

  const letterAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
    


      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
  <div className={`absolute inset-0 bg-white/20 backdrop-blur-lg transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
  <div className="container mx-auto px-4 relative">
    <div className="flex items-center justify-between">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold text-white hover:text-neon-blue transition-colors cursor-pointer"
      >
        Portfolio
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50 text-white hover:text-neon-blue transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Desktop Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:flex items-center space-x-8"
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-white hover:text-neon-blue transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-neon-blue after:transition-all hover:after:w-full"
          >
            {link}
          </a>
        ))}
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : '100%' }}
        className={`fixed inset-0 bg-white/10 backdrop-blur-xl md:hidden ${isMenuOpen ? 'flex' : 'hidden'} items-center justify-center`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xl text-white hover:text-neon-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</nav>



      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none" />







        <div className ="i1">
          <img src ={img11}></img>
        </div>
        <div className="i2">
          <img src ={img10}></img>
        </div>
        <div className = "i3">
          <img src={img12}></img>
        </div>
        <div className="i5">
          <img src={img13}></img>
        </div>
        <div className="i6">
          <img src={img15}></img>
        </div>

        

      
        {/* <div className="codingbar">
         
          <a  href="https://www.geeksforgeeks.org/user/shubhamkephbw/">
          <img className="leetcode" src={cd3}/>
          </a>
          
          
          
          <a href="https://leetcode.com/u/skydiver_/">
          <img className="gfg" src={cd2}/>
          </a>
          
          
         
          <a href ="https://www.codechef.com/users/real_pearly_65">
          <img className="codechef" src={cd1}/>
          </a>
        

        </div> */}
          



     







        <div className="container mx-auto px-4 py-20 text-center">
          <motion.div
            className="relative w-40 h-40 mx-auto mb-8 group"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={img1}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-blue-500 group-hover:border-purple-500 transition-colors duration-300"
            />
            <div className="absolute inset-0 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <div className="overflow-hidden">
            <motion.div
              className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 flex justify-center flex-wrap hover:from-purple-400 hover:to-blue-600 transition-all duration-500"
            >
              {"Hello, Shubham here".split('').map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterAnimation}
                  initial="initial"
                  animate="animate"
                  className="inline-block hover:scale-110 transition-transform cursor-default"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 hover:text-white transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building beautiful and functional web experiences
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/shubham-kumar-a2b542254/"
              className="social-icon-link group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Shubham1893"
              className="social-icon-link group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://drive.google.com/file/d/19pC8SVvC2m8a1Ig9bx1m0haWcjlxnK4W/view?usp=sharing"
              className="social-icon-link group"
              aria-label="Resume"
            >
              <FileDown className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61565845376459"
              className="social-icon-link group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            className="max-w-3xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-8 hover:text-blue-400 transition-colors cursor-default">About Me</h2>
            <p className="text-xl text-gray-300 leading-relaxed hover:text-white transition-colors">
              {/* I'm a passionate developer focused on creating exceptional digital experiences.
              With expertise in modern web technologies, I bring ideas to life through clean code
              and intuitive design. */}
              I'm a dedicated B.Tech student specializing in Electrical Engineering, fueled by a passion for technology and innovation.
With hands-on experience in full-stack development, I transform ideas into impactful solutions through robust coding and user-centric design.
Join me on my journey as I strive to create meaningful digital experiences that make a difference!
            </p>
          </motion.div>
        </div>
      </section>











    {/* coding portfile for 3 section  */}
    
    <div className="coding-profile">


      <h1 className="c1">Coding profile</h1>
      <div className="leetcode">
      <a href="https://leetcode.com/u/skydiver_/">
      <img className="leet1" src={im1}/>
      </a>  
      

      </div>
      <div className ="gfg">
      <a href="https://www.geeksforgeeks.org/user/shubhamkephbw/">
      <img className="gfg1" src={im2}/>
        </a>  
      
      </div>


    </div>

















      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 hover:text-blue-400 transition-colors cursor-default">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="neon-card group hover:scale-105 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-45 object-cover rounded-t-lg brightness-75 group-hover:brightness-100 transition-all"
                  />
                  <div className="absolute top-2 right-2 bg-black/50 p-2 rounded-full backdrop-blur-sm">
                    {project.icon}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 group-hover:text-white transition-colors">{project.description}</p>
                  <div className="flex gap-2">
                    <a href={project.live} className="neon-button text-sm flex items-center gap-1 flex-1 justify-center group-hover:bg-blue-500">
                      <ExternalLink className="w-3 h-3" /> Live
                    </a>
                    <a href={project.github} className="neon-button text-sm flex items-center gap-1 flex-1 justify-center group-hover:bg-blue-500">
                      <Github className="w-3 h-3" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



<section id="tech" className="py-10 bg-black/50">
  <div className="container mx-auto px-2">
    <h2 className="text-3xl font-bold text-center mb-8 hover:text-blue-400 transition-colors cursor-default">
      Tech Stack
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          className="tech-card group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="relative overflow-hidden rounded-xl aspect-square">
            <img
              src={tech.image}
              alt={tech.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-2">
              <h3 className="text-md font-semibold group-hover:text-blue-400 transition-colors">
                {tech.name}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      



       
      

      <ContactForm/>



      <div className="footer">
       <p>@copyright to shubham </p>
      </div>
    </div>
  );
}

export default App;