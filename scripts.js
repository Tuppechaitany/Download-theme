// scripts.js
$(document).ready(function() {
    $(".download-button").on("click", function() {
        var filename = $(this).closest(".file-item").data("filename");
        var link = document.createElement('a');
        link.href = "files/" + filename;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
