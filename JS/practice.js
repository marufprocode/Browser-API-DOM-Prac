/* ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। , */
/* console.log("Item 1");
console.log("Item 2");
setTimeout(() => console.log('item 3'), 3000);
console.log("Item 4"); */

/* ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও  */

/* const inputNumber = () => {
    let num = prompt ('please enter a number');
    num = parseFloat(num)+200;
    alert (`Your sum result is ${num}`);
}; */


/* ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
 */

/* const getWebLocation = () => {
    const answer = confirm ('Do you want to see your website location');
    answer? console.log(location.href) : console.log(answer);
} */

/* ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো।  */

/* Answer: 
=> data stored in a small text File.
=> naturally sent by visited website.
=> sent to users computer through browser.
=> It's not a program so it does not perform any function.
=> Stored in a key-value pair. 
=> common purspose of using cookies are 
    - session management
    - personalization
    - tracking
*/

/* ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে ) */

    /* => The storage capacity of local storage is 5MB/10MB & The storage capacity of session storage is 5MB
    => Cilent can only read local storage but seesion storage are Not. 
    => Local storage need to clear via JS or manually and session storage auto deleted via tab close.   */

/* ৭. জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে রাখো। */ 

// -- set an object to local storage 
/* let person = {
    firstName : 'Abraham',
    lastName : 'linkon'
}

function setLocalStorage () {
    let obj = JSON.stringify(person);
    localStorage.setItem('person', obj);
} */
/* const countId = document.getElementById('count');

let count = 0;
const localValue = localStorage.getItem('count');
if (localValue){
    count = localValue;
}
countId.innerText = count;
const showCountAndSeT = () => {
    count++;
    const setStorage = localStorage.setItem('count', count);
    const getItem = localStorage.getItem('count');
    console.log(getItem);
    countId.innerText = getItem;
} */




