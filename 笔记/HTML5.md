# HTML5

新增了语义化标签和语义化的属性

本地存储

音频和视频功能

画图--canvas

## 优势

开发便捷

移动端适配非常好

# 语义化标签

语义化：有真正的含义，识别起来方便

```html
<header></header> 头部
<hgroup></hgroup> 全局标题分组 可以出现多对
<footer></footer> 尾部
<nav></nav> 导航
<article></article> 页面内容
<section></section> 页面一节内容
<aside></aside> 页面侧边栏内容
document.querySelector(‘选择器’)
获取div中所有类样式
divobj.classList
新增一个类样式
divObj.classList.add("five")
移除一个类样式
divObj.classList.remove("three")
是否包含某个类样式
divObj.classList.contains("two")
切换类样式 有five或没有five
divObj.classList.toggle("five")
获取多个标签
document.querySelectorAll('p')
```

HTML5中自定义属性在html标签中定义：

1. data 开始
2. data-属性名
3. 获取自定义属性： obj.dataset
4. 设置自定义属性： obj.dataset.height="170" 注意驼峰命名法

# Canvas 标签

为页面提供画图画板

canvas.getContext("2d") 获取绘制对象-----画笔

```javascript
画矩形

画一个纯矩形
strokeRect()
填充一个矩形
fillRect()
重新绘制并设置为透明
clearRect()
三个方法的参数个数一致
参数一：起始点的横坐标
参数二：起始点的纵坐标
参数三：矩形的宽
参数四：矩形的高

rect()
stroke()

默认黑色
设置（边框）的颜色
strokeStyle="green"

设置（描边）的宽度
lineWidth=10

设置连接处的样式
lineJoin="round"   miter 直角 bevel 三角


绘制路径

线两端

lineCap="round" 圆形 增加一个半圆 butt 方块 square 方块  增加一半厚度

开始的起点
参数一 起始点的横坐标
参数二 起始点的纵坐标
ctx.moveTo(100,100)

某个点的位置
参数一 某个点的横坐标
参数二 某个点的纵坐标
ctx.lineTo(200,200)
ctx.lineTo(100,200)

绘制
ctx.stroke()

所有样式存在覆盖情况
除非在样式前加上 ctx.beginPath() 清空一个(路径/样式)容器

ctx.closePath() 自动闭合路径

ctx.save() 保存状态 相当于样式栈 保存颜色
ctx.beginPath()
ctx.restore() 恢复到上一次的状态 取到样式容器中去

```

