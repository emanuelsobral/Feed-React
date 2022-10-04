import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/82630009?v=4" />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Emanuel Souza</strong>
                            <time title="03 de outubro as 19:20:00" dateTime="2022-03-10 19:20:00">Há cerca de 2h</time>
                        </div>

                        <button title='Deletar Comentario'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}