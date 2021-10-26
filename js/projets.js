//affiche projets
function visible() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('projets').classList.add('show');
        document.getElementById('projets').classList.replace('hide', 'show');
        document.getElementById('T').classList.add('changeColor');
        document.getElementById('T').classList.replace('colorBorder', 'changeColor')
    } else {
        document.getElementById('projets').classList.replace('show', 'hide');
        document.getElementById('T').classList.replace('changeColor', 'colorBorder')
    }
}



window.onscroll = function() {
    visible();

};