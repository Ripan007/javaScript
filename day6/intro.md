# DOM:

## How the dom gets created ?

- All the code will get converted to a node
- Tree structure => this node structure gets
- Mounted on screen

## window v/s document

- document object is a part of window object
- document object contains only html css tags access.
- whereas window object contains access to all the functions present in browser window.

## What is the difference between window, screen, and document in JavaScript?

- Window is the main JavaScript object root, aka the global object in a browser, and it can also be treated as the root of the document object model. You can access it as window.

- window.screen or just screen is a small information object about physical screen dimensions.

- window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM.

- Since window is the global object, you can reference any properties of it with just the property name - so you do not have to write down window. - it will be figured out by the runtime.

- window is the execution context and global object for that context's JavaScript
- document contains the DOM, initialized by parsing HTML
- screen describes the physical display's full screen

 <img src="https://i.stack.imgur.com/BkAjU.jpg" alt="image"/>

## what are the different way of access element ?

- `document.getElementById("") `
- `document.getElementByClassName("")`
- `document.getElementsByTagName("")`
- `document.querySelectorAll("")`
- `document.querySelector("")`

## access using documentID / documentTag

- convert to a array
- require index no to access

## Difference b/w innerText innerHTML

- innerText returns all text contained by an element and all its child elements. innerHtml returns all text, including html tags, that is contained by an element

## bublling , capturing , propagation

- link :- https://javascript.info/bubbling-and-capturing
- link :- https://www.loginradius.com/blog/engineering/javascript-events-bubbling-capturing-and-propagation/#:~:text=What%20is%20%E2%80%9Cpropagation%E2%80%9D%3F,until%20it%20reaches%20its%20destination.

  <img src="https://javascript.info/article/bubbling-and-capturing/eventflow.svg"/>
