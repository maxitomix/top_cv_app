
import './App.css';
import { useState } from 'react';
import CvPage  from './components/cv_page';
import CvEditor from'./components/cv_editor';
import samplePerson from './data/sample.json';


function App() {

  const [profileApp, setProfileApp] = useState(samplePerson.profile);
  const [skillsApp, setSkillsApp] = useState(samplePerson.skills);
  const [workExperienceApp, setWorkExperienceApp] = useState(samplePerson.workExperience);

  return (
    <div className="App">
       <CvEditor 
        setProfileApp={setProfileApp} 
        profileApp={profileApp}
        setSkillsApp={setSkillsApp}
        skillsApp={skillsApp}
        setWorkExperienceApp={setWorkExperienceApp}
        workExperienceApp={workExperienceApp}
       />
       {/* <pre>{JSON.stringify(skillsApp, null, 2)}</pre> */}
       <CvPage 
        profileApp={profileApp}
        skillsApp={skillsApp}
        workExperienceApp={workExperienceApp}
       />
    </div>
  );
}

export default App;
