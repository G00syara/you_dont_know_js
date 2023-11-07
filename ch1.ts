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

outer();