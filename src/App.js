import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar'
import Banner from './Components/Banner'
import List from './Components/List'
import Favourite from './Components/Favourite';
function App() {
  return (
    <>
    <Navbar/>
    {/* <Banner/>
    <List/> */}
    <Favourite/>
    </>
    
  );
}

export default App;
