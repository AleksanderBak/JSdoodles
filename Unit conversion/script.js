window.onload = function() {
    var x = 0
    document.getElementById("len").textContent = x + " meters = " + (x*3.2808399).toFixed(3) + " feet | " + x + " feet = " + (x/3.2808399).toFixed(3) + " meters"

    document.getElementById("vol").textContent = x + " liters = " + (x*0.264172052).toFixed(3) + " gallons | " + x + " gallons = " + (x/0.264172052).toFixed(3) + " liters"

    document.getElementById("mass").textContent = x + " kilos = " + (x*2.20462262).toFixed(3) + " pound | " + x + " pound = " + (x/2.20462262).toFixed(3) + " kilos"
    document.getElementById("input").textContent = x
};

    var selectElement = document.querySelector("#in")
selectElement.addEventListener('change', (event) => {
    var x = selectElement.value
    document.getElementById("len").textContent = x + " meters = " + (x*3.2808399).toFixed(3) + " feet | " + x + " feet = " + (x/3.2808399).toFixed(3) + " meters"

    document.getElementById("vol").textContent = x + " liters = " + (x*0.264172052).toFixed(3) + " gallons | " + x + " gallons = " + (x/0.264172052).toFixed(3) + " liters"

    document.getElementById("mass").textContent = x + " kilos = " + (x*2.20462262).toFixed(3) + " pound | " + x + " pound = " + (x/2.20462262).toFixed(3) + " kilos"
    document.getElementById("input").textContent = x
});
