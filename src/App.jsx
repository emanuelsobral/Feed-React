import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './app.module.css'

import './global.css';

export function App() {

  return (
    <div>

      <Header/>

      <div className={styles.wrapper}>

        <Sidebar />

        <main>     
          <Post author="Emanuel Sobral" content="Lorem Ipsum"/>
          <Post author="Emanuel Sobral" content="Lorem Ipsum and"/>
        </main>

      </div>

    </div>
  )
}

