$(document).ready(function () {
  var flag     = 0;
  var nox      = 0;
  var value    = 1;
  var step     = 10;
  var key      = 0;
  var mincount = 10;
  $(".ETHcount").text(mincount);
  var ETHCount = 10;
  var data     = [];
  var timmer;
  var escapeList;
  var betsList;
  var countDown;
  var gameDown;
  var start    = 0;
  var myChart  = echarts.init(document.getElementById('mychart'));
  var domain   = document.domain;
  initRecord();

  function initRecord() {
    $.ajax({
      type    : "post",
      url     : "/cron/bet/lastKj",
      dataType: "json",
      success : function (responseData) {
        $('.show-record span:eq(0)').html(responseData[0]['id']);
        $('.show-record span:eq(1)').html(responseData[0]['rate'] + 'x');
        $('.show-record span:eq(2)').html(responseData[1]['id']);
        $('.show-record span:eq(3)').html(responseData[1]['rate'] + 'x');
        $('.show-record span:eq(4)').html(responseData[2]['id']);
        $('.show-record span:eq(5)').html(responseData[2]['rate'] + 'x');
        $('.show-record span:eq(6)').html(responseData[3]['id']);
        $('.show-record span:eq(7)').html(responseData[3]['rate'] + 'x');
        $('.show-record span:eq(8)').html(responseData[4]['id']);
        $('.show-record span:eq(9)').html(responseData[4]['rate'] + 'x');
      }

    });
  }

  function randomData() {
    var result = {
      name : nox,
      value: [
        nox,
        value.toFixed(2)
      ]
    };
    flag += 0.04;
    // nox = Math.round(+nox)
    $('.showmultiple').html(value.toFixed(2));
    value = flag / 2 + (Math.pow(flag, 2) - flag) / 10 + 1;
    return result;
  }

  // 爆炸了
  function explosion(boom) {
    $('.boomImg').show();
    $('.multiple').hide();
    $('.explosion').show();
    $('.showexplosion').html(boom);
    isExplosion();
    clearInterval(timmer);
    flag    = 0;
    nox     = 0;
    value   = 1;
    //$('#mychart').html('');
    myChart = echarts.init(document.getElementById('mychart'));
    myChart.setOption(option);
  }

  function isExplosion() {
    $('.rock').hide();
    $('.rock1').show();
    var myTimeout = setTimeout(function () {
      clearTimeout(myTimeout);
      $('.rock1').hide();
    }, 2000);
  }

  //增加押注
  $('#addEth').on('click', function () {
    if (ETHCount >= 200) {
      $('.ETHcount').html(200);

    } else {

      ETHCount += step;
      if (checkBalance(ETHCount)) {
        $('.ETHcount').html(ETHCount.toFixed(2));
      }
    }
  });
  //减少押注
  $('#ReductionEth').on('click', function () {
    if (ETHCount <= mincount) {
      return;
    }
    ETHCount -= step;
    if (checkBalance(ETHCount)) {
      $('.ETHcount').html(ETHCount.toFixed(2));
    }
  });
  //最小押注
  $('.min-btn').on('click', function () {
    ETHCount = mincount;
    if (checkBalance(ETHCount)) {
      $('.ETHcount').html(ETHCount.toFixed(2));
    }
  });
  //最大押注
  $('.max-btn').on('click', function () {
//        var  jackpot = $('.jackpot-balance').html();
//        ETHCount = (parseFloat(jackpot)*0.005).toFixed(2);
    //ETHCount = parseFloat(1000);
    //if(checkBalance(ETHCount.toFixed(2))){
    $('.ETHcount').html(200);
    //}
  });

  //检查余额和money_pool
  function checkBalance(count) {
    var userbalance = $('input[name="balance"]').val();
    var jackpot     = parseFloat(userCoin['jackpot']);
//        if(count > userbalance){
//            $(".tocharge").show();
//            return ;
//        }
//         if(count > (parseFloat(jackpot)*0.003).toFixed(2)){
//             toast({
//                 message: '超过下单最大额',
//                 type: 'error'
//             });
//             return false;
//         }
    return true;
  }

  function shutDown() {
    $("#id3").slideUp('slow', function () {
      $("#id3").remove();
    })
    Timing(5);
  }

  //开始倒计时
  function theCountDown() {
    countDown = 8;
    $('.rock').hide();
    var timeout = setInterval(function () {
      countDown -= 0.1;
      countDown = countDown.toFixed(1);
      $('.startTime').html(countDown);
      if (countDown <= 0) {
        clearInterval(timeout);
        //document.getElementById("btn-betting").disabled = true;
        document.getElementById("ReductionEth").disabled = true;
        document.getElementById("addEth").disabled       = true;
        // document.getElementById("max-btn").disabled=true;
        // document.getElementById("min-btn").disabled=true;
        $('.rank').click(function () {
          window.location.href = "";
        });
        $('.btn-betting').html("逃跑倒计时");
        $('.countdown').hide();
        //3秒倒计时
        gameDown     = 4;
        var timeout1 = setInterval(function () {
          gameDown -= 1;
          $('.gamedown').show();
          $('.startTime1').html("<span style='text-align:center;display: block;color: #ffffff; font-size: 50px' >" + gameDown + "</span>");
          if (gameDown < 1) {
            clearInterval(timeout1);
            document.getElementById("btn-betting").disabled  = false;
            document.getElementById("ReductionEth").disabled = false;
            document.getElementById("addEth").disabled       = false;
            // document.getElementById("max-btn").disabled=false;
            // document.getElementById("min-btn").disabled=false;
            $('.gamedown').hide();
            $('.countdown').hide();
            $('.multiple').show();
            $('.rock').show();
            var btnval = $('input[name="betbtn"]').val();
            if (btnval == 3) {
              $('.btn-betting').removeClass('checked');
            } else {
              $('.btn-betting').addClass('checked');
            }
            //关闭下单按钮
            $('.btn-betting').html('逃跑');
            if (!$('.btn-betting').hasClass('escape-btn')) {
              //2和3是下单中、下单成功状态，不更改
              if ($('input[name="betbtn"]').val() != 2 && $('input[name="betbtn"]').val() != 3) {
                $('input[name="betbtn"]').val(0);
              }
            } else {
              //5游戏开始才可以逃跑
              $('input[name="betbtn"]').val(5);
            }
            if (value != 1 && value != 0) {
              //alert('1');
              window.location.reload();
            }
            startGame();
            myChart.setOption(option);
          }
        }, 1000);
      }
    }, 100);
  }

  option = {
    grid  : {
      top         : '15%',
      left        : '3%',
      right       : '4%',
      bottom      : '5%',
      containLabel: true
    },
    xAxis : {
      type       : 'value',
      boundaryGap: false,
      axisLine   : {
        lineStyle: {
          color: '#464F6A'
        }
      },
      max        : function (value) {
        var maxnumx = 10;
        if (value.max > maxnumx) {
          maxnumx = value.max;
        }
        return maxnumx;
      },
      axisTick   : { // 刻度
        inside: true,
        show  : true
      },
      axisLabel  : { // 刻度标签
        inside      : true,
        formatter   : '{value}s',
        show        : true,
        showMinLabel: false,//不显示初始刻度
        showMaxLabel: false,//不显示最大刻度
        fontSize    : 9,
      },
      naocation  : 'middle',
      splitLine  : {show: false},
      position   : 'bottom',
      splitLine  : {
        show: false
      }
    },
    yAxis : {
      type    : "value",
      scale   : true,
      axisLine: {
        lineStyle: {
          color: '#464F6A'
        }
      },

      boundaryGap: false,
      min        : 1,
      max        : function (value) {
        var maxnum = 4.5;
        if (value.max > maxnum) {
          maxnum = value.max
        }
        return maxnum;
      },
      axisLabel  : {
        inside      : true,
        formatter   : '{value}x',
        showMinLabel: false,
        showMaxLabel: false,
        fontSize    : 9,
      },
      axisTick   : {
        inside: true,
        show  : true,
      },
      splitLine  : {
        show     : false,
        lineStyle: {color: "#303542"}
      }
    },
    series: [{
      name          : '爆点',
      areaStyle     : {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color : 'rgba(255, 255, 255,0.3)'
        }, {
          offset: 1,
          color : 'rgba(255, 255, 255,0.05)'
        }])
      },
      type          : 'line',
      showSymbol    : false,
      hoverAnimation: false,
      data          : data,
      itemStyle     : {
        color: 'cornflowerblue',
      }
    }]
  };
  document.addEventListener("visibilitychange", function () {
    if (document.hidden === true) {
      // 页面被挂起
    } else {
      //页面激活的时候需要重新加载页面，重新生成折线图
      // window.location.reload();
    }
  });
  //设置折线图初始化
  myChart.setOption(option);

  function startGame() {
    data.splice(0, data.length);
    timmer = setInterval(function () {
      data.push(randomData());
      myChart.setOption(option);
      nox += 0.1;
      nox = +nox.toFixed(1);
    }, 100);
  }

  function endA(win) {
    var winID = 'winperson' + win;
    var Dom   = document.getElementById(winID);
    Dom.addEventListener('animationend', function (e) {
      Dom.parentNode.removeChild(Dom);
    });
  }

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

  //下拉框
  $('.select-head').on('click', function () {
    $(this).next().slideToggle();
    $('.thearrow1').toggle();
    $('.thearrow2').toggle();
  });
  $('.select-body').on('click', '.select-item', function () {
    var text = '<span class="my-balance">' + $(this).children('span').html() + '</span>';
    var src  = $($(this).children('img')[0]).attr("src");
    $('.select-head-img').attr('src', src);
    $('.select-head').html('<img class="select-head-img" src="' + src + '" alt=""> ' + text + '<div class="thearrow thearrow1"></div><div class="thearrow thearrow2" style="display: none"></div>');
    $('.select-body').slideToggle();
    //处理页面数据
    key         = $(this).attr('key');
    var coin_id = $(this).attr('coin-id');
    //押注的币
    $('input[name="coinid"]').val(coin_id);
    //money_pool更改
    $('.jackpot-balance').html(parseFloat(userCoin[key].jackpot).toFixed(2));
    //押注的跨度、信息
    step     = userCoin[key].step;
    ETHCount = userCoin[key].step;
    $('.stake-num').html(step);
    $('.stake-coin').html(userCoin[key].coin_en_name);
    var price = userCoin[key].coin_price;
    var money = parseFloat(price * step).toFixed(2);
    // $('.total-count').html('≈'+money+'CNY');
  });
  //关闭弹出框
  $('.closeshare').on('click', function () {
    $(".tocharge").css('visibility', 'hidden');
    $(".toshare").css('visibility', 'hidden');
  });
  var btn = true;
  //下单
  $('.btn-betting').on('click', function () {
//        if(useragent.search('coinchat') == -1){
//            alert('您已经获得赠送2500CCT，点击确定即可领取！');
//            window.location.href = "https://game.dmgoods.com/h5/member-insert";
//            return ;
//        }
    //禁止频繁提交
    var btnval   = $('input[name="betbtn"]').val();
    // //当前进行的期数、用户压住额、押注用户id，签名
    var userid   = $('input[name="memberid"]').val();
    var nickname = $('input[name="nickname"]').val();
    var pointid  = $('input[name="pointid"]').val();
    var bet      = $('.ETHcount').html();
    var coinname = userCoin['coin_en_name'];
    var obj      = $(this);
    // if(memberid == 0){
    //     layui.use('layer',function(){
    //         layer.confirm('请先登录？', {
    //             btn: ['取消','登录'] //按钮
    //         }, function(index){
    //             layer.close(index);
    //         }, function(){
    //             window.location.href = '/index/login/index';
    //         });
    //     })
    //     return ;
    // }

    //用户下单
    if (!$(this).hasClass('escape-btn')) {
      //2已经点提交了，3下单成功
      if (btnval == 2) {

        return;
      }
      if (btnval == 3) {
        toast({
          message: '请不要频繁操作！',
          type   : 'error'
        });
        return;
      }

      if (pointid == 0 || btnval == 0) {
        // toast({
        //     message: '当前游戏正在进行，请等待下一期',
        //     type: 'error'
        // })
        return;
      }


      $('input[name="betbtn"]').val(2);
      var Data = null;
      $.ajax({
        type    : "post",
        url     : '/cron/bet/bets',
        data    : {bet: bet, user_id: userid, pointid: pointid},
        dataType: "json",
        success : function (res) {
          newData = res;
          if (res.status == 0) {
            toast({
              duration: 1000,
              message : '下单成功！',
              type    : 'success',
            });
            $('.btn-betting').html('已下单');
            $('.btn-betting').addClass('checked');
            $('input[name="betbtn"]').val(3);//下单成功可以开始逃跑了
            $('.yue').html(parseFloat(res.data).toFixed(2));
            obj.addClass('escape-btn');
          } else if (res.status == 10003) {
            // todo 提交失败
            //重新开始下单
            // $('input[name="betbtn"]').val(1);
            // if(userCoin[key].coin_en_name == 'CCT'){
            //     $(".toshare").css('visibility','visible');
            // }else{
            //     $('.tip-coin').html(coinname);
            //     $(".tocharge").css('visibility','visible');
            // }
          } else if (res.status == 10002) {
            $('input[name="betbtn"]').val(1);
            $(".toshare").css('visibility', 'visible');
          } else if (res.status == 10001) {
            // if (res.m == '您的余额已不足，请充值') {
            //     $('.tocharge').css('visibility', 'visible');
            //     return;
            // }
            toast({
              message: '您的余额已不足，请充值',
              type   : 'error'
            });
            //重新开始下单
            $('input[name="betbtn"]').val(1);
          } else {
          }
        }
      })
    } else {
      if (!btn) {
        return;
      }

      //用户逃跑
      //非下单状态不可逃跑
      if (btnval == 4) {
        toast({
          message : '请不要频繁操作！',
          type    : 'error',
          duration: 1000
        });
        return;
      }
      if (btnval == 6) {
        toast({
          message : '您已经逃跑成功！',
          type    : 'error',
          duration: 1000
        });
        return;
      }
      if (btnval == 3) {
        toast({
          message: '请等待游戏开始',
          type   : 'error'
        })
        return;

      }
      if (btnval != 5) {
        toast({
          message: '请等待下一局',
          type   : 'error'
        })
        return;

      }
      var multiple = value.toFixed(2);
      if (multiple == 1.00) {
        return;
      }
      btn         = false;
      var newData = null;
      $.ajax({
        url     : '/cron/bet/escape',
        type    : "post",
        data    : {user_id: userid, pointid: pointid, multiple: multiple},
        dataType: "json",
        success : function (res) {
          newData = res;
          console.log(newData);
          btn = true;
          if (res.status == 0) {
            toast({
              message : '逃跑成功！',
              type    : 'success',
              duration: 1000
            });
            $('input[name="betbtn"]').val(6);//逃跑成功
            $('.btn-betting').html('逃跑成功');
            $('.btn-betting').addClass('checked');
          } else {
            $('input[name="betbtn"]').val(3);
            toast({
              message : res.info,
              type    : 'error',
              duration: 1000
            });
          }
        }
      });
    }
  });
  //
  $('.reconnection').siblings().hide();
  // $('.reconnection').show();
  // $('.reconnection').html('游戏正在进行，请等候下一局...');

  var timer1;

  function theCountDownInit() {
    countDown = 0;
    // $('.rock').hide();
    // $('.btn-betting').html('请等待游戏开始');
    // $('.btn-betting').addClass('checked');
    //$('.countdown').html('请等待游戏开始');
    var timeout = setInterval(function () {

      $('.countdown').hide();
      $('.multiple').show();
      $('.rock').show();
      clearInterval(timeout);
      var btnval = $('input[name="betbtn"]').val();
      if (btnval == 3) {
        $('.btn-betting').removeClass('checked');
      } else {
        $('.btn-betting').addClass('checked');
      }
      //关闭下单按钮
      $('.btn-betting').html('等待下一局');
      if (!$('.btn-betting').hasClass('escape-btn')) {
        //2和3是下单中、下单成功状态，不更改
        if ($('input[name="betbtn"]').val() != 2 && $('input[name="betbtn"]').val() != 3) {
          $('input[name="betbtn"]').val(0);
        }
      } else {
        //5游戏开始才可以逃跑
        $('input[name="betbtn"]').val(5);
      }
      if (value != 1 && value != 0) {

      }
      data.splice(0, data.length);
      timer1 = setInterval(function () {
        data.push(randomData());
        myChart.setOption(option);
        nox += 0.1;
        nox = +nox.toFixed(1);

      }, 100);
    }, 100);
  }

  theCountDownInit();


  //加密或者解密
  var Base                = new Base64();
  // 如果浏览器不支持websocket，会使用这个flash自动模拟websocket协议，此过程对开发者透明
  WEB_SOCKET_SWF_LOCATION = "/public/static/public/swf/WebSocketMain.swf";
  // 开启flash的websocket debug
  WEB_SOCKET_DEBUG        = true;
  connect();

  // 连接服务端
  function connect() {

    function showReconnect() {
      console.log("显示连接状态");
      $('.reconnection').siblings().hide();
      $('.reconnection').html('连接中...');
      $('.reconnection').show();
      // $('#box').show();
    }

    function hideReconnect() {
      console.log("隐藏连接状态");
      //$('.reconnection').siblings().show();
      //$('.reconnection').hide();
      // $('#box').hide();
    }

    var aurl = window.location.host;
    //var wsurl = 'ws://' + aurl + ':9501'
    // 由当前协议自动判断使用ws还是wss
    var protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    var wsurl    = protocol + '://' + aurl + '/ws/'
    ws           = new WebSocket(wsurl);
    // 当有消息时根据消息类型显示同信息
    ws.onmessage = onmessage;
    //连接建立初始化用户信息
    ws.onopen    = function (e) {
      var uid      = $('input[name="memberid"]').val();
      var nickname = $('input[name="nickname"]').val();
//            if(useragent.search('coinchat') == -1){
//                var uid = Math.floor(Math.random()*(9999999-9000000+1)+9000000);
//                var nickname = '游客'+uid;
//            }
      var init = '{"user_id":' + uid + ',"nickname":"' + nickname + '","type":"init"}';
      var b    = new Base64();
      var json = b.encode(init);
      ws.send(json);

      //hideReconnect();
    };

    // 节流方法
    var throttle = function (func, limit) {
      var inThrottle
      return function () {
        var args    = arguments
        var context = this
        if (!inThrottle) {
          func.apply(context, args)
          inThrottle = true
          setTimeout(function () {
            inThrottle = false
          }, limit);
        }
      }
    }


    var reconnect = throttle(function () {
      showReconnect();
      connect();
    }, 5000);

    //中断定时重连
    ws.onclose = function (e) {
      reconnect();
    };
    //出现异常定时重连
    ws.onerror = function () {
      console.log("出现错误");
    };
    //showReconnect();
  }


  function changeopt() {
    $('.showmultiple').text('');
  }

  //接收服务端发出的信息
  function onmessage(e) {
    var b         = new Base64();
    var pointdata = JSON.parse(e.data);
    if (!pointdata) {
      console.info("emptyResponse", e.data);
      return;
    }
    console.info(pointdata);
    switch (pointdata['type']) {
      case 'ping':  //心跳
        var parameter = 'ping';
        ws.send(parameter);
        break;
      case 'bets':
        if (pointdata['is_list'] == 1) {
          var pList = pointdata['list'];
          var pLen  = pList.length;
          var pI    = 0;
          betsList  = setInterval(function () {
            if (pI >= pLen - 1) {
              clearInterval(betsList);
            }
            // console.log('p1:'+pI);
            var html = '<tr class="member_' + pList[pI]['memberid'] + '">';
            html += '<td><img style="height: 0.15rem; width: 0.15rem; margin-right: 5px; border-radius: 50%;" src="' + pList[pI]['head_url'] + '" />' + pList[pI]['nickname'] + '</td>';
            html += '<td>-</td>';
            html += '<td>' + parseInt(pList[pI]['bet']) + '.00元</td>';
            html += '<td>-</td>';
            html += '</tr>';
            $('.user-bets').append(html);
            pI++;
          }, 800);

        } else {
          //更新页面押注信息
          var html = '<tr class="member_' + pointdata['memberid'] + '">';
          html += '<td><img style="height: 0.15rem; width: 0.15rem; margin-right: 5px; border-radius: 50%;" src="' + pointdata['head_url'] + '" />' + pointdata['nickname'] + '</td>';
          html += '<td>-</td>';
          html += '<td>' + parseInt(pointdata['bet']) + '.00元</td>';
          html += '<td>-</td>';
          html += '</tr>';
          $('.user-bets').append(html);
        }
        break;
      case 'escape':
        //逃跑动画
        clearInterval(betsList);
        if (pointdata['is_list'] == 1) {
          var eList = pointdata['list'];

          function setEscape(item) {
            setTimeout(function () {
              //如果第一次进入 不推送逃跑
              var initData = $('.user-bets tr:eq(1)').html();
              if (typeof (initData) == 'undefined') {
                return;
              }
              console.log('escape:', item);
              addWinperson(item['user_name'] + '@' + parseFloat(item['escape']).toFixed(2) + '倍');
              //更新页面数据
              $('.member_' + item['uid']).addClass('win');
              $('.member_' + item['uid'] + ' td').eq(1).html(item['escape'] + '倍');
              $('.member_' + item['uid'] + ' td').eq(3).html((parseFloat(item['escape']) * parseInt($('.member_' + item['uid'] + ' td').eq(2).text())).toFixed(2));
            }, item['setTime']);
          }

          for (var i in eList) {
            setEscape(eList[i]);
          }
          // escapeList = setInterval(function () {
          //     // console.log(eList[eI]);
          //     if (eI >= eLen-1) {
          //         clearInterval(escapeList);
          //     }
          //     // console.log('e1:'+eI);
          //     if (typeof(eList[eI]) == "undefined") {
          //         eI++;
          //     } else {
          //         // 如果第一次进入 不推送逃跑
          //         let initData = $('.user-bets tr:eq(1)').html();
          //         if (typeof(initData)=='undefined') {
          //             clearInterval(escapeList);
          //             return;
          //         }
          //         addWinperson(eList[eI]['user_name'] + '@' + parseFloat(eList[eI]['escape']).toFixed(2) + '倍');
          //         //更新页面数据
          //         $('.member_' + eList[eI]['uid']).addClass('win');
          //         $('.member_' + eList[eI]['uid'] + ' td').eq(1).html(eList[eI]['escape'] + '倍');
          //         $('.member_' + eList[eI]['uid'] + ' td').eq(3).html((parseFloat(eList[eI]['escape']) *
          // parseInt($('.member_' + eList[eI]['uid'] + ' td').eq(2).text())).toFixed(2)); eI++; }  },
          // pointdata['setTime']);
        } else {

          addWinperson(pointdata['user_name'] + '@' + parseFloat(pointdata['escape']).toFixed(2) + '倍');

          //自己逃跑中奖
          if (pointdata['uid'] == $('input[name="memberid"]').val()) {
            // TODO 获取余额 更新到html上
            var balance = parseFloat($('.yue').text()) + parseFloat(pointdata['bet']) * parseFloat(pointdata['escape']);
            $('.yue').html(balance.toFixed(2));
            $('input[name="betbtn"]').val(6);//逃跑成功
            $('.btn-betting').html('逃跑成功');
            $('.btn-betting').addClass('checked');
          }

          //更新页面数据
          $('.member_' + pointdata['uid']).addClass('win');
          $('.member_' + pointdata['uid'] + ' td').eq(1).html(pointdata['escape'] + '倍');
          $('.member_' + pointdata['uid'] + ' td').eq(3).html((parseFloat(pointdata['escape']) * parseInt($('.member_' + pointdata['uid'] + ' td').eq(2).text())).toFixed(2));
        }


        break;

      case 'begin': //开始新的一局
        //document.getElementById("box").style.display="none";
        $('#box').hide();
        clearInterval(timer1);
        clearInterval(timmer);
        flag  = 0;
        nox   = 0;
        value = 1;
        data.splice(0, data.length);
        myChart = echarts.init(document.getElementById('mychart'));
        myChart.setOption(option);

        $('.btn-betting').removeClass('checked');

        var doing = $('input[name="doing"]').val();
        if (doing != 1) {
          setTimeout(function () {
            $('.btn-betting').removeClass('escape-btn');
            $('input[name="doing"]').val(1);
            $('input[name="pointid"]').val(pointdata['gid']);
            $('.startTime').html(8.0);
            // $('.startTime1').html(3.0);

            //可以开始下单了
            $('.btn-betting').html('下单');
            $('input[name="betbtn"]').val(1);
            // $('.reconnection').hide();


            //页面数据效果
            setTimeout("$('.countdown').show()", 2000);
            // setTimeout("$('.gamedown').show()",2000);
            setTimeout("$('.multiple').hide()", 2000);
            setTimeout("$('.jackpot').show()", 2000);
            setTimeout("$('.explosion').hide()", 2000);
            $('.user-bets tr').each(function (index) {
              if (index != 0) {
                $(this).remove();
              }
            });
          }, 800);
          setTimeout(theCountDown, 2000);
        }
        setTimeout(changeopt, 3000);
        break;

      case 'over':
        //document.getElementById("box").style.display="none";
        $('#box').hide();
        clearInterval(escapeList);
        clearInterval(betsList);
        setTimeout(clearInterval(timmer), 1000);
        //爆炸效果
        var doing = $('input[name="doing"]').val();
        if (doing != 0) {
          explosion(pointdata['boom']);
          $('.btn-betting').removeClass('checked');
          $('input[name="betbtn"]').val(1);
          $('input[name="doing"]').val(0);
          $('.btn-betting').removeClass('escape-btn');
          $('.boomImg').hide();

          //未逃跑的用户
          $('.user-bets tr').each(function (index) {
            if (index != 0 && !$(this).hasClass('win')) {
              $(this).addClass('lose');
            }
          });
        }
        //处理页面数据
        $('.show-record').children('.record-item').eq(0).hide(1000);
        setTimeout("$('.show-record').children('.record-item').eq(0).remove()", 1000);
        var html = '<div class="record-item">';
        html += '<div class="c-t">';
        html += '<img src="/public/static/index/images/show-recod.png" alt="">';
        html += '<span>' + pointdata['gid'] + '</span>';
        html += '</div>';
        if (pointdata['boom'] < 1.5) {
          html += '<div class="c-b islow">';
        } else {
          html += '<div class="c-b isheugh">';
        }
        html += '<span>' + (Math.ceil(pointdata['boom'] * 100) / 100) + 'x</span>';
        html += '</div>';
        html += '</div>';
        $('.show-record').append(html);
        break;
      case 'jackpotChange'://money_pool更新
        var jackpotBalance = pointdata;
        $('.jackpot-balance').html(parseFloat(jackpotBalance['rmb']).toFixed(2));
        userCoin['jackpot'] = parseFloat(jackpotBalance['rmb']).toFixed(2);
        break;
      case 'maxStake'://最大押注更新
        var jackpotBalance    = pointdata;
        userCoin['max_stake'] = parseFloat(jackpotBalance['rmb']).toFixed(2);
        // userCoin['max_stake'] = 1000;
        break;

    }
  }

});
