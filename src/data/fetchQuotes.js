export default function fetchQuotes()  {
    const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd47e2c0a26msha5142819817b97bp1bce93jsne76fd5e28006',
            'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
        }
    };

    try {
        return fetch(url, options);
    } catch (error) {
        console.error(error);
        return error;
    }
}