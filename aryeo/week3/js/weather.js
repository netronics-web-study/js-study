const API_KEY = "ecbc62e0147d8da2f41aaad491d3bc95";

function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// getCurrentPosition(<좌표를 불러오는 것을 성공했을 때의 함수>, <좌표를 불러오는 것을 실패했을 때의 함수>)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 위치 좌표를 제공.

// fetch() : 실제로 URL 에 갈 필요 없이 JS 가 대신 URL 을 부르는 함수
// fetch() => promise : 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것
