import { useState, useEffect } from "react"
import arrayShuffle from 'array-shuffle'

function Picker() {
    const [number, setNumber] = useState(0);
    const [hoodieImage, setHoodieImage] = useState(0);
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
                } else {
                    setHoodieImage(newNumber);
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
            <img src={`hoodies/${[hoodieImage]}.jpg`} alt={`Hoodie no. ${[hoodieImage]}.`} />
            <button onClick={GenerateNumber}>CHOOSE RANDOM COLOR</button>
            <button onClick={End}>BACK TO MAIN PAGE</button>
        </div>
    )
}

export default Picker