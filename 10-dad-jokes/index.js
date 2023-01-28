const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'daddyjokes.p.rapidapi.com'
	}
};



const joke=document.getElementsByClassName('joke')[0]
window.onload=generateajoke();
function generateajoke(){
    fetch('https://daddyjokes.p.rapidapi.com/random', options)
	.then(response => response.json())
	.then(response => joke.innerHTML=response.joke)
	.catch(err => console.error(err));
}
