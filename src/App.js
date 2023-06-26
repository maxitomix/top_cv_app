
import './App.css';
import { useState } from 'react';
import CvPage  from './components/cv_page';
import CvEditor from'./components/cv_editor';
import samplePerson from './data/sample.json';


function App() {

  const [profileApp, setProfileApp] = useState(samplePerson.profile);
  const [skillsApp, setSkillsApp] = useState(samplePerson.skills);

  return (
    <div className="App">
       <CvEditor 
        setProfileApp={setProfileApp} 
        profileApp={profileApp}
        setSkillsApp={setSkillsApp}
        skillsApp={skillsApp}
       />
       {/* <pre>{JSON.stringify(skillsApp, null, 2)}</pre> */}
       <CvPage 
        profileApp={profileApp}
        skillsApp={skillsApp}
       />
    </div>
  );
}

export default App;
