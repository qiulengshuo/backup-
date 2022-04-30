# axios

## http

### http请求报文

1. 请求行

   method url

   GET /product_detail?id=2  query形式  params形式  加上/2

   POST /login

   不同类型的请求及其作用：

   GET: 从服务器端读取数据

   POST: 向服务器端添加新数据

   PUT: 更新服务器端已有数据

   DELETE: 删除服务器端数据

2. 请求头

   Host: www.baidu.com

   Cookie: BAIDUID=AD3B0FA706E; BIDUPSID=AD3B0FA706;

   Content-Type: application/x-www-form-urlencoded 或者 application/json 请求体的类型 

3. 请求体(post请求写在请求体，get请求方式写在url上)

   username=tom&pwd=123 	 urlencode 的格式

   {"username": "tom", "pwd": 123}  	json格式
   
    Content-Type: multipart/form-data	用于文件上传请求

## http响应报文

1. 响应状态行:

   status statusText

   200 OK

   404 Not Found

   常见的响应状态码：

   200 OK          请求成功。一般用于GET与POST请求

   201 Created        已创建。成功请求并创建了新的资源

   401 Unauthorized     未授权/请求要求用户的身份认证

   404 Not Found       服务器无法根据客户端的请求找到资源

   500 Internal Server Error   服务器内部错误，无法完成请求

2. 多个响应头:

   Content-Type: text/html;charset=utf-8	html的文本格式的响应体

   Set-Cookie: BD_CK_SAM=1;path=/

3. 响应体:

   html文本/json文本/js/css/图片...

## API分类

### REST API:  restful

(1)   发送请求进行CRUD哪个操作由请求方式来决定

(2)   同一个请求路径可以进行多个操作

(3)   请求方式会用到GET/POST/PUT/DELETE

### 非REST API:  restless

(1)   请求方式不决定请求的CRUD操作

(2)   一个请求路径只对应一个操作

(3)   一般只有GET/POST

## ajax

本质上是http请求

XHR和fetch发出的都是ajax请求

### 区别一般http请求与ajax请求

ajax请求是一种特别的http请求

对服务器端来说, 没有任何区别, 区别在浏览器端

浏览器端发请求: 只有XHR或fetch发出的才是ajax请求, 其它所有的都是非ajax请求

浏览器端接收到响应：

(1)   一般请求: 浏览器一般会直接显示响应体数据, 也就是我们常说的刷新/跳转页面

(2)   ajax请求: 浏览器不会对界面进行任何更新操作, 只是调用监视的回调函数并传入响应相关数据

## 使用git版本控制

1. 创建本地仓库

2. 创建远程仓库

3. 将本地仓库的代码推送到远程仓库

4. 如果本地有变化，推送到远程

5. 远程有变化，拉取到本地

6. 新员工克隆远程仓库

7. ```
   PS C:\Users\12263\Desktop\http-ajax-axios> git add .
   PS C:\Users\12263\Desktop\http-ajax-axios> git commit -m "init app"
   [master (root-commit) 9e1ca5a] init app
    17 files changed, 4221 insertions(+)  
    create mode 100644 .gitignore
    create mode 100644 README.md
    create mode 100644 db.json
    create mode 100644 doc/01_http.md
    create mode 100644 "doc/04_axios\346\272\220\347\240\201\345\210\206\346\236\220.md"
    create mode 100644 package.json
    create mode 100644 server.js
    create mode 100644 test/01_xhr_axios.html
    create mode 100644 test/02_xhr_mini-axios.html
    create mode 100644 test/03_axios1_base.html
    create mode 100644 test/03_axios2_create.html
    create mode 100644 test/03_axios3_chain.html
    create mode 100644 test/03_axios4_cancel.html
    create mode 100644 test/axios.js
    create mode 100644 yarn.lock
   PS C:\Users\12263\Desktop\http-ajax-axios> git remote add origin git@github.com:qiulengshuo/axios.git
   PS C:\Users\12263\Desktop\http-ajax-axios> git push origin master
   Enumerating objects: 21, done.
   Counting objects: 100% (21/21), done.
   Delta compression using up to 8 threads
   Compressing objects: 100% (20/20), done.
   Writing objects: 100% (21/21), 41.30 KiB | 4.13 MiB/s, done.
   Total 21 (delta 4), reused 0 (delta 0), pack-reused 0
   remote: Resolving deltas: 100% (4/4), done.
   To github.com:qiulengshuo/axios.git
    * [new branch]      master -> master
   PS C:\Users\12263\Desktop\http-ajax-axios> git checkout -b dev
   Switched to a new branch 'dev'
   本地修改 add commit push推送 
   远程修改 git pull origin dev拉取
   克隆相关
   12263@LAPTOP-ML32AL5M MINGW64 ~ (master)
   $ git clone https://github.com/qiulengshuo/axios.git
   Cloning into 'axios'...
   remote: Enumerating objects: 21, done.
   remote: Counting objects: 100% (21/21), done.
   remote: Compressing objects: 100% (16/16), done.
   remote: Total 21 (delta 4), reused 21 (delta 4), pack-reused 0
   Receiving objects: 100% (21/21), 41.30 KiB | 247.00 KiB/s, done.
   Resolving deltas: 100% (4/4), done.
   
   12263@LAPTOP-ML32AL5M MINGW64 ~ (master)
   $ pwd
   /c/Users/12263
   
   12263@LAPTOP-ML32AL5M MINGW64 ~ (master)
   $ cd axios
   
   12263@LAPTOP-ML32AL5M MINGW64 ~/axios (master)
   $ git branch
   * master
   
   12263@LAPTOP-ML32AL5M MINGW64 ~/axios (master)
   $ git checkout -b dev origin/dev 切换本地分支到dev
   Switched to a new branch 'dev'
   Branch 'dev' set up to track remote branch 'dev' from 'origin'.
   ```

