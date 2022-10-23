var dropzone = null;

Dropzone.autoDiscover = false;
dropzone = $("#myAwesomeDropzone").dropzone({
    url: "/",
    autoProcessQueue: false,
    createImageThumbnails: true,
    addRemoveLinks: true
});

function submitForm() {
    dropzone.processQueue();
    return false;
}

$(document).ready(function () {
    function changeSize() {
        $(".content-page").height(($(".footer").height() + $("#main-content").height()) + "px")
    }

    $(window).on('resize', function () {
        changeSize()
    });
    changeSize()
    var observer = new MutationObserver(function () {
        changeSize()
    });
    observer.observe($(".content-page")[0], {characterData: true, childList: true, attributes: true, subtree: true})
});
$(document).ready(function () {
    $(document).on('click', '.like-button', function () {
        $(this).children("i").toggleClass("text-danger")
        // ajax send like
    });
    $(document).on('click', '.post-content', function () {
        $(this).toggleClass("expended")
        if ($(this).hasClass("expended")) {
            $(this).children("iframe").prop("src", function () {
                return $(this).data("src");
            })
        }
    })
})
