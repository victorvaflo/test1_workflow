const h1 = document.getElementById('text')! as HTMLElement;

function changeText(text: string) {
    return text.split('').reverse().join('');
}

h1.innerHTML = changeText(h1.innerHTML);