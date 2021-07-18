# Health Check Proxy
This is a **proxy server** to check the health status of the Private **Gitlab** Server at https://git.ct-goh.com

If the Gitlab server is down, the proxy will redirect the request to **Github**.

The proxy is deployed in a private server with Docker and NGINX as the reverse proxy
