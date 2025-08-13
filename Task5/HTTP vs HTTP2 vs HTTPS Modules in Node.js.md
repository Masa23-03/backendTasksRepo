# What is the purpose of each module?

**http**: The http module supports the features of the HTTP/1.1 protocol and focuses on stream handling and message parsing. Because it's stream-based, it doesn't buffer entire requests/responses; instead, data is read and sent as chunks, which is great for large payloads and heavy servers.

**http2**: The http2 module implements the HTTP/2 protocol using sessions and streams. It makes communication between server and client more symmetric, meaning both sides can emit and receive events, and it supports multiplexing (multiple concurrent streams over a single connection).

**https**: The https module implements HTTP over TLS/SSL in Node.js. It encrypts requests and responses, authenticates the server's identity using certificates, and protects data integrity. It's the same as the http module, but with the TLS options.


# Key technical differences between HTTP/1.1 and HTTP/2
| http  | http2 |
| --- | --- |
| asymmetric: only client can start a request the server can only respond  | symmetric:  both client and server have similar roles. they can open multiple streams over a single connection |
| strict, limited: can only have one request-response per connection | Multiplexing: multiple concurrent streams over a single connection. |
| server can't push anything without a request | server can push data into client |
|  different objects/events on each side. | similar events on both sides: many events can be emitted by server code or client code like error, stream. |
| sends headers as plain text  | compress headers using HPACK |
| text-based start line and headers  | binary framing for headers and data |


# When to use each module in a real-world application
- **HTTP**
    - internal services inside a private network.
    - local development
    - behind a reverse proxy, which is used for protection.
    - Automated testing.
- **HTTP2**
    - When high performance is needed.
    - gRPC because it requires HTTP2.
    
- **HTTPS**
    - public-facing site or API.
    - If we need secure and encrypted communication.
    - When we don't use a reverse proxy to handle TLS termination in our application.