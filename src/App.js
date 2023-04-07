import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React,{ useState} from 'react';
import Alert from "./components/Alert";
// import { Alert, message } from "antd";



function App() {
  const [alert, setAlert] = useState(null)
  const Showalert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgrountColor = 'black'
      // message.success("dark mode");
      Showalert("Dark mode has been enable", "success")
    }
    else{
      setMode('light');
      document.body.style.backgrountColor = 'white'
      Showalert("light mode has been enable", "success")
    }
  }
  return (
   <div className={`app w-auto vh-100`} style={{ backgroundColor: mode === 'dark' ? '#042743' : 'white' }}>
   
   <Navbar title={"skullcandy"} about="feature" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
   <TextForm Showalert={Showalert} Heading={"Text utils"} mode={mode} />
   <About/>
   
   
   
   </div>
  );
}

export default App;
