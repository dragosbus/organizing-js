const Header = (function() {
    
    let modal;
    
    const headerHandler = e => {
        e.preventDefault();
        e.stopPropagation();

        let url = e.target.textContent;
        modal.innerHTML = pages[url];
        modal.style.display = 'block';
        modal.classList.add('fade-in');
        setTimeout(() => {
            select('#page').style.display = 'none'; 
        },550);
        exitModal(select('.exit'));
    };


    const exitModal = btn => {
        click(btn, () => {
            modal.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.remove('fade-in');
                modal.classList.remove('fade-out');
            }, 550);
            select('#page').style.display = 'block';
        });
    };
    
    const init = () => {
        modal = select('[rel="js-modal"]');
        const controls = select('[rel="js-controls"]');
        click(controls, headerHandler);
    };
    
    return {init};
    
}());