//Object Array to hold quotes
var quotes = [
	{
        quote: "May the Force be with you.",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0YJkgMYacSFGPDoAh2LJRmyFJM9_4ZgHWw&s')" // Star Wars arka planı
    },
    {
        quote: "I'm going to make him an offer he can't refuse.",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PGeErjJQdgooH0e7wCAWN8fW2ssi9RffXQ&s')" // The Godfather arka planı
    },
    {
        quote: "Here's looking at you, kid.",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrDoRpf7rJ1qaoHCSuZ1EWlv2-kCHIdE5iQ&s')" // Casablanca arka planı
    },
    {
        quote: "You can't handle the truth!",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs88ElYHc8q29DaqDPUaBrSUAb0v4oevGCHA&s')" // A Few Good Men arka planı
    },
    {
        quote: "Why so serious?",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2lNwrUqRjTDRD85uTO9pEA7L9IQkCyssVw&s')" // The Dark Knight arka planı
    },
    {
        quote: "I'll be back.",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7Z3EGKxvcgb8-vIMdATlWXqMQO_lnWI9aQ&s')" // The Terminator arka planı
    },
    {
        quote: "To infinity and beyond!",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgS7hb7H0BCir2eVpcOOnLzWGQr4_2FtedgQ&s')" // Toy Story arka planı
    },
    {
        quote: "Houston, we have a problem.",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWgE7v-lWMhR3sxxHKTG7o0CNZk9dtEapEw&s')" // Apollo 13 arka planı
    },
    {
        quote: "Keep your friends close, but your enemies closer.",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhGj7FtiqXK2wQUyvKeX0libo0p0yp6N14g&s')" // The Godfather Part II arka planı
    },
    {
        quote: "E.T. phone home.",
        background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zClWkuccElQE_mf69T9zjjENid5mzdMLhQ&shttps://example.com/et.jpg')" // E.T. arka planı
    }
];
//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	



//Function to call the getRandomQuote function and stores the returned quote object in a variable
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p>`;
		quoteContainer.innerHTML = quoteString; 

					document.body.style.background = quotes.background;
					
}					

//Quote automatically refreshes every 15 seconds
window.setInterval(function(){
printQuote ();
}, 15000);

//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);

