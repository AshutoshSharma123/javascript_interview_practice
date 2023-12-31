
let myPromise = new Promise((resolve, reject) => {
    const a = 3;
    const b = 4;

    setTimeout(() => {

        if (a === b) {
            console.log("equal");
        }
        else {
            console.log("not equal");
        }

    })

})


myPromise.then((result) => {
    console.log(result);
})
myPromise.then((result) => {
    console.log(result);
})