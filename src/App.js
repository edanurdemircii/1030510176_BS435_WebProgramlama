import React, {useState} from 'react';
import OyunComponent from './components/OyunComponent/start';
import StartComponent from './components/StartComponent/giris';


function App() {
    const [secilenMod, setSecilenMod] = useState(null);

    function handleModSec(mod) {
        setSecilenMod(mod);
    }

    function handleGeriDon() {
        setSecilenMod(null);
    }

    return (
        <div>
            {!secilenMod ? (
                <StartComponent onModSec={handleModSec} />
            ) : (
                <OyunComponent mod={secilenMod} onGeriDon={handleGeriDon} />
            )}
        </div>
    );
}

export default App;
