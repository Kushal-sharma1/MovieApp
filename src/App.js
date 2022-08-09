import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar'
import Banner from './Components/Banner'
import List from './Components/List'
import Favourite from './Components/Favourite'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
 
    <BrowserRouter>
      
       <Navbar/>
       <Routes>
          <Route path='/' element ={ 
          <>
           <Banner/>
           <List/>
          </>
         }/> 
          <Route path='/fav' element ={<Favourite/>}/>
       </Routes>
   
    
    </BrowserRouter>
 
   
    </>   

    
  );
}

export default App;
