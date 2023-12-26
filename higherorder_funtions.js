const arr = [1, 2, 3, 4, 5]

const result = arr.map(function (n) {
    return n * n;
})
console.log(result);




const transactions = [2000, 2222, 4550, -5000, 2000, -1500]
const dollar = 80
const intodollar = transactions.map((n) => {
    return n * dollar;
})

console.log(intodollar)