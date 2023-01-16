import logo from './components/RaMlogo.png';
import Header from './components/header';
import Title from './components/title';
import Footer from './components/footer';
import './components/styles.css'

function App() {
  return (
    <div>
        <Header />
        <Title />
        <img className = "logo" src = {logo} />
        <Footer />
    </div>
  );
}

export default App;
