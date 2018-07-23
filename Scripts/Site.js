$(document).ready(function () {

    // bootstrap tooltip islemesi ucun
    $('[data-toggle="tooltip"]').tooltip();

    $('#datepicker').datepicker({
        format: 'dd MM yyyy',
        todayHighlight: true
    });

    // Admin Menunun dinamik aktivlesmesi 
    var path = window.location.pathname;
    var menuList = [];
    $('ul.sidebar-menu>li a').each(function () {
        menuList.push($(this).attr('href'));
        if ($(this).attr('href') === path) {
            $(this).parent().addClass('active');
        }
    });

    // sekil yolunu goturmek
    $('img').click(function () {
        var imageSource = $(this).attr('src');
        copyToClipboard(imageSource);
        showMessage("Kopyalandı..", "#msgCopied");
    });

});

// adblock detecter
if (window.canRunAds === undefined) {
    // adblocker detected, show fallback
    showAdblockMessage();
    //alert('adblock-u sondur!');
}

function showAdblockMessage() {
    $('.adblock-message').show();
}

function ShowCommentEditBox(editBoxId, commentTextId, editCommentInput) {
    $('#' + editCommentInput).text($('#' + commentTextId).text().trim());
    $('#' + commentTextId).hide();
    $('#' + editBoxId).fadeIn();
};
function HideCommentEditBox(editBoxId, commentTextId) {
    $('#' + editBoxId).hide();
    $('#' + commentTextId).fadeIn();
};

paceOptions = {
    // Configuration goes here. 
    //elements: false,
    //restartOnPushState: false,
    //restartOnRequestAfter: false
    //ajax: false
}

// bufere kocurmek
function copyToClipboard(txt) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(txt).select();
    document.execCommand("copy");
    $temp.remove();
};
// mesaj gostermek
function showMessage(message, elementId) {
    setTimeout(function () { $(elementId).text(message).fadeIn(400); setTimeout(function () { $(elementId).fadeOut(400); }, 2000); }, 0);
};

//istifade olunmur
$('.post-summary').hover(function () {

    $(this).find("img.media-object").animate({
        "opacity": "0.8"
    }, 0);
});
//istifade olunmur
$('.post-summary').mouseleave(function () {

    $(this).find("img.media-object").animate({
        "opacity": "1"
    }, 0);
});

function DeleteImageOnSuccess(hideElementId) {
    $('#' + hideElementId).fadeOut(1000);
    showMessage("silindi", "#msgCopied");
};

// komment gonderilerse inputu bosalt
function ClearTextareaOnSuccessComment() {
    $('#commentText').val('');
};