//This is a test of how creating animations will work and a smaller scale
//* "()" are used to show what is different between this test and the real thing

//Create methods that will store animations
//(Will also have a class to store all its values for future use)
class animate {
    doSomething1(number) {
        console.log(`Done ${number}`);
    }
    doSomething2() {
        console.log("Done 2");
    }
}

//Creates an instance of the class for the item wanting to be animated
//(Will be creating for each item wanting to be animated)
let myAnimate = new animate();


//A list is made for the order that the slides will be in
//(Will be a list of lists that will have all the items that want to be animated on one slide)
let order = [myAnimate.doSomething2,
() => myAnimate.doSomething1(1), //This line is to prove its possible to pass values in without activating the method before the next button is pressed (Im a genius)
myAnimate.doSomething2];

//Temp for a button click acting like the next button being pressed
for (let i = 0; i < order.length; i++) {
    order[i]();
}

