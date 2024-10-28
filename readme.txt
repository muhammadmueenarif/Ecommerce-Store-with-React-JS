how to use react js library to build ecommerce website. how to create product and cart pages. how to integrate 
payment methods. 

What is ecommerce? 
electronic commerce. purchase and sale of products and services with the help of internet. it includes various 
activities like online retail, digital marketing, and electronic payment. most wide spread of ecommerce is online retail. 
sometimes it is called e-tailing. buy products directly from website rather than visiting physical shop. 

Digital Marketing: ecommerce that involves use of digital channels like social media, ads, email marketing. 
SEO to improve website ranking. 

Affiliate Marketing
in which business pay affiliate to advertise their products or services on their own platform. 

E-Payments
Electronic payment the process of conducting financial transactions through internet. it covers credit card, 
bank payment, digital wallets. allows customer to pay online. 

Core components 
AI, VR, used to improve consumer experience customize purchasing, increase supply chain. 
simple to purchase everything online. worldwide platform created for small enterprises to product and services. 

ecommerce has also challlenges like security and privacy concern. Hacking and Fraud. increase competition, 
while selling online it resulted in employment loss. 


Lec 02. Ecommerce with React. 
React is javaScript package. allows developers to create component based user interfaces. it is effective
tool to develop e-commerce websites. it provides simple code reuse and flexibility.
React's important advantage is ability to handle dynamic data.
This is critical for an e-commerce website since it can update itself in real time to reflect changes
in inventory, price and other information.
React's ability to manage complicated user interactions is a key feature that makes it so useful for
filtering products from a list.

Add to cart and processing payments are common activities on e-commerce website. React's event structure 
makes it simple to manage.
This enables developers to construct custom event handlers that respond to user activities and adjust application's
state accordingly.

The developer can put product rankings and ratings that customers can add. It is also possible to create product
recommendations based on what customer is searching or buying.
To optimize website ranking, we can use server side rendering. This enables the website to load material 
and layout on the server before rendering it on the client, which can improve initial load time and make 
website more accessible to people with sluggish Internet connections.


Lec 03. Getting Started. 
Before react, we need to install something. node js, npm, and ide that is vs code. first step is to build a 
design with html css and embedd react component using jsx. react state and props are used to manage data. 
event is used to handle using interactions. once it is completed, then we can add product, shopping cart, 
process payment and update inventory. we can use react set state function to update state of component in 
response to user event. after adding all the logic, 
the site must be deployed into production environment. 
This includes use of tool Webpack to bundle your code into single file that can be served to consumer. 
Other tools like hosting security and performance optimization are available. 

Next step is security. to protect against online attacks like xss, sql injection attacks, react can be
combined with different security mechanism like content security policies, rate restriction, and input validation. 


Lec 04. React APP Installation
First we need to install react. npx create-react-app app-name. 

Lec 05. React Folder Structure. 
node_modules: important and significant for project to function in browser. everything related to the framework
and library and dependencies will be installed here. 
public: it has some images and index.html file. 
src: source folder second most important. 
after that package.json file that show project name, app version, and dependencies. dependencies are shortly 
written in package.json file but properly managed with detail in package-lock.json
Next is readme.md file. when add project on github, we want to add project related information then we add
details in it. 

delete app.css, app.test.js, setuptest.js, report webvitals.js and other unimportant default 
files except app.js and index.js. 

now we will be facing errors. just clear all the data in app.js file and remove webvitals in index.js. and if 
we write rafce and it will create arrow function and export it. 


