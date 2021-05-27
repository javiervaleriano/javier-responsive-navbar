const toggleBtn = document.getElementById('btn');
const navLinks = document.querySelector('.links');
const toggleIcon = document.querySelector('.fa-bars');

toggleBtn.addEventListener('click', function (event) {
    let linksClass = navLinks.classList;
    linksClass.toggle('show-links');
    
    if (linksClass.contains('show-links')) {
        toggleIcon.style.color = '#1014a8';
        toggleIcon.style.transform = 'rotate(90deg)';
    } else {
        toggleIcon.style.color = '#000';
        toggleIcon.style.transform = 'rotate(0deg)';
    }
});