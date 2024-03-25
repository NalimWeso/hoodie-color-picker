function Picker() {
    function end() {
        window.location.href = '/header';

    }

    document.querySelector('body').style.backgroundImage = 'url("1.jpg")';
    document.querySelector('body').style.backgroundColor = 'black';

    return (
        <div className="picker">
            <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, velit! Exercitationem ullam officia, illum impedit odio ratione eum, iste dolore eius, sit deserunt. Sint cumque iure quasi quas veritatis vero.</h1 >
            <button onClick={end}>END</button>
        </div>
    )
}

export default Picker