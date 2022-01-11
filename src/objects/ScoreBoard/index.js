import PlayerName from "../../components/PlayerName/index.js"
import VsPlayer from "../../components/VsPlayer/index.js";
import "./style.css"
function ScoreBoard(){
    return /*html*/`
        <header class="score-board">
            ${PlayerName("Player1")}
            ${VsPlayer()}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default ScoreBoard;