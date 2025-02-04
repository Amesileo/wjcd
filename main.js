function goTo(loc) {
	document.getElementById(loc).scrollIntoView();
}

const move = document.getElementById("cursorOuter");
const move1 = document.getElementById("cursorMid");
const move2 = document.getElementById("cursorInner");

document.onpointermove = (event) => {
	const { clientX, clientY } = event;
	move.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 950, fill: "forwards" }
	);

	move1.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 300, fill: "forwards" }
	);

	move2.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 0, fill: "forwards" }
	);
};

function cursorCol(col) {
	move.style.borderColor = col;
	move1.style.borderColor = col;
	move2.style.borderColor = col;
	move2.style.backgroundColor = col;
}

function cursorSelect() {
	move.style.backgroundColor = "#0071e35d";
	move.style.width = "60px";
	move.style.height = "60px";
	move.style.border = "0";
}

function cursorReturn() {
	move.style.backgroundColor = "";
	move.style.width = "";
	move.style.height = "";
	move.style.border = "";
}
