/* let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
let order = (time, work) => {

    return new Promise((resolve, reject) => {

        if (is_shop_open) {

            setTimeout(() => {

                // work is 👇 getting done here
                resolve(work())

                // Setting 👇 time here for 1 work
            }, time)

        }

        else {
            reject(console.log("Our shop is closed"))
        }

    })
}

// step 1
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

    // step 2
    .then(() => {
        return order(0000, () => console.log('production has started'))
    })

    // step 3
    .then(() => {
        return order(2000, () => console.log("Fruit has been chopped"))
    })

    // step 4
    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
    })

    // step 5
    .then(() => {
        return order(1000, () => console.log("start the machine"))
    })

    // step 6
    .then(() => {
        return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
    })

    // step 7
    .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
    })

    // Step 8
    .then(() => {
        return order(2000, () => console.log("Serve Ice Cream"))
    })
    .catch(() => {
        console.log("Customer left")
    });
 */


    /********************************05/12/2022*********************************/

    /*
    promises are "special" javascript objects
    promises are solution for "callback hell"
    "producer" will create the "promises"
    "consumer" will consume the "promises"
    "Promise" is the class, used to create the "promises"
    we can consume Promises in 2 ways
    1) then()
    2) async & await keywords
*/
// ------------------------------------------------------------------------
   
    


    // let promise1 = new Promise((resolve,reject)=>{
    //     resolve("promises");
    // });
    // // console.log(typeof (promise1))
    // promise1.then((posRes)=>{
    //     console.log("resole : "+posRes);
    // },(errRes)=>{
    //     console.log("reject :"+errRes);
    // });
    // welcome to promises


    // console.log("Before")
    // let promise1 = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve("Hello");
    //     },5000);
    // });
    // promise1.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // console.log("After")    



    // let promise1 = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve("Hello_1");
    //     },0);
    // });
    // let promise2 = new Promise((resolve,reject)=>{
    //     resolve("Hello_2");
    // });
    // promise1.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // promise2.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });


// let promise1 = new Promise((resolve,reject)=>{
//     resolve("Hello_1");
// });
// let promise2 = new Promise((resolve,reject)=>{
//     resolve("Hello_2");
// });
// let promise3 = new Promise((resolve,reject)=>{
//     resolve("Hello_3");
// });
    // promise1.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // promise2.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    // promise3.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });

    // Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });

    //[ 'Hello_1', 'Hello_2', 'Hello_3' ]




    // Promise.race([promise1,promise2,promise3]).then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
    //Hello_1




    // let promise1 = new Promise((resolve,reject)=>{
    //     resolve("Hello_1");
    // });
    // let promise2 = new Promise((resolve,reject)=>{
    //     resolve("Hello_2");
    // });
    // let promise3 = new Promise((resolve,reject)=>{
    //     reject("Error");
    // });
        // Promise.all([promise1,promise2,promise3]).then((posRes)=>{
        //     console.log(posRes);
        // },(errRes)=>{
        //     console.log(errRes);
        // });
    // Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });
// --------------------------------------------------------------------------------------


    // let promise1 = new Promise((resolve,reject)=>{
    //     resolve("Hello");
    // });
    // async function my_fun(){
    //     let res = await promise1;
    //     console.log(res);
    // };
    // my_fun();               //Hello


/* function add(num){
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    })
};
function sub(num){
    return new Promise((resolve,reject)=>{
        resolve(num-3);
    })
};
function mul(num){
    return new Promise((resolve,reject)=>{
        resolve(num*2);
    })
};
function div(num){
    return new Promise((resolve,reject)=>{
        resolve(num/2-2);
    })
}
async function consume(){
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log(addRes, subRes, mulRes, divRes);
};
consume(); */