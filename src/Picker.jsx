function Picker() {
    function end() {
        window.location.href = '/header';

    }

    document.querySelector('body').style.backgroundImage = 'url("BackgroundPicker.jpg")';
    document.querySelector('body').style.backgroundColor = 'black';

    return (
        <div className="picker">
            <img src="1.jpg" alt="" />
            <button onClick={end}>CHOOSE RANDOM COLOR</button>
            <button onClick={end}>BACK TO MAIN PAGE</button>
        </div>
    )
}

export default Picker