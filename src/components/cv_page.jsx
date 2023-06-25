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
      <h2 className='workExperienceTitle'>WORK EXPERIENCE</h2>

      {workList.map((work,index) => (
        <div key={index}>
          <div className="workExperienceRow1">
            <div className="position">{work.position}</div>
            <div className="company">{work.company}</div>
            <div className="startDate">{work.startDate.split(' ')[1] }</div>
            <div className="endDate">{` - ${work.endDate.split(' ')[1] || ' Present'}`}</div>
          </div>

          <p className="workExperienceRow2">
            {work.responsibilities}
          </p>

        </div>
      ))}

    </div>
  );
}


function Education(){
  const education = samplePerson.education;
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


