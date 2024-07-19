document.addEventListener('DOMContentLoaded', () => {
    const rotator = document.querySelectorAll('.rotator__case')
    let currentIndex = 0

    function rotate() {
        rotator[currentIndex].classList.remove('rotator__case_active');

        currentIndex = (currentIndex + 1) % rotator.length;

        rotator[currentIndex].classList.add('rotator__case_active');

    }

    setInterval(() => {
        console.log(rotate());
    }, 1000)
})
