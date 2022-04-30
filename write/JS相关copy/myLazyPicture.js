//  1.  offsetTop < clientHeight + scrollTop
// let img = document.getElementsByTagName("img")
// let len = img.length
// let count = 0
// function lazyLoad () {
//   let viewHeight = document.documentElement.clientHeight
//   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
//   for(let i = count; i < len; i++){
//     if(img[i].offsetTop < viewHeight + scrollTop) {
//       if(img[i].src !== "default.jpg") continue
//       img[i].src = img[i].getAttribute("data-src")
//       count++
//     }
//   }
// }
// window.addEventListener("scroll", lazyLoad)

//  2.  getBoundingClientRect().top < clientHeight
// let img = document.getElementsByTagName("img")
// let len = img.length
// let count = 0
// function lazyLoad () {
//   let viewHeight = document.documentElement.clientHeight
//   for (let i = count; i < len; i++) {
//     if (img[i].src !== "default.jpg") continue
//     if (img[i].getBoundingClientRect().top < viewHeight) {
//       img[i].src = img[i].getAttribute("data-src")
//       count++
//     }
//   }
// }
// window.addEventListener("scroll", lazyLoad)

//  3.  InterSectionObserver
let img = document.getElementsByTagName("img");

const observer = new IntersectionObserver(changes => {
  //changes 是被观察的元素集合
  for(let i = 0, len = changes.length; i < len; i++) {
    let change = changes[i];
    // 通过这个属性判断是否在视口中
    if(change.isIntersecting) {
      const imgElement = change.target;
      imgElement.src = imgElement.getAttribute("data-src");
      observer.unobserve(imgElement);
    }
  }
})
Array.from(img).forEach(item => observer.observe(item));
