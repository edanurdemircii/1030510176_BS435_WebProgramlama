import React, { useState } from 'react';

function OyunComponent() {
    const [oyunaBasladi, setOyunaBasladi] = useState(false);

    const baslaOyuna = () => {
        setOyunaBasladi(true);
    };

    return (
        <div>
            {!oyunaBasladi ? (
                <button onClick={baslaOyuna}>Oyuna Başla</button>
            ) : (
                <p>Hadi Beni Tahmin Et</p>
            )}
        </div>
    );
}

export default OyunComponent;
