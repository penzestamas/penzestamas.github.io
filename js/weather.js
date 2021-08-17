let temperature = {
    celsius0: 20,
    celsius1: 30,
    celsius2: 0,
    celsius3: 10,
    celsius4: 15,
    celsius5: 17,
    celsius6: 3,
    fahrenheit: celsius => celsius * 1.8 + 32
};

function printWeather() {
    let day = document.querySelector('select#day');
    let temperatureOutput = document.querySelector('div.weather');
    let temperatureType = document.querySelectorAll('input[name="teperature"]');
    temperatureOutput.innerHTML = `<p>
        ${temperature[`celsius${day.value}`]}&deg;C
        ${temperature.fahrenheit(temperature[`celsius${day.value}`])}&deg;K
        ${printDailyOffer(temperature[`celsius${day.value}`])}
    </p>`;
    
}

function printDailyOffer(dailyTemperature) {
    let temperatureLimits = [0, 15, 20, 25, 50];
    let offers = ['forró csoki', 'meleg tea', 'finom süti', 'fagyi', 'jéghideg limonádé'];
    for (let i = 0; i < temperatureLimits.length; i++) {
        if (dailyTemperature <= temperatureLimits[i]) {
            return offers[i];
        }
    }

    // if (dailyTemperature < temperatureLimits[0]){
    //     return offers[0];
    // } else if (dailyTemperature < temperatureLimits[1]) {
    //     return offers[1];
    // } else if (dailyTemperature < temperatureLimits[2]) {
    //     return offers[2];
    // } else if (dailyTemperature < temperatureLimits[3]) {
    //     return offers[3];
    // } else {
    //     return offers[4];
    // }
}


function calculateMaxTemperature() {
    let maxTemperature = temperature.celsius0;
    for (let celsius in temperature) {
        if (typeof(temperature[celsius]) == 'function') {
            continue;
        }
        if (temperature[celsius] > maxTemperature) {
            maxTemperature = temperature[celsius];
        }
    }
    return maxTemperature;
}

function printMaxTemperature() {
    let maxTemperatureOutput = document.querySelector('div.temperature-max');
    let maxTemperatureCelsius = calculateMaxTemperature();
    let maxTemperatureKelvin = temperature.fahrenheit(maxTemperatureCelsius);
    maxTemperatureOutput.innerHTML = `Maximum temperature: ${maxTemperatureCelsius}&deg;C ${maxTemperatureKelvin}&deg;K`;
}

function calculateMinTemperature() {
    let minTemperature = temperature.celsius0;
    for (let celsius in temperature) {
        if (typeof(temperature[celsius]) == 'function') {
            continue;
        }
        if (temperature[celsius] < minTemperature) {
            minTemperature = temperature[celsius];
        }
    }
    return minTemperature;
}

function printMinTemperature() {
    let minTemperatureOutput = document.querySelector('div.temperature-min');
    let minTemperatureCelsius = calculateMinTemperature();
    let minTemperatureKelvin = temperature.fahrenheit(minTemperatureCelsius);
    minTemperatureOutput.innerHTML = `Minimum temperature: ${minTemperatureCelsius}&deg;C ${minTemperatureKelvin}&deg;K`;
}

function calculateAverageTemperature() {
    let sumOfTemperatures = 0;
    for (let celsius in temperature) {
        if (typeof(temperature[celsius]) == 'function') {
            continue;
        }
        sumOfTemperatures += temperature[celsius];
    }
    let averageTemperature = parseInt(sumOfTemperatures / Object.keys(temperature).length);
    return averageTemperature;
}

function printAverageTemperature() {
    let averageTemperatureOutput = document.querySelector('div.temperature-avg');
    let averageTemperatureCelsius = calculateAverageTemperature();
    let averageTemperatureKelvin = temperature.fahrenheit(averageTemperatureCelsius);
    averageTemperatureOutput.innerHTML = `Average temperature: ${averageTemperatureCelsius}&deg;C ${averageTemperatureKelvin}&deg;K`;
}

printMaxTemperature();
printMinTemperature();
printAverageTemperature();