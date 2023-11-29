function foo() {
	var a;

	console.log( a ); // undefined

	a = 2;
}

foo();

// ^ Объявления функций поднимаются

foo(); // не ReferenceError, но TypeError!

var foo = function bar() {
	// ...
};

// ^  Функциональные выражения — нет.

//----------------------------------------------------------------------------------------

// Идентификатор имени недоступен в окружающей области видимости: \/

foo(); // TypeError
bar(); // ReferenceError

var foo = function bar() {
	// ...
}; 

// Этот код более точно интерпретируется (с учетом поднятия) как: \/

var foo;

foo(); // TypeError
bar(); // ReferenceError

foo = function() {
	var bar = ...self...
	// ...
}

// ----------------------------------------------------------------------------------

// Сперва поднимаются функции, а затем уже переменные.

// Представим: \/

foo(); // 1

var foo;

function foo() {
	console.log( 1 );
}

foo = function() {
	console.log( 2 );
};

// 1 выводится вместо 2! Этот код интерпретируется Движком так: \/

function foo() {
	console.log( 1 );
}

foo(); // 1

foo = function() {
	console.log( 2 );
};


// Множественные/дублирующие объявления var фактически игнорируются, последовательные объявления функции перекрывают предыдущие.

foo(); // 3

function foo() {
	console.log( 1 );
}

var foo = function() {
	console.log( 2 );
};

function foo() {
	console.log( 3 );
}