import './App.css';
import Header from './components/Header/Header';
import ToolBar from './components/TollBar/ToolBar';
import Students from './pages/Students-page/Students';

function App() {

  return (
    <div className="App">
      <div>
        <Header />
        <ToolBar />
        <Students/>
      </div>
    </div>
  );
}

export default App;
