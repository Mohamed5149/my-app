import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideosList from './pages/videosList/videosList';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <VideosList></VideosList>
    </div>
  );
}

export default App;