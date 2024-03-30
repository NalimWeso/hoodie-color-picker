import { useState } from "react"

function Picker() {
    function end() {
        window.location.href = '/start';
    }

    document.querySelector('body').style.backgroundImage = 'url("BackgroundPicker.jpg")';

    const [number, setNumber] = useState(1);

    function generateNumber() {
        let newNumber = Math.floor((Math.random() * 7) + 1);

        while (newNumber === number) {
            newNumber = Math.floor((Math.random() * 7) + 1);
        }

        setNumber(newNumber);
    }

    const showHoodie = () => {
        return `${number}.jpg`
    };

    return (
        <div className="picker">
            <img src={showHoodie()} alt="" />
            <button onClick={generateNumber}>CHOOSE RANDOM COLOR</button>
            <button onClick={end}>BACK TO MAIN PAGE</button>
        </div>
    )
}

export default Picker