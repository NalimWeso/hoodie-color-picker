// import { useNavigate } from "react-router-dom"

function Header() {
    function start() {
        window.location.href = '/picker';
    }

    return (
        <header>
            <h5><a href="https://github.com/NalimWeso" target="_blank">NALIMWESO</a> PRESENTS</h5>
            <h1>Hoodie Color Picker</h1>
            <button onClick={start}>START</button>
        </header >
    )
}

export default Header