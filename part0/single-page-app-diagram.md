# Exercise 0.5 | Single Page App Diagram

Task: Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: fetch main page using HTTPS GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser: server sends html to be renderred by the browser with status code 200 OK
    NOTE over browser: Browser renders HTML page which was sent by server and then renders it.
    NOTE right of browser: The stylesheet main.css and the javascript spa.js are fetched which are located in the header of html.

    browser->>server: main.css fetched using HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: server responds with main.css with status code 200 OK

    browser->>server: spa.js fetched using HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->>browser: server responds with spa.js with status code 200 OK

    NOTE over browser: Browser runs and renders spa.js, which fetches the data.json from the server
    browser->>server: data.json fetched using HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: server responds with data.json with status code 200 OK

    NOTE over browser: User enters a new note
    browser->>server: content is sent to server using HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->>browser: server responds with status code 201 Created
    NOTE over server: the content is sent to server with content-type headers of json format so server knows how to parse the content received.
```
