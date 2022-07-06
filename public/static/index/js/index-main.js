var useragent = navigator.userAgent;
var userCoin  = {
  "coin_en_name": "RMB",
  "coin_id"     : 1,
  "jackpot"     : 102266.55,
  "max_stake"   : 306.8,
  "balance"     : 0,
  "step"        : 1
};

function automatic() {
  location.href = "/index/user/pay.html";
}

$(".roomcct").click(function () { //关闭提示邀请弹窗
  $('.chooseout').fadeOut(1000);
});
$(".closeit").click(function () { //关闭提示邀请弹窗
  $('.yaoqing').css("visibility", "hidden");
});
$(".goshare").click(function () { //关闭提示邀请弹窗
  location.href = "/Home/Index/user/share.html";
});
var music = 1;
$(".music").click(function () { //控制音乐
                                //  	alert("111");
  if (music == 0) {
    music = 1;
    $("#audio")[0].play();
    $(".open").text("音效开");
  } else {
    music = 0;
    $("#audio")[0].pause();
    $(".open").text("音效关");

  }
});


document.getElementById("tabone").src = "/public/static/index/images/huojian.png";

$('#titleone').addClass("titleseleted");
$("#game").addClass("tabselected");
$(".seeruletop").click(function () {
  location.href = "/Home/Index/question.html";
});
$(".tohistory").click(function () {
  location.href = "/index/user/mylevel.html";
});
$(".closejiang").click(function () {
  $(".redout").css("visibility", "hidden");
  //        $('.intro_wrap').show();
});
$(".getit").click(function () {
  $(".redout").css("visibility", "hidden");
  //        location.href = "/index/login/index.html";
});
$(".playintro").click(function () {
  location.href = "/index/Index/wanfa.html";
});

$('.rank').click(function () {
  location.href = "/index/Index/paihang.html";
});
$('.newhgkefu').click(function () {
  //  location.href = "/public/static/index/images/vs.jpg";
});
$('#about-pool').click(function () {
  alert('奖金池共剩余多少金额：用于发放奖金给中奖用户');
});

function sum(m, n) {
  var num = Math.floor(Math.random() * (m - n) + n);
  return num;
}


