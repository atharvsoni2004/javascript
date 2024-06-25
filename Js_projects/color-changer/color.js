const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector('body')
// console.log(body);
buttons.forEach(function (button_value) {
    // console.log(button_value);
    button_value.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
        e.preventDefault()
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        } if (e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        } if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        } if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
    })
})