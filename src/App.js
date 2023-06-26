
import './App.css';
import CvPage  from './components/cv_page';
import CvEditor from'./components/cv_editor';

function App() {
  
  return (
    <div className="App">
       <CvEditor />
       <CvPage />
    </div>
  );
}

export default App;
