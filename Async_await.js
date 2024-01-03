//Async Await are key words


function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink == 'Whisky') {
            resolve('Order is received')
        }
        else {
            reject('other drinks are not available')
        }
    })
}

function processOrder(order) {
    return new Promise(function (resolve) {
        console.log(' Hold on ! we are processing your drinks...')
        resolve(`${order} has been served`)

    })
}

async function serveOrder() {
    try {
        let orderPlaced = await placeOrder('Whisky')
        console.log(orderPlaced)
        let precessedOrder = await processOrder(orderPlaced)
        console.log(precessedOrder)
    }
    catch (error) {
        console.log(error)
    }
}



serveOrder()