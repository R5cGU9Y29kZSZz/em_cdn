var people = [];
var arr = new Array();
$(function() {
	//禁止下拉
	var overscroll = function(el) {
		el.addEventListener('touchstart', function() {
			var top = el.scrollTop,
				totalScroll = el.scrollHeight,
				currentScroll = top + el.offsetHeight;
			if(top === 0) {
				el.scrollTop = 1;
			} else if(currentScroll === totalScroll) {
				el.scrollTop = top - 1;
			}
		});
		el.addEventListener('touchmove', function(evt) {
			if(el.offsetHeight < el.scrollHeight)
				evt._isScroller = true;
		});
	}
	overscroll(document.querySelector('.jlList'));
	document.body.addEventListener('touchmove', function(evt) {
		if(!evt._isScroller) {
			evt.preventDefault();
		}
	});
	//开始
	var headH = $('header').outerHeight();
	var bodyH = $(window).height();
	var bodyW = $(window).width();
	var footH = $('footer').height();

	$('.container').css({
		'height': bodyH,
		'width': bodyW
	});
	$('.main').css({
		'height': bodyH - headH - footH,
		'width': bodyW
	});
	$('.wrap').css({
		'height': bodyH - headH + 10,
		'width': bodyW
	});
	if($.cookie('cookieName') == 1) {
		$('body').append(
			'<audio src="http://'+window.location.host+'/public/music/bjm.mp3" autoplay  controls loop hidden id="MP3BjmVideo"></audio>');
		audioAutoPlay('MP3BjmVideo');
	}
	CookieEnable();
/*	if($.cookie('cookieName') == null || $.cookie('cookieName') == '') {
		$.cookie('cookieName', 2, {
			expires: 1
		});
	}*/
	//充值
	$('#chongZhi').click(function() {
		$('.top-up-box').show();
		$('.top-up-box .top-up').unbind();
		$('.top-up-box .bj,.top-up .close').click(function() {
			$('.top-up-box').hide();
		})
	})
	layer.config({
		extend: 'theam/style.css',

	});
	//$('.jlList li:odd').addClass('odd');
	$('#tzjl').click(function() {
		//iframe层
		layer.open({
			type: 2,
			title: false,
			scrollbar: false,
			skin: 'layer-ext-yourskin',
			closeBtn: 0,
			shadeClose: true,
			shade: 0.8,
			area: ['90%', '90%'],
			content: '/index.php/home/Index/tzjl' //iframe的url
		});
	});

	$('#yjjl').click(function() {
		//iframe层
		layer.open({
			type: 2,
			title: false,
			scrollbar: false,
			skin: 'layer-ext-yourskin',
			shadeClose: true,
			closeBtn: 0,
			shade: 0.8,
			area: ['90%', '90%'],
			content: '/index.php/home/index/yjjl' //iframe的url
		});
	});
	$('#help').click(function() {
		//iframe层
		layer.open({
			type: 2,
			title: false,
			scrollbar: false,
			skin: 'layer-ext-yourskin',
			shadeClose: true,
			closeBtn: 0,
			shade: 0.8,
			area: ['90%', '80%'],
			content: '/index.php/home/index/help' //iframe的url
		});
	});
	$('#daiLi').click(function() {
		//iframe层
		layer.open({
			type: 2,
			title: false,
			skin: 'layer-ext-yourskin',
			scrollbar: false,
			shadeClose: true,
			closeBtn: 0,
			shade: 0.8,
			area: ['90%', '470px'],
			content: '/index.php/home/index/daili' //iframe的url
		});
	});
    $('#kjjl').click(function() {
        //iframe层
        layer.open({
            type: 2,
            title: false,
            skin: 'layer-ext-yourskin',
            scrollbar: false,
            shadeClose: true,
            closeBtn: 0,
            shade: 0.8,
            area: ['90%', '90%'],
            content: '/index.php/home/index/kjjl' //iframe的url
        });
    });
	$('#phb').click(function() {
		//iframe层
		layer.open({
			type: 2,
			title: false,
			scrollbar: false,
			shadeClose: true,
			skin: 'layer-ext-yourskin',
			closeBtn: 0,
			shade: 0.8,
			area: ['90%', '480px'],
			content: '/index.php/home/index/paihang' //iframe的url
		});
	});
	$('#kefu').click(function() {
		//iframe层
		layer.open({
			type: 2,
			title: false,
			scrollbar: false,
			skin: 'layer-ext-yourskin',
			closeBtn: 0,
			shadeClose: true,
			shade: 0.8,
			area: ['90%', '470px'],
			content: '/index.php/home/index/kefu' //iframe的url
		});
	});
	$('.jilu .zsBtn').on('click',function() {
		var jlLength = $('.jlList li').length;
		var jlList = $('.jlList li').height();
		if(jlLength>10)
		jlLength=10;
		$('.jilu').css({'height':jlLength * jlList + $('.zsBtn').height()});
		$('.jlList').css({'height': jlLength * jlList,'overflow-y':'auto'});
		$('.jilu .zsBtn').hide();
		$('.jilu .zsBtn1').show();
	})
      $('.jilu .zsBtn1').on('click',function() {
			$('.jilu,.jlList').attr('style','');
			$('.jilu .zsBtn').show();
		$('.jilu .zsBtn1').hide();
		})
})
var u = navigator.userAgent;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

