if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then( () => {
    console.log('Service Worker Registered')
})
})
}

function fetchJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(response => response.json())
        .then(data => {
            const jokeContainer = document.getElementById('joke-container');
            if (data.error) {
                jokeContainer.textContent = 'Sorry, there was an error fetching the joke.';
            } else {
                jokeContainer.textContent = data.joke || data.setup + ' ' + data.delivery;
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById('joke-container').textContent = 'Failed to load joke';
        });
}