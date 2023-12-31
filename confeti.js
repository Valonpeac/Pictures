const button = document.querySelector('#button');
const canvas = document.querySelector('#fun');

const jsConfetti = new JSConfetti()

button.addEventListener('click', () => {
    jsConfetti.addConfetti({

    }).then(() => console.log('It end'))
})