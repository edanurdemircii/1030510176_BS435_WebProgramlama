import React, { useState,useEffect} from 'react';
import   "./start.css";

function OyunComponent() {
    const [sayı, setSayı] = useState(Math.floor(Math.random() * 10) + 1);
    const [tahmin, setTahmin] = useState('');
    const [geribildirim, setGeribildirim] = useState('');
    const [puan, setPuan] = useState(0);

    useEffect(() => {
        if (puan === 50) {
            oyunuSıfırla();
        }
    }, [puan]);

    function handleSubmit(event) {
        event.preventDefault();
        const parsEdilenTahmin = parseInt(tahmin);

        if (isNaN(parsEdilenTahmin)) {
            setGeribildirim('Lütfen geçerli bir sayı girin.');
        } else if (parsEdilenTahmin === sayı) {
            setGeribildirim('Doğru tahmin. Tebrikler!');
            setPuan(puan + 5); // Her doğru tahminde 5 puan ekle
        } else if (parsEdilenTahmin > sayı) {
            setGeribildirim('Tahmininizi azaltın.');
        } else {
            setGeribildirim('Tahmininizi arttırın.');
        }
        setTahmin(''); // Gönderimden sonra giriş alanını temizle
    }

    function oyunuSıfırla() {
        setSayı(Math.floor(Math.random() * 10) + 1);
        setTahmin('');
        setGeribildirim('');
        setPuan(0);
    }

    return (
        <div className="startBody">
            <h1>OYUNA HOŞGELDİNİZ</h1>
            <p>{geribildirim}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    1 ile 10 arasında bir sayı tahmin edin:
                    <input
                        type="number"
                        min="1"
                        max="100"
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
        </div>
    );
}
export default OyunComponent;
