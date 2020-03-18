
const getQuote = async() => {
    const response = await fetch("https://api.kanye.rest/");
    const data = await response.json();
    return data.quote;
};

getQuote().then((response) => {
    document.getElementById("quote").innerHTML = response;
}).catch((error) => {
    console.error(error);
});
