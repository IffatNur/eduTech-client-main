import React from 'react';

const Blog = () => {
    return (
      <div className="w-5/6 mx-auto mt-12">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is cors?
          </div>
          <div className="collapse-content">
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </div>
          <div className="collapse-content">
            <p>
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to the
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more. User Authentication Platforms
            </p>
            <ul>
              <li>Ory</li>
              <li>Supabase</li>
              <li>Okta</li>
              <li>PingIdentity</li>
              <li>Keycloak</li>
              <li>STYTCH</li>
              <li>Frontegg</li>
              <li>Authress</li>
              <li>Auth0</li>
              <li>Firebase</li>
              <li>Amazon Cognito</li>
              <li>OneLogin</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does the private route work?
          </div>
          <div className="collapse-content">
            <p>
              Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route (read: page). So
              if a user is not authorized for a specific page, they cannot
              access it. The most common example is authentication in a React
              application where a user can only access the protected pages when
              they are authorized (which means in this case being
              authenticated). Authorization goes beyond authentication though.
              For example, a user can also have roles and permissions which give
              a user access to specific areas of the application.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is Node? How does Node work?
          </div>
          <div className="collapse-content">
            <p>
              Node allows developers to write JavaScript code that runs directly
              in a computer process itself instead of in a browser. Node can,
              therefore, be used to write server-side applications with access
              to the operating system, file system, and everything else required
              to build fully-functional applications. It is a used as backend
              service where javascript works on the server-side of the
              application. This way javascript is used on both frontend and
              backend. Node. js runs on chrome v8 engine which converts
              javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;
