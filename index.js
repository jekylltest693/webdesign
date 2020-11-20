//tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
   tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active');
    
        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');    
            } else {
                box.classList.add('is-hidden');
            }
        });
   }) 
});


//modal
var button = document.getElementById('button');
var button2 = document.getElementById('button2');
var modal = document.getElementById('page-modal');
var close = document.getElementsByClassName('modal-close')[0];


button.onclick = function() {
    modal.style.display = 'block';
}

close.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.className == 'modal-background') {
        modal.style.display = 'none';
    }
}

