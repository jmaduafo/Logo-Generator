class Shapes {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}


class Circle extends Shapes {
    render() {
        return `<circle cx="100" cy="105" r="80" fill="${this.color}"/>`
     
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="5" y="5" width="400" height="400" fill="${this.color}"/>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="0,170 200,170 100,0" fill="${this.color}"/>`
     
    }
}

module.exports = {Circle, Square, Triangle};