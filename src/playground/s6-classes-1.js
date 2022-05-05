class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name 
        this.age = age
    }
    getGretting() {
        return `Hi ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    constructor(name, age, bacelor) {
        super(name, age);
        this.bacelor = bacelor
    }
    hasBacelor() {
        return !!this.bacelor
    }
    getDescription() {
        let description = super.getDescription()
        
        if(this.hasBacelor()) {
            description += ` her/his major is ${this.bacelor}.`;
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, homeLocation) {
        super(name);
        this.homeLocation = homeLocation
    }
    getGretting() {
        let gretting = super.getGretting()
        if(this.homeLocation) {
            gretting += `I'm visiting from ${this.homeLocation}`
        }
        return gretting
    }
} 

// Traveler -> Person
// Add support for homeLocation
// Override getGretting
// 1. Hi I am Theoni Gigi. I ' m visiting from Asprovalta.
// 2. Hi I am Theoni Gigi

const me = new Traveler('Theoni Gigi', 'Asprovalta');
console.log(me.getGretting());

const other = new Traveler()
console.log(other.getGretting())
