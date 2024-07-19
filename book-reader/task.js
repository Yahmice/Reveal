document.addEventListener('DOMContentLoaded', () => {
    const fs = document.querySelectorAll('.font-size');
    const book = document.querySelector('.book');

    fs.forEach(element => {
        element.addEventListener('click', (event) => {
            fs.forEach(el => el.classList.remove('font-size_active'));
            
            element.classList.add('font-size_active');
            
            element.classList.remove('font-size_small', 'font-size_big', 'font-size_medium')
         
            const size = element.getAttribute('data-size');
            if (size) {
                book.classList.add(`book_fs-${size}`);
            }
            event.preventDefault()
        });
    }); 
})
