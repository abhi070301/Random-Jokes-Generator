const btnEl = document.querySelector("#btn");
const jokeEl = document.getElementById("joke");
const apiKey = "2j6F4rUWFblA0R1UYjZpqduOj1PBrJL5GgPRoU37";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..";

    const response = await fetch(apiUrl, options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;

    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke..";
  } catch (error) {
    jokeEl.innerText = "An Error happened, try again letter";
    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke..";
  }
}
btnEl.addEventListener("click", getJoke);
