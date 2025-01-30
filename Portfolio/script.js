const loadingText = document.getElementById("loading-text");

const greetings = [
  "Hello", 
  "नमस्ते", 
  "Hola",  // Spanish
  "Bonjour", // French
  "Hallo", // German
  "Ciao", // Italian
  "Olá", // Portuguese
  "你好", // Chinese
  "こんにちは", // Japanese
  "안녕하세요", // Korean
  "Привет", // Russian
];

let index = 0;

function cycleGreetings() {
  loadingText.textContent = greetings[index];
  index = (index + 1) % greetings.length;
}

setInterval(cycleGreetings, 100); const intervalDuration = 100; // Time for each greeting (1 second)
const totalDuration = greetings.length * intervalDuration; // Total time for all greetings

const interval = setInterval(cycleGreetings, intervalDuration);

setTimeout(() => {
  clearInterval(interval); // Stop cycling
  window.location.href = "index.html"; // Redirect to home page
}, totalDuration);

//wellcome msg
const date = new Date();
const hr = date.getHours();
let greeting = "";
if(hr<12){
  greeting = "Good Morning";
}else if(hr<18){
  greeting = "Good Afternoon";
}else{
  greeting ="Good Night";
}
greetMsg = document.getElementById("greetingMsg");
greetMsg.textContent = greeting;