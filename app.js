const images = document.querySelectorAll(".card-image");
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('#modal-img');
const closeModal = document.querySelector(".close");


images.forEach(img => {
    img.addEventListener('click', (e) =>{
        modal.style.display = "block";
        modalImage.src = e.target.src;
    });
});

closeModal.addEventListener('click', () =>{
    modal.style.display = "none";
});