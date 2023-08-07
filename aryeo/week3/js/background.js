const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // JS에서 html element 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // appendChild(): body에 html 추가
