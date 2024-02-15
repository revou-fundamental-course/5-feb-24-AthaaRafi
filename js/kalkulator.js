const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const cara_kalkulasi = document.getElementById("cara_kalkulasi");
const konversiBtn = document.getElementById("konversi-btn");
const resetBtn = document.getElementById("reset-btn"); 
const pilihan_suhu = document.getElementById("pilihan_suhu");

window.addEventListener("load", () => {
    celcius.value = "";
    fahrenheit.value = ""; 
    cara_kalkulasi.textContent = ""; 
});

konversiBtn.addEventListener("click", (e) => {
    e.preventDefault();
    konversiSuhu();
});

resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    resetInputs();
});

pilihan_suhu.addEventListener("change", (e) => { // Mengubah event listener menjadi "change"
    e.preventDefault();
    resetInputs();
});

function konversiSuhu() {
    const inputValue = parseFloat(celcius.value);
    const suhuType = pilihan_suhu.value;
    if ( (inputValue)) {
        if (suhuType === "Fahrenheit") {
            const celciusToFahrenheit = (inputValue * 9/5) + 32;
            fahrenheit.value = celciusToFahrenheit.toFixed(2);
            cara_kalkulasi.textContent = `Rumus: (${inputValue} × 9/5) + 32 = ${celciusToFahrenheit.toFixed(2)}°F`;
        } else if (suhuType === "Celcius") {
            const fahrenheitToCelcius = (inputValue - 32) * (5/9);
            fahrenheit.value = fahrenheitToCelcius.toFixed(2);
            cara_kalkulasi.textContent = `Rumus: (${inputValue} - 32) × 5/9 = ${fahrenheitToCelcius.toFixed(2)}°C`;
        }
    } else {
        alert("Masukkan nilai suhu yang valid.");
    }
}

function resetInputs() {
    celcius.value = ""; 
    fahrenheit.value = ""; 
    cara_kalkulasi.textContent = ""; 
}
