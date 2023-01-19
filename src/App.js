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
        <body className='body'>
          <div className='columns'>
            <Header />
            <img className = "logo" src = {logo} />
          </div>
          <div className="api">
        
          </div>
        </body>
      
    </div>
  );
}

export default App;
