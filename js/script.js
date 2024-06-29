let panelsElement = document.querySelectorAll('.panel');

let removeActiveClasses = () => {
    panelsElement.forEach(panel => {
        panel.classList.remove('active-panel');
    });
};

panelsElement.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        removeActiveClasses();
        panel.classList.add('active-panel');
    });
    
    panel.addEventListener('mouseleave', () => {
        panel.classList.remove('active-panel');
    });
});