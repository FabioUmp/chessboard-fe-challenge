import styles from "../css/chessboard.module.css"

export default function chessboard(){
    return (
        <div id={styles.teste} >
             <div className={styles.squarewhite}></div>
             <div className={styles.squareblack}></div>
            </div>
            
    )
}
