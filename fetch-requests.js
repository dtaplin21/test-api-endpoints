/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/






/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

fetch("/posts", {

  method: "post",
  headers: {
    "COntent-Type": "application/json"
  },
  body: JSON.stringify({
    message: "this is our message. Lets goooooo"
  })
}).then((res) => res.json())
.then((data) => console.log(data))
