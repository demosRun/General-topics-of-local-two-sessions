// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

var scale = document.documentElement.clientWidth / document.documentElement.clientHeight
if ((scale) < 1) {
  document.body.classList.add('phone')
  setTimeout(function () {
    owo.query = function (str) {
      return document.querySelectorAll('.owo ' + str)
    }
    var owoDom = document.querySelectorAll('.owo[template]')
    for (var ind = 0; ind < owoDom.length; ind++) {
      var plugEL = owoDom[ind]
      var plugName = plugEL.getAttribute('template')
      // console.log(owo.script[plugName])
      _owo.handlePage(owo.script[plugName], plugEL)
      _owo.handleEvent(plugEL, owo.script[plugName])
    }
    document.getElementsByClassName('table-box')[0].style.display = 'block'
  }, 100)
} else {
  document.body.classList.add('pc')
}
setTimeout(function () {
  document.body.style.opacity = '1'
}, 400)

// windowAddMouseWheel();
// function windowAddMouseWheel() {
//   var scrollFunc = function (e) {
//     e = e || window.event;
//     if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
//       if (e.wheelDelta > 0) { //当滑轮向上滚动时
//         alert("滑轮向上滚动");
//       }
//       if (e.wheelDelta < 0) { //当滑轮向下滚动时
//         alert("滑轮向下滚动");
//       }
//     } else if (e.detail) {  //Firefox滑轮事件
//       if (e.detail> 0) { //当滑轮向上滚动时
//         alert("滑轮向上滚动");
//       }
//       if (e.detail< 0) { //当滑轮向下滚动时
//         alert("滑轮向下滚动");
//       }
//     }
//   };
//   //给页面绑定滑轮滚动事件
//   if (document.addEventListener) {
//     document.addEventListener('DOMMouseScroll', scrollFunc, false);
//   }
//   //滚动滑轮触发scrollFunc方法
//   window.onmousewheel = document.onmousewheel = scrollFunc;
// }
