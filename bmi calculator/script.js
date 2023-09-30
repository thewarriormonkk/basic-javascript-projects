const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the result
        results.innerHTML = `<span>bmi: ${bmi}<br> </span>`;
        if (bmi < 18.6) {
            results.innerHTML += 'under weight';
        }
        else if (bmi >= 18.6 && bmi <= 24.6) {
            results.innerHTML += 'normal weight';
        } else {
            results.innerHTML += 'over weight';
        }
    }
});
