import React, { useState, useEffect } from 'react';
import './start.css';

function OyunComponent({ mod, onGeriDon }) {
    const [sayı, setSayı] = useState(generateRandomNumber(mod));
    const [tahmin, setTahmin] = useState('');
    const [geribildirim, setGeribildirim] = useState('');
    const [puan, setPuan] = useState(0);
    const [tahminSayac, setTahminSayac] = useState(0);

    useEffect(() => {
        if (puan === 50 || tahminSayac===5 ) {
            if (tahminSayac === 5) {
                setGeribildirim('Başarısız! Tahmin hakkınız bitti.');
                oyunuSıfırla();
            }

        }
    }, [puan,tahminSayac]);

    function generateRandomNumber(mod) {
        return mod === 'kolay' ? Math.floor(Math.random() * 10) + 1 : Math.floor(Math.random() * 100) + 1;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const parsEdilenTahmin = parseInt(tahmin);

        if (isNaN(parsEdilenTahmin)) {
            setGeribildirim('Lütfen geçerli bir sayı girin.');
        } else {
            setTahminSayac(tahminSayac + 1);

            if (parsEdilenTahmin === sayı) {
                setGeribildirim('Doğru tahmin!. Tebrikler!');
                setPuan(puan + 5);
            } else if (parsEdilenTahmin > sayı) {
                setGeribildirim('Tahmininizi azaltın!');
            } else {
                setGeribildirim('Tahmininizi arttırın!');
            }



            setTahmin(''); // Gönderimden sonra giriş alanını temizle
        }
    }

    function oyunuSıfırla() {
        setSayı(generateRandomNumber(mod));
        setTahmin('');
        setGeribildirim('');
        setPuan(0);
        setTahminSayac(0);
    }

    return (
        <div className="startBody">
            <h1>....OYUNA HOSGELDİNİZ....</h1>
            <p>{geribildirim}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    {mod === 'kolay' ? '1 ile 10' : '1 ile 100'} arasında bir sayı tahmin edin:
                    <input
                        type="number"
                        min="1"
                        max={mod === 'kolay' ? '10' : '100'}
                        placeholder="Tahmininizi girin"
                        value={tahmin}
                        onChange={(event) => setTahmin(event.target.value)}
                    />
                </label>
                <button type="submit">Tahmin Gönder</button>
            </form>
            <div id="score-frame">
                <p id="score">Puan: {puan}</p>
            </div>
            <button onClick={oyunuSıfırla}>Oyunu Sıfırla</button>
            <button onClick={onGeriDon}>Geri Dön</button>
        </div>
    );
}

export default OyunComponent;
