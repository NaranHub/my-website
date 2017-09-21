// Global variables
var cacheNavLinks, cacheSections, cacheSectionToLink;

function initScroll() { 
    cacheNavLinks = $(".nb-menu-link");
    cacheSections = $($(".anchor").get().reverse());      
    cacheSections.each(function() {
        var id = $(this).attr('id');
        // cacheSectionToLink[id] = $('.nb-menu-link[href=#' + id + ']');
    }); 
}