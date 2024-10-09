document.addEventListener('DOMContentLoaded', function() {
    const wheelText = document.querySelector('.wheel__text');
    const wheelImg = document.querySelector('.wheel__img');
    // const rowLeft = document.querySelectorAll('.row-left');
    // const rowRight = document.querySelectorAll('.row-right');


        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            wheelText.style.transform = `translateX(-${scrollY}px)`;
            wheelImg.style.transform = `rotate(-${scrollY / 10}deg)`;

            // rowLeft.forEach((row) => row.style.transform = `translateX(-${scrollY}px)`)
            // rowRight.forEach((row) => row.style.transform = `translateX(${scrollY}px)`)
        });
});
