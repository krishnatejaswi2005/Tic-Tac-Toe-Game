let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let turn = true;

const winning = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

boxes.forEach((box) => {
	box.addEventListener("click", () => {
		if (turn) {
			box.innerText = "O";
			turn = false;
		} else {
			box.innerText = "X";
			turn = true;
		}
		box.disabled = true;
		checkWinner();
	});
});
const checkWinner = () => {
	let check = true;
	for (let win of winning) {
		let pos1 = boxes[win[0]].innerText;
		let pos2 = boxes[win[1]].innerText;
		let pos3 = boxes[win[2]].innerText;
		if (pos1 != "" && pos2 != "" && pos3 != "") {
			if (pos1 === pos2 && pos2 === pos3) {
				document.querySelector("#status").innerText = `${pos1} is the winner`;
				disableBoxes();
			}
		} else {
			check = false;
		}
	}
	if (check) {
		document.querySelector("#status").innerText = "Draw Match";
	}
};
const disableBoxes = () => {
	boxes.forEach((box) => {
		box.disabled = true;
	});
};
reset.addEventListener("click", () => {
	boxes.forEach((box) => {
		box.innerText = "";
		box.disabled = false;
	});
	document.querySelector("#status").innerText = "";
	turn = true;
});
