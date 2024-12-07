import React from 'react';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="container mx-auto py-10 px-4">
      <Helmet>
        <title>Lingo Bingo | AboutUs</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      <div className="max-w-4xl mx-auto bg-gradient-to-tr from-blue-500 to-blue-200 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl text-blue-800  font-bold mb-4">Hi there! I'm [Effat Ara]</h2>
          <p className="text-lg font-semibold mb-4">
            I'm a passionate developer and tech enthusiast with a focus on building
            interactive, user-friendly web applications using modern technologies like
            React, JavaScript, and Firebase. I strive to create scalable applications that
            solve real-world problems while enhancing user experience.
          </p>

          <h3 className="text-2xl text-blue-800 font-bold mt-6 mb-2">About Me</h3>
          <p className="text-lg  font-semibold mb-4">
            I have been working in the tech industry for [X years/months], focusing on both front-end and
            full-stack development. My goal is to continuously learn new technologies, enhance my skills,
            and work on exciting projects that push the boundaries of web development.
          </p>

          <h3 className="text-2xl text-blue-800 font-bold mt-6 mb-2">My Projects</h3>
          <ul className="list-disc ml-6">
            <li className="mb-2 font-semibold text-lg">
              <strong>Lingo Bingo</strong>: A language learning app where users can expand their vocabulary
              and improve communication skills in various languages. Built using React, Firebase, and responsive design principles.
            </li>
            <li className="mb-2 font-semibold text-lg">
              <strong>[Project 2]</strong>: [Brief description of the project and its purpose.]
            </li>
            <li className="mb-2 font-semibold text-lg">
              <strong>[Project 3]</strong>: [Brief description of the project and its purpose.]
            </li>
          </ul>

          <h3 className="text-2xl  text-blue-800  font-bold mt-6 mb-2">My Skills</h3>
          <ul className="list-disc font-semibold text-lg  ml-6">
            <li>Front-End Development: React, JavaScript, HTML5, CSS3, TailwindCSS</li>
            <li>Back-End Development: Node.js, Express, Firebase, MongoDB</li>
            <li>Version Control: Git, GitHub</li>
            <li>Tools & Libraries: Redux, React Router, Firebase Authentication, React Hooks</li>
            <li>UI/UX Design: Figma, Adobe XD</li>
            <li>Agile Development: Scrum, Kanban</li>
            <li>Deployment: Netlify, Heroku</li>
          </ul>

          <h3 className="text-2xl font-bold text-blue-800 mt-6 mb-2">Get in Touch</h3>
          <p className="text-lg font-semibold">
            I'm always open to learning about new projects or collaborations. Feel free to reach out to me through my email at
            <a href="" className="text-yellow-200 font-semibold"> pionara02@gmail.com</a> or connect with me on
            <a href="[LinkedIn URL]" className="text-yellow-200 font-semibold"> LinkedIn</a>.
          </p>
        </div>
      </div>
    </div>
  </>
  );
};

export default AboutUs;
