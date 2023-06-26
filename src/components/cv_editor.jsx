import { useEffect, useState } from 'react';



function ProfileEditor(props){
  const [newName, setNewName] = useState(props.newProfile.name)
  const [newTitle, setNewTitle] = useState(props.newProfile.title)
  const [newSummary, setNewSummary] = useState(props.newProfile.summary)
  const [newPhone, setNewPhone] = useState(props.newProfile.phone)
  const [newEmail, setNewEmail] = useState(props.newProfile.email)
  const [newWebsite, setNewWebsite] = useState(props.newProfile.website)
  const [newLinkedin, setNewLinkedin] = useState(props.newProfile.linkedin)

  const handleNameChange = (e) => {
    setNewName(e.target.value);
    props.setProfile({ ...props.newProfile, name: e.target.value });
  };
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
    props.setProfile({ ...props.newProfile, title: e.target.value });
  };
  const handleSummaryChange = (e) => {
    setNewSummary(e.target.value);
    props.setProfile({ ...props.newProfile, summary: e.target.value });
  };
  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
    props.setProfile({ ...props.newProfile, phone: e.target.value });
  };
  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
    props.setProfile({ ...props.newProfile, email: e.target.value });
  };
  const handleWebsiteChange = (e) => {
    setNewWebsite(e.target.value);
    props.setProfile({ ...props.newProfile, website: e.target.value });
  };
  const handleLinkedinChange = (e) => {
    setNewLinkedin(e.target.value);
    props.setProfile({ ...props.newProfile, linkedin: e.target.value });
  };


  return (
    <div className="profileEditor">
      <h2>PROFILE SECTION</h2>

      <div className="inputBox">
        
        <label className="input">Name:
          <input 
          type="text" 
          value={newName}
          onChange={handleNameChange}
           />
        </label>

        <label className="input">Title:
          <input 
          type="text" 
          value={newTitle}
          onChange={handleTitleChange}
          />
       </label>

       <label className="input">Summary:
          <input 
          type="text" 
          value={newSummary}
          onChange={handleSummaryChange}
          />
       </label>

        <label className="input">Phone:
          <input 
          type="text"  
          value={newPhone}
          onChange={handlePhoneChange}
          /></label>

        <label className="input">Email:
          <input
           type="text"
           value={newEmail}
           onChange={handleEmailChange} 
           /></label>

        <label className="input">Website:
          <input 
          type="text"
          value={newWebsite}
          onChange={handleWebsiteChange} 
           /></label>

        <label className="input">Linkedin:
          <input type="text" 
          value={newLinkedin}
          onChange={handleLinkedinChange}/></label>
      </div>

    </div>
  )
}


function SkillsEditor(props){
  const [newSkills, setNewSkills] = useState(props.newSkills ||[])

  const handleSkillChange = (index, e) => {
    const updatedSkills = [...newSkills];
    updatedSkills[index] = e.target.value;
    setNewSkills(updatedSkills);
    props.setSkills(updatedSkills);
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...newSkills];
    updatedSkills.splice(index,1);
    setNewSkills(updatedSkills);
    props.setSkills(updatedSkills);
  }

  const handleAddSkill = () =>{
    const updatedSkills = [...newSkills];
    updatedSkills.push("New Skill");
    setNewSkills(updatedSkills);
    props.setSkills(updatedSkills);
  }

  return (
    <div className="skillsEditor">
      <h2>SKILLS SECTION</h2>

      <div className="inputBox">
        {newSkills.map((skill, index) => (
          <div key={index}>
            <label className="input" >Skill  {index +1}
              <input 
                type="text" 
                value={skill}
                onChange={(e) => handleSkillChange(index, e)}
              />
              <button onClick={() => handleDeleteSkill(index)}>delete</button>
            </label>
          </div>
        ))}
      </div>
      <button onClick={() => handleAddSkill()}>Add</button>
    </div>
  )
}


