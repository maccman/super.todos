(function($){
  $.fn.toggleDisplay = function(bool){
    if ( typeof bool == "undefined" ) {
      bool = !$(this).filter(":first:visible")[0];
    }
    return $(this)[bool ? "show" : "hide"]();
  };
})(jQuery);