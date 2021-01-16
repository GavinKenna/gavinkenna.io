# gavinkenna.io

A pet project to test the capabilities of my Raspberry Pi.

## Tech Used
For this project I've used the following tech:
* Vue.js
* Nuxt.js
* Docker
* Bootstrap (for the design)

Tools used:
* Portainer (for managing the docker containers on my Raspberry Pi)
* Nginx (for routing traffic from my Pi to the docker container for my site)
* IntelliJ (trusty IDE)

## Building and Running
### For Development
To get up and running execute the following:
```
$ npm install
$ npm run dev
```

This will start the website at http://localhost:8080

### For Production
For production releases, execute the following:
```
$ npm install
$ npm run build
$ npm run start
```
Same as above, this will run the website at http://localhost:8080

## Infrastructure
I'm running this website as a Docker container on my Pi. To make this accessible to the internet I had to accomplish
the following:

* Route all external traffic from my router to my Pi
    * If we want people to visit the site they must first get through my router. 
* Set up a static IP address
    * My router doesn't allow for static IP addresses so I simply used the online service No-IP, which
    allows dynamic IP addresses to have a static hostname. They also offer a client tool to download that I run on my
    Pi that simply updates my hostname record if and when the public IP changes. So in essence we now have a static 
    hostname we can use with our DNS redirects
* Buy a domain
    * Straightforward enough. Once the domain name (and SSL cert) was purchased I set the CNAME record to my hostname
    given to me from No-IP.
* Generate certs
    * To get HTTPS working I needed a `CSR` file and a `key` file generated. I did this by executing the following:
        `openssl req -new -newkey rsa:2048 -nodes -keyout gavinkenna.io_tld.key -out gavinkenna.io_tld.csr`
    * This CSR file was then used in creating the SSL cert.
* After my cert was verified I downloaded the keys and popped them into a directory on my Raspberry Pi. This directory
was then made available to my Nginx docker container. 

### Nginx Configuration
My Nginx configuration is very basic and is as follows:
```

# Sometimes I run the website in production straight in the host, as opposed to running it within a Docker container.
# This is a handy hack to redirect Nginx from outside of the container to the host machine
upstream web-app {
  server 172.17.0.1:8080;
}

server {
	listen       80;
	server_name  gavinkenna.io;
	location / {
		root   /usr/share/nginx/html;
		index  index.html index.htm;
		proxy_pass http://web-app;
		proxy_set_header Host $host;
		proxy_set_header X-Forwarded-For $host;
		proxy_set_header X-Forwarded-Proto $scheme;
		add_header X-Frame-Options “”;
	}
}
server {
	listen	443 ssl;
	#Previously generated SSL keys and certs. I won't be committing those ;-)
	ssl_certificate /etc/ssl/private/gavinkenna.io.crt;
	ssl_certificate_key /etc/ssl/private/gavinkenna_io.key;
	server_name gavinkenna.io;
	access_log /var/log/nginx/nginx.vhost.access.log;
	error_log /var/log/nginx/nginx.vhost.error.log;
	location / {
	root   /usr/share/nginx/html;
		index  index.html index.htm;
		proxy_pass http://web-app;
		proxy_set_header Host $host;
		proxy_set_header X-Forwarded-For $host;
		proxy_set_header X-Forwarded-Proto $scheme;
		add_header X-Frame-Options “”;

	}

}
```

## Google Analytics
I was easily able to add Google Analytics by installing `nuxtjs/google-analytics` via the following command:
```$xslt
$ npm install --save-dev @nuxtjs/google-analytics
```

After that was installed I updated my `nuxt.config.js` file to use my Google tracking ID:
```$xslt
googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  }
```

The environmental variable `GOOGLE_ANALYTICS_ID` is stored within a non-committed `.env` file. You can copy the 
`.env.example` file and populate your own `GOOGLE_ANALYTICS_ID`.
