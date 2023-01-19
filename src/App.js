import logo from './components/RaMlogo.png';
import Header from './components/header';
import Title from './components/title';
import Footer from './components/footer';
import './components/styles.css'
import Api from './components/api';


function App() {
  return (
    <div className='page'>
        <Header />
        <div className='body'>
          <div className='Test'>
            <Title />
            <img className = "logo" src = {logo} />

          </div>
          <div className="api">
          <Api />

          </div>
         
        </div>
    </div>
  );
}

export default App;
