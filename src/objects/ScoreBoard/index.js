import PlayerName from "../../components/PlayerName/index.js"
import PlayerScore from "../../components/PlayerScore/index.js";
import VsPlayer from "../../components/VsPlayer/index.js";
import "./style.css"
function ScoreBoard(){
    return /*html*/`
        <header class="score-board">
            ${PlayerName("Player1")}
            ${PlayerScore(3)}
            ${VsPlayer()}
            ${PlayerScore(1)}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default ScoreBoard;