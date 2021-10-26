//affiche services
function visible() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('services').classList.add('show');
        document.getElementById('services').classList.replace('hide', 'show');
        document.getElementById('S').classList.add('changeColorService');
        document.getElementById('S').classList.replace('colorBorderService', 'changeColorService')
    } else {
        document.getElementById('services').classList.replace('show', 'hide');
        document.getElementById('S').classList.replace('changeColorService', 'colorBorderService')
    }
}

window.onscroll = function() {
    visible()
};