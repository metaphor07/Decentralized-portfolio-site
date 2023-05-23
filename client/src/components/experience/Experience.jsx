import { SlCalender } from "react-icons/sl"
import './Experience.css'
import { useEffect, useState } from "react";

const Experience = ({ state }) => {
  const { contract } = state;
  const [educations, setEducations] = useState("");
  useEffect(() => {
    const getEducationDetails = async () => {
      try {
        const educationDetails = await contract.methods.allEducation().call();
        setEducations(educationDetails);
      } catch (error) {
        alert("*Uncaught Error occured. Plz try after some time!");
      }
    };
    contract && getEducationDetails();
  }, [state]);

  return (
    <section className="exp-section">
      <h1 className="title">Education </h1>

      <div className="container">
        <div className="education">
          {/* <h1 className="edu-tittle">Education</h1> */}
          {educations !== "" &&
            educations.map((education) => {
              return (
                <div className="edu-card" key={education?.id}>
                  <p className="card-text1">
                    <SlCalender className="icon" /> {education?.date}
                  </p>
                  <h3 className="card-text2">{education?.degree}</h3>
                  <p className="card-text3">{education?.knowledgeAcquired}</p>
                  <p className="card-text4">{education?.institutionName}</p>
                </div>
              );
            })}
        </div>
        {/* experience */}
        {/* <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div>
        
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div>
         
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div>
                </div>  */}
      </div>
    </section>
  );
};

export default Experience
