import styles from "../css/chessboard.module.css"

export default function chessboard(){
    return (
        <div id={styles.square} >
            {create_board(7)}
            </div>
            
    )
}

function create_board(number_column){
    const lista = []
    let square_color = 1
    for (let i = 0; i < number_column*8; i++) {
        if (square_color === 1) {
            lista.push(<div className={styles.squarewhite} key={i}></div>);
        } else {
            lista.push(<div className={styles.squareblack} key={i}></div>);
        }

        square_color = square_color === 1 ? 0 : 1;

        if ((i + 1) % 8 === 0) {
            square_color = square_color === 1 ? 0 : 1;
        }

        }
    return lista

}    