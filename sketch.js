const c = {
	plotZoom   : 100, // x pixels = plotZoom grads
	precision  : 0.6,
	scaleFactor: 2,
	particleR  : 15
}

let beginDate = Date.now() / 1000;
let ellapsedT = 1;

let sc;




function getVectorFieldAt(vec) {
	let v = new Vector(
		-vec.y + ellapsedT / 2,
		vec.x * Math.sin(ellapsedT) * 3
	);

	return v;
}






function setup() {
	createCanvas(windowWidth * 0.99, windowHeight * 0.99);

	let p = 1 / ((c.precision / 2.2) / 10);

	sc = new Scene(p);
}

function draw() {
	ellapsedT = Date.now() / 1000 - beginDate;

	background(0);
	fill(255);

	sc.update();
	sc.draw();
}

function mouseClicked(event) {
	let q = -1;
	sc.addParticle(q, mouseX, mouseY, 0, 0);
}
