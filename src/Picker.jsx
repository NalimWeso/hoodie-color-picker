import { useState } from "react"

function Picker() {
    function end() {
        window.location.href = '/start';
    }

    document.querySelector('body').style.backgroundImage = 'url("backgrounds/BackgroundPicker.jpg")';

    const [number, setNumber] = useState(0);
    const array = [];

    function generateNumber() {
        let newNumber = Math.floor((Math.random() * 7) + 1);

        while (newNumber === number) {
            newNumber = Math.floor((Math.random() * 7) + 1);
        }

        setNumber(newNumber);

        // for (let i = 1; i <= 7; i++) {
        //     // if (number === 0) {
        //     //     i++;
        //     // }

        //     if (i !== number) {
        //         array.push(i);
        //     }

        // }

        // console.log(array);
    }

    const showHoodie = () => {
        return <img src={`hoodies/${number}.jpg`} alt="" />
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