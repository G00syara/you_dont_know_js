const outer = () => {
	var a = 1;

	function inner() {
		var b = 2;

		// здесь у нас есть доступ и к `a`, и к `b`
		console.log( a + b );	// 3
	}

    inner();

	// здесь у нас есть доступ только к  `a`
	console.log( a );			// 1
}

outer()

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

const x = (arg1: number, arg2: number, arg3: number) => {
    let cost = 0;
    while (cost < arg1){
        let y = arg1
        cost += y - (arg2*TAX_RATE + arg2 + arg3*TAX_RATE + arg3)
        y-= (arg2*TAX_RATE + arg2 + arg3*TAX_RATE + arg3)
    }
    console.log(cost)
}


x(SPENDING_THRESHOLD, PHONE_PRICE, ACCESSORY_PRICE)
