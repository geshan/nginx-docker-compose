const express = require('express');
const app = express();
const port = 8181;

app.get('/', (req, res) => {
  res.send({message: 'alive'})
});

app.get('/summary', (req, res) => {
  res.send({
    source: 'https://en.wikipedia.org/wiki/HTTP',
    summary: `HTTP (Hypertext Transfer Protocol) is a request-response protocol for distributed, collaborative, hypermedia information systems. It defines the format of messages that are exchanged between a client and a server. HTTP can be used to transmit text, images, sound, video, and other multimedia files. In addition, it provides a way to link resources to each other, which is the basis of the World Wide Web.\n\nHTTP was developed by Tim Berners-Lee at CERN in 1989. The first version of the protocol, HTTP/0.9, was released in 1991. HTTP/1.0 was released in 1996, and HTTP/1.1 was released in 1997. HTTP/2 was released in 2015, and HTTP/3 was released in 2022.\n\nThe most common use of HTTP is in the World Wide Web. HTTP is used to retrieve web pages from web servers and to send data from web browsers to web servers. However, HTTP can also be used for other purposes, such as file transfer and remote procedure calls.\n\nHTTP is a stateless protocol, which means that each request and response is independent of the previous ones. This makes HTTP easy to implement and use. However, it also means that HTTP cannot be used to track the state of a session.\n\nTo track the state of a session, HTTP can be used with cookies. Cookies are small pieces of data that are stored on the client's computer. Cookies can be used to keep track of a user's preferences, shopping cart, and other information.\n\nHTTP is a fundamental technology for the World Wide Web. It is a simple, yet powerful protocol that can be used to transmit a wide variety of data.`
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