function start() {

	if($.cookie('cookieName') == 1) {
		$('audio#MP3Video1').remove();
		$('.container').append('<audio src="http://'+window.location.host+'/public/music/start.mp3" autoplay controls hidden id="MP3Video1"></audio>');
		if(isiOS) {
			audioAutoPlay('MP3Video1');
		}
	}
	$.ajax({
		url:'/index.php/home/api/newx',
		type:"post",
		data:{r:Math.random()},
		dataType:"json",
		timeout:"15000",
		beforeSend:function(){},
		success:function(res){
			if(res.ret == 0 ) {
				if(res.kj_ing == 2){
					$("#amount").text(res.infodat.amount.toFixed(2));
					$("#userId").text(res.infodat.ids);
					$("#userName").text(res.infodat.name.substr(0,5));
					$("#userImg").attr('src',res.infodat.heardimg);
					//上一期
					$('#prior_period>p').remove();
					var htm = '<p><span class="se' + res.data.last.a1 + '"></span></p><p><span class="se' + res.data.last.a2 + '" ></span><span class="se' + res.data.last.a3 + '"></span></p>'
					$('#prior_period').append(htm);
					
					award(res.yc_time1);
				}else{
					var ren=$('.people').text();
					//console.log(ren);
					var ra=Math.ceil(Math.random()*100);
			        if(ra>20){
					  var shu=parseInt(ren)+Math.ceil(Math.random()*10);
					}else{
					  var shu=parseInt(ren)-Math.ceil(Math.random()*10);
					}
				    $('.people').text(shu);
					$("#amount").text(res.infodat.amount.toFixed(2));
					$("#userName").text(res.infodat.name.substr(0,5));
					$("#userImg").attr('src',res.infodat.heardimg);
					$("#userId").text(res.infodat.ids);
					$("#yyphase").val(res.data.phase);
					$("#djstime").val(res.data.left_seconds);
					//上一期
					$('#prior_period>p').remove();
					var htm = '<p><span class="se' + res.data.last.a1 + '"></span></p><p><span class="se' + res.data.last.a2 + '" ></span><span class="se' + res.data.last.a3 + '"></span></p>'
					$('#prior_period').append(htm);
					
					var jqr = res.data.jqr;
					//var arr = []
					for (var i in jqr) {
						if(i == 'p'){							
							var arr53355 = jqr[i];
							for (var aai2d in arr53355) {
								people[aai2d] = arr53355[aai2d];
							}
						}
						if(i == 'j'){
							var arr555 = jqr[i];
							for (var aai in arr555) {
								arr[aai] = arr555[aai];
							}
						}
						
					}
					times();
				}
				
			}else {
				layer.msg(res.error);
			}
		},
		error:function(res){
			start();
		}
	});
	
}
//mp3播放代码
function audioAutoPlay(id) {
	var audio = document.getElementById(id);
	if(window.WeixinJSBridge) {
		WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
			audio.play();
		}, false);
	} else {
		document.addEventListener("WeixinJSBridgeReady", function() {
			WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
				audio.play();
			});
		}, false);
	}
	audio.play();
}
//cookie设置
function CookieEnable() {
	if($.cookie('cookieName') == 1) {
		$("#shengyin").removeClass().addClass('sy');
	} else {
		$("#shengyin").removeClass().addClass('jy');
	}
}
function shengyin() {
	if($.cookie('cookieName') == 1) {
		$.cookie('cookieName', 2, {
			expires: 1
		});
		$("#shengyin").removeClass().addClass('jy');
		$('audio').remove();
	} else {
		$.cookie('cookieName', 1, {
			expires: 1
		});
		$('body').append('<audio src="http://'+window.location.host+'/public/music/bjm.mp3" autoplay  controls loop hidden id="MP3BjmVideo"></audio>');
		if(isiOS) {
			audioAutoPlay('MP3BjmVideo');
		}
		$("#shengyin").removeClass().addClass('sy');
	}
}
//随机下单
function betting(time) {
	var f = function(times, i) {
		setTimeout(function() {
			//var peopleVal = $('.people').text();
			/*if(parseInt(peopleVal) != people[i]) {
				$('.people').text(people[i]);
			}*/
			if($.cookie('cookieName') == 1) {
				$('body').append(
					'<audio src="http://'+window.location.host+'/public/music/chips_va.mp3" autoplay  controls  hidden id="MP3Video"></audio>'
				);
				if(isiOS) {
					audioAutoPlay('MP3Video');
				}
			}
			var value = arr[i];
			for(var y in value) {
				var value1 = value[y];
				var sMon = $('.money li span').eq(value1[0]);
				var txIcon = $('#txIcon').offset();
				var tian = $('.xiazhu').eq(value1[1]).offset();
                var tianH = $('.xiazhu').eq(value1[1]).height();
				var tianW = $('.xiazhu').eq(value1[1]).width();
				var a1=(tian.top + 22) + (Math.ceil(Math.random() * (tianH - 35)));
				var a2=tian.left + (Math.ceil(Math.random() * (tianW - 22)));
				var cloneMon = sMon.clone().offset({
					top: a1,
					left: a2
				}).css({
					'position': 'absolute',
					'z-index': 9
				}).text('').addClass('touzhu').appendTo($('.container'));
				cloneMon.animate({
					left:a2 ,
					top: a1
				}, 100);
			}
			//console.log(60+"??");
			//console.log(i+">>");
			//console.log((60 - i) * 500+"||");
		}, (times - i) * 500);
	}
	//进入时倒计时时间小于3秒
	if(time <= 3) {
		var flag = $('#off').val();
		if(flag == "Off") {
			for(var cur = arr.length - 1; cur >= 3; cur--) {
				if($.cookie('cookieName') == 1) {
					if(value != false) {
						$('body').append(
							'<audio src="http://'+window.location.host+'/public/music/chips_va.mp3" autoplay  controls  hidden id="MP3Video"></audio>'
						);
						if(isiOS) {
							audioAutoPlay('MP3Video');
						}
					}
				}
				/*var peopleV = $('.people').text();
				if(parseInt(peopleV) != people[cur]) {
					$('.people').text(people[cur]);
				}*/
				var value = arr[cur];
				if(value != false) {
					for(var y in value) {
						var value1 = value[y];
						var sMon = $('.money li span').eq(value1[0]);
						var txIcon = $('#txIcon').offset();
						var tian = $('.xiazhu').eq(value1[1]).offset();
						var tianW = $('.xiazhu').eq(value1[1]).width();
						var tianH = $('.xiazhu').eq(value1[1]).height();
						var cloneMon = sMon.clone().offset({
							top: txIcon.top + ($('#txIcon').height() / 5),
							left: txIcon.left + ($('#txIcon').width() - 10)
						}).css({
							'position': 'absolute',
							'z-index': 9
						}).text('').addClass('touzhu').appendTo($('.container'));
						cloneMon.animate({
							left: tian.left + (Math.ceil(Math.random() * (tianW - 22))),
							top: (tian.top + 22) + (Math.ceil(Math.random() * (tianH - 35)))
						}, 100);
					}
				}
			}
			$('#off').val("No");
		}
	} else { //进入时倒计时时间大于于3秒
		for(var a = time*2; a > 4; a--) {
			var ran=Math.ceil(Math.random()*100);
			if(ran>30){
				var flag = $('#off').val();
				if(flag == "Off") {
					for(var cur = arr.length - 1; cur >= time; cur--) {
						/* var peopleV = $('.people').text();
						if(parseInt(peopleV) != people[cur]) {
							$('.people').text(people[cur]);
						} */
						var value = arr[cur];
						if(value != false) {
							if($.cookie('cookieName') == 1) {
								$('body').append(
									'<audio src="http://'+window.location.host+'/public/music/chips_va.mp3" autoplay  controls  hidden id="MP3Video"></audio>'
								);
								if(isiOS) {
									audioAutoPlay('MP3Video');
								}
							}
							for(var y in value) {
								var value1 = value[y];
								var sMon = $('.money li span').eq(value1[0]);
								var txIcon = $('#txIcon').offset();
								var tian = $('.xiazhu').eq(value1[1]).offset();
								var tianW = $('.xiazhu').eq(value1[1]).width();
								var tianH = $('.xiazhu').eq(value1[1]).height();
								var a1=tian.left + (Math.ceil(Math.random() * (tianW - 22)));
								var a2=(tian.top + 22) + (Math.ceil(Math.random() * (tianH -35)));
								var cloneMon = sMon.clone().offset({
									top: a2,
									left: a1
								}).css({
									'position': 'absolute',
									'z-index': 9
								}).text('').addClass('touzhu').appendTo($('.container'));
								cloneMon.animate({
									left: a1,
									top: a2
								}, 0);
							}
						}
					}
					$('#off').val("No");
				}
				if(arr[a] != false) {
					f(time*2, a);
				}
			}
		}
	}
}
//点击下单
function bettingClick() {
	$('footer .money li span').click(function() {
		$(this).parent().addClass('cur').siblings().removeClass('cur');
	});
	$('#xzqy .xiazhuC').click(function() {
		if($.cookie('cookieName') == 1) {
			$('body').append(
				'<audio src="http://'+window.location.host+'/public/music/chips_one_va.mp3" autoplay  controls  hidden id="MP3Video"></audio>'
			);
			if(isiOS) {
				audioAutoPlay('MP3Video');
			}
		}
		//下单区域类型
		var type = $(this).attr('name');
		//下单金额
		var money = $('footer .money li.cur').find('span').offset();
		//下单金额
		var moneyValue = $('footer .money li.cur').find('span').attr('name');
		var _left = $(this).offset().left + (Math.ceil(Math.random() * ($(this).width() - 22)));
		var _top = $(this).offset().top + (Math.ceil(Math.random() * ($(this).height() - 22)));
		$.ajax({
			url:'/index.php/home/pay/init',
			type:"post",
			data:{number:moneyValue,type:type},
			dataType:"json",
			beforeSend:function(){
				//$.dicePop().loadingFun();//加载弹窗
			},
			success:function(res){
				/*关闭加载弹窗*/
				//$.dicePop().closeLoading();
				if(res.ret == 0 ) {
					//更新余额
					$("#amount").text(res.amount.toFixed(2));					
						
					var money = $('footer .money li.cur').find('span').offset();
					
					if($('footer .money li.cur').length == 1) {
						var cloneMonn = $('footer .money li.cur').find('span').clone().offset({
							top: money.top,
							left: money.left
						}).css({
							'width': '0.65rem',
							'height': '0.65rem',
							'position': 'absolute',
							'z-index': 5
						}).text('').addClass('touzhuMy ').appendTo($('.container'));
						cloneMonn.animate({
							'width': '0.3rem',
							'height': '0.3rem',
							'border-radius': '50%',
							'z-index': 9,
							'left': _left,
							'top': _top
						}, 300, function() {
							cloneMonn.css({
								'border': '2px solid #fff100',
								'-moz-box-shadow': ' 0px 0px 7px #fff100',
								'box-shadow': '0px 0px 7px #fff100'
							});
							$('audio#MP3Video').remove();
						});
					}
					
							   
				}else if(res.ret == 1){
					loginpopups();
				}else if(res.ret == 2){
					layer.msg("当前余额不足前往充值");
				}else {
					layer.msg(res.error);
				}
			},
			error:function(res){
				/*关闭加载弹窗*/
				layer.msg("网络异常，请求失败3！");
			}
		});
		
		
	});
}

