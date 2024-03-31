import { useState, useRef } from "react"
import arrayShuffle from 'array-shuffle'

function Picker() {
    const [number, setNumber] = useState(0);
    const [hoodieImage, setHoodieImage] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const buttonRef = useRef();
    const imgRef = useRef();
    let images = [];

    document.body.style.backgroundImage = 'url("backgrounds/BackgroundPicker.jpg")';

    function changeBorderColor(borderColor) {
        imgRef.current.style.borderColor = borderColor;
    }

    function toggleButton(cursor, filter) {
        buttonRef.current.style.cursor = cursor;
        buttonRef.current.style.filter = filter;
    }

    function generateNumber() {
        setButtonDisabled(true);
        toggleButton('not-allowed', 'grayscale(100%)');

        const oldNumber = number;

        const newNumber = Math.floor((Math.random() * 7) + 1);

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

        const delayTime = 200;
        let delay = delayTime;
        images.forEach((image, index) => {
            setTimeout(() => {
                if (index !== images.length - 1) {
                    setHoodieImage(image);
                    changeBorderColor('#F5ECDC');
                } else {
                    setHoodieImage(newNumber);
                    changeBorderColor('#009200');
                    setButtonDisabled(false);
                    toggleButton('', '');
                }
            }, delay);
            delay += delayTime;
        });
    }

    function end() {
        window.location.href = '/start';
    }

    return (
        <div className="picker">
            <img src={`hoodies/${hoodieImage}.jpg`} alt={`Hoodie no. ${hoodieImage}.`} ref={imgRef} />
            <button onClick={generateNumber} ref={buttonRef} disabled={buttonDisabled}>CHOOSE RANDOM COLOR</button>
            <button onClick={end}>BACK TO MAIN PAGE</button>
        </div>
    )
}

export default Picker