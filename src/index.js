function menuOn() {
	const navclasslist = document.getElementById("nav").classList;
	navclasslist.remove("right-[-250px]");
	navclasslist.add("right-0");
}

function menuOff() {
	const navclasslist = document.getElementById("nav").classList;
	navclasslist.remove("right-0");
	navclasslist.add("right-[-250px]");
}

function toggleMenu() {
	const actionMenuClassList = document.getElementById("action-menu").classList;
	actionMenuClassList.toggle("hidden");
}

function copyAlert() {
	const copynotificationclasslist =
		document.getElementById("copybtnalert").classList;
	// console.log("dipu");
	copynotificationclasslist.add("copynotification");

	// need to add a delay here
	// copynotificationclasslist.remove("copynotification");
}
