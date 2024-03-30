import { useState, useRef } from "react"
import arrayShuffle from 'array-shuffle'

function Picker() {
    const [number, setNumber] = useState(0);
    const [hoodieImage, setHoodieImage] = useState(0);
    const [borderColor, setBorderColor] = useState('#F5ECDC');
    const buttonRef = useRef();
    let images = [];

    document.body.style.backgroundImage = 'url("backgrounds/BackgroundPicker.jpg")';

    function deactivateButton() {
        buttonRef.current.style.cursor = 'not-allowed';
        buttonRef.current.style.filter = 'grayscale(100%)';
    }

    function activateButton() {
        buttonRef.current.style.cursor = '';
        buttonRef.current.style.filter = '';
    }

    function generateNumber() {
        const oldNumber = number;

        let newNumber = Math.floor((Math.random() * 7) + 1);

        setNumber(newNumber);

        for (let i = 1; i <= 7; i++) {
            if (oldNumber === 0 && i === 7) {
                const randomIndex = Math.floor(Math.random() * images.length);
                images.splice(randomIndex, 1);
            }

            if (i !== newNumber && i !== oldNumber) {
                images.push(i);
            }
        }

        images = arrayShuffle(images);

        let delay = 500;
        images.forEach((image, index) => {
            setTimeout(() => {
                if (index !== images.length - 1) {
                    setHoodieImage(image);
                    setBorderColor('#F5ECDC');
                    deactivateButton();
                } else {
                    setHoodieImage(newNumber);
                    setBorderColor('green');
                    activateButton();
                }
            }, delay);
            delay += 500;
        });
    }

    function end() {
        window.location.href = '/start';
    }

    return (
        <div className="picker">
            <img src={`hoodies/${[hoodieImage]}.jpg`} alt={`Hoodie no. ${[hoodieImage]}.`} style={{ borderColor: borderColor }} />
            <button onClick={generateNumber} ref={buttonRef}>CHOOSE RANDOM COLOR</button>
            <button onClick={end}>BACK TO MAIN PAGE</button>
        </div>
    )
}

export default Picker