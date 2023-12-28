class animal {
    sound() {
        console.log("animals sound");
    }
}

class Dogs {
    sound() {
        console.log("Dogs sound woo!");
    }
}
class Cats {
    sound() {
        console.log("Cats sound meow");
    }
}


let animal1 = new animal();
let dog1 = new Dogs();
let cat1 = new Cats();


animal1.sound();
dog1.sound();
cat1.sound();