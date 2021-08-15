let temperature = [20, 30, 0, 10, 15, 17, 3];

function printWeather() {
    let day = document.querySelector('select#day');
    let temperatureOutput = document.querySelector('div.weather');
    temperatureOutput.innerHTML = `<p>${temperature[day.value]}°C ${printDailyOffer(temperature[day.value])}</p>`;
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
    let maxTemperature = temperature[0];
    for (let i = 0; i < temperature.length; i++) {
        if (temperature[i] > maxTemperature) {
            maxTemperature = temperature[i];
        }
    }
    return maxTemperature;
}

function printMaxTemperature() {
    let maxTemperatureOutput = document.querySelector('div.temperature-max');
    maxTemperatureOutput.innerHTML = `Maximum temperature: ${calculateMaxTemperature()}°C`;
}

function calculateMinTemperature() {
    let minTemperature = temperature[0];
    for (let i = 0; i < temperature.length; i++) {
        if (temperature[i] < minTemperature) {
            minTemperature = temperature[i];
        }
    }
    return minTemperature;
}

function printMinTemperature() {
    let minTemperatureOutput = document.querySelector('div.temperature-min');
    minTemperatureOutput.innerHTML = `Minimum temperature: ${calculateMinTemperature()}°C`;
}

function calculateAverageTemperature() {
    let sumOfTemperatures = 0;
    for (let i = 0; i < temperature.length; i++) {
        sumOfTemperatures += temperature[i]
    }
    averageTemperature = parseInt(sumOfTemperatures / temperature.length);
    return averageTemperature;
}

function printAverageTemperature() {
    let averageTemperatureOutput = document.querySelector('div.temperature-avg');
    averageTemperatureOutput.innerHTML = `Average temperature: ${calculateAverageTemperature()}°C`;
}

printMaxTemperature();
printMinTemperature();
printAverageTemperature()