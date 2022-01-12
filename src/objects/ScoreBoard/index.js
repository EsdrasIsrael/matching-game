import ArrowDown from "../../components/ArrowDown/index.js";
import PlayerName from "../../components/PlayerName/index.js"
import PlayerScore from "../../components/PlayerScore/index.js";
import VsPlayer from "../../components/VsPlayer/index.js";
import "./style.css"

function ScoreBoard(){
    return /*html*/`
        <header class="score-board">
            ${ArrowDown()}
            ${PlayerName("Player1")}
            ${PlayerScore(2)}
            ${VsPlayer()}
            ${PlayerScore(1)}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default ScoreBoard;