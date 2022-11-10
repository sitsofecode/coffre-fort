import React ,{useState } from "react";
import './App.css';
import { Routes , Route } from "react-router-dom";
// import Register from "./Components/Register";
import Connexion from "./Components/Connexion";
import Nav from "./Components/Nav";
import Head from "./Components/header";
import Collaborateur from "./Components/pages/Collaborateur";
import Corbeille from "./Components/pages/corbeille";
import DocumentPublier from "./Components/pages/documentPublier";
import MesDocument from "./Components/pages/mesDocument";
import TableauDeBord from "./Components/pages/tableauBord";
import DocumentRecu from "./Components/pages/documentRecu";
import DocumentRH from "./Components/pages/DocumentRH";
import Setting from "./Components/pages/parametre";


function App() {
const [isOffLine]=useState(false)
const [ nav , setNav] = useState(false)

function showNav (){
  setNav ( prevState => !prevState )
} 
  return (
    <div className=" bg-blue-50 h-screen ">
      {isOffLine ?<Connexion/>: 
      <div className="flex" >
       <Nav
        value ={nav} 
        />
        <div className=" w-full ">
          <Head handleClick = {showNav}/>

          <Routes>
      <Route path="/" element ={<TableauDeBord/>}/>
      <Route path="/docpublier" element ={<DocumentPublier/>}/>
      <Route path="/docRecu" element ={<DocumentRecu/>}/>
      <Route path="/mesDoc" element ={<MesDocument/>}/>
      <Route path="/DocRh" element ={<DocumentRH/>}/>
      <Route path="/colaborateur" element ={<Collaborateur/>}/>
      <Route path="/trash" element ={<Corbeille/>}/>
      <Route path="/setting" element ={<Setting/>}/>
    </Routes>
        </div>
      </div>
      
      }
    </div>
  );
}

export default App;
