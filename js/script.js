//*************************************************************************
// 8.2 - How do we add JS into our HTML?
//*************************************************************************

// console.log(document.getElementById("one")); // checkout the different results by attaching your "script" file on the "html" file at the bottom of the page right before closing body tag and inside the head tag (without "defer" & "async" keywords and with)

//*************************************************************************
// 8.3 - What is DOM
//*************************************************************************

// console.dir(document);
// console.log(document);

// console.log([1, 2]);
// console.dir([1, 2]);



//*************************************************************************
// 8.4 DOM Tree
//*************************************************************************

// Example 1 (DOM node VS. DOM element)
// console.log(document.childNodes); // NodeList(2) [<!DOCTYPE html>, html]
// console.log(document.children); // HTMLCollection [html]

// Example 2 (DOM node VS. DOM element)
// console.log(document.querySelectorAll("h1")[4].childNodes); // NodeList(2) [text, b]
// console.log(document.getElementsByTagName("h1")[4].children); // HTMLCollection [b]

// ************************************************************************
// 8.6 & 8.7 - DOM manipulation: selecting elements (part-1 & part-2)
// **************************************************************************

// // // Selecting individual elements
// // 1. getElementById() method

// console.dir(document)
// console.log(document.body.children[1].children[0])

// let firstElement = document.getElementById("one");
// console.log(firstElement);
// console.log(firstElement.className);
// firstElement.className = "blue";

// document.getElementById("four").className = "blue";

// console.log(document.getElementById("one").className = "blue");

// 2. querySelector() method

// console.log(document.querySelector("#two"));
// console.log(document.querySelector(".red"));
// console.log(document.querySelector("h1"));

// // // Selecting multiple elements

// // 1. getElementsByClassName() method

// let redElements = document.getElementsByClassName("red");
// console.log(redElements);
// console.log(redElements[2]);
// console.log(redElements.item(2));

// // 2. getElementsByTagName() method

// let tagElements = document.getElementsByTagName("h1");
// console.log(tagElements);
// console.log(tagElements[4]);

// // 3. querySelectorAll() method

// let queryElements = document.querySelectorAll("h1");

// console.log(queryElements);

// console.log(queryElements[3]);

// console.log(queryElements.item(3));

//**********************************************************************************
// 8.8 - HTMLCollection vs NodeList (use the google debugger tool for demonstration)
//**********************************************************************************

// let liElementsClassRed = document.querySelectorAll(".red"); // NodeList

// let liElementsClassRed = document.getElementsByClassName("red"); // HTMLCollection

// let liElementsClassRed = document.getElementsByTagName("h1"); // HTMLCollection

// console.log(liElementsClassRed);

// liElementsClassRed[0].className="yellow"
 
// for (let i = 0; i < liElementsClassRed.length; i++) {
// 	const element = liElementsClassRed[i];
// 	element.className = "yellow";
// 	// element.outerHTML = `<li>${element.textContent}</li>`;
// }

// console.log(liElementsClassRed); // Length changes for selectors that return HTMLCollection because of live update.


// let q = document.querySelectorAll(".red");
// q[1].className = "yellow";
// console.log(q);
// for (let i = 0; i < q.length; i++){
// 	q[i].className = "yellow";
// }
// let a = document.getElementsByClassName("red");
// console.log(a);
// for (let i = 0; i < a.length; i++){
// 	a[i].className = "yellow";
// }
// let temp = [];
// for (let i = 0; i < a.length; i++){
// 	temp.push(a[i])
// }
// console.log(temp);
// for (let i = 0; i < temp.length; i++){
// 	temp[i].className="yellow"
// }
// console.log(temp);


















// ***********************************************************************
// 8.9 - Selecting elements (traversing between multiple elements)
//************************************************************************
// // //  1. firstElementChild
// console.log(document.getElementById("numbersList").firstElementChild);

// // // 2. lastElementChild
// console.log(document.getElementById("numbersList").lastElementChild);

// // // 3. parentElement
// console.log(document.getElementById("one").parentElement);

// // // 4. previousElementSibling
// console.log(document.getElementById("three").previousElementSibling);

// // // 5. nextElementSibling
// console.log(document.getElementById("three").nextElementSibling);

// // // 6. nth-child
// console.log(document.querySelectorAll('.red:nth-child(2)')); // P.S it starts from 1
// let pa = document.getElementById("numbersList");
// let a = document.createElement("p");
// let b = document.createElement("li");
// console.log(a);
// console.log(b);
// a.textContent = "zeytone";
// b.innerText = "abebe beso bela";

// pa.prepend(a);
// pa.appendChild(b);

// let c = document.getElementById("three");
// console.log(c);
// c.after(a)
// a.textContent = "papaya";
// a.style.backgroundColor = "red";
// a.style.fontWeight = "900"
// a.style.fontSize = "30px";


// c.before(b);
// b.textContent = "zeyton";
// b.style.fontSize = "30px";
// b.style.fontWeight = "900"
// b.style.backgroundColor = "red";

// pa.classList.add("abebe");
// pa.classList.add("violate")

// console.log(pa);
// console.log(pa.classList);
// console.log(pa.getAttribute("id"));
// console.log(pa.getAttribute("class"));
// pa.setAttribute("id", "muruts");
// pa.setAttribute("class", "yellow");
// console.log(pa.hasAttribute("id"));
// console.log(pa.hasAttribute("href"));








//*************************************************************************
// 8.10 - Altering values (working with HTML content)
//*************************************************************************

// 1. createElement() method
// let liElem = document.createElement("li");
// console.log(liElem);

// // 2. appendChild() method
// let parent = document.getElementById("numbersList");

// parent.appendChild(liElem);

// liElem.innerText = "Hi Everyone"

