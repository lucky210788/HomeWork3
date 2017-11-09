var circle = {
    radius: 3
};

Object.defineProperty(circle, '_radius', {
    enumerable: true,
    configurable: true,
    get: function() {
        console.log("Свойство прочитано");
        return this.radius;
    },
    set: function(_radius) {
        console.log("Свойство записано");
        this.radius = _radius;
    }
});

console.log(circle._radius);
circle._radius = '7';
console.log(circle._radius);