var append_data_gets = [
  ['영민', '20190531/ebfb968ff4d3af7440d75525ae000517.jpg'],
  ['秦时明月', '20190531/30349e2057e7ea8e1ae9067d96f0b287.jpg'],
  ['少吕蕾', '20190531/f6de69e0996e7457b7a0e1a01fadbc8e.jpg'],
  ['Min', '20190531/13c557413df1ad3ca19daa7f7e1d9ef0.jpg'],
  ['Coco', '20190531/df7ee7bdc0731ce3dbe3309e5d52766c.jpg'],
  ['yert', '20190531/a4b468310ebc106aa58d14681812ce43.jpg'],
  ['Wettly', '20190531/a0a4adb7cb9eee688537fddd2fae9e85.jpg'],
  ['星流 ', '20190531/ee9c5c6f4b66dd8f366f306c2fc098b4.jpg'],
  ['峦洋-Peter', '20190531/d0db482d5684e54bc402cecf114ab928.jpg'],
  ['WLP', '20190531/182558e377264803374a3fa35eefcd3e.jpg'],
  ['元稹', '20190531/c47db66ffde940eb6601d3761d169dcb.jpg'],
  ['禄丰', '20190531/e1f72deb1143c0ed3f9dee2ad60b8e67.jpg'],
  ['刘小雅', '20190531/7cb275ce9b023a630e83c6ab58e40007.jpg'],
  ['加西亚&船夫', '20190531/cf1a45d03c3ab4b3d914f17099e9fe16.jpg'],
  ['米儿', '20190531/374c0618d45ec97d3989041bf6280dec.jpg'],
  ['舍恩', '20190531/29debe91b0753e8b9aece989f28b0582.jpg'],
  ['神十', '20190531/7f662fc72c008896124a1f68bcb6f274.jpg'],
  ['一沙一世界 ', '1541298717884'],
  ['老李', '1541313418002'],
  ['皎月如镜', '1541293264300'],
  ['Pauline', '1541316719765'],
  ['大胖龙', '1541316719765'],
  ['张云', '1541294420446'],
  ['sky', '1541310865062'],
  ['恩静', '1541298717884'],
  ['言寺言寺', '1541315863938'],
  ['奔驰宝马13843665552', '1541318431919'],
  ['We1990 ', '1541298717884'],
  ['Debra', '1541313418002'],
  ['王桥', '1541293264300'],
  ['Hekey', '1541316719765'],
  ['布达拉', '1541316719765'],
  ['三万英尺', '1541294420446'],
  ['小冯', '1541310865062'],
  ['素行', '1541298717884'],
  ['韩都医生', '1541315863938'],
  ['虞鸿Marilyn', '1541318431919'],
  ['秦♎️枫 ', '1541298717884'],
  ['🎰Quincyyy🎏', '1541313418002'],
  ['斌哥', '1541293264300'],
  ['h', '1541316719765'],
  ['小菇凉凉', '1541316719765'],
  ['明汉', '1541294420446'],
  ['sf', '1541310865062'],
  ['苹果妈', '1541298717884'],
  ['神笔马良', '1541315863938'],
  ['杜世友', '1541318431919'],
  ['马金秀 ', '1541298717884'],
  ['linda', '1541313418002'],
  ['云生镜', '1541293264300'],
  ['继坚_Eric', '1541316719765'],
  ['邻家大哥', '1541316719765'],
  ['瑞', '1541294420446'],
  ['李正和', '1541310865062'],
  ['通', '1541298717884'],
  ['RainBow_liyun', '1541315863938'],
  ['卫大米', '1541318431919'],
  ['c137 ', '1541298717884'],
  ['小瓶盖', '1541313418002'],
  ['马卡龙', '1541293264300'],
  ['天佑', '1541316719765'],
  ['s7', '1541316719765'],
  ['紫气', '1541294420446'],
  ['隔壁老王', '1541310865062'],
  ['雅蕙子', '1541298717884'],
  ['晓月', '1541315863938'],
  ['kalokalo', '1541318431919'],
  ['粉果康美 ', '1541298717884'],
  ['王成', '1541313418002'],
  ['霸球', '1541293264300'],
  ['张佳钰', '1541316719765'],
  ['核桃爷爷', '1541316719765'],
  ['焱俞', '1541294420446'],
  ['淡然', '1541310865062'],
  ['无忧是佛', '1541298717884'],
  ['十年@', '1541315863938'],
  ['###台州行', '1541318431919'],
  ['幸运 ', '1541298717884'],
  ['韩栋🎏', '1541313418002'],
  ['baby', '1541293264300']
];

/**
 * 用户逃跑效果方法
 * @param {type} personName
 * @returns {undefined}
 */
function addWinperson(personName) {
  var r      = Math.random();
  var domStr = '<div class="winperson" id= "winperson' + r + '"><p>●</p><p>' + personName + '</p></div>';
  $('.mask').append(domStr);
  endA(r);
}

function endA(win) {
  var winID = 'winperson' + win;
  var Dom   = document.getElementById(winID);
  Dom.addEventListener('animationend', function (e) {
    Dom.parentNode.removeChild(Dom);
  });
}

var baodian = 1;

