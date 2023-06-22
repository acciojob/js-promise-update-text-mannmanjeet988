//your JS code here. If required.
function updateOutputText() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Get the HTML element with the ID "output"
const outputElement = document.getElementById("output");

// Call the function and update the element when the promise resolves
updateOutputText().then((text) => {
  outputElement.textContent = text;
});

function updateOutput(){
	return new promise ((resolve)=>{
		setTimeOut(()=>{
			resolve("Hello, world!")
		},1000);
	})
}
const outputElement = document.getElementById("output");
updateOutput().then((text)=>{
	outputElement.innerText = text;
});
	)

