class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    div(c) {
        return this.mult(1 / c);
    }

    mult(c) {
        this.x *= c;
        this.y *= c;
        return this;
    }

    clear() {
        this.x = 0;
        this.y = 0;
        return this;
    }

    dist(v) {
        return new Vector(
            this.x - v.x,
            this.y - v.y
        );
    }
}
