import './App.css';
import Header from './lib/Header/Header';
import Navbar from './lib/Navbar/Navbar';

function App() {
  return (
    <div className="flex flex-col pl-[154px]">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
