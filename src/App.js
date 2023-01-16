import logo from './components/RaMlogo.png';
import Header from './components/header';
import Title from './components/title';
import Footer from './components/footer';
import './components/styles.css'
import Api from './components/api';


function App() {
  return (
    <div>
        <Header />
        <Title />
        <img className = "logo" src = {logo} />
        <Footer />
        <Api />
    </div>
  );
}

export default App;