function WorkExperienceEditor(props){
  const [works, setWork] = useState(props.newWorkExperience ||[])

  const handleStartDateChange = (e, index) => {
    const updatedWorks = [...works];
    updatedWorks[index] = { ...updatedWorks[index], startDate: e.target.value };
    setWork(updatedWorks);
    props.setWorkExperience(updatedWorks);
  };

  const handleEndDateChange = (e, index) => {
    const updatedWorks = [...works];
    updatedWorks[index] = { ...updatedWorks[index], endDate: e.target.value };
    setWork(updatedWorks);
    props.setWorkExperience(updatedWorks);
  };

  const handlePositionChange = (e, index) => {
    const updatedWorks = [...works];
    updatedWorks[index] = { ...updatedWorks[index], position: e.target.value };
    setWork(updatedWorks);
    props.setWorkExperience(updatedWorks);
  };

  const handleCompanyChange = (e, index) => {
    const updatedWorks = [...works];
    updatedWorks[index] = { ...updatedWorks[index], company: e.target.value };
    setWork(updatedWorks);
    props.setWorkExperience(updatedWorks);
  }

  const handleResponsibilityChange = (e, index) => {
    const updatedWorks = [...works];
    updatedWorks[index] = { ...updatedWorks[index], responsibilities: e.target.value };
    setWork(updatedWorks);
    props.setWorkExperience(updatedWorks);
  }

  const handleDeleteWork = (index) => {
    const updatedWorks = [...works];
    updatedWorks.splice(index,1);
    setWork(updatedWorks);
    props.setWorkExperience(updatedWorks);
  }

  
  const handleAddWork = () =>{
    const updatedWorks = [...works];
    updatedWorks.push({position: "New Work"});
    setWork(updatedWorks);
    props.setWorkExperience(updatedWorks);
  }

  return(
  <div className="workExperienceEditor">
      <h2>WORK EXPERIENCE</h2>
      <div className="inputBox">
          {works.map((work, index) => (
            <div key={index}>
              <h5 className="workIndex">Work {index+1}</h5>

              <label className="input" > Start Date:
                <input 
                type="text" 
                value={work.startDate}
                onChange={(e) => handleStartDateChange(e, index)}
                />
              </label>

              <label className="input" > End Date:
                <input 
                type="text" 
                value={work.endDate}
                onChange={(e) => handleEndDateChange(e, index)}
                />
              </label>

              <label className="input" > Position:
                <input 
                type="text" 
                value={work.position}
                onChange={(e) => handlePositionChange(e, index)}
                />
              </label>

              <label className="input" > Company:
              <input 
              type="text" 
              value={work.company}
              onChange={(e) => handleCompanyChange(e, index)}
              />
              </label>

              <label className="input" > Responsibilities:
              <textarea rows="5" cols="50"
              
              value={work.responsibilities}
              onChange={(e) => handleResponsibilityChange(e, index)}
              >
              </textarea>
              </label>

              <button onClick={() => handleDeleteWork(index)}>delete</button>
            </div>

          ))}
      </div>  
      <button onClick={() => handleAddWork()}>Add</button>
    </div>
  )
}






export default function CvEditor({
    setProfileApp, profileApp,
    setSkillsApp, skillsApp,
    setWorkExperienceApp, workExperienceApp
  }) 


{
  const [newProfile, setProfile] = useState(profileApp)
  const [newSkills, setSkills] = useState(skillsApp)
  const [newWorkExperience, setWorkExperience] = useState(workExperienceApp)
 
  useEffect(
    () => { setProfileApp(newProfile)},
    [newProfile, setProfileApp]
  );
 
  useEffect(
    () => { setSkillsApp(newSkills)},
    [newSkills, setSkillsApp]
  );

  useEffect(
    () => { setWorkExperienceApp(newWorkExperience)},
    [newWorkExperience, setWorkExperienceApp]
  );

  return (
      <div className="cvEditor">
        <ProfileEditor newProfile={newProfile} setProfile={setProfile} />
        <SkillsEditor newSkills={newSkills} setSkills={setSkills}/>
        <WorkExperienceEditor newWorkExperience={newWorkExperience} setWorkExperience={setWorkExperience} />
        CV EDITOR
         <pre>{JSON.stringify(newWorkExperience, null, 2)}</pre>

      </div>
  );
}
