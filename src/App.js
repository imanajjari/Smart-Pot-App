import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { Navbar } from './components';

function App() {
  let router = useRoutes(routes)
  return (
    <div className="App">
      <Navbar />
      {router}
    </div>
  );
}

export default App;
