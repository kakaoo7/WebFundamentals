let number = 0;


document.getElementById("reverse").addEventListener('click', () => {
    window.alert("click the button below");
})

document.getElementById("increment").addEventListener('click', (event) => {
    event.currentTarget.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    console.log(number);
    number++
});