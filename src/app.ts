const h1 = document.getElementById('text');

function changeText(text) {
    return text.split('').reverse().join('');
}

h1.innerHTML = changeText(h1.innerHTML);