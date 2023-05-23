import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {

  return (
    <section className="socials">
      <a
        href="https://www.linkedin.com/in/rupak-jana-03b268234/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin className="icon" />
      </a>
      <a
        href="https://twitter.com/metapho64547829?lang=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillTwitterSquare className="icon" />
      </a>
      <a
        href="https://github.com/metaphor07"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className="icon" />
      </a>
    </section>
  );
}

export default Handles
