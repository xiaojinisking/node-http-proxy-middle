var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();
app.use(
	'/', 	//本地请求地址
	proxy({
		target: 'https://api.cp.17kouyu.com', 	//转向外部请求实际地址
		changeOrigin: true,
		// 修改响应头信息，实现跨域并允许带cookie
	    onProxyRes: function(proxyRes, req, res) {
	        res.header('Access-Control-Allow-Origin', 'http://127.0.0.1');
	        res.header('Access-Control-Allow-Credentials', 'true');
	    },
	    // 修改响应信息中的cookie域名
	    cookieDomainRewrite: '127.0.0.1'
	})
);

app.listen(3000);
