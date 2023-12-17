et player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId:"https://www.youtube.com/embed/izGwDsrQ1eQ?si=-CZvyT0wEKoyHX_O" title="YouTube video player"
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
