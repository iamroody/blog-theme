/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        $('.cards').masonry({
          // options
          fitWidth: true,
          itemSelector: '.post',
          columWidth: 300,
        });

        $('#weixin-qrcode').webuiPopover({
            url:'#qrcode',
            title: '',
            closeable:true
        });

        if($("#weixin-share").length>0){
            $("#qrcode-content").qrcode({
                render: "canvas",
                width: 150,
                height: 150,
                text: window.location.href
            });
            $('#weixin-share').webuiPopover({
                url:'#share-qrcode',
                title: '',
                closeable:true
            });
        }

        var tagnumber = $(".nav>ul>li").length;

        for (var i=0; i< tagnumber; i++){
            if( $(".nav>ul>li").eq(i).hasClass("nav-current") ){
                $(".navbar>ul>li").eq(i).addClass("site-nav-item-current");
            }else{
                $(".navbar>ul>li").eq(i).removeClass("site-nav-item-current");
            }
        }

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);
