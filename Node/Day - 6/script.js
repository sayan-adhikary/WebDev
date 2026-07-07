let btn = document.querySelector('button');

const func = () => {
    document.body.innerHTML += "<p>Hello World</p>";
}

btn.addEventListener('click', func);