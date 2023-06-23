import samplePerson from '../data/sample.json'


function Profile() {
  const profile = samplePerson.profile;
  return (
      <div className="profile">
        <div className="profileRow1">
          <div className="profileCol1"> 
          <h1>{profile.name}</h1>
          </div>

          <div className="profileCol2"> 
          </div>
        </div>
      </div>
  );
}


function Skills() {
  return (
      <div className="skills">
        Skills
      </div>
  );
}

function WorkExperience(){
  return(
    <div className="workExperience">
    Work Experience
  </div>
  );
}

function Education(){
  return(
    <div className="education">
    Education
  </div>
  );
}


export default function CvPage() {
    return (
      <div className="cvPage">
        <Profile />
        <Skills />
        <WorkExperience />
        <Education />
      </div>
    );
}


