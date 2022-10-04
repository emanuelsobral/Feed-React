import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header className={styles.headerPost}>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/82630009?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Emanuel Souza</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="03 de outubro as 19:20:00" dateTime="2022-03-10 19:20:00">Publicado há 1h</time>

            </header>


            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 {' '} <a href="">jane.design/doctorcare</a></p>
            <p>
                <a href="">#novoprojeto</a>{' '}
                <a href="">#nlw</a>{' '}
                <a href="">#rocketseat</a>{' '}
            </p>
            </div>

            <form className={styles.comentForm}>
                <strong>Comente Sobre...</strong>

                <textarea placeholder='Deixe Seu Comentario'/>

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}