document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery-container');

    fetch('images/list_images.php')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `images/${image}`;
                imgElement.alt = image;
                imgElement.className = 'gallery-item';
                imgElement.style.pointerEvents = 'none'; // لتعطيل النقر على الصور

                galleryContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error loading images:', error));
});
