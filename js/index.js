function visible() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('A').classList.add('changeColorAccueil');
        document.getElementById('A').classList.replace('colorBorderAccueil', 'changeColorAccueil')
        document.getElementById('pres').classList.add('showPres');
        document.getElementById('pres').classList.replace('hidePres', 'showPres')
    } else {

        document.getElementById('A').classList.replace('changeColorAccueil', 'colorBorderAccueil')

        document.getElementById('pres').classList.replace('showPres', 'hidePres');
    }
}



window.onscroll = function() {
    visible();

};