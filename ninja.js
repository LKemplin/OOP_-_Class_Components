class Ninja {
    constructor(name, health) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(
            "Name:" + this.name,
            "Health:" + this.health,
            "Speed:" + this.speed,
            "Strength:" + this.strength
        )
    }

    drinkSake() {
        this.health += 10;
        console.log(`Yum, the sake was delicious! Your strength is now ${this.health}`)
    }
}

// const ninja1 = new Ninja("Hyabusa", 100);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom() {
        super.drinkSake();
        console.log('What one programmer can do in a month, two programmers can do in two months')
    }
}

const superSensei = new Sensei('Master Splinter');
superSensei.speakWisdom();
superSensei.showStats();