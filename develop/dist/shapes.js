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
        return `<circle cx="50" cy="50" r="40" fill=${this.color} />`
     
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="5" y="5" width="100" height="100" fill=${this.color} />`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill=${this.color}/>`
     
    }
}

module.export = {Circle, Square, Triangle};