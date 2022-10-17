## How javaScript work ?

- jsCode => parser => Ast => conversion to machine code => machine code => code run
  ***

## Execution context / Execution stack ?

- code => Execution context(_the environment in which our code is executed and is evaluate_) => Global Execution context (**Default**)
- javScript engine create the Global execution context before it start to execute any code
- variables and function that is not inside any function , a new execution context gets created every time a function is executed
- The global execution context just like any other execution context,except that it gets created by default.it is associated with Global Object which means a window object ex: this===window , name == window.name

## Execution stack:

- Execution stack => Global execution context => execution context

- Also known as "calling stack" is a stack with a LIFO(last in first out ) structure , which is used to store all the execution context created during the code execution

  ***

<img width="100%" src="https://encrypted-tbn0.gstatic.com/images?
q=tbn:ANd9GcTPCxQAljDooL59InQjKwsb9i3443yI8beMZg&usqp=CAU">

---

## Hoisting

- javaScript mechanism where variables and functions declarations are moved to the top of their scope before the code execution
- Hoisting wont work in case of Let and Const
