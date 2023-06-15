/*!/wp-content/plugins/designthemes-core-features/shortcodes/js/jquery.toggle.click.js*/
/*!
 * jQuery Toggle Click - v1.0.0 - 2020-11-18
 * Copyright DesignThemes
 */
(function(jQuery, window, undefined) {
    var oldToggle = jQuery.fn.toggleClick;
    jQuery.fn.toggleClick = function(fn, fn2) {
        if (!jQuery.isFunction(fn) || !jQuery.isFunction(fn2)) {
            return oldToggle.apply(this, arguments)
        }
        var args = arguments,
            guid = fn.guid || jQuery.guid++,
            i = 0,
            toggler = function(event) {
                var lastToggle = (jQuery._data(this, "lastToggle" + fn.guid) || 0) % i;
                jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1);
                event.preventDefault();
                return args[lastToggle].apply(this, arguments) || !1
            };
        toggler.guid = guid;
        while (i < args.length) {
            args[i++].guid = guid
        }
        return this.click(toggler)
    }
})(jQuery, window);