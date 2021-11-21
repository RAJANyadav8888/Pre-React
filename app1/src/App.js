import logo from './logo.svg';
import './App.css';
import ParentProperty from './ParentProperty';
import TrueComponent from './TrueComponent';
import FalseComponent from './FalseComponent';
import ConditionComponent from './ConditionComponent';

function App() {
  const name = "Ankur";
  return (
    <div>
      
      <h1> from app</h1>
      <ConditionComponent/>
      {/* {name==="Ankur" ? 
      <TrueComponent/>:
      <FalseComponent/>
  }
      {name ==="Ankur" && <TrueComponent />}
   */}
     {/* <ParentProperty name="Rajan"/> */}
    </div>
    
  );
}

export default App;