function append_data() {
  var baodian_base   = $('.showmultiple').text();
  //判断是逃离还是下单
  var bettingcontent = $('.btn-betting').text().replace(/\s+/ig, '');
  var can_touzhu     = false;
  var can_escape     = false;
  var domain         = document.domain;
  if (bettingcontent == '下单' && !$('.btn-betting').hasClass('checked')) {
    can_touzhu = true;
  }

  if (bettingcontent == '已下单') {
    can_touzhu = true;
  }

  if (bettingcontent == '等待下一局' && $('.btn-betting').hasClass('checked')) {
    can_escape = true;
  }
  if (bettingcontent == '逃跑' && $('.btn-betting').hasClass('checked')) {
    can_escape = true;
  }
  if (bettingcontent == '逃跑') {
    can_escape = true;
  }

  var suijishu = sum(1, 100);
  if (suijishu >= 1 && can_touzhu) {
    //console.log($('.showmultiple').text());
    var num_key = sum(1, 15);

    if ($(".member_" + num_key).length < 1) {
      //更新页面押注信息
      var html = '<tr class="member_' + num_key + '">';
      html += '<td><img style="height: 0.15rem; width: 0.15rem; margin-right: 5px; border-radius: 50%;" src="/public/uploads/' + append_data_gets[num_key]['1'] + '" />' + append_data_gets[num_key]['0'] + '</td>';
      html += '<td>-</td>';
      html += '<td>' + sum(1, 15) * 5 + '.00元</td>';
      html += '<td>-</td>';
      html += '</tr>';
      $('.user-bets').append(html);
    }
  }
  if (suijishu >= 20 && can_escape) {
    for (var i = 1; i <= 7; i++) {
      var baodian = $('.showmultiple').text();
      if (!baodian) {
        baodian = '1.' + sum(10, 20);
      }
      //console.log(baodian);
      num_key     = sum(1, 15);
      var up_rand = sum(1, 15);
      if ($(".member_" + up_rand).length == 1 && !$('.member_' + up_rand).hasClass('win')) {
        //逃跑动画
        var beishu_0 = baodian;
        addWinperson(append_data_gets[num_key]['0'] + '@' + beishu_0 + '倍');
        //更新页面数据
        var beishu = baodian;
        $('.member_' + up_rand).addClass('win');
        $('.member_' + up_rand + ' td').eq(1).html(beishu + '倍');
        $('.member_' + up_rand + ' td').eq(3).html((parseFloat(beishu).toFixed(2) * parseInt($('.member_' + up_rand + ' td').eq(2).text())).toFixed(2));
      }
    }

    for (var i = 1; i <= 1; i++) {
      num_key     = sum(1, 15);
      var up_rand = sum(1, 15);
      if ($(".member_" + up_rand).length == 1) {

      } else {
        member_id = sum(1, 15);
        if ($(".member_" + member_id).length < 1) {
          var baodian = $('.showmultiple').text();
          if (!baodian) {
            baodian = '1.' + sum(10, 20);
          }
          //更新页面押注信息
          var html = '<tr class="member_' + member_id + '">';
          html += '<td><img style="height: 0.15rem; width: 0.15rem; margin-right: 5px; border-radius: 50%;" src="/public/uploads/' + append_data_gets[num_key]['1'] + '" />' + append_data_gets[member_id]['0'] + '</td>';
          html += '<td>-</td>';
          html += '<td>' + sum(1, 15) * 5 + '.00元</td>';
          html += '<td>-</td>';
          html += '</tr>';
          $('.user-bets').append(html);

          //逃跑动画
          var beishu_0 = sum(1, 2) + '.' + sum(3, 9) + '' + sum(1, 9);
          beishu_0     = baodian;
          addWinperson(append_data_gets[member_id]['0'] + '【赢利' + beishu_0 + '倍】');
          //更新页面数据
          var beishu = sum(1, 2) + '.' + sum(3, 9) + '' + sum(1, 9);
          beishu     = baodian;
          $('.member_' + member_id).addClass('win');
          $('.member_' + member_id + ' td').eq(1).html(beishu + '倍');
          $('.member_' + member_id + ' td').eq(3).html((parseFloat(beishu).toFixed(2) * parseInt($('.member_' + member_id + ' td').eq(2).text())).toFixed(2));
        }
      }
    }
  }
}