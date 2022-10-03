import { Header } from './components/header';
import { Button } from './Post';

import styles from './app.module.css'

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>

      <Header/>

      <div className={styles.wrapper}>

        <Sidebar />

        <main>     
          <Button author="Emanuel Sobral" content="Lorem Ipsum"/>
          <Button author="Emanuel Sobral" content="Lorem Ipsum and"/>
        </main>

      </div>

    </div>
  )
}

