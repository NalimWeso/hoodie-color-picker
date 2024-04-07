import { useState, useRef } from "react"
import { useNavigate } from 'react-router-dom'
import arrayShuffle from 'array-shuffle'

function Picker() {
    const [number, setNumber] = useState(0);
    const [hoodieImage, setHoodieImage] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const buttonRef = useRef();
    const imgRef = useRef();
    const navigate = useNavigate();
    let images = [];

    document.body.style.backgroundImage = 'url("backgrounds/BackgroundPicker.jpg")';

    function changeBorder(borderColor, boxShadow) {
        imgRef.current.style.borderColor = borderColor;
        imgRef.current.style.boxShadow = boxShadow;
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
                    changeBorder('#F5ECDC', '');
                } else {
                    setHoodieImage(newNumber);
                    changeBorder('#009200', '0px 0px 20px #009200');
                    setButtonDisabled(false);
                    toggleButton('', '');
                }
            }, delay);
            delay += delayTime;
        });
    }

    function clickEnd() {
        navigate('/');
    }

    return (
        <div className="picker">
            <img src={`hoodies/${hoodieImage}.webp`} alt={`Hoodie no. ${hoodieImage}.`} ref={imgRef} />
            <button onClick={generateNumber} ref={buttonRef} disabled={buttonDisabled}>CHOOSE RANDOM COLOR</button>
            <button onClick={clickEnd}>BACK TO MAIN PAGE</button>
        </div>
    )
}

export default Picker