// CUSTOM CONFIG
const c = {
	plotZoom   : 100,			// x pixels = plotZoom grads
	precision  : 0.6,			// concentration of vector arrays
	scaleFactor: 2,				// scale of all vectors by default
	particleR  : 15,			// drawing radius of a particle
	particleC  : [0, 255, 0],	// color of a particle
	particleSMult : 0.1,		// multiplier of the particle speed
	// the plotted function
	plottedFunction : (x, y, dt) => new Vector(
		-y + dt / 2,
		x * Math.sin(dt) * 3
	)
}






let beginDate = Date.now() / 1000;
let ellapsedT = 1;
let sc;

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

function getVectorFieldAt(vec) {
	return c.plottedFunction(vec.x, vec.y, ellapsedT);
}
