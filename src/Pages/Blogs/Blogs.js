import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2>What is CORS?</h2>
                <p>Simply put, CORS is the mechanism that provides the ability to alter the behavior of this policy, enabling you to do things like hosting static content at www.example.com and the backend API at api.example.com. This kind of request would be called a Cross-Origin request, as a resource from one subdomain is requesting a resource from another subdomain.

                    This is all controlled through preflight requests that exchange a set of HTTP request headers and corresponding response headers collectively referred to as "CORS Headers", each of these headers modifies a different element of the Same-Origin policy to loosen the limitations it imposes.

                    There's a lot of terrible advice out there (especially on popular forums) on how to set this up where the answers generally include some variant of brutally setting wildcard "*" response headers regardless of the request headers provided in the pre-flight request. This article attempts to dispel some of the common misconceptions about Cross-Origin Resource Sharing and provide useful advice on how to get things working correctly.</p>
            </div>
            <div>
                <h2>Why i use firebase?  What other options do you have to implement authentication?</h2>
                <p>Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.
                </p>
                <br />
                <p><strong>other option is</strong> STYTCH , ORY, Supabase, Okta, PingIdentity</p>
            </div>
            <div>
                <h2>How does the private route work?</h2>
                <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.

                    The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
            </div>
            <div>
                <h2>What is Node? How does Node works?</h2>
                <p>Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications.</p>
                <br />
                <p><strong>Node Working :</strong>  Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                    Node.js basically works on two concept

                    Asynchronous
                    Non-blocking</p>
            </div>
        </div>
    );
};

export default Blogs;