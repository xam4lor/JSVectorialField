class Particle {
    constructor(q, drawX, drawY, vx0, vy0) {
        this.q = q;

        this.pos = new Vector(
            ((drawX - width  / 2) / width ) * c.plotZoom,
            ((drawY - height / 2) / height) * c.plotZoom
        );

        this.speed = new Vector(vx0, vy0);
        this.acc   = new Vector(0, 0);
    }


    update() {
        this.acc = this.pos.dist(getVectorFieldAt(this.pos)).div(1000).mult(c.particleSMult).mult(-1);

        this.speed.add(this.acc);
        this.pos.add(this.speed);
    }

    draw() {
        noStroke();
        fill(c.particleC[0], c.particleC[1], c.particleC[2]);

        let drawX = ((this.pos.x / c.plotZoom) * width)  + width / 2;
        let drawY = ((this.pos.y / c.plotZoom) * height) + height / 2;

        ellipse(drawX, drawY, c.particleR, c.particleR);
    }
}