//下单倒计时
function times() {
	$('#betting_countdown').show();
	var num = $("#djstime").val();
	$('#betting_countdown .betting_time').text(num);
	bettingClick();
	var i = 0;
	var interval = setInterval(function() {
		num -= 1;
		i++;
		if(i == 1) {
			betting(num);
		}
		if(num < 0) {
			clearInterval(interval);
			$('#betting_countdown').css('display', 'none');
			//倒计时0后处理事件
			var phase = $("#yyphase").val();
			$.ajax({
					url:'/index.php/home/api/open',
					type:"post",
					data:{phase:phase,r:Math.random()},
					timeout:"30000",
					dataType:"json",
					beforeSend:function(){
						//$.dicePop().loadingFun();//加载弹窗
					},
					success:function(res){
						/*关闭加载弹窗*/
						//$.dicePop().closeLoading();
						if(res.ret == 0 ) {
							var resnum = res.data.number;
							rollDice(resnum[0],resnum[1],resnum[2],res.data.asum,res.data.astr);
							award(7);
						}else {
							$.dicePop().tips(res.error);
						}
					},
					error:function(res){
						//console.log("网络异常，请求失败！");
						//layer.msg("网络异常，请求失败！");
						times();
					}
			});
			
		}
		if(num == 3) {
			$('.xiazhuC').unbind();
			if($.cookie('cookieName') == 1) {
			$('audio#MP3Video').remove();
			 $('body').append(
				'<audio src="http://'+window.location.host+'/public/music/stop.mp3" autoplay  controls  hidden id="MP3Video"></audio>');
			if(isiOS) {
				audioAutoPlay('MP3Video');
			}
			}
			setTimeout(function() {
				$('.xiazhuC').click(function() {
					cloneMonn = '';
					layer.msg('下单时间已经结束,等待开奖！');
				})
			}, 1000);
		}
		$('#betting_countdown .betting_time').text(num);
	}, 1000);
}
//开奖倒计时
function award(num) {
	$('#award_countdown').show();
	
	$('#award_countdown .award_time').text(num);
	var interval = setInterval(function() {
		num -= 1;
		if(num == 0) {
			clearInterval(interval);
			$('#award_countdown').css('display', 'none');
			$('.wrap div').removeClass('jg');
			$('.xiazhuC').unbind();
			$('.shaigu,.gai').attr('style', '');
			$('audio#MP3Video,audio#MP3Video1,audio#MP3VideoY,.touzhu,.touzhuMy').remove();
			start();
		}
		$('#award_countdown .award_time').text(num);
	}, 1000);
}
//摇色子  20180617
function rollDice(dian1,dian2,dian3,asum,astr) {
	$('.di > div').removeClass();
	setTimeout(function() {
		$('audio#MP3Video,audio#MP3Video1').remove();
		if($.cookie('cookieName') == 1) {
			$('body').append(
				'<audio src="http://'+window.location.host+'/public/music/dice_va.mp3" autoplay  controls loop hidden id="MP3VideoY"></audio>');
			if(isiOS) {
				audioAutoPlay('MP3VideoY');
			}
		}
	}, 0)
	$('#shaigu').show();
	$('#shaigu .gai').show().css({
		left: 0,
		top: 0
	});
	var div = document.getElementById("shaigu");
	$('.di #se1,.di #se2').removeClass();
	
	$('#se1').addClass('se' + dian1);
	$('#se2').addClass('se' + dian2);
	$('#se3').addClass('se' + dian3);
	setCss3(div, {
		transform: "rotate(0deg)",
		"transform-origin": "50% 60%"
	});
	var s = 0;
	var yaoTimer = setInterval(function() {
		s++;
		if(s > 6) {
			clearInterval(yaoTimer);
			setTimeout(function() {
			$('audio#MP3VideoY').remove();
				$('#shaigu').css({
					"transform": "rotate(0deg) !important",
					"transform-origin": "50% 60%"
				});
				
				gai();
			}, 200);
			setTimeout(function() {
				results(dian1, dian2, dian3,asum,astr)
			}, 3000);
		};
		var angel1 = 0;
		var angel2 = 48;
		var angel3 = -48;
		var timer1 = setInterval(function() {
			setCss3(div, {
				transform: "rotate(" + angel1 + "deg)",
				"transform-origin": "50% 60%"
			})
			angel1 += 8;
			if(angel1 >= 48) {
				clearInterval(timer1);
			}
		}, 8);
		setTimeout(function() {
			var timer2 = setInterval(function() {
				setCss3(div, {
					transform: "rotate(" + angel2 + "deg)",
					"transform-origin": "50% 60%"
				})
				angel2 -= 8;
				if(angel2 <= -48) {
					clearInterval(timer2);
				}
			}, 8);
		}, 48)
		setTimeout(function() {
			var timer3 = setInterval(function() {
				setCss3(div, {
					transform: "rotate(" + angel3 + "deg)",
					"transform-origin": "50% 60%"
				})
				angel3 += 8;
				if(angel3 >= 1) {
					clearInterval(timer3);
				}
			}, 8);
		}, 144)
	}, 192)

	function gai() {
		$('#shaigu .gai').animate({
			top: '-0.90rem',
			left: '0.78rem',
			transform: 'rotateX(20deg)'
		}, 500, function() {
			$('.shaigu .gai').hide();
			if($.cookie('cookieName') == 1) {
		$('audio#MP3Video').remove();
	   if(dian1 == dian2 && dian2 == dian3){
		   $('body').append(
					'<audio src="http://'+window.location.host+'/public/music/ws.mp3" autoplay  controls  hidden id="MP3Video"></audio>');
				if(isiOS) {
					audioAutoPlay('MP3Video');
				}
	   }else{
		$('body').append(
					'<audio src="http://'+window.location.host+'/public/music/'+(dian1+dian2+dian3)+'.mp3" autoplay  controls  hidden id="MP3Video"></audio>');
				if(isiOS) {
					audioAutoPlay('MP3Video');
				}
	   }
	}
			setTimeout(function() {
				$('#shaigu').hide();	
			}, 2000)
		});
	}

	function setCss3(obj, objAttr) {
		for(var i in objAttr) {
			var newi = i;
			if(newi.indexOf("-") > 0) {
				var num = newi.indexOf("-");
				newi = newi.replace(newi.substr(num, 2), newi.substr(num + 1, 1).toUpperCase());
			}
			obj.style[newi] = objAttr[i];
			newi = newi.replace(newi.charAt(0), newi.charAt(0).toUpperCase());
			obj.style[newi] = objAttr[i];
			obj.style["webkit" + newi] = objAttr[i];
			obj.style["moz" + newi] = objAttr[i];
			obj.style["o" + newi] = objAttr[i];
			obj.style["ms" + newi] = objAttr[i];
		}
	}
}

