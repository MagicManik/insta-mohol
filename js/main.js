const btn = document.getElementsByClassName('.read-more-button');
const text = document.getElementsByClassName('.read-more-text');
const cardHolder = document.querySelector('.cards');

cardHolder.addEventListener('click', e => {
    const current = e.target;
    const isReadMoreBtn = current.className.includes('read-more-button');
    if (!isReadMoreBtn)
        return;
    const currentText = e.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text-open');
    current.textContent = current.textContent.includes('Read More...') ? 'Read More' : 'Read More...';

});