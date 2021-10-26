function visible() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('C').classList.add('changeColorContact');
        document.getElementById('C').classList.replace('colorBorderContact', 'changeColorContact')
        document.getElementById('formulaire').classList.add('showForm');
        document.getElementById('formulaire').classList.replace('hideForm', 'showForm')
    } else {
        document.getElementById('C').classList.replace('changeColorContact', 'colorBorderContact')
        document.getElementById('formulaire').classList.replace('showForm', 'hideForm');
    }
}



window.onscroll = function() {
    visible();

};