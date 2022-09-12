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
