import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Robson Oliveira</strong>
              <time title="03 de junho ás 10:49" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
                <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabens!!</p>
          
        </div>
        
        <footer>
            <button>
                <ThumbsUp />
                Aplaudir
                <span>22</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
