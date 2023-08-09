// Change the background color by generating random rbn color by clicking a button
//Step1: Create onload handler to load it after html loads

window.onload = () => {
  main();
};

//Main function

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  btn.addEventListener("click", function () {
    const bgColor = generateRGBcolor();
    root.style.backgroundColor = bgColor;
  });
}

//step 2: Random color generator function

function generateRGBcolor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  //template string
  return `rgb(${red},${green},${blue})`;
}

//step 3: collect all necessary references
//step 4: handle the click event
