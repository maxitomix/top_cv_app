import { useEffect, useState } from 'react';



function ProfileEditor(props){
  const [newName, setNewName] = useState(props.newProfile.name)
  const [newTitle, setNewTitle] = useState(props.newProfile.title)
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
          /></label>

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

export default function CvEditor({setProfileApp, profileApp}) {

  const [newProfile, setProfile] = useState(profileApp)
 
  useEffect(
    () => { setProfileApp(newProfile)},
    [newProfile, setProfileApp]
  );
  

  return (
      <div className="cvEditor">
        <ProfileEditor newProfile={newProfile} setProfile={setProfile} />
        CV EDITOR
        <pre>{JSON.stringify(newProfile, null, 2)}</pre>
      </div>
  );
}
