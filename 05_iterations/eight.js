//reduce

const myNums = [1,2,3]

const newNums = myNums.reduce((acc,curval) => acc+curval , 0 )
console.log(newNums);

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "web course",
        price: 1299
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) =>acc + item.price , 0)
console.log(priceToPay);

