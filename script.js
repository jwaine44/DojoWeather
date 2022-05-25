function hide() {
    document.querySelector(".cookiemsg").remove();
}

// My attempt at converting from Celsius to Fahrenheit
// var temperature = [24,18,27,19,21,16,26,21];
// var changeTemperature = document.querySelector(".red");

// function convertTemp() {
//     for(var i = 0; i < temperature.length; i++) {
//         temperature[i] = (temperature[i] * 1.8) + 32;
//         changeTemperature.innerText = Math.round(temperature[i]);
//     }
//     console.log(changeTemperature);
// }

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convertTemp(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}