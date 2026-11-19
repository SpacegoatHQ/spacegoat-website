/* 	Author: Peter Moricz | SPACEGOAT Interactive
	Email: peter.moricz@spacegoat.com
*/
// Use Javascript focus() method to provide additional support iOS and IE11

const skipTarget = document.querySelector("#what-we-do");
const skipLink = document.querySelector(".skip-link");

skipLink.addEventListener("click", () => {
	skipTarget.focus();
});