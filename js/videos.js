document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery-container');

    fetch('videos/list_videos.php')
        .then(response => response.json())
        .then(videos => {
            videos.forEach(video => {
                const videoElement = document.createElement('video');
                videoElement.width = 320;
                videoElement.height = 240;
                videoElement.controls = true;
                videoElement.oncontextmenu = () => false;

                const sourceElement = document.createElement('source');
                sourceElement.src = `videos/${video}`;
                sourceElement.type = 'video/mp4';

                videoElement.appendChild(sourceElement);
                galleryContainer.appendChild(videoElement);
            });
        })
        .catch(error => console.error('Error loading videos:', error));
});
