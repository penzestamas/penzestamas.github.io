function printWeather() {
    let temperature = [20, 30, 0, 10, 15, 17, 3];
    let day = document.querySelector('select#day');
    let temperatureOutput = document.querySelector('div.weather');
    temperatureOutput.innerHTML = `<p>${temperature[day.value]}°C<br>${printDailyOffer(temperature[day.value])}</p>`;
}

function printDailyOffer(temperature) {
    let temperatureLimits = [0, 15, 20, 25];
    let offers = ['forró csoki', 'meleg tea', 'finom süti', 'fagyi', 'jéghideg limonádé'];
    if (temperature < temperatureLimits[0]){
        return offers[0];
    } else if (temperature < temperatureLimits[1]) {
        return offers[1];
    } else if (temperature < temperatureLimits[2]) {
        return offers[2];
    } else if (temperature < temperatureLimits[3]) {
        return offers[3];
    } else {
        return offers[4];
    }
}