
function Profile (){
  return (
    <div className="profile">
      Profile section
    </div>
  );
};


function Skills (){
  return (
    <div className="skills">
      Skills section
    </div>
  );
};


function WorkExperience (){
  return (
    <div className="workExperience">
      Work Experience section
    </div>
  );
};


function Education (){
  return (
    <div className="education">
      Education section
    </div>
  );
};

export default function CvPage() {
  return(
    <div className="cvPage">
      <Profile />
      <Skills />
      <WorkExperience />
      <Education />
    </div>
  )
};
