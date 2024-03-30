function Start() {
    function ClickStart() {
        window.location.href = '/picker';
    }

    return (
        <header>
            <h5><a href="https://github.com/NalimWeso" target="_blank">NALIMWESO</a> PRESENTS</h5>
            <h1>HOODIE COLOR PICKER</h1>
            <button onClick={ClickStart}>START</button>
        </header >
    )
}

export default Start