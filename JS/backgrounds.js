const images = ["a.jpeg", "b.jpg", "c.jpg", "d.jpeg"];

let chosenImage = images[Math.round(Math.random() * images.length - 1)];

const backgroundImg = document.createElement("img");

backgroundImg.src = `img/${chosenImage}`;

document.body.appendChild(backgroundImg);
