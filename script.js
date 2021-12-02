function hideBodyBackground(){
    var body = document.getElementsByClassName('body')[0];
    body.classList.remove('no-background');
}

function hideNoticeBackground() {
    var notice = document.getElementsByClassName('notice')[0];
    var update = document.getElementsByClassName('update')[0];
    notice.classList.remove('no-background');
    update.style.border = "thick solid red";
}