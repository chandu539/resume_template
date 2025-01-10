import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [name, setName] = useState('Chintha Chandu');
  const [contact, setContact] = useState({
    email: 'chchandu554@gmail.com',
    mobile: '+91 9948949806',
    address: 'Andhra Pradesh, India',
    linkedin: 'linkedin.com/in/chintha-chandu',
    github: 'github.com/chintha-chandu'
  });
  const [education, setEducation] = useState('BTech in Computer Science, GMRIT, 2024.');
  const [skills, setSkills] = useState('HTML, CSS, JavaScript, React.js, Java, Python, Machine Learning');
  const [hobbies, setHobbies] = useState('Coding, Traveling, Learning new technologies');
  const [strengths, setStrengths] = useState('Problem-solving, Leadership, Time management');
  const [summary, setSummary] = useState('A motivated and creative individual with a passion for frontend development and coding.');
  const [experience, setExperience] = useState('No professional experience yet, but passionate about web development and machine learning.');
  const [projects, setProjects] = useState('Created a cooking recipe website as a project using React and Firebase.');

  const saveResume = () => {
    alert('Resume saved!');
  };

  const handleContactChange = (key, value) => {
    setContact(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  return (
    <div className="container">
     
      <div className="header">
        <h1>
          <div
            contentEditable="true"
            suppressContentEditableWarning
            onBlur={(e) => setName(e.target.innerText)}
            dangerouslySetInnerHTML={{ __html: name }}
          />
        </h1>
        <div className="contact-details">
          <p>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => handleContactChange('email', e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: contact.email }}
            />
          </p>
          <p>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => handleContactChange('mobile', e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: contact.mobile }}
            />
          </p>
          <p>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => handleContactChange('address', e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: contact.address }}
            />
          </p>
          <p>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => handleContactChange('linkedin', e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: contact.linkedin }}
            />
          </p>
          <p>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => handleContactChange('github', e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: contact.github }}
            />
          </p>
        </div>
      </div>

      
      <div className="main-content">
        
        <div className="left-side">
          <div className="section">
            <h2>Education</h2>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => setEducation(e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: education }}
            />
          </div>
          <div className="section">
            <h2>Skills</h2>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => setSkills(e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: skills }}
            />
          </div>
          <div className="section">
            <h2>Hobbies</h2>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => setHobbies(e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: hobbies }}
            />
          </div>
          <div className="section">
            <h2>Strengths</h2>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => setStrengths(e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: strengths }}
            />
          </div>
        </div>

        
        <div className="right-side">
          <div className="section">
            <h2>Summary</h2>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => setSummary(e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          </div>
          <div className="section">
            <h2>Experience</h2>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => setExperience(e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: experience }}
            />
          </div>
          <div className="section">
            <h2>Projects</h2>
            <div
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) => setProjects(e.target.innerText)}
              dangerouslySetInnerHTML={{ __html: projects }}
            />
          </div>
        </div>
      </div>

      <button className="btn" onClick={saveResume}>
        Save Resume
      </button>
    </div>
  );
};

export default Resume;
