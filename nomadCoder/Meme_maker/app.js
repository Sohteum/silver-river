const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text"); // 여기에는 이벤트리스너 추가 안함. 캔버스가 더블클릭되는게 중요한거라서!
const fileInput = document.getElementById("file")
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;

function onMove(event) {
	if (isPainting) {
		ctx.lineTo(event.offsetX, event.offsetY);
		ctx.stroke();
		return;
	}

	ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
	isPainting = true;
}

function cancelPainting() {
	isPainting = false;
	ctx.beginPath();
}

function onLineWidthChange(event) {
	console.log(event.target.value);
	ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
	ctx.strokeStyle = event.target.value;
	ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
	const colorValue = event.target.dataset.color;
	ctx.strokeStyle = colorValue;
	ctx.fillStyle = colorValue;
	color.value = colorValue;
}

function onModeClick() {
	if (isFilling) {
		isFilling = false;
		modeBtn.innerText = "Fill";
	} else {
		isFilling = true;
		modeBtn.innerText = "Draw";
	}
}

function onCanvasClick() {
	if (isFilling) {
		ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
}

function onDestroyClick() {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
	ctx.strokeStyle = "white";
	isFilling = false;
	modeBtn.innerText = "Fill";
}

function onFileChange(event) {
	const file = event.target.files[0]; // 이게 배열인 이유는 html자리에 multiple을 추가할수있기때문. 우리는 파일 1개만 업로드하니까 0번째 파일
	const url = URL.createObjectURL(file);
	const image = new Image();
	image.src = url;
	image.onload = function () {
		ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT) //이미지, 위치, 크기
		fileInput.value = null;
	}
}

function onDoubleClick(event) {
	const text = textInput.value;
	if (text !== "")
		ctx.save(); //유저가 무언가 변경했을수 있는 그걸 저장해주는거지
	ctx.lineWidth = 1;
	ctx.font = '68px serif';
	ctx.fillText(text, event.offsetX, event.offsetY);
	ctx.restore(); //라인을 1로 변경했다가 다시 유저가 쓰던데로 돌려놓음
}

function onSaveClick(event) {
	const url = canvas.toDataURL();
	const a = document.createElement("a");
	a.href = url;
	a.download = "myDrawing.png";
	a.click();
}

// canvas.onmousemove = onMove 이거랑 밑의 코드와 같은데, 이벤트리스너는 같은 이벤트안에 많은 이벤트리스너를 추가할수있어서 편함
canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);