var Gallery = {

    create: function() {
        $('<img/>').attr('id', 'image').appendTo('#gallery-image').
        hide();
    },

    paginate: function() {

        var images = $('img', '#gallery'),
            len = images.length;
        $('<div id="gallery-nav"/>').prependTo('#gallery');

        for (var i = 0; i < len; i++) {

            $('<a/>').attr({
                href: '#'
            }).text(i + 1).appendTo('#gallery-nav');

        }

        $('a:first', '#gallery-nav').addClass('active');

    },


    onhover: function() {

        $('img', '#gallery').each(function(i) {

            var $img = $(this);
            var $a = $('a', '#gallery-nav').eq(i);
            $img.hover(function() {

                if (!$a.hasClass('active')) {
                    $a.addClass('active').siblings().removeClass('active');
                }
            }, function() {

                $a.removeClass('active');
            });
        });

    },

    onclick: function() {
        $('a', '#gallery-wrapper').each(function() {
            var $a = $(this);
            var src = $('img', $a).attr('src');
            $a.click(function(e) {

                e.preventDefault();
                $('#image').hide();
                $('#image').attr('src', src);
                $('#image').fadeIn('slow');


            });
        });
    },



    init: function() {

        for (var i in this) {

            if (typeof this[i] === 'function' && this[i] !== arguments.callee) {

                this[i]();

            }

        }

    }

};

Gallery.init();
