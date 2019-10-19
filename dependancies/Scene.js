class Scene {
	constructor(precision) {
		this.arrows = [];
		this.particles = [];

		for(let i = 0; i < (width / precision) + 2; i++) {
			for(let j = 0; j < (height / precision) + 2; j++) {
				this.arrows.push(new Arrow(precision * i, precision * j));
			}
		}
	}


    addParticle(q, x, y, vx, vy) {
        this.particles.push(new Particle(q, x, y, vx, vy));
    }



	update() {
		for(let i = 0; i < this.arrows.length; i++) {
			this.arrows[i].update(
                getVectorFieldAt(this.arrows[i].pos),
                "field"
            );
		}

        for(let i = 0; i < this.particles.length; i++) {
			this.particles[i].update();
		}
	}



	draw() {
		for(let i = 0; i < this.arrows.length; i++) {
			this.arrows[i].draw();
		}

        for(let i = 0; i < this.particles.length; i++) {
			this.particles[i].draw();
		}
	}
}
