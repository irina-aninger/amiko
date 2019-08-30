let volumeTabs = document.querySelector('.volume_tabs');

volumeTabs.addEventListener('click', function (e) {
    let volumeTab = document.querySelectorAll('.volume_tabs li');
    volumeTab.forEach( function (item) {
        item.classList.remove('active')
    });
    e.target.classList.add('active')
});















