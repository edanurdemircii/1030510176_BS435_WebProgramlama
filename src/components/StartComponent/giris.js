import React from "react";

function StartComponent({ onModSec }) {
    return (
        <div className="startBody">
            <h1>OYUNA HOŞGELDİNİZ</h1>
            <p>Oyun Modunu Seçin:</p>
            <button onClick={() => onModSec('kolay')}>Kolay Mod</button>
            <button onClick={() => onModSec('zor')}>Zor Mod</button>
        </div>
    );
}
export default StartComponent;