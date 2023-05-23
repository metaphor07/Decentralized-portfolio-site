import React, { useEffect, useState } from "react";
import { FaDonate } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap";
import img from "../../assets/img1.png";
import "./Projects.css";

const Projects = ({ state }) => {
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState("");

  useEffect(() => {
    const { contract } = state;
    const getProjects = async () => {
      const projectDetails = await contract.methods.allProjects().call();
      setProjects(projectDetails);
    };
    contract && getProjects();
  }, [state]);

  const donateEth = async (e) => {
    e.preventDefault();
    try {
      const { contract, web3 } = state;
      const ethValue = document.querySelector("#eth").value;
      const weiValue = web3.utils.toWei(ethValue, "ether");
      const accouts = await web3.eth.getAccounts();
      await contract.methods
        .donate()
        .send({ from: accouts[0], value: weiValue, gas: 480000 });
      alert("*Transaction Successful!");
      // window.location.reload();
    } catch (error) {
      alert("*Something went Wrong. Plz try after some time!");
    }
  };

  return (
    <section className="project-section">
      <h1 className="title">Projects </h1>
      <div className="card-wrapper">
        {projects !== "" &&
          projects?.map((project) => {
            return (
              <a
                id={project?.id}
                href={`https://github.com/metaphor07/${project?.githublink}`}
                className="project-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-img" style={{ width: "90%" }}>
                  <img
                    src={`https://gateway.pinata.cloud/ipfs/${project?.image}`}
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="card-text">
                  <h3>{project?.name}</h3>
                  <p>{project?.description}</p>
                </div>
              </a>
            );
          })}
      </div>
      {/*  =========popup bootstrap==========  */}

      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Enter the ETH you want to donate!
        </ModalHeader>
        <ModalBody>
          <form onSubmit={donateEth}>
            <Row>
              <input id="eth" type="text" />
              <Button className="mt-4" type="submit">
                Send
              </Button>
            </Row>
          </form>
        </ModalBody>
      </Modal>
      {/*  =========popup bootstrap end==========  */}
      <p className="donate" onClick={() => setModal(true)}>
        Liked the dummyValue's ? Consider donating Eth's{" "}
        <FaDonate className="icon" />
      </p>
    </section>
  );
};

export default Projects;
