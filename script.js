const joke = document.querySelector(".joke");
const jokeBtn = document.querySelector(".btnJoke");

jokeBtn.addEventListener("click", function () {
	generateCode();
});
async function generateCode() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	const res = await fetch("https://icanhazdadjoke.com", config);

	const jokes = await res.json();

	joke.innerHTML = jokes.joke;
}
