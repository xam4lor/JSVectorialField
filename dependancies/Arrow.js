class Arrow {
	constructor(drawX, drawY, norm) {
        this.pos = new Vector(
            ((drawX - width  / 2) / width ) * c.plotZoom,
            ((drawY - height / 2) / height) * c.plotZoom
        );

        this.drawPos = new Vector(drawX, drawY);

        this.angle = 0;
        this.norm  = 2;
	}

	update(data, TYPE) {
        this.angle = atan2(data.y - this.pos.y, data.x - this.pos.x);

        if(TYPE == "target") {
            this.norm  =
                1 / Math.sqrt((Math.pow(data.x - this.pos.x, 2) + Math.pow(data.y - this.pos.y, 2)) / 100)
                * 10 * c.scaleFactor;

            if(this.norm > 5) this.norm = 4;
        }

        if(TYPE == "field") {
            this.norm = c.scaleFactor;
        }
    }


    draw() {
		push();
			translate(this.drawPos.x, this.drawPos.y);
			rotate(this.angle);

			beginShape();
				noStroke();
				vertex(0        , -this.norm);
				vertex(5 *  this.norm, -this.norm);
				vertex(5 *  this.norm, -3 * this.norm);
				vertex(9 *  this.norm, 0);
				vertex(5 *  this.norm, 3 * this.norm);
				vertex(5 *  this.norm, this.norm);
				vertex(0        , this.norm );
			endShape(CLOSE);
		pop();
	}
}