function results(dian1, dian2, dian3,asum,astr) {
	//获胜区域添加背景闪烁
	var nTotal = dian1 + dian2 + dian3;
	var aTotal = [dian1, dian2, dian3];
	
	function sortNumber(a, b) {
		return a - b
	}
	aToal = aTotal.sort(sortNumber);
	var sTotal = aTotal[0] + "" + aTotal[1] + "" + aTotal[2];
	reg = /^(0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\d$/;
	var i = 0;
	var bj = setInterval(function() {
		if(dian1 == dian2 && dian2 == dian3){
				$('.bz' + dian1).addClass('jg');
				//$('.N' + nTotal).addClass('jg');
		}else{
			if(nTotal <= 10) {
				$('.small,.N' + nTotal).addClass('jg');
			} else {
				$('.big,.N' + nTotal).addClass('jg');
			}
			if(reg.test(sTotal)) {
				$('.sz' + sTotal).addClass('jg');
			}
		}
		setTimeout(function() {
			$('.wrap div').removeClass('jg');
		}, 200);
		i++;
		if(i == 4) {
			clearInterval(bj);
		}
	}, 300);
	setTimeout(function() {
		$('#prior_period>p').remove();
		var htm = '<p><span class="se' + dian1 + '"></span></p><p><span class="se' + dian2 + '" ></span><span class="se' + dian3 + '"></span></p>'
		$('#prior_period').append(htm);
		
		var zsHtml = '<li>';
		zsHtml += '<p class="fl">';
			zsHtml += '<span class="d_'+dian1+'"></span>';
			zsHtml += '<span class="d_'+dian2+'"></span>';
			zsHtml += '<span class="d_'+dian3+'"></span>';
		zsHtml += '</p>';
		zsHtml += '<span>'+asum+'</span>';
		zsHtml += '<span>'+astr+'</span>';
	zsHtml += '</li>';
		$(".jlList").prepend(zsHtml);

	}, 2000)
}

function tozf(money,type){
	var needMoney = parseFloat(money).toFixed(2);
	$("#price").val(needMoney);
	$("#paytype").val(type);
	$("#sdfssd").submit();
}