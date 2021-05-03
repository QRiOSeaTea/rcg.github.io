document.body.addEventListener("click", genarateColor);

function genarateColor(v) {
  if (v.target.id === "hex" || v.target.id === "rgb") {
    navigator.clipboard
      .writeText(v.target.innerText)
      .then(() => v.target.classList.add("copied"))
      .then(() => {
        setTimeout(() => {
          v.target.classList.remove("copied");
        }, 2000);
      });
    return;
  }
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let hex = `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`
  let rgb = `rgb(${red},${green},${blue})`;

  if (red > 127 || green > 127 || blue > 127) {
    document.documentElement.style.setProperty("--color", "black");
  } else {
    document.documentElement.style.setProperty("--color", "white");
  }

  document.documentElement.style.setProperty("--bgcolor", rgb);
  document.querySelector("#hex").innerText = hex;
  document.querySelector("#rgb").innerText = rgb;


  function rgbToHex(color) {
    return color
      .toString(16)
      .padStart(2, 0)
      .toUpperCase();
  }
}