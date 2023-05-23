import { useEffect, useState } from "react";
import "./Contact.css";

const Contact = ({ state }) => {
  const [resume, setResume] = useState("");

  const { contract } = state;
  useEffect(() => {
    const getImage = async () => {
      const res = await contract?.methods.resumeLink().call();
      setResume(res);
    };
    contract && getImage();
  }, [contract]);

  return (
    <section className="contact-section">
      <h1 className="title">Interested? Let's Get In Touch!</h1>
      <a
        href={`https://gateway.pinata.cloud/ipfs/${resume}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="downlodeBTN">View Resume</button>
      </a>
    </section>
  );
};

export default Contact;
