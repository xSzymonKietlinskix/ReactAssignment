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
        <main className='body'>
          <header className='columns'>
            <Header />
            <img className = "logo" src = {logo} />
          </header>
          <article className="api">
            <Api />
          </article>
        </main>
        <footer className='footer'>
        <Footer />
        </footer>
    </div>
  );
}

export default App;
