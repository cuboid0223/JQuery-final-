$(document).ready(function () {

  // navbar dropdown open
  $(".dropdown").click(function (e){
    e.preventDefault();
    $('.subList').slideToggle();
  })




  // 打開文字大小設定區塊
  $(".font-btn").click((e) => {
    e.preventDefault();
    $(".font-box").toggleClass("font-box-active");
  });

  //文字大小設定功能
  $(".btn-fs-lg").click((e) => {
    e.preventDefault();
    $("body").css("font-size", "20px");
  });
  $(".btn-fs-md").click((e) => {
    e.preventDefault();
    $("body").css("font-size", "16px");
  });
  $(".btn-fs-sm").click((e) => {
    e.preventDefault();
    $("body").css("font-size", "12px");
  });

  // 按往上按鈕 回到網頁頂部
  $(".top-btn").click((e) => {
    e.preventDefault();
    $("body, html").animate({ scrollTop: 0 }, "1000");
  });





});
