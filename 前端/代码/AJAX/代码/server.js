// 引入express
const { request, response } = require('express');
const express = require('express');
// 创建应用对象
const app = express()
// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/server', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  setTimeout(() => {
    response.send('HELLP EXPRESS');
  }, 2000)

})
app.post('/server', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 响应一个数据
  const data = {
    name: '名字'
  }
  // 对对象进行字符串转换
  let str = JSON.stringify(data)
  // 设置响应体
  response.send(str);
})
app.get('/test', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  setTimeout(() => {
    response.send('HELLP EXPRESS');
  }, 2000)

})
// jQuery
app.all('/jQuery-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  const data = { name: '名字' };
  response.send(JSON.stringify(data));
})
// axios
app.all('/axios-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  const data = { name: '名字' };
  response.send(JSON.stringify(data));
})
// 监听端口启动服务
app.listen(8000, () => {
  console.log("服务器已经启动,8000端口监听中");
})