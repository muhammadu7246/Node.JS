function changeColor() {
    const colors = ['lightblue', 'coral', 'lightgreen', '#ccc', 'mediumpurple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}