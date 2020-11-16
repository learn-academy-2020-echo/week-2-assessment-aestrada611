# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: The method super() is used in order to pass inheritance between parent and child classes.

  Researched answer:

Super is used within the constructor method to pass attributes from the constructor in the parent class. Without the super method the attributes would not be inheritable.



2. What is a virtual DOM?

  Your answer:

  All I really knew about the research is that DOM stands for Document Object Model.

  Researched answer:

React creates a virtual DOM which allows for quicker manipulation then accessing the real DOM. This is used when a component is rendered and the virtual DOM checks the real DOM. This allows for only parts that require a change to render instead of the whole DOM.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer:

You need to have a render and a return. You must also have a react fragment enclosing code that you want rendered.



  Researched answer:

I need to do more research and have a better understanding of how state is and classes work with react. I had a hard time knowing what to use classes within a react application.


4. What is JSX?

  Your answer:

  It is a way to be able to write HTML on a javascript file. It allows for both the Javascript and the HTML to interact easily.

  Researched answer:

JSX is a syntax extension of regular javascript used to create react elements. This allows for HTML like code and javascript to co-exist.


5. What is state in React?

  Your answer:

  State is a way to store behaviors or values that belong to a component. It is used in React.

  Researched answer:

State is a javascript object that sores a components dynamic data that determines the components behavior. State is used to track changing information between renders which allows for it to be dynamic and interactive. State can only be used within class components


6. STRETCH: What is hoisting in JavaScript?

  Your answer:

  I only have heard this term get thrown around in class a couple of times but don't really have an idea of what it means.

  Researched answer:

It is the default behavior in Javascript that moves all declarations to the top of the current scope. This would mean that it is the default behavior of defining all declarations on the top of the scope before the code is executed. Only declarations are hoisted.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
There are three main phases to lifecycle which are mounting, updating, and unmounting.


- React props
React props are arguments passed into React components. They stand for properties and are used for passing data from one component to another. Props only read data and do not change the child component.


- event.preventDefault()
It is a method that cancels the event if it is cancelable. This means it cancels the action that is supposed to occur. This can be used to preventing on clicking on a submit button or preventing a link from being clicked.


- DOM events
They are events sent to notify code of interesting things that have taken place. Events are used in combination wit functions and will not be executed before the event occurs.


- MVC
It is an architectural pattern that separates an application into three main logical components which are the model, view, and the controller. This is used for developing modern user interfaces.
