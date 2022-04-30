// 1. offsetTop < scrollTop + clientHeight
// let img = document.getElementsByTagName('img')
// let num = img.length
// let count = 0
// function lazyLoad() {
//   for(let i = count; i < num.length; i++) {
//     let viewHeight = document.documentElement.clientHeight
//     let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
//     if(img[i].offsetTop < viewHeight + scrollTop) {
//       if(img[i].src !== 'default.jpg') continue
//       img[i].scr = img[i].getAttribute('data-src')
//       count++
//     }
//   }
// }
// window.addEventListener('scroll', lazyLoad)


// 2. getBoundingClientRect().top < clientHeight
// let img = document.getElementsByTagName('img')
// let num = img.length
// let count = 0
// function lazyLoad() {
//   for(let i = count; i < num.length; i++) {
//     let viewHeight = document.documentElement.clientHeight
//     if(img[i].getBoundingClientRect().top < viewHeight) {
//       if(img[i].src !== 'default.jpg') continue
//       img[i].scr = img[i].getAttribute('data-src')
//       count++
//     }
//   }
// }
// window.addEventListener('scroll', lazyLoad)
