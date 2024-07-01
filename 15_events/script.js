let div = document.querySelector('div');
div.onmouseover = () => {
    console.log('Inside div')
}

div.onmouseleave = (e) => {
    console.log(e)
    console.log(e.target, e.type, e.clientX, e.clientY)
    console.log('outside div')
}

let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
    console.log('button was clicked - handler1');
});
btn2.addEventListener('click', () => {
    console.log('button was clicked - handler2');
});
const handler3 = () => {
    console.log('button was clicked - handler3');
}
btn2.addEventListener('click', handler3);
btn2.addEventListener('click', () => {
    console.log('button was clicked - handler4');
});

btn2.removeEventListener('click', handler3);

let modebtn = document.querySelector('#mode');
let currMode = 'light';

let body = document.querySelector('body');
modebtn.addEventListener("click", () => {
    if (currMode === 'light'){
        currMode = 'dark';
        body.classList.add('dark');
    } else {
        currMode = 'light';
        body.classList.add('light')="white";
    }
    console.log(currMode);
})