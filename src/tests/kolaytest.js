import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Kolay mod için doğru tahmin puan arttırır.', () => {
    render(<App />);

    // Modu "Kolay" olarak seç
    fireEvent.click(screen.getByText('Kolay Mod'));

    // Tahmin yap
    const input = screen.getByPlaceholderText('Tahmininizi girin');
    fireEvent.change(input, { target: { value: '5' } });

    // Tahmin gönder düğmesini tıkla
    fireEvent.click(screen.getByText('Tahmin Gönder'));

    // Puanın arttığını kontrol et
    const scoreElement = screen.getByText('Puan: 5');
    expect(scoreElement).toBeInTheDocument();
});

test('Geçersiz tahmin için hata mesajı gelir.', () => {
    render(<App />);

    // Modu "Kolay" olarak seç
    fireEvent.click(screen.getByText('Kolay Mod'));

    // Geçersiz bir tahmin yap (örneğin, harf gir)
    const input = screen.getByPlaceholderText('Tahmininizi girin');
    fireEvent.change(input, { target: { value: 'invalidGuess' } });

    // Tahmin gönder düğmesini tıkla
    fireEvent.click(screen.getByText('Tahmin Gönder'));

    // Hata mesajının gösterildiğini kontrol et
    const errorMessage = screen.getByText('Lütfen geçerli bir sayı girin.');
    expect(errorMessage).toBeInTheDocument();
});
