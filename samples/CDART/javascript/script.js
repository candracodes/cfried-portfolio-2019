$(document).ready(function() {

    ///////////////////////////////////////
    // Initializer
    ///////////////////////////////////////

    _init();

    ///////////////////////////////////////
    // Private Functions
    ///////////////////////////////////////

    /**
     * Initializes the click handlers for the submenus
     */
    function _init() {

        $('.dropdown-submenu span').on('click', _handleSubmenuClick);
        $('body :not(.dropdown-menu):not(.dropdown-menu *)').on('click', _handleOffClick);
        $('.dropdown-submenu a').on('click', _handleSubmenuLinkClick);
    }

    /**
     * Handles a click event for submenu clicks
     * @param {event} e - The click event
     */
    function _handleSubmenuClick(e) {

        var el = $(e.currentTarget);

        // Prevent the default event or from another handler handling the event
        e.stopPropagation();
        e.preventDefault();

        // Open the clicked submenu
        var target = $(el).parents('.dropdown-submenu').find('.dropdown-menu');

        // Hide siblings and open if not already shown
        if (!$(target).hasClass('d-block')) {

            // Hide Siblings
            $(el).parents('.dropdown-menu').find('.dropdown-menu').not(el).removeClass('d-block');

            // Show the submenu
            $(target).toggleClass('d-block');
            return;
        }

        // Otherwise, just toggle the state back to hidden if already open
        $(target).removeClass('d-block');
    }

    /**
     * Handles when a submenu link is clicked
     * @param {event} e - The click event
     */
    function _handleSubmenuLinkClick(e) {

        // Hide menus after a successful link click
        var el = $(e.currentTarget);
        var parents = $(el).parents('.dropdown-menu.d-block').removeClass('d-block');
    }

    /**
     * Handles a click event from anything not a dropdown menu
     * @param {event} e - The click event
     */
    function _handleOffClick(e) {
        $('.dropdown-menu').removeClass('d-block');
    }
});