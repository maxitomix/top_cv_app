import samplePerson from '../data/sample.json'


function Profile() {
  const profile = samplePerson.profile;
  return (
      <div className="profile">

        <div className="profileRow1">

          <div className="profileRow1Col1"> 

            <h1 className="profileName">{profile.name}</h1>
            <h3 className="profileTitle">{profile.title}</h3>

          </div>

          <div className="profileRow1Col2"> 

            <div className="profilePhone">{profile.phone}</div>
            <div className="profileEmail">{profile.email}</div>
            <div className="profileWebsite">{profile.website}</div>
            <div className="profileLinkedin">{profile.linkedin}</div>

          </div>

        </div>

        <div className="profileRow2">
          <div className="profileSummary">{profile.summary}</div>
        </div>
        
      </div>
  );
}


function Skills() {
  const skills = samplePerson.skills;
  return (
      <div className="skills">
        <h2 className='skillsTitle'>SKILLS</h2>
        <div className="skillsList">{skills.join(', ')}</div>
      </div>
  );
}

function WorkExperience(){
  const workList = samplePerson.workExperience;
  return(
    <div className="workExperience">
      <h2 className='workeExperienceTitle'>WORK EXPERIENCE</h2>

      {workList.map((work,index) => (
        <div key={index}>
          <div className="WorkExperienceRow1">
            <div className="position">{work.position}</div>
            <div className="company">{work.company}</div>
            <div className="startDate">{work.startDate.split(' ')[1] }</div>
            <div className="endDate">{` - ${work.endDate.split(' ')[1] || ' Present'}`}</div>
          </div>
        </div>
      ))}

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


