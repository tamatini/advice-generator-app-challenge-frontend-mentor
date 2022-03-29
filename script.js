// Get API data
async function getAdvice(url) {
  try {
    let options, fetchAdvice, response, advice;
    options = {
      cache: "no-store"
    };
    fetchAdvice = await fetch(url, options);
    response = await fetchAdvice.json();
    advice = await response.slip;
    handleAdvice(advice)
  } catch (err) {
    if (err) return console.log(err);
  }
};

// Inject datas in html
var idElement, adviceElement;
idElement = document.getElementById('id');
adviceElement= document.getElementById('text');

async function handleAdvice(data) {
  try {
    let id, advice;
    id = await data.id;
    advice = await data.advice;
    idElement.innerHTML = `${id.toString()}`;
    adviceElement.innerHTML = "&ldquo;" + advice.toString() + "&rdquo;";
  } catch (err) {
    if (err) return console.log(err);
  }
};

// loading
let newAdvice = document.querySelector('button');
var url = "https://api.adviceslip.com/advice";

newAdvice.addEventListener("click", function (event) {
  event.preventDefault()
  getAdvice(url);
});

window.addEventListener("load", function() {
  getAdvice(url);
});