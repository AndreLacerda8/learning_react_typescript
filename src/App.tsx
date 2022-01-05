import './App.css';
import { Todos } from './components/Todos'

function App() {
  return (
    <div>
      <Todos items={['Learnin React', 'Learnin Typescript']} />
    </div>
  );
}

export default App;
