var imgNum = 5;
var domain = document.domain;
var images = [];
     images.push('http://'+domain+'/public/css/index.css');
	 images.push('http://'+domain+'/public/js/index.js');
	 images.push('http://'+domain+'/public/music/bjm.mp3');
$(function(){ preLoadImg(); });
function preLoadImg() {
    //get all imgs those tag is <img>
     var imgs = document.images;
     for (var i = 0; i < imgs.length; i++) {
     images.push(imgs[i].src);
     }
     //get all images in style
     var cssImages = getallBgimages();
     for (var j = 0; j < cssImages.length; j++) {
     images.push(cssImages[j]);
     }
    /*这里是真正的图片预加载 preload*/
	for(var a=0;a<images.length;a++){
		console.log(images[a]);
		}
    $.imgpreload(images,
        {
            each: function () {
                /*this will be called after each image loaded*/
                var status = $(this).data('loaded') ? 'success' : 'error';
                if (status == "success") {
                    var v = (parseFloat(++imgNum) / images.length).toFixed(2);
                    $("#percentShow").text(Math.round(v * 100) + "%");
                    $('.jdB .jd').css({"width":Math.round(v * 100) + "%"});
                }
            },
            all: function () {
             $("#percentShow ").text("100%");
             $('.jdB .jd').css({"width":"100%"});
             $('#loading').fadeOut(500);
             $('.container').show();
			 if($.cookie('cookieName') == null || $.cookie('cookieName') == '') {
				$('body').append(
					'<audio src="http://'+domain+'/public/music/zhu.mp3" autoplay  controls  hidden id="zhu"></audio>');
				if(isiOS) {
					audioAutoPlay('zhu');
				}
				$.cookie('cookieName', 1, {
					expires: 1
				});
			}
             setTimeout(start,1000);
            }
        });
		
}
//get all images in style
function getallBgimages() {
    var url, B = [], A = document.getElementsByTagName('*');
    A = B.slice.call(A, 0, A.length);
    while (A.length) {
        url = document.deepCss(A.shift(), 'background-image');
        if (url) url = /url\(['"]?([^")]+)/.exec(url) || [];
        url = url[1];
        if (url && B.indexOf(url) == -1) B[B.length] = url;
    }
    return B;
}
document.deepCss = function (who, css) {
    if (!who || !who.style) return '';
    var sty = css.replace(/\-([a-z])/g, function (a, b) {
        return b.toUpperCase();
    });
    if (who.currentStyle) {
        return who.style[sty] || who.currentStyle[sty] || '';
    }
    var dv = document.defaultView || window;
    return who.style[sty] ||
        dv.getComputedStyle(who, "").getPropertyValue(css) || '';
}
Array.prototype.indexOf = Array.prototype.indexOf ||
    function (what, index) {
        index = index || 0;
        var L = this.length;
        while (index < L) {
            if (this[index] === what) return index;
            ++index;
    }
    return -1;
}