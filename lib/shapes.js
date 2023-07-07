class shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
    return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}"/>`;
    }
}
class Circle extends Shape {
    render() {
    return `<circle cx="150" cy="100" r="75" style="fill:${this.color}"/>`
    }
}

class Square extends