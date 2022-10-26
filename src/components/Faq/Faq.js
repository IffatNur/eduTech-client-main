import React from 'react';

const Faq = () => {
    return (
      <div className="w-5/6 mx-auto mt-12">
        <h2 className='text-2xl font-bold mb-4'>Some common inteview question</h2>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is firebase?
          </div>
          <div className="collapse-content">
            <p>
              Google Firebase is a Google-backed application development
              software that enables developers to develop iOS, Android and Web
              apps. Firebase provides tools for tracking analytics, reporting
              and fixing app crashes, creating marketing and product experiment.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Differences between firebase and mongoDB ?
          </div>
          <div className="collapse-content">
            <p>
              Both Firebase and MongoDB are modern post-relational databases
              that allow for flexibility and speed to market, while Firebase is
              more popular for smaller applications, and MongoDB moreso for big
              data and high-performance use cases.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Differences between Authentication and Authorization ?
          </div>
          <div className="collapse-content">
            <p>
              Authentication and authorization are two vital information
              security processes that administrators use to protect systems and
              information. Authentication verifies the identity of a user or
              service, and authorization determines their access rights.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How is react routing different from conventional routing?
          </div>
          <div className="collapse-content">
            <p>
              In React routing, the users feel like they are navigating across
              distinct webpages while in actuality they aren't. But, in case of
              conventional routing, the user actually navigates across different
              web pages for each individual view.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Purpose of context API in react ?
          </div>
          <div className="collapse-content">
            <p>
              Context is a built-in API introduced in ​​React 16.3. It makes it
              possible to pass data from parent to children nested deep down the
              component tree directly, instead of passing it down through a
              chain of props.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Details of props and components ?
          </div>
          <div className="collapse-content">
            <p>
              Components let us split the UI into independent, reusable pieces,
              and think about each piece in isolation.Conceptually, components
              are like JavaScript functions. They accept arbitrary inputs
              (called “props”) and return React elements describing what should
              appear on the screen.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is hook in react ?
          </div>
          <div className="collapse-content">
            <p>
              Hooks are functions that let you “hook into” React state and
              lifecycle features from function components. Hooks don't work
              inside classes — they let you use React without classes.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How many ways can we implement conditional rendering ?
          </div>
          <div className="collapse-content">
            <p>
              There are seven ways to implement conditional rendering in React
              applications.
            </p>
            <ul>
              <li>1. Using an if…else Statement</li>
              <li>2. Using a switch Statement</li>
              <li>3. Using Element Variables</li>
              <li>4. Using Ternary Operators</li>
              <li>5. Using Logical && (Short Circuit Evaluation)</li>
              <li>6. Using Immediately Invoked Function Expressions (IIFEs)</li>
              <li>7. Using Enhanced JSX Libraries</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is JSX ?
          </div>
          <div className="collapse-content">
            <p>
              JSX stands for JavaScript XML. JSX allows us to write HTML in
              React. JSX makes it easier to write and add HTML in React.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            React vs Angular Vs Vue.js ?
          </div>
          <div className="collapse-content">
            <p>
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option.Vue. js combined the top-level features of React
              and Angular, but its main feature is the perfect user experience.
              Also, it leveraged the capacity of the virtual DOM and optimized
              the code structure.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Faq;
