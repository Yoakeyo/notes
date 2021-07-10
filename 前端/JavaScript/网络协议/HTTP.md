# HTTP

HTTP(Hypertext Transport Protocol / 超文本传输协议)

详细规定了浏览器和万维网服务器之间的互相通信规则

## 请求报文

重点是格式与参数

```http
行		POST /s?ie=utf-8	HTTP/1.1
头 	Host: baidu.coom
		 Cookie: name=asd
		 Content-type: application/x-www-form-urlencoded
		 User-Agent: chrome 83
空行
体		username=admin&password=admin
```

POST请求体可以为空

GET请求体不能为空

## 响应报文

```http
行			HTTP/1.1 200 OK
头			Content-Type: text/html;charset=utf-8
		   Content-length: 2048
		 	 Content-encoding: gzip
空行		
体			<html>
					<head></head>
					<body>
					<h1>标题</h1>
					</body>
			</html>
```

### onreadystatechange

> readystate 是 xhr 对象中的属性
>
> 表示状态
>
>  0	 被初始化时
>
>  1 	初始化完成
>
>  2 	请求发送
>
>  3 	服务端返回了部分结果
>
>  4	 服务端返回了所有结果

## 响应状态码

>2xx			成功
>
>3xx			重定向
>
>4xx			请求错误
>
>5xx/6xx	服务器错误