## axios的基本使用

   ```javascript
   axios.defaults.baseURL = 'http://localhost:3000';
   // get请求	成功回调response 失败回调error
   axios.get('/posts', {
       params: {
         id: 3
       }
     })
     .then(
   	response => {
           console.log(response.data,response.status,response.statusText)
       }
   	).catch(error=>{
       alert(error.message)
   })
   
   
   // get请求
   axios({   // 配置对象：属性名是一些特定名称
         method:  'GET',
         url: 'http://localhost:4000/getPosts',
         // url: 'http://localhost:4000/getPosts/2',// params参数
         // url: 'http://localhost:4000/getPosts?id=2', // params参数
         params: { // 指定query参数
           id:2
         }
       }).then(
         response => {
           console.log(response.data,response.status,response.statusText)
         },
         error => {
           alert(error.message)
         }
       )
     
   
   // post请求
   axios.post('/post',{title:'ggg',author:'fff'},{})
   .then(
         response => {
           console.log(response.data,response.status,response.statusText)
         },
         error => {
           alert(error.message)
         }
       )
   
   
   // post请求
   axios({   // 配置对象：属性名是一些特定名称
         method:  'POST',
         url: 'http://localhost:4000/Post',
         data: {  // 请求体参数
           title: 'ccc',
           author: 'ddd'
         }
       }).then(
         response => {
           console.log(response.data,response.status,response.statusText)
         },
         error => {
           alert(error.message)
         }
       )
   
   // create方法  创建和axios一样的函数、对象
   const instance = axios.create({
       baseURL: 'http://localhost:3000',
       // 两个后台端口
   })
   instance({
       url: '/posts'
   })


	// 拦截器
	// 请求拦截器 在真正发请求前执行的回调函数  先执行后一个的请求拦截器
	// 作用 对请求的配置做一些处理：data、header、界面loading提示	 //	    对请求进行检查，如果不满足条件不发请求
axios.interceptors.request.use(function (config) {
    return config;
    // 必须返回config
    // 请求前发送某个操作成功的回调
  });
	// 响应拦截器 先执行前一个响应拦截器 在得到响应后执行的回调函数(在axios函数回调之前) 
	// 作用： 对请求成功的数据做一些处理
	//	     对请求失败的数据进行处理
axios.interceptors.response.use(function (response) {
    return response.data;
    // 请求成功的回调
  }, function (error) {
    return Promise.reject(error);
    // 请求失败的回调
  });

axios({
    url: '/posts'
}).then(
	data=>{
        console.log('onResolved()',data)
    },
    error=>{
        console.log('onRejected()')
    }
)
	//取消请求 进入error
const CancelToken = axios.CancelToken;
let cancel
axios.get('/user/12345', {
  cancelToken: new CancelToken((c)=>{ // 在CancelToken中立即同步执行，并传入用于取消请求的函数
    cancel = c
  })
});
cancel('强制取消');   // 小括号的内容就是error.message

axios.isCancel(error) // 判断是cancel对象还是函数，如果是函数则是取消请求的函数返回值为true，如果是对象则是取消请求发出的错误对象
// promise相关是异步执行
//axios的cancelToken是同步的
   ```

   

## axios源码分析

### axios与Axios的关系?

1. 从语法上来说: axios不是Axios的实例
2. 从功能上来说: axios是Axios的实例
3. axios是Axios.prototype.request函数bind()返回的函数
4. axios作为对象有Axios原型对象上的所有方法, 有Axios对象上所有属性

### instance与axios的区别?

1. 相同: 

    (1)   都是一个能发任意请求的函数: request(config)

    (2)   都有发特定请求的各种方法: get()/post()/put()/delete()

    (3)   都有默认配置和拦截器的属性: defaults/interceptors

2. 不同:

   (1)   默认匹配很可能不一样

   (2)   instance没有axios后面添加的一些方法: create()/CancelToken()/all()





   返回非promise，那么这个值通过Promise.resolve静态方法转成一个状态确定的Promise返回

   返回promise，那么这个新的promise将被返回作为作为后续then/catch方法的的实际调用Promise

   不返回，也是返回一个一个状态确定的Promise,最终的决议值为undefined





- `await`的意思就是**等待**。它后面可以跟一个表达式。如果是值(如字符串、数字、普通对象等等)的话，返回值就是本身的值。
- 不过最常用的是后面跟一个`promise`对象。`await`会等待这个`promise`的状态由`pending`转为`fulfilled`或者`rejected`。在此期间它会阻塞，延迟执行await语句后面的语句。
- 如果`promise`对象的结果是`resolve`，它会将`resolve`( )的参数值，作为`await`表达式的运算结果。