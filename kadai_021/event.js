const button= document.getElementById('btn');

const textDisplay= document.getElementById('text');

button.addEventListener('click', function() {

setTimeout(function() {
    textDisplay.textContent= 'ボタンをクリックしました';
    }, 2000);
});