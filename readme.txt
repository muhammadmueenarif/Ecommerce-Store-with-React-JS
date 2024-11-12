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


Lec 06. Important React and JS Concepts. 
Variables. any function that we use in app.js file must return something. var let const, 3 Variables. 
most use let and const. var not used because it offers multiple declaration and multiple value changes. 
For example, if declare variable A and give value 22, we can also give it value 40. it's second value
So 40 that will log in console.
this can be confusing because variable is same, but value given to it has changed, If we assign another value
50, then 50 will log in console.

but we won't get same result if we apply same strategy or code to a let variable. This is because let variable 
can only have one declared value.
we can give same value to different let variables but cannot give different values to same let variable.

For example, if we define variable, let A and give it value 22 then give it value 44
again and save file. Then 44 will appear in console.
if we declare variable, let a again and give it the value of 50, then save file. So 50 will be printed because 
we cannot define values more than once in a let variable though an error will occur and nothing will be reported
in the console.

let a= 22;
a=44; this is true possible. but 
again let a=50; is false and give error. 

in const, we can't change variable. const a=50; if we give a=40 again or const a=50, it will show error. 


Lec 07. Functions
function Output () {
    const a =20;
    console.log(a);
}
Output();
this is the first and basic syntax of using function. function is used to save most data or print same items
multiple time. 

another method of using function is arrow function. 
const Output = ()=> {
    const a =20;
    console.log(a);
}
Output();

Another method to use function is to use parameters inside the function like 
function Output(a=20, b=30) {
    console.log(a+b);
}
Output();
it will show 50 as output. 


Lec 8. Arrays 
const numbers = [10,20,30];
console.log(numbers);

we put only one time in the console but result show 2 times. to solve this issue, we can go to index.js and 
remove strict mode. and then our issue will be solved.
we use array to store large quantity of data. React is identical to html and js. no connection b/w css and react. 
if we want to use string data in array, we can write const array =["a", "b", "c"];
we can use {} to use js inside react. 


Lec 9. Array Methods 
const numbers = [10,20,30];
console.log(numbers.length); //to get length of array. 
console.log(numbers[2]); //to get value at index 2. 
const a= numbers.join(" ")
console.log(a); //this will print all value of array with space in them. if we want to print them with , in them,
we can use ',' in the join function. 

const a= numbers.sort();//this will sort array in ascending order of alphabetical. 
console.log(a);

const a = numbers.push(50); //this will add new element at the end of array. 
console.log(a); 

we can use shift method to remove element at the first index. 
const a = numbers.shift();
console.log(a);

unshift method is used to add element at the first index.
const a = numbers.unshift(50);
console.log(a);

const b = numbers.pop(); //this will remove element at the last index.

const cars = ["a", "b", "c"];
const c= numbers.concat(cars); //this will join two arrays.
console.log(c);

we can use slice method to remove specific index value from array. 
const a = numbers.slice(1); this will remove array value at index 1. 


Lec 10. Advanced Topics in React JS. 
Mapping. 

var a= [1,2,3,4,5];
var b= a.map(function Multiply(x){     
    return x*2;
    console.log(b);
});
Multiply();
to do this by arrow method, we can do. 
const b= a.map((x)=> x*2);


Lec 11. Filter method. 
const a = [10,20,30,40,50];
var b = a.filter(x => x> 20);
console.log(b);
this will return values > 20. if we write anything other than x, than it will also return same result. 

using filter and map method together. 
const a = [10,20,30,40,50];
var b = a.filter(x => x> 20).map(x => x*2);
console.log(b);
this will return values > 20 and multiply them by 2.


Lec 12. Reduce Method
it will output single digit. we have two parameters accumulator and current value in reduce method.  
const a = [10,20,30,40,50];
var b = a.reduce((acc, curr) => {
    acc + curr; //acc is initial value and curr is current value. it will return some of all values. 
    //10+20=30, 30+30=60, 60+40=100, 100+5-= 150 as final.
    }); 


Lec 13. JS as JSX. 
if we want to create a component in another file then we will export it at the end of file and import it in the 
file where we want to use it. js has many framework and libraries so when code execute, the compiler takes 
sometimes to understand which framework is it but if we change file name to component.jsx then compiler 
directly understand it that it is react and takes less time. we can use both js, or jsx file extension but it 
is preferable to use jsx. 
change app.js file extension to jsx as it is preferable and will directly consider it as react. 


Lec 14. Integrating CSS in React. 
if two or more class name or same then there maybe error by mistake. so we can change name header.css to 
header.module.css. and import file as same name of module. then there will not occur any error. 
we can import that as import styles from './header.module.css';

return (<div className={styles.header}>header</div>)
