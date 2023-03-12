let changeValue = document.getElementById('changeValue');

changeValue.addEventListener('click', () => {
    let showValue = document.getElementById('showValue');
    let CelsiusValue = document.getElementById('CelsiusValue').value;
    let fahrenheit = (CelsiusValue * 9/5) + 32;
    showValue.innerText = fahrenheit + "°F";

});