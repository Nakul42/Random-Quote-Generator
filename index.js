const chngButton = document.getElementById('getNewQuote');
const authorSpan = document.getElementById('quoteAuthor');
const quoteParagraph = document.getElementById('quoteText');

// Random Hex Color Generator
const randomColorGenerator = () => {
    let num = "#";
    const hexColors = "123456789abcdef";
    for (let i = 0; i < 6; i++) {
        num += hexColors[Math.floor(Math.random() * hexColors.length)];
    }
    return num;
}

// Fetching quote from API Ninja
const changeButtonFunction = async () => {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'lAWcZvHSsVQv9ADO/N223g==bshF7EBIL1ikh6Hz' // Replace with your actual API key
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Set the quote and author correctly
        quoteParagraph.textContent = data[0].quote;  // Use the 'quote' property from the API response
        authorSpan.textContent = data[0].author ? `— ${data[0].author}` : '— Unknown';  // Use the 'author' property
        
        document.documentElement.style.setProperty('--main-bg-color', randomColorGenerator());
    } catch (error) {
        quoteParagraph.textContent = "Oops! Couldn't fetch a quote.";
        console.error("Error fetching the quote:", error);
    }
}

chngButton.addEventListener('click', changeButtonFunction);
