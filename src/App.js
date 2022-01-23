import NavBar from './components/NavBar';
import MainHeader from './components/MainHeader';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className='sc-hoHwyw egIgsK'>
      <NavBar />;
      <main className='sc-leSONj cXhdTX'>
        <div className='sc-llYSUQ eYMoPz'>
          <div>
            <MainHeader />
            <Form />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
