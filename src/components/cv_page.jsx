import samplePerson from '../data/sample.json'


function Profile({profileApp}) {
  
  const profile = profileApp;

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


function Skills({skillsApp}) {

  const skills = skillsApp

  return (
      <div className="skills">
        <h2 className='skillsTitle'>SKILLS</h2>
        <div className="skillsList">{skills.join(', ')}</div>
      </div>
  );
}

function WorkExperience({workExperienceApp}){
  const workList = workExperienceApp;
  return(
    <div className="workExperience">
      <h2 className='workExperienceTitle'>WORK EXPERIENCE</h2>

      {workList.map((work,index) => (
        <div key={index}>
          <div className="workExperienceRow1">
            <div className="position">{work.position}</div>
            <div className="company">{work.company}</div>
            <div className="startDate">{work.startDate}</div>
            <div className="endDate">{` - ${work.endDate || ' Present'}`}</div>
          </div>

          <p className="workExperienceRow2">
            {work.responsibilities}
          </p>

        </div>
      ))}

    </div>
  );
}


function Education({educationApp}){
  const education = educationApp;
  return(
    <div className="education">
      <h2 className='educationTitle'>EDUCATION</h2>

      {education.map((institution,index) => (
        <div key={index}>

          <div className="educationRow1">
            <div className="degree">{institution.degree}</div>
            <div className="graduationYear">{`${institution.graduationYear || ' Present'}`}</div>
          </div>

          <div className="educationRow2">
            <div className="institution">{institution.institution}</div>
            <div className="location">{institution.location}</div>
          </div>
         


        </div>
      ))}

    </div>
  );
}


export default function CvPage({ profileApp, skillsApp, workExperienceApp, educationApp }) {
    return (
      <div className="cvPage">
        <Profile profileApp={profileApp}/>
        <Skills skillsApp={skillsApp}/>
        <WorkExperience workExperienceApp={workExperienceApp}/>
        <Education educationApp={educationApp} />
      </div>
    );
}


