import logo from './logo.svg';
import './App.css';
import NavComponent from './NavComponent';
import HeaderComponent from './HeaderComponent';
import Body from './Body';
import footerComponent from './footerComponent';
import Footer from './Footer';



function App() {
  return (
    <div className="container">
      <NavComponent/>
      <HeaderComponent/>
      <Body/>

    <Footer />
      
    </div>
  );
}

export default App;
