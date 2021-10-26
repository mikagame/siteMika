function visible() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('TA').classList.add('changeColorTarif');
        document.getElementById('TA').classList.replace('colorBorderTarif', 'changeColorTarif')
        document.getElementById('info').classList.add('showInfo');
        document.getElementById('info').classList.replace('hideInfo', 'showInfo')
        document.getElementById('groupe').classList.add('showInfo');
        document.getElementById('groupe').classList.replace('hideInfo', 'showInfo')
    } else {

        document.getElementById('TA').classList.replace('changeColorTarif', 'colorBorderTarif')
        document.getElementById('groupe').classList.replace('showInfo', 'hideInfo');
        document.getElementById('info').classList.replace('showInfo', 'hideInfo');
    }
}



window.onscroll = function() {
    visible();

};