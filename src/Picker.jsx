import Randomizer from "./Randomizer"

function Picker() {
    function end() {
        window.location.href = '/header';
    }

    document.querySelector('body').style.backgroundImage = 'url("BackgroundPicker.jpg")';

    return (
        <div className="picker">
            <img src="1.jpg" alt="" />
            <button>CHOOSE RANDOM COLOR</button>
            <button onClick={end}>BACK TO MAIN PAGE</button>
        </div>
    )
}

export default Picker