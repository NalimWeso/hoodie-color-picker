import { useState, useEffect } from "react"
import arrayShuffle from 'array-shuffle'

function Picker() {
    const [number, setNumber] = useState(0);
    const [hoodieImage, setHoodieImage] = useState(0);
    const [borderColor, setBorderColor] = useState('#F5ECDC');
    let images = [];

    useEffect(() => {
        document.body.style.backgroundImage = 'url("backgrounds/BackgroundPicker.jpg")';

        return () => {
            document.body.style.backgroundImage = 'url(/backgrounds/BackgroundStart.jpg)';
        };
    }, []);

    function GenerateNumber() {
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

                    // document.querySelector('.picker img button:first-child').style.cursor = 'not-allowed';
                    // document.querySelector('.picker img button:first-child').style.filter = 'grayscale(100%)';
                } else {
                    setHoodieImage(newNumber);
                    setBorderColor('green');
                }
            }, delay);
            delay += 500;
        });
    }

    function End() {
        window.location.href = '/start';
    }

    return (
        <div className="picker">
            <img src={`hoodies/${[hoodieImage]}.jpg`} alt={`Hoodie no. ${[hoodieImage]}.`} style={{ borderColor: borderColor }} />
            <button onClick={GenerateNumber}>CHOOSE RANDOM COLOR</button>
            <button onClick={End}>BACK TO MAIN PAGE</button>
        </div>
    )
}

export default Picker