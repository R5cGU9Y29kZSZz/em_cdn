//标签页
$(function () {

  $("#game").click(function () {
    location.href = "/index/index/index";
  });

  //分享页域名
  $("#share").click(function () {
    location.href = "/index/user/share";

  });
  $("#history").click(function () {
    location.href = "/index/user/yongjin";
  });
  $("#wo").click(function () {
    location.href = "/index/user/index";
  });
  $(".backto").click(function () {
    history.go(-1);
  });
});