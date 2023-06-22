//your JS code here. If required.
function updateOutput() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Get the HTML element with the ID "output"
const outputElement = document.getElementById("output");

// Call the function and update the element when the promise resolves
updateOutput().then((text) => {
  outputElement.innerText = text;
});
