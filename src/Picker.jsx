import { useState, useEffect } from "react"
import arrayShuffle from 'array-shuffle'

function Picker() {
    function end() {
        window.location.href = '/start';
    }

    document.querySelector('body').style.backgroundImage = 'url("backgrounds/BackgroundPicker.jpg")';

    const [number, setNumber] = useState(0);
    const images = [];

    function generateNumber() {
        const oldNumber = number;

        let newNumber = Math.floor((Math.random() * 7) + 1);

        while (newNumber === number) {
            newNumber = Math.floor((Math.random() * 7) + 1);
        }

        setNumber(newNumber);

        console.log('newNumber (right now on screen): ' + newNumber);
        console.log('oldNumber (before):' + oldNumber);

        for (let i = 1; i <= 7; i++) {
            if (oldNumber === 0 && i === 7) {
                const randomIndex = Math.floor(Math.random() * images.length);
                images.splice(randomIndex, 1);
            }

            if (i !== newNumber && i !== oldNumber) {
                images.push(`hoodies/${i}.jpg`);
            }
        }

        const shuffledImages = arrayShuffle(images);

        console.log(shuffledImages);
        console.log('----------------------------------------');
    }

    function showHoodie() {
        return <img src={`hoodies/${number}.jpg`} alt="" />;
    };

    return (
        <div className="picker">
            {showHoodie()}
            <button onClick={generateNumber}>CHOOSE RANDOM COLOR</button>
            <button onClick={end}>BACK TO MAIN PAGE</button>
        </div>
    )
}

export default Picker