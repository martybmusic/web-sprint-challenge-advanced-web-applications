# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.

A token is a specific string that acts as a key to authenticate access - a token is typically matched with a users login credentials. We store them in local storage so that an authenticated user can make succesful api requests.

2. What steps can you take in your web apps to keep your data secure?

I imagine we will continue to learn about steps we can take in the interest of data security, currently we've taken advantage of the above-mentioned tokens as well as protected routes. Together, they essentially lock out areas of our website for non authenticated users.

3. Describe how web servers work.

A web server is essentially two things -- a computer (or network of computers) that houses web code as well as the software that facilitates the hosting.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

We use axios calls to take advantage of the following methods:
CREATE, 'post'
READ, 'get'
UPDATE, 'put'
DELETE 'delete'