import React from 'react';

const Blogs = () => {
    return (
        <div className=' mx-auto mt-10' style={{width:"90%"}}>
        <p>
        1.How will you improve the performance of a React Application? <br />
Ans: <br />
* Keeping component state local where necessary. <br />
* Memoizing React components to prevent unnecessary re-renders (Using Custom Hooks). <br />
* Use binding functions in constructors. <br />
* Avoid inline style attributes. <br />
* Avoid extra tags by using React fragments. <br />
* Avoid inline function in the render method. <br />
 * Avoid bundling all of the front end code in a single file.
<br /><br />
2.  What are the different ways to manage a state in a React application? <br />
Ans: <br />

Local state:Local state is most often managed in React using the useState hook.
Global state:Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. Usually using context api.
Server state : Data that comes from an external server that must be integrated with our UI state. May use useEffect , react query library’s useQuery …
URL state: hooks that give us all the information we need about our location, history, and pathname.using useHistory or useLocation.
 <br /> <br />
 
3.How does prototypical inheritance work?<br />
Ans:
The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object
<br /> <br />
4
Mutating state directly can lead to odd bugs, and components that are hard to optimize.
If you update it directly, calling the setState() afterward may just replace the update you made.
When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
You will lose control of the state across all components.
 
 <br /><br />
5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
<br /> Ans: <br />
Using a query of name and send it find method to findOne from the collection.

const products = productsCollection.findOne(query)
<br /> <br />
6. What is a unit test? Why should write unit tests? <br />
Ans: <br />

Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input.
For React components, this could mean checking that the component renders correctly for the specified props.
In other words, writing unit tests means that we write code that verifies that our code works as expected. 
There are multiple reasons why unit tests can be helpful. Some of them being:
Prevent regressions
Exercise your code
Faster feedback while developing



        </p>
        </div>
    );
};

export default Blogs;