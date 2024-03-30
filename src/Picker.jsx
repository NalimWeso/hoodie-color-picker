import { useState, useEffect } from "react"
import arrayShuffle from 'array-shuffle'

function Picker() {
    function end() {
        window.location.href = '/start';
    }

    document.querySelector('body').style.backgroundImage = 'url("backgrounds/BackgroundPicker.jpg")';

    const [number, setNumber] = useState(0);
    const [currentHoodieImage, setcurrentHoodieImage] = useState(0);
    let images = [];

    function GenerateNumber() {
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
                images.push(i);
            }
        }

        images = arrayShuffle(images);

        console.log(images);
        console.log('----------------------------------------');

        setTimeout(() => {
            setcurrentHoodieImage(images[0]);
        }, 700);

        setTimeout(() => {
            setcurrentHoodieImage(images[1]);
        }, 1400);

        setTimeout(() => {
            setcurrentHoodieImage(images[2]);
        }, 2100);

        setTimeout(() => {
            setcurrentHoodieImage(images[3]);
        }, 2800);

        setTimeout(() => {
            setcurrentHoodieImage(images[4]);
        }, 3500);

        setTimeout(() => {
            setcurrentHoodieImage(newNumber);
        }, 4200);
    }

    return (
        <div className="picker">
            <img src={`hoodies/${[currentHoodieImage]}.jpg`} alt="" />
            <button onClick={GenerateNumber}>CHOOSE RANDOM COLOR</button>
            <button onClick={end}>BACK TO MAIN PAGE</button>
        </div>
    )
}

export default Picker