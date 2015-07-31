/*! jQuery positionFixed
 * author dengqiuju
 * version 1.0
 * github:
 *   */

(function ($) {
	$.fn.smartFloat = function(options){
		var $leftMenuElem = $(this);
		var offsetTop = $leftMenuElem.get(0).offsetTop;
		var offsetLeft = $leftMenuElem.get(0).offsetLeft;
        var defualts = {
	    		top:0,
	    		left:offsetLeft,
	    		scrollTarget:$(window)
        };
        var o = $.extend({}, defualts, options);
		var $posFunc = function(){
			var sc = $(o.scrollTarget).scrollTop();

			if(!window.XMLHttpRequest){//针对ie6的定位
				$leftMenuElem.css('top',sc+o.top);
			}else{
				sc > offsetTop ? $leftMenuElem.css({'position':'fixed',top:o.top,left:o.left,'z-index':999}) : $leftMenuElem.css({'position':'static'});
			}
		};

		$(o.scrollTarget).bind('scroll',function(){ $posFunc(); });
	};

	$.fn.setVisible = function(v){
		return $(this).css('visibility',v);
	};
})(jQuery);