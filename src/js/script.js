// this part is for the sticky nav bar
var sidebar = new StickySidebar("#sidebar", {
	containerSelector: ".main-content",
	topSpacing: 20,
	bottomSpacing: 20,
	resizeSensor: true,
	stickClass: "is-affixed",
	minWidth: 300
});
