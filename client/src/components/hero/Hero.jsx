import React, { useEffect, useState } from "react";
import { Modal, ModalBody, Row } from "reactstrap";
import heroImg from "../../assets/hero-img.png";
import "./Hero.css";

const Hero = ({ state }) => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");

  const { contract } = state;
  useEffect(() => {
    const getImage = async () => {
      const img = await contract?.methods.imageLink().call();
      setImage(img);
    };
    contract && getImage();
  }, [contract]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <p>
            <span>Rupak </span>
            is a Full-Stack Blockchain & MERN Developer From India.
          </p>
          <h1>I develop decentralised apps in web3 space.</h1>
          <h3>
            I am currently a third-year student at the TERII, krukshetra
            pursuing a B.Tech in Computer Science and Engineering will graduate
            in the summer of 2024. My long-term career goal is to become a good
            project handler so that I can build project that will help solve
            real life problems. I have the skills and knowledge needed to pursue
            this goal thanks to my academic training. My Development experience
            has given me the opportunity to apply these skills and develop
            important project skills, such as build Blockchain Application
            Development, MERN Application Development, Good Problem Solving
            Sills and have good understanding of DataStructure and Algorithms.
          </h3>
          {/*  =========popup bootstrap==========  */}

          <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalBody>
              <Row className="text-align">
                <label htmlFor="" toggle={() => setModal(!modal)}>
                  Mail Id - metatech.07@gmail.com
                </label>
              </Row>
            </ModalBody>
          </Modal>

          <button className="msg-btn" onClick={() => setModal(true)}>
            Get in Touch
          </button>
          {/*  =========popup bootstrap end==========  */}
        </div>

        <div className="hero-img">
          <div className="img-container">
            <img
              src={`https://gateway.pinata.cloud/ipfs/${image}`}
              alt="profilePhoto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
