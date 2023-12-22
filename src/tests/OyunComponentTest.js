import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Jest-DOM eklentisi

import OyunComponent from './OyunComponent';

describe('OyunComponent Tests', () => {
    test('Component doğru bir şekilde render edilmelidir', () => {
        const { getByText, getByLabelText } = render(<OyunComponent mod="kolay" onGeriDon={() => {}} />);

        expect(getByText('Haydi Başlayalım!')).toBeInTheDocument();
        expect(getByLabelText('1 ile 10 arasında bir sayı tahmin edin:')).toBeInTheDocument();
        expect(getByText('Tahmin Gönder')).toBeInTheDocument();
    });

    test('Tahmin girişleri doğru bir şekilde işlenmelidir', () => {
        const { getByLabelText, getByText } = render(<OyunComponent mod="kolay" onGeriDon={() => {}} />);
        const tahminInput = getByLabelText('1 ile 10 arasında bir sayı tahmin edin:');

        // Geçerli bir tahmin gönder
        fireEvent.change(tahminInput, { target: { value: '5' } });
        fireEvent.click(getByText('Tahmin Gönder'));
        expect(getByText('Tahmininizi arttırın!')).toBeInTheDocument();

        // Geçersiz bir tahmin gönder (harf)
        fireEvent.change(tahminInput, { target: { value: 'abc' } });
        fireEvent.click(getByText('Tahmin Gönder'));
        expect(getByText('Lütfen geçerli bir sayı girin.')).toBeInTheDocument();
    });

    test('Scor butonuna tıklandığında skorlar görüntülenmelidir', () => {
        const { getByText } = render(<OyunComponent mod="kolay" onGeriDon={() => {}} />);

        // Oyunu başlat
        fireEvent.click(getByText('Tahmin Gönder'));
        fireEvent.click(getByText('Tahmin Gönder'));
        fireEvent.click(getByText('Tahmin Gönder'));
        fireEvent.click(getByText('Tahmin Gönder'));
        fireEvent.click(getByText('Tahmin Gönder'));

        // Scor butonuna tıkla
        fireEvent.click(getByText('Scor'));
        expect(window.alert).toHaveBeenCalledWith('Oynanan Oyun Skorları: 0');
    });
});
