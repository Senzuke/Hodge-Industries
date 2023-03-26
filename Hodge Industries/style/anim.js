$(function() {
    var link = $("nav a");
    link.on("click", function() {
        var $this = $(this);
        var page = $this.data("page");
        $("body").removeClass().addClass(page);
            link.removeClass("active");
            $this.addClass("active");
    })
});
