let player;

function onYouTubeIframeAPIReady() {
    // Array of YouTube video IDs
    const videoIds = ['izGwDsrQ1eQ', '8Uee_mcxvrw', '7QcQ6K-Q4H4'];

    // Get a random video ID from the array
    const randomVideoId = videoIds[Math.floor(Math.random() * videoIds.length)];

    // Create a new player with the random video ID
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: randomVideoId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        // Close the page when the video ends
        window.close();
    }
}