// // 3. prepend () method
// parent.prepend(liElem);

// // 4. innerHTML() method
// liElem.innerHTML = "<i>Selam new using innerHTML</i>";

// liElem.outerHTML = "<p>Selam new 2 using outerHTML</p>";

// // 5. textContent() method
// liElem.textContent = "Hello class";

// // 6. removeChild() method
// let childElement = document.getElementById("two");
// parent.removeChild(childElement);

// // 7. after() and before() method

// // // Get the reference Element
// let myReferenceElement = document.querySelector('#three');

// // // // Insert the new Element before the reference Element
// myReferenceElement.after(liElem);

// myReferenceElement.before(liElem);

//************************************************************************
// 8.11 - Altering values (working with HTML attribute)
//************************************************************************

// let parent = document.getElementById("numbersList");

// // 1. className() method
// parent.className = "yellow";

// parent.className = "blue pink"; // you can add multiple class too
// console.log(parent.className);

// // // 2. ClassList() method

// console.log(parent.classList);
// // // // // adding a class using classList method
// parent.classList.add("violet");
// console.log(parent.classList);

// // // // removing a class using classList method
// parent.classList.remove("pink");
// console.log(parent.classList);

// // // - adding and removing together -> classList.toggle()
// parent.classList.toggle("red");
// console.log(parent.classList);

// //  3. Id property
// console.log(parent.id);
// parent.id = "newID";

// // // 4. hasAttribute() method
// console.log(parent.hasAttribute("href")); // false
// console.log(parent.hasAttribute("id")); // true

// // // 5. getAttribute() method
// console.log(parent.getAttribute("class"));

// // // 6. setAttribute() method
// parent.setAttribute("id", "yellow");
// parent.setAttribute("name", "abebe");

// parent.setAttribute("class", "yellow");

// let imageElement = document.createElement("img");
// console.log(imageElement);
// imageElement.setAttribute(
// 	"src",
// 	"https://earthsky.org/upl/2022/06/Christy-Mandeville_dramatic-sunset-with-child-silhouette_Indian-Shores-FL_2022-jun-08-e1655264484437.jpg"
// );
// parent.appendChild(imageElement);

// imageElement.setAttribute("width", "50%");

// // // 7. removeAttribute() method
// parent.removeAttribute("class");

//************************************************************************
// 8.12 directly (without the need of classes or ids)
//************************************************************************
// let parent = document.getElementById("numbersList");

// parent.style.backgroundColor = "green";
// parent.style.fontSize = "30px";
// parent.style.color = "white";
// parent.style.border = "black solid 20px";
// parent.style.display = "none";
// parent.style.display = "block";

// //*********************************************************************
//  9 - JS Events
// //*********************************************************************

// //*********************************************************************
// 9.5 - Ways to bind an event (HTML event handlers)
// //*********************************************************************

// // 1. HTML event handlers attribute

// let techParent = document.getElementById("numbersList");

// function changeColor() {
// 	techParent.style.color = "blue";
// 	techParent.style.backgroundColor = "yellow";
// }

// function removeColor() {
// 	techParent.style.color = "";
// 	techParent.style.backgroundColor = "";
// }

// //*********************************************************************
// 9.6 - Ways to bind an event (traditional DOM event handlers)
// //*********************************************************************

// // 2. Traditional DOM event handlers

// // Selecting elements
// let techParent = document.getElementById("numbersList");

// let btn2 = document.getElementById("btn-2");

// // A function that will be executed when the event is triggered
// function changeToBlack() {
// 	techParent.style.color = "white";
// 	techParent.style.backgroundColor = "black";
// }

// // Binding
// btn2.onclick = changeToBlack;

// //*********************************************************************
// 9.7 - Ways to bind an event (DOM level event listeners)
// //*********************************************************************

// // 3. DOM level event listeners

// Adding event listeners

//  a = document.getElementById("numbersList");
//  btn4 = document.getElementById("btn-4");

// btn4.addEventListener("click", function () {
// 	a.style.color = "blue"; 
// 	a.style.backgroundColor = "violate";
// })

// function changeToBlue() {
// 	a.style.color = "blue";
// 	a.style.backgroundColor = "black";
// }

// btn4.addEventListener("click", changeToBlue);
 


// ************************************************************************
// // 9.8 Halting default behaviors  (preventDefault())
// //************************************************************************

// // stopping default behavior for anchor tag
// //*****************************************
// console.log(document.getElementsByTagName("a")[0]);


// document.getElementsByTagName("a")[0].addEventListener("click", function (e) {
// 	e.preventDefault();
// 	console.log("hello class");
// });

// //************************************************************************
// 9.9 - Form validation exercise
// //************************************************************************

let myForm = document.getElementById("formID");


function checkValidity(e) {
	e.preventDefault();
	console.log("Form submission prevented");

	let myInput = document.querySelectorAll("#formID");
	console.log(myInput);

	if (myInput[0].value.length == 0) {
		alert("please enter first name");
		myInput[0].style.backgroundColor = "pink";
	}

	if (myInput[1].value.length == 0) {
		alert("please enter last name");
		myInput[1].style.backgroundColor = "pink";
	}

	if (myInput[0].value.length !== 0 && myInput[1].value.length !== 0) {
		myInput[0].style.backgroundColor = "";
		myInput[1].style.backgroundColor = "";
		alert("Thanks, form Submitted");

		console.log(myInput[0].value +" "+ myInput[1].value); // normally they are treated as strings.

		// console.log(Number(myInput[0].value) + Number(myInput[1].value)); // if you want to treat them as numbers

		// bigForm.append(Number(myInput[0].value) + Number(myInput[1].value));
	}
}

myForm.addEventListener("submit", checkValidity);

