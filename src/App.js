import { BiBasket } from "react-icons/bi";
import {colors} from './assets/colors'


//components
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Items from './components/Items'

function App() {
  return (
   <div 
   style={{width:'100vw', height:"100%", backgroundColor:colors.grayLight, flex:1}}
   className="px-5 md:px-14 pt-4 md:space-y-8">
<NavBar />
<Intro />
<Items />
   </div>
  );
}

export default App;
