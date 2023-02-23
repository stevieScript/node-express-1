### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Promises, async/await, callbacks, generators, observables, etc.

- What is a Promise?
  A promise is an object that represents the eventual completion or failure of an asynchronous operation. It's like a placeholder for the result of an asynchronous operation. 

- What are the differences between an async function and a regular function?
  An async function returns a promise. A regular function returns a value.

- What is the difference between Node.js and Express.js?
  Node is a server-side JavaScript environment. Express is a web application framework for Node. Express is built on top of Node and provides a set of features to help you build web applications.

- What is the error-first callback pattern?
  Error-first callbacks are callbacks that take an error object as the first argument. If the error object is null, then there was no error. If the error object is not null, then there was an error.

- What is middleware?
  Middleware is a function that runs in the middle of the request/response cycle. It can be used to modify the request or response object, or to end the request/response cycle.

- What does the `next` function do?
  Next is a function that is passed to middleware functions. It is used to call the next middleware function in the stack. If next is not provided, then the request/response cycle will not continue. We mainly use it in a catch block to handle errors.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

The code belows makes 3 separate requests to the GitHub API. It would be better to make a single request to the GitHub API and return all 3 users in a single response using the `Promise.all` method. I would do it with an axios request instead of jQuery. For naming I would possibly add a "b" to joel (joelB) to make it more clear incase you end up pulling another joel. Overall I would not make the names so specific in case you need to re-use this code for other users. I would also add a comment to explain what the code is doing.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

