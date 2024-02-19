import './App.css';
import Header from './lib/Header/Header';
import Navbar from './lib/Navbar/Navbar';
import PopularCatagories from './lib/PopularCatagories/PopularCatagories';

function App() {
  return (
    <div className="flex flex-col pl-[154px]">
      <Navbar />
      <Header />
      <PopularCatagories />
    </div>
  );
}

export default App;
