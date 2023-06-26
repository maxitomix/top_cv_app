
import './App.css';
import { useState } from 'react';
import CvPage  from './components/cv_page';
import CvEditor from'./components/cv_editor';
import samplePerson from './data/sample.json';


function App() {

  const [profileApp, setProfileApp] = useState(samplePerson.profile);

  return (
    <div className="App">
       <CvEditor setProfileApp={setProfileApp} profileApp={profileApp}/>
       {/* <pre>{JSON.stringify(profileApp, null, 2)}</pre> */}
       <CvPage profileApp={profileApp} />
    </div>
  );
}

export default App;
