import samplePerson from '../data/sample.json'


function ProfileEditor(){
  const profile = samplePerson.profile;
  return (
    <div className="profileEditor">
      <h2>PROFILE SECTION</h2>

      <div className="inputBox">
        
        <label className="input">Name:<input type="text"  /></label>
        <label className="input">Title:<input type="text" /></label>
        <label className="input">Phone:<input type="text"  /></label>
        <label className="input">Email:<input type="text" /></label>
        <label className="input">Website:<input type="text"  /></label>
        <label className="input">Linkedin:<input type="text" /></label>
      </div>

    </div>
  )
}

export default function CvEditor() {
  return (
      <div className="cvEditor">
        <ProfileEditor />
        CV EDITOR
      </div>
  );
}
