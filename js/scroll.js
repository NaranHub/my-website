// Based on https://stackoverflow.com/questions/32395988/highlight-menu-item-when-scrolling-down-to-section

// Todo: 
//  Call highlightNavigationLink when deploying menu
//  Rename file to scrollHandler

class ScrollHandler {

    constructor () {
        // Offset to use in order to highlight the section before the scroll actually arrives to the section
        this.SECTION_OFFSET = 100;

        this._cacheNavLinks = document.querySelectorAll(".nb-menu-link");
        this._cacheSections = document.querySelectorAll(".anchor");
        this._cacheSectionToLink = {};
        this._cacheSections.forEach(section => {
            let id = section.id;
            this._cacheSectionToLink[id] = document.querySelector(`.nb-menu-link[href*=${id}]`);
        }); 
    }

    highlightNavigationLink() {
        // If menu items are not visible, not worth doing any processing
        // Good for performance on small displays
        if (isToggleNavCollapsed()) {
            return;
        }

        // Get the current vertical position of the scroll bar
        let scrollPosition = window.scrollY;
        // console.log(`Scroll: ${scrollPosition}`);
        
        // Highlight last link when the last section doesn't fit the entire screen
        if (scrollPosition >= document.body.clientHeight - window.innerHeight - 120) {
            this.removeAllHighlights();
            this._cacheNavLinks[this._cacheNavLinks.length-1].classList.add('nb-menu-link-current');
            return;
        }

        // Iterate the sections in reverse order
        for (let i = this._cacheSections.length-1; i >= 0; i--) {
            let currentSection = this._cacheSections[i];

            // If the user has scrolled over the top of the section  
            if (scrollPosition + this.SECTION_OFFSET >= currentSection.offsetTop) {
                // Get the corresponding navigation link
                let navigationLink = this._cacheSectionToLink[currentSection.id];

                // The section has no corresponding link (top of the page)
                if (navigationLink == null) {
                    this.removeAllHighlights();
                }
                // If the link is not active
                else if (!navigationLink.classList.contains('nb-menu-link-current')) {
                    this.removeAllHighlights();
                    // Add .active class to the current link
                    navigationLink.classList.add('nb-menu-link-current');
                }
                // Section found, exit the loop
                return;
            }
        }
    }

    // Remove .nb-menu-link-current class from all the links
    removeAllHighlights() {
        this._cacheNavLinks.forEach((eachLink) => eachLink.classList.remove('nb-menu-link-current'));
    }

}