let nextButton = document.getElementById('passar');
    let backButton = document.getElementById('voltar');
    let mytextarea = document.getElementById('mytextarea');
    const image = document.getElementById('myimagem');

    let imagens = ['img/new-img/IMG-20231023-WA0002.jpg', 'img/new-img/IMG-20231023-WA0003.jpg', 'img/new-img/IMG-20231023-WA0004.jpg', 'img/new-img/IMG-20231023-WA0005.jpg', 'img/new-img/IMG-20231023-WA0006.jpg', 'img/new-img/IMG-20231023-WA0007.jpg', 'img/new-img/IMG-20231023-WA0008.jpg', 'img/new-img/IMG-20231023-WA0009.jpg', 'img/new-img/IMG-20231023-WA0010.jpg', 'img/new-img/Screenshot_19.png'];
    let currentImage = 0;
    image.src = imagens[currentImage];

    document.querySelector('body').addEventListener('keydown', (target) => {
        if (target.key === 'ArrowRight') handleCurrentImage('add');
        if (target.key === 'ArrowLeft') handleCurrentImage('remove');
    });

    function handleCurrentImage(action) {
        if (image) {
            if (action === 'remove' && (currentImage - 1) >= 0) {
                image.src = imagens[currentImage - 1];
                currentImage--;
                clearTextArea();
            } else if (action === 'add' && (currentImage + 1) < imagens.length) {
                image.src = imagens[currentImage + 1];
                currentImage++;
                clearTextArea();
            }
        }
    }

    function clearTextArea() {
        mytextarea.value = '';
        mytextarea.setAttribute("placeholder", "")
        
    }

    nextButton.addEventListener('click', (event) => {
        handleCurrentImage('add');
    });

    backButton.addEventListener('click', (event) => {
        handleCurrentImage('remove');
    });