import logo from './components/RaMlogo.png';
import Bar from './components/bar';
import Header from './components/header';
import Footer from './components/footer';
import './components/styles.css'
import Api from './components/api';


function App() {
  return (
    <div className='page'>
        <Bar />
        <div className='body'>
          <div className='Test'>
            <Header />
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
