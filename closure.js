// An Example of Closure

//tipper
// Write a Function , which accepts 
//1. basePerCent of Tip 
//2. Create & returns a Fuction , which accepts billAmount and Calculate Tip Amount 
//3. And Return Tip billAmount, tipAmount, totalPayable as String 


const Tipper = (basePerCent) => {
    let tip;
    let tolpay;
    return {
        CalTip(billAmount){
            //tip = (basePerCent/100)*billAmount
            //return `tip = ${tip}`
            return `tip = ${(basePerCent/100)*billAmount}`
        },
        CalPayable(billAmount){
            tolpay = billAmount + (basePerCent/100)*billAmount
            return `payable amount = ${tolpay}`
        },
        getAll(){
            return `tip = ${tip} & tolpay = ${tolpay}`
        }
    }
}

const T = Tipper(10)
console.log(T.CalTip(100))
console.log(T.CalPayable(100))
console.log(T.getAll())

const T1 = Tipper(50)
console.log(T1.CalTip(100))
console.log(T1.CalPayable(100))
console.log(T1.getAll())
