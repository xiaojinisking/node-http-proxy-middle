# node-http-proxy-middle

## node 中间件代理方式解决 前端跨域请求
- 核心点：①：本地开发请求地址为 本地地址，然后通过代理的转发规则转到实际的接口地址
         
         ②：设置头信息Access-Control-Allow-Origin 和 Access-Control-Allow-Credentials
         
