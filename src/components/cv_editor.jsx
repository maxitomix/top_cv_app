import { useState } from 'react';



function ProfileEditor(props){
  const [newName, setNewName] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [newPhone, setNewPhone] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newWebsite, setNewWebsite] = useState("")
  const [newLinkedin, setNewLinkedin] = useState("")

  const handleNameChange = (e) => {
    setNewName(e.target.value);
    props.setProfile({ ...props.newProfile, name: newName });
  };
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
    props.setProfile({ ...props.newProfile, title: newTitle });
  };
  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
    props.setProfile({ ...props.newProfile, phone: newPhone });
  };
  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
    props.setProfile({ ...props.newProfile, email: newEmail });
  };
  const handleWebsiteChange = (e) => {
    setNewWebsite(e.target.value);
    props.setProfile({ ...props.newProfile, website: newWebsite });
  };
  const handleLinkedinChange = (e) => {
    setNewLinkedin(e.target.value);
    props.setProfile({ ...props.newProfile, linkedin: newLinkedin });
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

export default function CvEditor() {

  const [newProfile, setProfile] = useState({})

  return (
      <div className="cvEditor">
        <ProfileEditor newProfile={newProfile} setProfile={setProfile} />
        CV EDITOR
        <pre>{JSON.stringify(newProfile, null, 2)}</pre>
      </div>
  );
}
