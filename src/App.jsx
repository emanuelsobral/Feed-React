import { Header } from './components/header';
import { Button } from './Post';
import './global.css';

export function App() {

  return (
    <div>
      <Header/>

      <Button author="Emanuel Sobral" content="Lorem Ipsum"/>
      <Button author="Emanuel Sobral" content="Lorem Ipsum and"/>
    </div>
  )
}

