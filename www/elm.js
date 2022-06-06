(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;


/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 * Copyright (c) 2013 John Mayer
 * Copyright (c) 2018 Andrey Kuzmin
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

// Vector2

var _MJS_v2 = F2(function(x, y) {
    return new Float64Array([x, y]);
});

var _MJS_v2getX = function(a) {
    return a[0];
};

var _MJS_v2getY = function(a) {
    return a[1];
};

var _MJS_v2setX = F2(function(x, a) {
    return new Float64Array([x, a[1]]);
});

var _MJS_v2setY = F2(function(y, a) {
    return new Float64Array([a[0], y]);
});

var _MJS_v2toRecord = function(a) {
    return { x: a[0], y: a[1] };
};

var _MJS_v2fromRecord = function(r) {
    return new Float64Array([r.x, r.y]);
};

var _MJS_v2add = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    return r;
});

var _MJS_v2sub = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    return r;
});

var _MJS_v2negate = function(a) {
    var r = new Float64Array(2);
    r[0] = -a[0];
    r[1] = -a[1];
    return r;
};

var _MJS_v2direction = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    var im = 1.0 / _MJS_v2lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    return r;
});

function _MJS_v2lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}
var _MJS_v2length = _MJS_v2lengthLocal;

var _MJS_v2lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1];
};

var _MJS_v2distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
});

var _MJS_v2distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return dx * dx + dy * dy;
});

var _MJS_v2normalize = function(a) {
    var r = new Float64Array(2);
    var im = 1.0 / _MJS_v2lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    return r;
};

var _MJS_v2scale = F2(function(k, a) {
    var r = new Float64Array(2);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    return r;
});

var _MJS_v2dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1];
});

// Vector3

var _MJS_v3temp1Local = new Float64Array(3);
var _MJS_v3temp2Local = new Float64Array(3);
var _MJS_v3temp3Local = new Float64Array(3);

var _MJS_v3 = F3(function(x, y, z) {
    return new Float64Array([x, y, z]);
});

var _MJS_v3getX = function(a) {
    return a[0];
};

var _MJS_v3getY = function(a) {
    return a[1];
};

var _MJS_v3getZ = function(a) {
    return a[2];
};

var _MJS_v3setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2]]);
});

var _MJS_v3setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2]]);
});

var _MJS_v3setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z]);
});

var _MJS_v3toRecord = function(a) {
    return { x: a[0], y: a[1], z: a[2] };
};

var _MJS_v3fromRecord = function(r) {
    return new Float64Array([r.x, r.y, r.z]);
};

var _MJS_v3add = F2(function(a, b) {
    var r = new Float64Array(3);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    return r;
});

function _MJS_v3subLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    return r;
}
var _MJS_v3sub = F2(_MJS_v3subLocal);

var _MJS_v3negate = function(a) {
    var r = new Float64Array(3);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    return r;
};

function _MJS_v3directionLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    return _MJS_v3normalizeLocal(_MJS_v3subLocal(a, b, r), r);
}
var _MJS_v3direction = F2(_MJS_v3directionLocal);

function _MJS_v3lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
}
var _MJS_v3length = _MJS_v3lengthLocal;

var _MJS_v3lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
};

var _MJS_v3distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
});

var _MJS_v3distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return dx * dx + dy * dy + dz * dz;
});

function _MJS_v3normalizeLocal(a, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    var im = 1.0 / _MJS_v3lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    return r;
}
var _MJS_v3normalize = _MJS_v3normalizeLocal;

var _MJS_v3scale = F2(function(k, a) {
    return new Float64Array([a[0] * k, a[1] * k, a[2] * k]);
});

var _MJS_v3dotLocal = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
var _MJS_v3dot = F2(_MJS_v3dotLocal);

function _MJS_v3crossLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[1] * b[2] - a[2] * b[1];
    r[1] = a[2] * b[0] - a[0] * b[2];
    r[2] = a[0] * b[1] - a[1] * b[0];
    return r;
}
var _MJS_v3cross = F2(_MJS_v3crossLocal);

var _MJS_v3mul4x4 = F2(function(m, v) {
    var w;
    var tmp = _MJS_v3temp1Local;
    var r = new Float64Array(3);

    tmp[0] = m[3];
    tmp[1] = m[7];
    tmp[2] = m[11];
    w = _MJS_v3dotLocal(v, tmp) + m[15];
    tmp[0] = m[0];
    tmp[1] = m[4];
    tmp[2] = m[8];
    r[0] = (_MJS_v3dotLocal(v, tmp) + m[12]) / w;
    tmp[0] = m[1];
    tmp[1] = m[5];
    tmp[2] = m[9];
    r[1] = (_MJS_v3dotLocal(v, tmp) + m[13]) / w;
    tmp[0] = m[2];
    tmp[1] = m[6];
    tmp[2] = m[10];
    r[2] = (_MJS_v3dotLocal(v, tmp) + m[14]) / w;
    return r;
});

// Vector4

var _MJS_v4 = F4(function(x, y, z, w) {
    return new Float64Array([x, y, z, w]);
});

var _MJS_v4getX = function(a) {
    return a[0];
};

var _MJS_v4getY = function(a) {
    return a[1];
};

var _MJS_v4getZ = function(a) {
    return a[2];
};

var _MJS_v4getW = function(a) {
    return a[3];
};

var _MJS_v4setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2], a[3]]);
});

var _MJS_v4setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2], a[3]]);
});

var _MJS_v4setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z, a[3]]);
});

var _MJS_v4setW = F2(function(w, a) {
    return new Float64Array([a[0], a[1], a[2], w]);
});

var _MJS_v4toRecord = function(a) {
    return { x: a[0], y: a[1], z: a[2], w: a[3] };
};

var _MJS_v4fromRecord = function(r) {
    return new Float64Array([r.x, r.y, r.z, r.w]);
};

var _MJS_v4add = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    r[3] = a[3] + b[3];
    return r;
});

var _MJS_v4sub = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    return r;
});

var _MJS_v4negate = function(a) {
    var r = new Float64Array(4);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    r[3] = -a[3];
    return r;
};

var _MJS_v4direction = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    var im = 1.0 / _MJS_v4lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    r[2] = r[2] * im;
    r[3] = r[3] * im;
    return r;
});

function _MJS_v4lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]);
}
var _MJS_v4length = _MJS_v4lengthLocal;

var _MJS_v4lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3];
};

var _MJS_v4distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
});

var _MJS_v4distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return dx * dx + dy * dy + dz * dz + dw * dw;
});

var _MJS_v4normalize = function(a) {
    var r = new Float64Array(4);
    var im = 1.0 / _MJS_v4lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    r[3] = a[3] * im;
    return r;
};

var _MJS_v4scale = F2(function(k, a) {
    var r = new Float64Array(4);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    r[2] = a[2] * k;
    r[3] = a[3] * k;
    return r;
});

var _MJS_v4dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
});

// Matrix4

var _MJS_m4x4temp1Local = new Float64Array(16);
var _MJS_m4x4temp2Local = new Float64Array(16);

var _MJS_m4x4identity = new Float64Array([
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
]);

var _MJS_m4x4fromRecord = function(r) {
    var m = new Float64Array(16);
    m[0] = r.m11;
    m[1] = r.m21;
    m[2] = r.m31;
    m[3] = r.m41;
    m[4] = r.m12;
    m[5] = r.m22;
    m[6] = r.m32;
    m[7] = r.m42;
    m[8] = r.m13;
    m[9] = r.m23;
    m[10] = r.m33;
    m[11] = r.m43;
    m[12] = r.m14;
    m[13] = r.m24;
    m[14] = r.m34;
    m[15] = r.m44;
    return m;
};

var _MJS_m4x4toRecord = function(m) {
    return {
        m11: m[0], m21: m[1], m31: m[2], m41: m[3],
        m12: m[4], m22: m[5], m32: m[6], m42: m[7],
        m13: m[8], m23: m[9], m33: m[10], m43: m[11],
        m14: m[12], m24: m[13], m34: m[14], m44: m[15]
    };
};

var _MJS_m4x4inverse = function(m) {
    var r = new Float64Array(16);

    r[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] +
        m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
    r[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] -
        m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
    r[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] +
        m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
    r[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] -
        m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
    r[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] -
        m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
    r[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] +
        m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
    r[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] -
        m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
    r[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] +
        m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
    r[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] +
        m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
    r[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] -
        m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
    r[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] +
        m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
    r[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] -
        m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
    r[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] -
        m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
    r[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] +
        m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
    r[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] -
        m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
    r[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] +
        m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];

    var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];

    if (det === 0) {
        return $elm$core$Maybe$Nothing;
    }

    det = 1.0 / det;

    for (var i = 0; i < 16; i = i + 1) {
        r[i] = r[i] * det;
    }

    return $elm$core$Maybe$Just(r);
};

var _MJS_m4x4inverseOrthonormal = function(m) {
    var r = _MJS_m4x4transposeLocal(m);
    var t = [m[12], m[13], m[14]];
    r[3] = r[7] = r[11] = 0;
    r[12] = -_MJS_v3dotLocal([r[0], r[4], r[8]], t);
    r[13] = -_MJS_v3dotLocal([r[1], r[5], r[9]], t);
    r[14] = -_MJS_v3dotLocal([r[2], r[6], r[10]], t);
    return r;
};

function _MJS_m4x4makeFrustumLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 * znear / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 * znear / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = (right + left) / (right - left);
    r[9] = (top + bottom) / (top - bottom);
    r[10] = -(zfar + znear) / (zfar - znear);
    r[11] = -1;
    r[12] = 0;
    r[13] = 0;
    r[14] = -2 * zfar * znear / (zfar - znear);
    r[15] = 0;

    return r;
}
var _MJS_m4x4makeFrustum = F6(_MJS_m4x4makeFrustumLocal);

var _MJS_m4x4makePerspective = F4(function(fovy, aspect, znear, zfar) {
    var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
    var ymin = -ymax;
    var xmin = ymin * aspect;
    var xmax = ymax * aspect;

    return _MJS_m4x4makeFrustumLocal(xmin, xmax, ymin, ymax, znear, zfar);
});

function _MJS_m4x4makeOrthoLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = -2 / (zfar - znear);
    r[11] = 0;
    r[12] = -(right + left) / (right - left);
    r[13] = -(top + bottom) / (top - bottom);
    r[14] = -(zfar + znear) / (zfar - znear);
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeOrtho = F6(_MJS_m4x4makeOrthoLocal);

var _MJS_m4x4makeOrtho2D = F4(function(left, right, bottom, top) {
    return _MJS_m4x4makeOrthoLocal(left, right, bottom, top, -1, 1);
});

function _MJS_m4x4mulLocal(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a41 = a[3];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a42 = a[7];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a43 = a[11];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];
    var a44 = a[15];
    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b41 = b[3];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b42 = b[7];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b43 = b[11];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];
    var b44 = b[15];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    r[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    r[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    r[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    r[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    return r;
}
var _MJS_m4x4mul = F2(_MJS_m4x4mulLocal);

var _MJS_m4x4mulAffine = F2(function(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];

    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31;
    r[3] = 0;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32;
    r[7] = 0;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33;
    r[11] = 0;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34;
    r[15] = 1;

    return r;
});

var _MJS_m4x4makeRotate = F2(function(angle, axis) {
    var r = new Float64Array(16);
    axis = _MJS_v3normalizeLocal(axis, _MJS_v3temp1Local);
    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);

    r[0] = x * x * c1 + c;
    r[1] = y * x * c1 + z * s;
    r[2] = z * x * c1 - y * s;
    r[3] = 0;
    r[4] = x * y * c1 - z * s;
    r[5] = y * y * c1 + c;
    r[6] = y * z * c1 + x * s;
    r[7] = 0;
    r[8] = x * z * c1 + y * s;
    r[9] = y * z * c1 - x * s;
    r[10] = z * z * c1 + c;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});

var _MJS_m4x4rotate = F3(function(angle, axis, m) {
    var r = new Float64Array(16);
    var im = 1.0 / _MJS_v3lengthLocal(axis);
    var x = axis[0] * im;
    var y = axis[1] * im;
    var z = axis[2] * im;
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);
    var xs = x * s;
    var ys = y * s;
    var zs = z * s;
    var xyc1 = x * y * c1;
    var xzc1 = x * z * c1;
    var yzc1 = y * z * c1;
    var t11 = x * x * c1 + c;
    var t21 = xyc1 + zs;
    var t31 = xzc1 - ys;
    var t12 = xyc1 - zs;
    var t22 = y * y * c1 + c;
    var t32 = yzc1 + xs;
    var t13 = xzc1 + ys;
    var t23 = yzc1 - xs;
    var t33 = z * z * c1 + c;
    var m11 = m[0], m21 = m[1], m31 = m[2], m41 = m[3];
    var m12 = m[4], m22 = m[5], m32 = m[6], m42 = m[7];
    var m13 = m[8], m23 = m[9], m33 = m[10], m43 = m[11];
    var m14 = m[12], m24 = m[13], m34 = m[14], m44 = m[15];

    r[0] = m11 * t11 + m12 * t21 + m13 * t31;
    r[1] = m21 * t11 + m22 * t21 + m23 * t31;
    r[2] = m31 * t11 + m32 * t21 + m33 * t31;
    r[3] = m41 * t11 + m42 * t21 + m43 * t31;
    r[4] = m11 * t12 + m12 * t22 + m13 * t32;
    r[5] = m21 * t12 + m22 * t22 + m23 * t32;
    r[6] = m31 * t12 + m32 * t22 + m33 * t32;
    r[7] = m41 * t12 + m42 * t22 + m43 * t32;
    r[8] = m11 * t13 + m12 * t23 + m13 * t33;
    r[9] = m21 * t13 + m22 * t23 + m23 * t33;
    r[10] = m31 * t13 + m32 * t23 + m33 * t33;
    r[11] = m41 * t13 + m42 * t23 + m43 * t33;
    r[12] = m14,
    r[13] = m24;
    r[14] = m34;
    r[15] = m44;

    return r;
});

function _MJS_m4x4makeScale3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = x;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = y;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = z;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeScale3 = F3(_MJS_m4x4makeScale3Local);

var _MJS_m4x4makeScale = function(v) {
    return _MJS_m4x4makeScale3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4scale3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

var _MJS_m4x4scale = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

function _MJS_m4x4makeTranslate3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = 1;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 1;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = 1;
    r[11] = 0;
    r[12] = x;
    r[13] = y;
    r[14] = z;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeTranslate3 = F3(_MJS_m4x4makeTranslate3Local);

var _MJS_m4x4makeTranslate = function(v) {
    return _MJS_m4x4makeTranslate3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4translate3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4translate = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4makeLookAt = F3(function(eye, center, up) {
    var z = _MJS_v3directionLocal(eye, center, _MJS_v3temp1Local);
    var x = _MJS_v3normalizeLocal(_MJS_v3crossLocal(up, z, _MJS_v3temp2Local), _MJS_v3temp2Local);
    var y = _MJS_v3normalizeLocal(_MJS_v3crossLocal(z, x, _MJS_v3temp3Local), _MJS_v3temp3Local);
    var tm1 = _MJS_m4x4temp1Local;
    var tm2 = _MJS_m4x4temp2Local;

    tm1[0] = x[0];
    tm1[1] = y[0];
    tm1[2] = z[0];
    tm1[3] = 0;
    tm1[4] = x[1];
    tm1[5] = y[1];
    tm1[6] = z[1];
    tm1[7] = 0;
    tm1[8] = x[2];
    tm1[9] = y[2];
    tm1[10] = z[2];
    tm1[11] = 0;
    tm1[12] = 0;
    tm1[13] = 0;
    tm1[14] = 0;
    tm1[15] = 1;

    tm2[0] = 1; tm2[1] = 0; tm2[2] = 0; tm2[3] = 0;
    tm2[4] = 0; tm2[5] = 1; tm2[6] = 0; tm2[7] = 0;
    tm2[8] = 0; tm2[9] = 0; tm2[10] = 1; tm2[11] = 0;
    tm2[12] = -eye[0]; tm2[13] = -eye[1]; tm2[14] = -eye[2]; tm2[15] = 1;

    return _MJS_m4x4mulLocal(tm1, tm2);
});


function _MJS_m4x4transposeLocal(m) {
    var r = new Float64Array(16);

    r[0] = m[0]; r[1] = m[4]; r[2] = m[8]; r[3] = m[12];
    r[4] = m[1]; r[5] = m[5]; r[6] = m[9]; r[7] = m[13];
    r[8] = m[2]; r[9] = m[6]; r[10] = m[10]; r[11] = m[14];
    r[12] = m[3]; r[13] = m[7]; r[14] = m[11]; r[15] = m[15];

    return r;
}
var _MJS_m4x4transpose = _MJS_m4x4transposeLocal;

var _MJS_m4x4makeBasis = F3(function(vx, vy, vz) {
    var r = new Float64Array(16);

    r[0] = vx[0];
    r[1] = vx[1];
    r[2] = vx[2];
    r[3] = 0;
    r[4] = vy[0];
    r[5] = vy[1];
    r[6] = vy[2];
    r[7] = 0;
    r[8] = vz[0];
    r[9] = vz[1];
    r[10] = vz[2];
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}



// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$document = _Browser_document;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Main$GetInit = {$: 'GetInit'};
var $author$project$Main$NavbarMsg = function (a) {
	return {$: 'NavbarMsg', a: a};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $truqu$elm_base64$Base64$Decode$pad = function (input) {
	var _v0 = $elm$core$String$length(input) % 4;
	switch (_v0) {
		case 3:
			return input + '=';
		case 2:
			return input + '==';
		default:
			return input;
	}
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $truqu$elm_base64$Base64$Decode$charToInt = function (_char) {
	switch (_char.valueOf()) {
		case 'A':
			return 0;
		case 'B':
			return 1;
		case 'C':
			return 2;
		case 'D':
			return 3;
		case 'E':
			return 4;
		case 'F':
			return 5;
		case 'G':
			return 6;
		case 'H':
			return 7;
		case 'I':
			return 8;
		case 'J':
			return 9;
		case 'K':
			return 10;
		case 'L':
			return 11;
		case 'M':
			return 12;
		case 'N':
			return 13;
		case 'O':
			return 14;
		case 'P':
			return 15;
		case 'Q':
			return 16;
		case 'R':
			return 17;
		case 'S':
			return 18;
		case 'T':
			return 19;
		case 'U':
			return 20;
		case 'V':
			return 21;
		case 'W':
			return 22;
		case 'X':
			return 23;
		case 'Y':
			return 24;
		case 'Z':
			return 25;
		case 'a':
			return 26;
		case 'b':
			return 27;
		case 'c':
			return 28;
		case 'd':
			return 29;
		case 'e':
			return 30;
		case 'f':
			return 31;
		case 'g':
			return 32;
		case 'h':
			return 33;
		case 'i':
			return 34;
		case 'j':
			return 35;
		case 'k':
			return 36;
		case 'l':
			return 37;
		case 'm':
			return 38;
		case 'n':
			return 39;
		case 'o':
			return 40;
		case 'p':
			return 41;
		case 'q':
			return 42;
		case 'r':
			return 43;
		case 's':
			return 44;
		case 't':
			return 45;
		case 'u':
			return 46;
		case 'v':
			return 47;
		case 'w':
			return 48;
		case 'x':
			return 49;
		case 'y':
			return 50;
		case 'z':
			return 51;
		case '0':
			return 52;
		case '1':
			return 53;
		case '2':
			return 54;
		case '3':
			return 55;
		case '4':
			return 56;
		case '5':
			return 57;
		case '6':
			return 58;
		case '7':
			return 59;
		case '8':
			return 60;
		case '9':
			return 61;
		case '+':
			return 62;
		case '/':
			return 63;
		default:
			return 0;
	}
};
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Char$fromCode = _Char_fromCode;
var $truqu$elm_base64$Base64$Decode$intToString = A2($elm$core$Basics$composeR, $elm$core$Char$fromCode, $elm$core$String$fromChar);
var $truqu$elm_base64$Base64$Decode$add = F2(
	function (_char, _v0) {
		var curr = _v0.a;
		var need = _v0.b;
		var res = _v0.c;
		var shiftAndAdd = function (_int) {
			return (63 & _int) | (curr << 6);
		};
		return (!need) ? ((!(128 & _char)) ? _Utils_Tuple3(
			0,
			0,
			_Utils_ap(
				res,
				$truqu$elm_base64$Base64$Decode$intToString(_char))) : (((224 & _char) === 192) ? _Utils_Tuple3(31 & _char, 1, res) : (((240 & _char) === 224) ? _Utils_Tuple3(15 & _char, 2, res) : _Utils_Tuple3(7 & _char, 3, res)))) : ((need === 1) ? _Utils_Tuple3(
			0,
			0,
			_Utils_ap(
				res,
				$truqu$elm_base64$Base64$Decode$intToString(
					shiftAndAdd(_char)))) : _Utils_Tuple3(
			shiftAndAdd(_char),
			need - 1,
			res));
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $truqu$elm_base64$Base64$Decode$toUTF16 = F2(
	function (_char, acc) {
		return _Utils_Tuple3(
			0,
			0,
			A2(
				$truqu$elm_base64$Base64$Decode$add,
				255 & (_char >>> 0),
				A2(
					$truqu$elm_base64$Base64$Decode$add,
					255 & (_char >>> 8),
					A2($truqu$elm_base64$Base64$Decode$add, 255 & (_char >>> 16), acc))));
	});
var $truqu$elm_base64$Base64$Decode$chomp = F2(
	function (char_, _v0) {
		var curr = _v0.a;
		var cnt = _v0.b;
		var utf8ToUtf16 = _v0.c;
		var _char = $truqu$elm_base64$Base64$Decode$charToInt(char_);
		if (cnt === 3) {
			return A2($truqu$elm_base64$Base64$Decode$toUTF16, curr | _char, utf8ToUtf16);
		} else {
			return _Utils_Tuple3((_char << ((3 - cnt) * 6)) | curr, cnt + 1, utf8ToUtf16);
		}
	});
var $elm$core$String$foldl = _String_foldl;
var $truqu$elm_base64$Base64$Decode$initial = _Utils_Tuple3(
	0,
	0,
	_Utils_Tuple3(0, 0, ''));
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $truqu$elm_base64$Base64$Decode$stripNulls = F2(
	function (input, output) {
		return A2($elm$core$String$endsWith, '==', input) ? A2($elm$core$String$dropRight, 2, output) : (A2($elm$core$String$endsWith, '=', input) ? A2($elm$core$String$dropRight, 1, output) : output);
	});
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$contains = _Regex_contains;
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $truqu$elm_base64$Base64$Decode$validBase64Regex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^([A-Za-z0-9\\/+]{4})*([A-Za-z0-9\\/+]{2}[A-Za-z0-9\\/+=]{2})?$'));
var $truqu$elm_base64$Base64$Decode$validate = function (input) {
	return A2($elm$regex$Regex$contains, $truqu$elm_base64$Base64$Decode$validBase64Regex, input) ? $elm$core$Result$Ok(input) : $elm$core$Result$Err('Invalid base64');
};
var $truqu$elm_base64$Base64$Decode$wrapUp = function (_v0) {
	var _v1 = _v0.c;
	var need = _v1.b;
	var res = _v1.c;
	return (need > 0) ? $elm$core$Result$Err('Invalid UTF-16') : $elm$core$Result$Ok(res);
};
var $truqu$elm_base64$Base64$Decode$validateAndDecode = function (input) {
	return A2(
		$elm$core$Result$map,
		$truqu$elm_base64$Base64$Decode$stripNulls(input),
		A2(
			$elm$core$Result$andThen,
			A2(
				$elm$core$Basics$composeR,
				A2($elm$core$String$foldl, $truqu$elm_base64$Base64$Decode$chomp, $truqu$elm_base64$Base64$Decode$initial),
				$truqu$elm_base64$Base64$Decode$wrapUp),
			$truqu$elm_base64$Base64$Decode$validate(input)));
};
var $truqu$elm_base64$Base64$Decode$decode = A2($elm$core$Basics$composeR, $truqu$elm_base64$Base64$Decode$pad, $truqu$elm_base64$Base64$Decode$validateAndDecode);
var $truqu$elm_base64$Base64$decode = $truqu$elm_base64$Base64$Decode$decode;
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $author$project$Main$ASuccess = {$: 'ASuccess'};
var $author$project$Main$ContextMenu = F4(
	function (nodeClicked, mouseX, mouseY, show) {
		return {mouseX: mouseX, mouseY: mouseY, nodeClicked: nodeClicked, show: show};
	});
var $author$project$Main$Size = F2(
	function (width, height) {
		return {height: height, width: width};
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$Closed = {$: 'Closed'};
var $rundis$elm_bootstrap$Bootstrap$Alert$closed = $rundis$elm_bootstrap$Bootstrap$Alert$Closed;
var $author$project$UITypes$NoFormat = function (a) {
	return {$: 'NoFormat', a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $author$project$Main$defaultInitData = {
	actions: _List_Nil,
	examples: $elm$core$Dict$empty,
	filters: _List_Nil,
	funcFormat: $author$project$UITypes$NoFormat('='),
	shortenTokens: _List_Nil
};
var $zaboco$elm_draggable$Internal$NotDragging = {$: 'NotDragging'};
var $zaboco$elm_draggable$Draggable$State = function (a) {
	return {$: 'State', a: a};
};
var $zaboco$elm_draggable$Draggable$init = $zaboco$elm_draggable$Draggable$State($zaboco$elm_draggable$Internal$NotDragging);
var $rundis$elm_bootstrap$Bootstrap$Accordion$State = function (a) {
	return {$: 'State', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$initialState = $rundis$elm_bootstrap$Bootstrap$Accordion$State($elm$core$Dict$empty);
var $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$Area = F4(
	function (top, left, width, height) {
		return {height: height, left: left, top: top, width: width};
	});
var $rundis$elm_bootstrap$Bootstrap$Dropdown$Closed = {$: 'Closed'};
var $rundis$elm_bootstrap$Bootstrap$Dropdown$State = function (a) {
	return {$: 'State', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Dropdown$initialState = $rundis$elm_bootstrap$Bootstrap$Dropdown$State(
	{
		menuSize: A4($rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$Area, 0, 0, 0, 0),
		status: $rundis$elm_bootstrap$Bootstrap$Dropdown$Closed,
		toggleSize: A4($rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$Area, 0, 0, 0, 0)
	});
var $rundis$elm_bootstrap$Bootstrap$Popover$State = function (a) {
	return {$: 'State', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Popover$initialState = $rundis$elm_bootstrap$Bootstrap$Popover$State(
	{
		domState: {
			offsetHeight: 0,
			offsetWidth: 0,
			rect: {height: 0, left: 0, top: 0, width: 0}
		},
		isActive: false
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$State = function (a) {
	return {$: 'State', a: a};
};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$initialState = function (prefix) {
	return $billstclair$elm_localstorage$PortFunnel$LocalStorage$State(
		{isLoaded: false, prefix: prefix, simulationDict: $elm$core$Dict$empty});
};
var $author$project$PortFunnels$initialState = function (prefix) {
	return {
		storage: $billstclair$elm_localstorage$PortFunnel$LocalStorage$initialState(prefix)
	};
};
var $author$project$Main$navBarHeight = 56;
var $author$project$Main$prefix = 'xtraui';
var $author$project$Main$queryParser = function (url) {
	var _v0 = $elm$url$Url$fromString(url);
	if (_v0.$ === 'Nothing') {
		return '';
	} else {
		var a = _v0.a;
		var _v1 = a.query;
		if (_v1.$ === 'Nothing') {
			return '';
		} else {
			var b = _v1.a;
			return b;
		}
	}
};
var $author$project$Main$DndMsg = function (a) {
	return {$: 'DndMsg', a: a};
};
var $annaghi$dnd_list$DnDList$OnDrag = {$: 'OnDrag'};
var $annaghi$dnd_list$DnDList$Rotate = {$: 'Rotate'};
var $annaghi$dnd_list$DnDList$Vertical = {$: 'Vertical'};
var $author$project$Main$config = {
	beforeUpdate: F3(
		function (_v0, _v1, list) {
			return list;
		}),
	listen: $annaghi$dnd_list$DnDList$OnDrag,
	movement: $annaghi$dnd_list$DnDList$Vertical,
	operation: $annaghi$dnd_list$DnDList$Rotate
};
var $annaghi$dnd_list$DnDList$Model = function (a) {
	return {$: 'Model', a: a};
};
var $annaghi$dnd_list$DnDList$GotDragElement = function (a) {
	return {$: 'GotDragElement', a: a};
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm$browser$Browser$Dom$getElement = _Browser_getElement;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $annaghi$dnd_list$DnDList$dragElementCommands = F2(
	function (stepMsg, state) {
		var _v0 = state.dragElement;
		if (_v0.$ === 'Nothing') {
			return A2(
				$elm$core$Task$attempt,
				A2($elm$core$Basics$composeL, stepMsg, $annaghi$dnd_list$DnDList$GotDragElement),
				$elm$browser$Browser$Dom$getElement(state.dragElementId));
		} else {
			return $elm$core$Platform$Cmd$none;
		}
	});
var $annaghi$dnd_list$DnDList$GotDropElement = function (a) {
	return {$: 'GotDropElement', a: a};
};
var $annaghi$dnd_list$DnDList$dropElementCommands = F2(
	function (stepMsg, state) {
		return (!state.dragCounter) ? A2(
			$elm$core$Task$attempt,
			A2($elm$core$Basics$composeL, stepMsg, $annaghi$dnd_list$DnDList$GotDropElement),
			$elm$browser$Browser$Dom$getElement(state.dropElementId)) : $elm$core$Platform$Cmd$none;
	});
var $annaghi$dnd_list$DnDList$commands = F2(
	function (stepMsg, _v0) {
		var model = _v0.a;
		if (model.$ === 'Nothing') {
			return $elm$core$Platform$Cmd$none;
		} else {
			var state = model.a;
			return $elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						A2($annaghi$dnd_list$DnDList$dragElementCommands, stepMsg, state),
						A2($annaghi$dnd_list$DnDList$dropElementCommands, stepMsg, state)
					]));
		}
	});
var $annaghi$dnd_list$DnDList$DragStart = F3(
	function (a, b, c) {
		return {$: 'DragStart', a: a, b: b, c: c};
	});
var $annaghi$dnd_list$Internal$Common$Utils$Position = F2(
	function (x, y) {
		return {x: x, y: y};
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $annaghi$dnd_list$Internal$Common$Utils$clientX = A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float);
var $annaghi$dnd_list$Internal$Common$Utils$clientY = A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float);
var $annaghi$dnd_list$Internal$Common$Utils$decodeCoordinates = A3($elm$json$Json$Decode$map2, $annaghi$dnd_list$Internal$Common$Utils$Position, $annaghi$dnd_list$Internal$Common$Utils$clientX, $annaghi$dnd_list$Internal$Common$Utils$clientY);
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $annaghi$dnd_list$Internal$Common$Utils$decodeMainMouseButton = function (decoder) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (button) {
			return (!button) ? decoder : $elm$json$Json$Decode$fail('Event is only relevant when the main mouse button was pressed.');
		},
		A2($elm$json$Json$Decode$field, 'button', $elm$json$Json$Decode$int));
};
var $annaghi$dnd_list$Internal$Common$Utils$decodeCoordinatesWithButtonCheck = $annaghi$dnd_list$Internal$Common$Utils$decodeMainMouseButton($annaghi$dnd_list$Internal$Common$Utils$decodeCoordinates);
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $annaghi$dnd_list$DnDList$dragEvents = F3(
	function (stepMsg, dragIndex, dragElementId) {
		return _List_fromArray(
			[
				A2(
				$elm$html$Html$Events$preventDefaultOn,
				'mousedown',
				A2(
					$elm$json$Json$Decode$map,
					function (msg) {
						return _Utils_Tuple2(msg, true);
					},
					A2(
						$elm$json$Json$Decode$map,
						A2(
							$elm$core$Basics$composeL,
							stepMsg,
							A2($annaghi$dnd_list$DnDList$DragStart, dragIndex, dragElementId)),
						$annaghi$dnd_list$Internal$Common$Utils$decodeCoordinatesWithButtonCheck)))
			]);
	});
var $annaghi$dnd_list$DnDList$DragEnter = function (a) {
	return {$: 'DragEnter', a: a};
};
var $annaghi$dnd_list$DnDList$DragLeave = {$: 'DragLeave'};
var $annaghi$dnd_list$DnDList$DragOver = F2(
	function (a, b) {
		return {$: 'DragOver', a: a, b: b};
	});
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onMouseEnter = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseenter',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseOver = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseover',
		$elm$json$Json$Decode$succeed(msg));
};
var $annaghi$dnd_list$DnDList$dropEvents = F3(
	function (stepMsg, dropIndex, dropElementId) {
		return _List_fromArray(
			[
				$elm$html$Html$Events$onMouseOver(
				stepMsg(
					A2($annaghi$dnd_list$DnDList$DragOver, dropIndex, dropElementId))),
				$elm$html$Html$Events$onMouseEnter(
				stepMsg(
					$annaghi$dnd_list$DnDList$DragEnter(dropIndex))),
				$elm$html$Html$Events$onMouseLeave(
				stepMsg($annaghi$dnd_list$DnDList$DragLeave))
			]);
	});
var $annaghi$dnd_list$Internal$Common$Utils$px = function (n) {
	return $elm$core$String$fromInt(n) + 'px';
};
var $elm$core$Basics$round = _Basics_round;
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $annaghi$dnd_list$Internal$Common$Utils$translate = F2(
	function (x, y) {
		return 'translate3d(' + ($annaghi$dnd_list$Internal$Common$Utils$px(x) + (', ' + ($annaghi$dnd_list$Internal$Common$Utils$px(y) + ', 0)')));
	});
var $annaghi$dnd_list$DnDList$ghostStyles = F2(
	function (movement, _v0) {
		var model = _v0.a;
		if (model.$ === 'Nothing') {
			return _List_Nil;
		} else {
			var state = model.a;
			var _v2 = state.dragElement;
			if (_v2.$ === 'Just') {
				var element = _v2.a.element;
				var viewport = _v2.a.viewport;
				var transform = function () {
					switch (movement.$) {
						case 'Horizontal':
							return A2(
								$elm$html$Html$Attributes$style,
								'transform',
								A2(
									$annaghi$dnd_list$Internal$Common$Utils$translate,
									$elm$core$Basics$round(((state.currentPosition.x - state.startPosition.x) + element.x) - viewport.x),
									$elm$core$Basics$round(element.y - viewport.y)));
						case 'Vertical':
							return A2(
								$elm$html$Html$Attributes$style,
								'transform',
								A2(
									$annaghi$dnd_list$Internal$Common$Utils$translate,
									$elm$core$Basics$round(element.x - viewport.x),
									$elm$core$Basics$round(((state.currentPosition.y - state.startPosition.y) + element.y) - viewport.y)));
						default:
							return A2(
								$elm$html$Html$Attributes$style,
								'transform',
								A2(
									$annaghi$dnd_list$Internal$Common$Utils$translate,
									$elm$core$Basics$round(((state.currentPosition.x - state.startPosition.x) + element.x) - viewport.x),
									$elm$core$Basics$round(((state.currentPosition.y - state.startPosition.y) + element.y) - viewport.y)));
					}
				}();
				var baseStyles = _List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
						A2($elm$html$Html$Attributes$style, 'top', '0'),
						A2($elm$html$Html$Attributes$style, 'left', '0'),
						A2(
						$elm$html$Html$Attributes$style,
						'height',
						$annaghi$dnd_list$Internal$Common$Utils$px(
							$elm$core$Basics$round(element.height))),
						A2(
						$elm$html$Html$Attributes$style,
						'width',
						$annaghi$dnd_list$Internal$Common$Utils$px(
							$elm$core$Basics$round(element.width))),
						A2($elm$html$Html$Attributes$style, 'pointer-events', 'none')
					]);
				return A2($elm$core$List$cons, transform, baseStyles);
			} else {
				return _List_Nil;
			}
		}
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $annaghi$dnd_list$DnDList$info = function (_v0) {
	var model = _v0.a;
	return A2(
		$elm$core$Maybe$andThen,
		function (state) {
			return A3(
				$elm$core$Maybe$map2,
				F2(
					function (dragElement, dropElement) {
						return {currentPosition: state.currentPosition, dragElement: dragElement, dragElementId: state.dragElementId, dragIndex: state.dragIndex, dropElement: dropElement, dropElementId: state.dropElementId, dropIndex: state.dropIndex, startPosition: state.startPosition};
					}),
				state.dragElement,
				state.dropElement);
		},
		model);
};
var $annaghi$dnd_list$DnDList$Drag = function (a) {
	return {$: 'Drag', a: a};
};
var $annaghi$dnd_list$DnDList$DragEnd = {$: 'DragEnd'};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onMouseMove = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'mousemove');
var $elm$browser$Browser$Events$onMouseUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'mouseup');
var $annaghi$dnd_list$DnDList$subscriptions = F2(
	function (stepMsg, _v0) {
		var model = _v0.a;
		if (model.$ === 'Nothing') {
			return $elm$core$Platform$Sub$none;
		} else {
			return $elm$core$Platform$Sub$batch(
				_List_fromArray(
					[
						$elm$browser$Browser$Events$onMouseMove(
						A2(
							$elm$json$Json$Decode$map,
							A2($elm$core$Basics$composeL, stepMsg, $annaghi$dnd_list$DnDList$Drag),
							$annaghi$dnd_list$Internal$Common$Utils$decodeCoordinates)),
						$elm$browser$Browser$Events$onMouseUp(
						$elm$json$Json$Decode$succeed(
							stepMsg($annaghi$dnd_list$DnDList$DragEnd)))
					]));
		}
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $annaghi$dnd_list$Internal$Common$Operations$splitAt = F2(
	function (i, list) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, i, list),
			A2($elm$core$List$drop, i, list));
	});
var $annaghi$dnd_list$Internal$Common$Operations$afterBackward = F3(
	function (i, j, list) {
		var _v0 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, j + 1, list);
		var beginning = _v0.a;
		var rest = _v0.b;
		var _v1 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, (i - j) - 1, rest);
		var middle = _v1.a;
		var end = _v1.b;
		var _v2 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, 1, end);
		var head = _v2.a;
		var tail = _v2.b;
		return _Utils_ap(
			beginning,
			_Utils_ap(
				head,
				_Utils_ap(middle, tail)));
	});
var $annaghi$dnd_list$Internal$Common$Operations$afterForward = F3(
	function (i, j, list) {
		var _v0 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, i, list);
		var beginning = _v0.a;
		var rest = _v0.b;
		var _v1 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, (j - i) + 1, rest);
		var middle = _v1.a;
		var end = _v1.b;
		var _v2 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, 1, middle);
		var head = _v2.a;
		var tail = _v2.b;
		return _Utils_ap(
			beginning,
			_Utils_ap(
				tail,
				_Utils_ap(head, end)));
	});
var $annaghi$dnd_list$Internal$Common$Operations$insertAfter = F3(
	function (dragIndex, dropIndex, list) {
		return (_Utils_cmp(dragIndex, dropIndex) < 0) ? A3($annaghi$dnd_list$Internal$Common$Operations$afterForward, dragIndex, dropIndex, list) : ((_Utils_cmp(dropIndex, dragIndex) < 0) ? A3($annaghi$dnd_list$Internal$Common$Operations$afterBackward, dragIndex, dropIndex, list) : list);
	});
var $annaghi$dnd_list$Internal$Common$Operations$beforeBackward = F3(
	function (i, j, list) {
		var _v0 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, j, list);
		var beginning = _v0.a;
		var rest = _v0.b;
		var _v1 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, i - j, rest);
		var middle = _v1.a;
		var end = _v1.b;
		var _v2 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, 1, end);
		var head = _v2.a;
		var tail = _v2.b;
		return _Utils_ap(
			beginning,
			_Utils_ap(
				head,
				_Utils_ap(middle, tail)));
	});
var $annaghi$dnd_list$Internal$Common$Operations$beforeForward = F3(
	function (i, j, list) {
		var _v0 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, i, list);
		var beginning = _v0.a;
		var rest = _v0.b;
		var _v1 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, j - i, rest);
		var middle = _v1.a;
		var end = _v1.b;
		var _v2 = A2($annaghi$dnd_list$Internal$Common$Operations$splitAt, 1, middle);
		var head = _v2.a;
		var tail = _v2.b;
		return _Utils_ap(
			beginning,
			_Utils_ap(
				tail,
				_Utils_ap(head, end)));
	});
var $annaghi$dnd_list$Internal$Common$Operations$insertBefore = F3(
	function (dragIndex, dropIndex, list) {
		return (_Utils_cmp(dragIndex, dropIndex) < 0) ? A3($annaghi$dnd_list$Internal$Common$Operations$beforeForward, dragIndex, dropIndex, list) : ((_Utils_cmp(dropIndex, dragIndex) < 0) ? A3($annaghi$dnd_list$Internal$Common$Operations$beforeBackward, dragIndex, dropIndex, list) : list);
	});
var $annaghi$dnd_list$Internal$Common$Operations$rotate = F3(
	function (dragIndex, dropIndex, list) {
		return (_Utils_cmp(dragIndex, dropIndex) < 0) ? A3($annaghi$dnd_list$Internal$Common$Operations$afterForward, dragIndex, dropIndex, list) : ((_Utils_cmp(dropIndex, dragIndex) < 0) ? A3($annaghi$dnd_list$Internal$Common$Operations$beforeBackward, dragIndex, dropIndex, list) : list);
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $annaghi$dnd_list$Internal$Common$Operations$swapAt = F3(
	function (i, j, list) {
		var item_j = A2(
			$elm$core$List$take,
			1,
			A2($elm$core$List$drop, j, list));
		var item_i = A2(
			$elm$core$List$take,
			1,
			A2($elm$core$List$drop, i, list));
		return $elm$core$List$concat(
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (index, item) {
						return _Utils_eq(index, i) ? item_j : (_Utils_eq(index, j) ? item_i : _List_fromArray(
							[item]));
					}),
				list));
	});
var $annaghi$dnd_list$Internal$Common$Operations$swap = F3(
	function (dragIndex, dropIndex, list) {
		return (!_Utils_eq(dragIndex, dropIndex)) ? A3($annaghi$dnd_list$Internal$Common$Operations$swapAt, dragIndex, dropIndex, list) : list;
	});
var $annaghi$dnd_list$DnDList$listUpdate = F4(
	function (operation, dragIndex, dropIndex, list) {
		switch (operation.$) {
			case 'InsertAfter':
				return A3($annaghi$dnd_list$Internal$Common$Operations$insertAfter, dragIndex, dropIndex, list);
			case 'InsertBefore':
				return A3($annaghi$dnd_list$Internal$Common$Operations$insertBefore, dragIndex, dropIndex, list);
			case 'Rotate':
				return A3($annaghi$dnd_list$Internal$Common$Operations$rotate, dragIndex, dropIndex, list);
			case 'Swap':
				return A3($annaghi$dnd_list$Internal$Common$Operations$swap, dragIndex, dropIndex, list);
			default:
				return list;
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $annaghi$dnd_list$DnDList$stateUpdate = F3(
	function (operation, dropIndex, state) {
		switch (operation.$) {
			case 'InsertAfter':
				return _Utils_update(
					state,
					{
						dragCounter: 0,
						dragIndex: (_Utils_cmp(dropIndex, state.dragIndex) < 0) ? (dropIndex + 1) : dropIndex
					});
			case 'InsertBefore':
				return _Utils_update(
					state,
					{
						dragCounter: 0,
						dragIndex: (_Utils_cmp(state.dragIndex, dropIndex) < 0) ? (dropIndex - 1) : dropIndex
					});
			case 'Rotate':
				return _Utils_update(
					state,
					{dragCounter: 0, dragIndex: dropIndex});
			case 'Swap':
				return _Utils_update(
					state,
					{dragCounter: 0, dragIndex: dropIndex});
			default:
				return _Utils_update(
					state,
					{dragCounter: 0});
		}
	});
var $annaghi$dnd_list$DnDList$update = F4(
	function (_v0, msg, _v1, list) {
		var beforeUpdate = _v0.beforeUpdate;
		var listen = _v0.listen;
		var operation = _v0.operation;
		var model = _v1.a;
		switch (msg.$) {
			case 'DragStart':
				var dragIndex = msg.a;
				var dragElementId = msg.b;
				var xy = msg.c;
				return _Utils_Tuple2(
					$annaghi$dnd_list$DnDList$Model(
						$elm$core$Maybe$Just(
							{currentPosition: xy, dragCounter: 0, dragElement: $elm$core$Maybe$Nothing, dragElementId: dragElementId, dragIndex: dragIndex, dropElement: $elm$core$Maybe$Nothing, dropElementId: dragElementId, dropIndex: dragIndex, startPosition: xy})),
					list);
			case 'Drag':
				var xy = msg.a;
				return _Utils_Tuple2(
					$annaghi$dnd_list$DnDList$Model(
						A2(
							$elm$core$Maybe$map,
							function (state) {
								return _Utils_update(
									state,
									{currentPosition: xy, dragCounter: state.dragCounter + 1});
							},
							model)),
					list);
			case 'DragOver':
				var dropIndex = msg.a;
				var dropElementId = msg.b;
				return _Utils_Tuple2(
					$annaghi$dnd_list$DnDList$Model(
						A2(
							$elm$core$Maybe$map,
							function (state) {
								return _Utils_update(
									state,
									{dropElementId: dropElementId, dropIndex: dropIndex});
							},
							model)),
					list);
			case 'DragEnter':
				var dropIndex = msg.a;
				var _v3 = _Utils_Tuple2(model, listen);
				if ((_v3.a.$ === 'Just') && (_v3.b.$ === 'OnDrag')) {
					var state = _v3.a.a;
					var _v4 = _v3.b;
					return ((state.dragCounter > 1) && (!_Utils_eq(state.dragIndex, dropIndex))) ? _Utils_Tuple2(
						$annaghi$dnd_list$DnDList$Model(
							$elm$core$Maybe$Just(
								A3($annaghi$dnd_list$DnDList$stateUpdate, operation, dropIndex, state))),
						A4(
							$annaghi$dnd_list$DnDList$listUpdate,
							operation,
							state.dragIndex,
							dropIndex,
							A3(beforeUpdate, state.dragIndex, dropIndex, list))) : _Utils_Tuple2(
						$annaghi$dnd_list$DnDList$Model(model),
						list);
				} else {
					return _Utils_Tuple2(
						$annaghi$dnd_list$DnDList$Model(
							A2(
								$elm$core$Maybe$map,
								function (state) {
									return _Utils_update(
										state,
										{dragCounter: 0});
								},
								model)),
						list);
				}
			case 'DragLeave':
				return _Utils_Tuple2(
					$annaghi$dnd_list$DnDList$Model(
						A2(
							$elm$core$Maybe$map,
							function (state) {
								return _Utils_update(
									state,
									{dropIndex: state.dragIndex});
							},
							model)),
					list);
			case 'DragEnd':
				var _v5 = _Utils_Tuple2(model, listen);
				if ((_v5.a.$ === 'Just') && (_v5.b.$ === 'OnDrop')) {
					var state = _v5.a.a;
					var _v6 = _v5.b;
					return (!_Utils_eq(state.dragIndex, state.dropIndex)) ? _Utils_Tuple2(
						$annaghi$dnd_list$DnDList$Model($elm$core$Maybe$Nothing),
						A4(
							$annaghi$dnd_list$DnDList$listUpdate,
							operation,
							state.dragIndex,
							state.dropIndex,
							A3(beforeUpdate, state.dragIndex, state.dropIndex, list))) : _Utils_Tuple2(
						$annaghi$dnd_list$DnDList$Model($elm$core$Maybe$Nothing),
						list);
				} else {
					return _Utils_Tuple2(
						$annaghi$dnd_list$DnDList$Model($elm$core$Maybe$Nothing),
						list);
				}
			case 'GotDragElement':
				if (msg.a.$ === 'Err') {
					return _Utils_Tuple2(
						$annaghi$dnd_list$DnDList$Model(model),
						list);
				} else {
					var dragElement = msg.a.a;
					return _Utils_Tuple2(
						$annaghi$dnd_list$DnDList$Model(
							A2(
								$elm$core$Maybe$map,
								function (state) {
									return _Utils_update(
										state,
										{
											dragElement: $elm$core$Maybe$Just(dragElement),
											dropElement: $elm$core$Maybe$Just(dragElement)
										});
								},
								model)),
						list);
				}
			default:
				if (msg.a.$ === 'Err') {
					return _Utils_Tuple2(
						$annaghi$dnd_list$DnDList$Model(model),
						list);
				} else {
					var dropElement = msg.a.a;
					return _Utils_Tuple2(
						$annaghi$dnd_list$DnDList$Model(
							A2(
								$elm$core$Maybe$map,
								function (state) {
									return _Utils_update(
										state,
										{
											dropElement: $elm$core$Maybe$Just(dropElement)
										});
								},
								model)),
						list);
				}
		}
	});
var $annaghi$dnd_list$DnDList$create = F2(
	function (config, stepMsg) {
		return {
			commands: $annaghi$dnd_list$DnDList$commands(stepMsg),
			dragEvents: $annaghi$dnd_list$DnDList$dragEvents(stepMsg),
			dropEvents: $annaghi$dnd_list$DnDList$dropEvents(stepMsg),
			ghostStyles: $annaghi$dnd_list$DnDList$ghostStyles(config.movement),
			info: $annaghi$dnd_list$DnDList$info,
			model: $annaghi$dnd_list$DnDList$Model($elm$core$Maybe$Nothing),
			subscriptions: $annaghi$dnd_list$DnDList$subscriptions(stepMsg),
			update: $annaghi$dnd_list$DnDList$update(config)
		};
	});
var $author$project$Main$system = A2($annaghi$dnd_list$DnDList$create, $author$project$Main$config, $author$project$Main$DndMsg);
var $elm_explorations$linear_algebra$Math$Vector2$vec2 = _MJS_v2;
var $author$project$Main$initModel = F4(
	function (location, h, w, nb) {
		return {
			accState: $rundis$elm_bootstrap$Bootstrap$Accordion$initialState,
			allNodeLabels: _List_Nil,
			cbPopover: $rundis$elm_bootstrap$Bootstrap$Popover$initialState,
			cbRes: false,
			center: A2($elm_explorations$linear_algebra$Math$Vector2$vec2, 375, 500),
			ddState: $rundis$elm_bootstrap$Bootstrap$Dropdown$initialState,
			dirty: false,
			dnd: $author$project$Main$system.model,
			dotString: '',
			drag: $zaboco$elm_draggable$Draggable$init,
			error: '',
			errorType: $author$project$Main$ASuccess,
			errorVis: $rundis$elm_bootstrap$Bootstrap$Alert$closed,
			exampleIndex: 0,
			filtIdCounter: 0,
			filter: '',
			filters: _List_Nil,
			funnelState: $author$project$PortFunnels$initialState($author$project$Main$prefix),
			generatedShare: '',
			height: h - $author$project$Main$navBarHeight,
			initData: $author$project$Main$defaultInitData,
			items: _List_Nil,
			navbarState: nb,
			nodeContext: A4($author$project$Main$ContextMenu, 0, 0, 0, false),
			program: '',
			refNodes: _List_Nil,
			saveName: '',
			savedGraphKeys: _List_Nil,
			selectedSaveGraph: 0,
			share: $author$project$Main$queryParser(location),
			shortDotString: '',
			size: A2($author$project$Main$Size, 1500, 1000),
			spinnerOn: false,
			svgString: '',
			url: $elm$url$Url$fromString(location),
			useSimulator: false,
			wasLoaded: false,
			width: w,
			zoom: 1
		};
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$Hidden = {$: 'Hidden'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$State = function (a) {
	return {$: 'State', a: a};
};
var $elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var $rundis$elm_bootstrap$Bootstrap$Navbar$mapState = F2(
	function (mapper, _v0) {
		var state = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Navbar$State(
			mapper(state));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$initWindowSize = F2(
	function (toMsg, state) {
		return A2(
			$elm$core$Task$perform,
			function (vp) {
				return toMsg(
					A2(
						$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
						function (s) {
							return _Utils_update(
								s,
								{
									windowWidth: $elm$core$Maybe$Just(vp.viewport.width)
								});
						},
						state));
			},
			$elm$browser$Browser$Dom$getViewport);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$initialState = function (toMsg) {
	var state = $rundis$elm_bootstrap$Bootstrap$Navbar$State(
		{dropdowns: $elm$core$Dict$empty, height: $elm$core$Maybe$Nothing, visibility: $rundis$elm_bootstrap$Bootstrap$Navbar$Hidden, windowWidth: $elm$core$Maybe$Nothing});
	return _Utils_Tuple2(
		state,
		A2($rundis$elm_bootstrap$Bootstrap$Navbar$initWindowSize, toMsg, state));
};
var $author$project$Main$SavedGraph = F2(
	function (program, filters) {
		return {filters: filters, program: program};
	});
var $author$project$Main$Filter = F5(
	function (actionIndex, enabled, selectIndex, param, id) {
		return {actionIndex: actionIndex, enabled: enabled, id: id, param: param, selectIndex: selectIndex};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Main$jsonToFilter = A6(
	$elm$json$Json$Decode$map5,
	$author$project$Main$Filter,
	A2($elm$json$Json$Decode$field, 'actionIndex', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'enabled', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'selectIndex', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'param', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
var $elm$json$Json$Decode$list = _Json_decodeList;
var $author$project$Main$jsonToFilterList = A2(
	$elm$json$Json$Decode$field,
	'filters',
	$elm$json$Json$Decode$list($author$project$Main$jsonToFilter));
var $author$project$Main$jsonToSavedGraph = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Main$SavedGraph,
	A2($elm$json$Json$Decode$field, 'program', $elm$json$Json$Decode$string),
	$author$project$Main$jsonToFilterList);
var $author$project$Main$loadSavedGraphToModel = F2(
	function (model, gr) {
		var maxFiltId = A3(
			$elm$core$List$foldl,
			F2(
				function (x, acc) {
					return A2($elm$core$Basics$max, x.id, acc);
				}),
			0,
			gr.filters);
		return _Utils_update(
			model,
			{filtIdCounter: maxFiltId + 1, items: gr.filters, program: gr.program});
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $author$project$Main$run = function (m) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$always(m),
		$elm$core$Task$succeed(_Utils_Tuple0));
};
var $author$project$Main$init = function (flags) {
	var _v0 = $rundis$elm_bootstrap$Bootstrap$Navbar$initialState($author$project$Main$NavbarMsg);
	var navbarState = _v0.a;
	var navbarCmd = _v0.b;
	var initCmd = $elm$core$Platform$Cmd$batch(
		_List_fromArray(
			[
				navbarCmd,
				$author$project$Main$run($author$project$Main$GetInit)
			]));
	var model = A4($author$project$Main$initModel, flags.url, flags.height, flags.width, navbarState);
	var _v1 = model.share;
	if (_v1 === '') {
		return _Utils_Tuple2(model, initCmd);
	} else {
		var a = _v1;
		var _v2 = $truqu$elm_base64$Base64$decode(a);
		if (_v2.$ === 'Err') {
			var b = _v2.a;
			var modelErrShare = _Utils_update(
				model,
				{share: 'Error: ' + b});
			return _Utils_Tuple2(modelErrShare, initCmd);
		} else {
			var c = _v2.a;
			var modelGoodShare = _Utils_update(
				model,
				{share: c});
			var sharedGraph = A2($elm$json$Json$Decode$decodeString, $author$project$Main$jsonToSavedGraph, modelGoodShare.share);
			if (sharedGraph.$ === 'Ok') {
				var g = sharedGraph.a;
				var modelWithShareLoaded = A2($author$project$Main$loadSavedGraphToModel, modelGoodShare, g);
				return _Utils_Tuple2(modelWithShareLoaded, initCmd);
			} else {
				return _Utils_Tuple2(modelGoodShare, initCmd);
			}
		}
	}
};
var $author$project$Main$AccMsg = function (a) {
	return {$: 'AccMsg', a: a};
};
var $author$project$Main$AlertMsg = function (a) {
	return {$: 'AlertMsg', a: a};
};
var $author$project$Main$CBRes = function (a) {
	return {$: 'CBRes', a: a};
};
var $author$project$Main$DDMsg = function (a) {
	return {$: 'DDMsg', a: a};
};
var $author$project$Main$DragMsg = function (a) {
	return {$: 'DragMsg', a: a};
};
var $author$project$Main$Process = function (a) {
	return {$: 'Process', a: a};
};
var $author$project$Main$ResizeView = F2(
	function (a, b) {
		return {$: 'ResizeView', a: a, b: b};
	});
var $author$project$Main$clipboardRes = _Platform_incomingPort('clipboardRes', $elm$json$Json$Decode$bool);
var $elm$browser$Browser$Events$Window = {$: 'Window'};
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		$elm$browser$Browser$Events$Window,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$Hidden = {$: 'Hidden'};
var $rundis$elm_bootstrap$Bootstrap$Accordion$Shown = {$: 'Shown'};
var $rundis$elm_bootstrap$Bootstrap$Accordion$StartDown = {$: 'StartDown'};
var $rundis$elm_bootstrap$Bootstrap$Accordion$StartUp = {$: 'StartUp'};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 'Time', a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {oldTime: oldTime, request: request, subs: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$browser$Browser$AnimationManager$now = _Browser_now(_Utils_Tuple0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(_Utils_Tuple0);
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.request;
		var oldTime = _v0.oldTime;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 'Nothing') {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.subs;
		var oldTime = _v0.oldTime;
		var send = function (sub) {
			if (sub.$ === 'Time') {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 'Delta', a: a};
};
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (sub.$ === 'Time') {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrame = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Time(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrame = $elm$browser$Browser$AnimationManager$onAnimationFrame;
var $rundis$elm_bootstrap$Bootstrap$Accordion$subscriptions = F2(
	function (_v0, toMsg) {
		var cardStates = _v0.a;
		var updState = $rundis$elm_bootstrap$Bootstrap$Accordion$State(
			A2(
				$elm$core$Dict$map,
				F2(
					function (id, state) {
						var _v3 = state.visibility;
						switch (_v3.$) {
							case 'StartDown':
								return _Utils_update(
									state,
									{visibility: $rundis$elm_bootstrap$Bootstrap$Accordion$Shown});
							case 'StartUp':
								return _Utils_update(
									state,
									{visibility: $rundis$elm_bootstrap$Bootstrap$Accordion$Hidden});
							default:
								return state;
						}
					}),
				cardStates));
		var needsSub = A2(
			$elm$core$List$any,
			function (_v2) {
				var state = _v2.b;
				return A2(
					$elm$core$List$member,
					state.visibility,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Accordion$StartDown, $rundis$elm_bootstrap$Bootstrap$Accordion$StartUp]));
			},
			$elm$core$Dict$toList(cardStates));
		return needsSub ? $elm$browser$Browser$Events$onAnimationFrame(
			function (_v1) {
				return toMsg(updState);
			}) : $elm$core$Platform$Sub$none;
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$FadeClose = {$: 'FadeClose'};
var $rundis$elm_bootstrap$Bootstrap$Alert$subscriptions = F2(
	function (visibility, animateMsg) {
		if (visibility.$ === 'StartClose') {
			return $elm$browser$Browser$Events$onAnimationFrame(
				function (_v1) {
					return animateMsg($rundis$elm_bootstrap$Bootstrap$Alert$FadeClose);
				});
		} else {
			return $elm$core$Platform$Sub$none;
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Dropdown$ListenClicks = {$: 'ListenClicks'};
var $elm$browser$Browser$Events$onClick = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'click');
var $rundis$elm_bootstrap$Bootstrap$Dropdown$updateStatus = F2(
	function (status, _v0) {
		var stateRec = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Dropdown$State(
			_Utils_update(
				stateRec,
				{status: status}));
	});
var $rundis$elm_bootstrap$Bootstrap$Dropdown$subscriptions = F2(
	function (state, toMsg) {
		var status = state.a.status;
		switch (status.$) {
			case 'Open':
				return $elm$browser$Browser$Events$onAnimationFrame(
					function (_v1) {
						return toMsg(
							A2($rundis$elm_bootstrap$Bootstrap$Dropdown$updateStatus, $rundis$elm_bootstrap$Bootstrap$Dropdown$ListenClicks, state));
					});
			case 'ListenClicks':
				return $elm$browser$Browser$Events$onClick(
					$elm$json$Json$Decode$succeed(
						toMsg(
							A2($rundis$elm_bootstrap$Bootstrap$Dropdown$updateStatus, $rundis$elm_bootstrap$Bootstrap$Dropdown$Closed, state))));
			default:
				return $elm$core$Platform$Sub$none;
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingDown = {$: 'AnimatingDown'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingUp = {$: 'AnimatingUp'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$Closed = {$: 'Closed'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$ListenClicks = {$: 'ListenClicks'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$Open = {$: 'Open'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$dropdownSubscriptions = F2(
	function (state, toMsg) {
		var dropdowns = state.a.dropdowns;
		var updDropdowns = A2(
			$elm$core$Dict$map,
			F2(
				function (_v2, status) {
					switch (status.$) {
						case 'Open':
							return $rundis$elm_bootstrap$Bootstrap$Navbar$ListenClicks;
						case 'ListenClicks':
							return $rundis$elm_bootstrap$Bootstrap$Navbar$Closed;
						default:
							return $rundis$elm_bootstrap$Bootstrap$Navbar$Closed;
					}
				}),
			dropdowns);
		var updState = A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
			function (s) {
				return _Utils_update(
					s,
					{dropdowns: updDropdowns});
			},
			state);
		var needsSub = function (s) {
			return A2(
				$elm$core$List$any,
				function (_v1) {
					var status = _v1.b;
					return _Utils_eq(status, s);
				},
				$elm$core$Dict$toList(dropdowns));
		};
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					needsSub($rundis$elm_bootstrap$Bootstrap$Navbar$Open) ? $elm$browser$Browser$Events$onAnimationFrame(
					function (_v0) {
						return toMsg(updState);
					}) : $elm$core$Platform$Sub$none,
					needsSub($rundis$elm_bootstrap$Bootstrap$Navbar$ListenClicks) ? $elm$browser$Browser$Events$onClick(
					$elm$json$Json$Decode$succeed(
						toMsg(updState))) : $elm$core$Platform$Sub$none
				]));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$subscriptions = F2(
	function (state, toMsg) {
		var visibility = state.a.visibility;
		var updState = function (v) {
			return A2(
				$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
				function (s) {
					return _Utils_update(
						s,
						{visibility: v});
				},
				state);
		};
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					function () {
					switch (visibility.$) {
						case 'StartDown':
							return $elm$browser$Browser$Events$onAnimationFrame(
								function (_v1) {
									return toMsg(
										updState($rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingDown));
								});
						case 'StartUp':
							return $elm$browser$Browser$Events$onAnimationFrame(
								function (_v2) {
									return toMsg(
										updState($rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingUp));
								});
						default:
							return $elm$core$Platform$Sub$none;
					}
				}(),
					$elm$browser$Browser$Events$onResize(
					F2(
						function (x, _v3) {
							return toMsg(
								A2(
									$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
									function (s) {
										return _Utils_update(
											s,
											{
												windowWidth: $elm$core$Maybe$Just(x)
											});
									},
									state));
						})),
					A2($rundis$elm_bootstrap$Bootstrap$Navbar$dropdownSubscriptions, state, toMsg)
				]));
	});
var $zaboco$elm_draggable$Internal$DragAt = function (a) {
	return {$: 'DragAt', a: a};
};
var $zaboco$elm_draggable$Draggable$Msg = function (a) {
	return {$: 'Msg', a: a};
};
var $zaboco$elm_draggable$Internal$StopDragging = {$: 'StopDragging'};
var $elm$core$Platform$Sub$map = _Platform_map;
var $zaboco$elm_draggable$Internal$Position = F2(
	function (x, y) {
		return {x: x, y: y};
	});
var $elm$core$Basics$truncate = _Basics_truncate;
var $zaboco$elm_draggable$Draggable$positionDecoder = A3(
	$elm$json$Json$Decode$map2,
	$zaboco$elm_draggable$Internal$Position,
	A2(
		$elm$json$Json$Decode$map,
		$elm$core$Basics$truncate,
		A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float)),
	A2(
		$elm$json$Json$Decode$map,
		$elm$core$Basics$truncate,
		A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float)));
var $zaboco$elm_draggable$Draggable$subscriptions = F2(
	function (envelope, _v0) {
		var drag = _v0.a;
		if (drag.$ === 'NotDragging') {
			return $elm$core$Platform$Sub$none;
		} else {
			return A2(
				$elm$core$Platform$Sub$map,
				A2($elm$core$Basics$composeL, envelope, $zaboco$elm_draggable$Draggable$Msg),
				$elm$core$Platform$Sub$batch(
					_List_fromArray(
						[
							$elm$browser$Browser$Events$onMouseMove(
							A2($elm$json$Json$Decode$map, $zaboco$elm_draggable$Internal$DragAt, $zaboco$elm_draggable$Draggable$positionDecoder)),
							$elm$browser$Browser$Events$onMouseUp(
							$elm$json$Json$Decode$succeed($zaboco$elm_draggable$Internal$StopDragging))
						])));
		}
	});
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$PortFunnels$subPort = _Platform_incomingPort('subPort', $elm$json$Json$Decode$value);
var $author$project$PortFunnels$subscriptions = F2(
	function (process, model) {
		return $author$project$PortFunnels$subPort(process);
	});
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2($zaboco$elm_draggable$Draggable$subscriptions, $author$project$Main$DragMsg, model.drag),
				$author$project$Main$system.subscriptions(model.dnd),
				A2($rundis$elm_bootstrap$Bootstrap$Alert$subscriptions, model.errorVis, $author$project$Main$AlertMsg),
				A2($author$project$PortFunnels$subscriptions, $author$project$Main$Process, model),
				$author$project$Main$clipboardRes($author$project$Main$CBRes),
				$elm$browser$Browser$Events$onResize(
				F2(
					function (width, height) {
						return A2($author$project$Main$ResizeView, width, height);
					})),
				A2($rundis$elm_bootstrap$Bootstrap$Navbar$subscriptions, model.navbarState, $author$project$Main$NavbarMsg),
				A2($rundis$elm_bootstrap$Bootstrap$Accordion$subscriptions, model.accState, $author$project$Main$AccMsg),
				A2($rundis$elm_bootstrap$Bootstrap$Dropdown$subscriptions, model.ddState, $author$project$Main$DDMsg)
			]));
};
var $author$project$Main$AError = {$: 'AError'};
var $author$project$Main$AInfo = {$: 'AInfo'};
var $author$project$Main$AWarning = {$: 'AWarning'};
var $author$project$Main$CloseFilterAcc = {$: 'CloseFilterAcc'};
var $author$project$Main$ListGraphKeys = {$: 'ListGraphKeys'};
var $author$project$PortFunnels$LocalStorageHandler = function (a) {
	return {$: 'LocalStorageHandler', a: a};
};
var $author$project$Main$OpenFilterAcc = {$: 'OpenFilterAcc'};
var $author$project$Main$Run = {$: 'Run'};
var $author$project$Main$RunShare = {$: 'RunShare'};
var $author$project$Main$SaveProg = function (a) {
	return {$: 'SaveProg', a: a};
};
var $elm_explorations$linear_algebra$Math$Vector2$add = _MJS_v2add;
var $author$project$Main$buildErrorMessage = function (httpError) {
	switch (httpError.$) {
		case 'BadUrl':
			var message = httpError.a;
			return message;
		case 'Timeout':
			return 'Server is taking too long to respond. Please try again later.';
		case 'NetworkError':
			return 'Unable to reach server.';
		case 'BadStatus':
			var statusCode = httpError.a;
			return 'Request failed with status code: ' + $elm$core$String$fromInt(statusCode);
		default:
			var message = httpError.a;
			return message;
	}
};
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Main$clipboardCopy = _Platform_outgoingPort('clipboardCopy', $elm$json$Json$Encode$string);
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $author$project$Main$decodeSavedGraphs = function (value) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $author$project$Main$jsonToSavedGraph, value);
	if (_v0.$ === 'Ok') {
		var res = _v0.a;
		return res;
	} else {
		var err = _v0.a;
		return {
			filters: _List_Nil,
			program: $elm$json$Json$Decode$errorToString(err)
		};
	}
};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$isLoaded = function (_v0) {
	var state = _v0.a;
	return state.isLoaded;
};
var $elm$core$Basics$not = _Basics_not;
var $author$project$Main$doIsLoaded = function (model) {
	return ((!model.wasLoaded) && $billstclair$elm_localstorage$PortFunnel$LocalStorage$isLoaded(model.funnelState.storage)) ? _Utils_update(
		model,
		{useSimulator: false, wasLoaded: true}) : model;
};
var $author$project$Main$OnDragBy = function (a) {
	return {$: 'OnDragBy', a: a};
};
var $zaboco$elm_draggable$Draggable$Config = function (a) {
	return {$: 'Config', a: a};
};
var $zaboco$elm_draggable$Internal$defaultConfig = {
	onClick: function (_v0) {
		return $elm$core$Maybe$Nothing;
	},
	onDragBy: function (_v1) {
		return $elm$core$Maybe$Nothing;
	},
	onDragEnd: $elm$core$Maybe$Nothing,
	onDragStart: function (_v2) {
		return $elm$core$Maybe$Nothing;
	},
	onMouseDown: function (_v3) {
		return $elm$core$Maybe$Nothing;
	}
};
var $zaboco$elm_draggable$Draggable$basicConfig = function (onDragByListener) {
	var defaultConfig = $zaboco$elm_draggable$Internal$defaultConfig;
	return $zaboco$elm_draggable$Draggable$Config(
		_Utils_update(
			defaultConfig,
			{
				onDragBy: A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, onDragByListener)
			}));
};
var $author$project$Main$dragConfig = $zaboco$elm_draggable$Draggable$basicConfig(
	A2(
		$elm$core$Basics$composeL,
		$author$project$Main$OnDragBy,
		function (_v0) {
			var dx = _v0.a;
			var dy = _v0.b;
			return A2($elm_explorations$linear_algebra$Math$Vector2$vec2, dx, dy);
		}));
var $elm_community$list_extra$List$Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$findIndex = $elm_community$list_extra$List$Extra$findIndexHelp(0);
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$Get = F2(
	function (a, b) {
		return {$: 'Get', a: a, b: b};
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$get = $billstclair$elm_localstorage$PortFunnel$InternalTypes$Get($elm$core$Maybe$Nothing);
var $author$project$PortFunnels$cmdPort = _Platform_outgoingPort('cmdPort', $elm$core$Basics$identity);
var $billstclair$elm_port_funnel$PortFunnel$decodeValue = F2(
	function (decoder, value) {
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, value);
		if (_v0.$ === 'Ok') {
			var res = _v0.a;
			return $elm$core$Result$Ok(res);
		} else {
			var err = _v0.a;
			return $elm$core$Result$Err(
				$elm$json$Json$Decode$errorToString(err));
		}
	});
var $billstclair$elm_port_funnel$PortFunnel$GenericMessage = F3(
	function (moduleName, tag, args) {
		return {args: args, moduleName: moduleName, tag: tag};
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
var $billstclair$elm_port_funnel$PortFunnel$genericMessageDecoder = A4(
	$elm$json$Json$Decode$map3,
	$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
	A2($elm$json$Json$Decode$field, 'module', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'tag', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'args', $elm$json$Json$Decode$value));
var $billstclair$elm_port_funnel$PortFunnel$decodeGenericMessage = function (value) {
	return A2($billstclair$elm_port_funnel$PortFunnel$decodeValue, $billstclair$elm_port_funnel$PortFunnel$genericMessageDecoder, value);
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $billstclair$elm_port_funnel$PortFunnel$encodeGenericMessage = function (message) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'module',
				$elm$json$Json$Encode$string(message.moduleName)),
				_Utils_Tuple2(
				'tag',
				$elm$json$Json$Encode$string(message.tag)),
				_Utils_Tuple2('args', message.args)
			]));
};
var $billstclair$elm_port_funnel$PortFunnel$makeSimulatedFunnelCmdPort = F4(
	function (_v0, simulator, tagger, value) {
		var moduleDesc = _v0.a;
		var _v1 = $billstclair$elm_port_funnel$PortFunnel$decodeGenericMessage(value);
		if (_v1.$ === 'Err') {
			return $elm$core$Platform$Cmd$none;
		} else {
			var genericMessage = _v1.a;
			var _v2 = moduleDesc.decoder(genericMessage);
			if (_v2.$ === 'Err') {
				return $elm$core$Platform$Cmd$none;
			} else {
				var message = _v2.a;
				var _v3 = simulator(message);
				if (_v3.$ === 'Nothing') {
					return $elm$core$Platform$Cmd$none;
				} else {
					var receivedMessage = _v3.a;
					return A2(
						$elm$core$Task$perform,
						tagger,
						$elm$core$Task$succeed(
							$billstclair$elm_port_funnel$PortFunnel$encodeGenericMessage(
								moduleDesc.encoder(receivedMessage))));
				}
			}
		}
	});
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$Clear = function (a) {
	return {$: 'Clear', a: a};
};
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$Got = F3(
	function (a, b, c) {
		return {$: 'Got', a: a, b: b, c: c};
	});
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$Keys = F3(
	function (a, b, c) {
		return {$: 'Keys', a: a, b: b, c: c};
	});
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$ListKeys = F2(
	function (a, b) {
		return {$: 'ListKeys', a: a, b: b};
	});
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$Put = F2(
	function (a, b) {
		return {$: 'Put', a: a, b: b};
	});
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$SessionStorage = function (a) {
	return {$: 'SessionStorage', a: a};
};
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulateClear = function (a) {
	return {$: 'SimulateClear', a: a};
};
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulateGet = F2(
	function (a, b) {
		return {$: 'SimulateGet', a: a, b: b};
	});
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulateListKeys = F2(
	function (a, b) {
		return {$: 'SimulateListKeys', a: a, b: b};
	});
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulatePut = F2(
	function (a, b) {
		return {$: 'SimulatePut', a: a, b: b};
	});
var $billstclair$elm_localstorage$PortFunnel$InternalTypes$Startup = {$: 'Startup'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$GotRecord = F3(
	function (label, key, value) {
		return {key: key, label: label, value: value};
	});
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$nullable = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder)
			]));
};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$gotDecoder = A4(
	$elm$json$Json$Decode$map3,
	$billstclair$elm_localstorage$PortFunnel$LocalStorage$GotRecord,
	A2(
		$elm$json$Json$Decode$field,
		'label',
		$elm$json$Json$Decode$nullable($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$value));
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$KeysRecord = F3(
	function (label, prefix, keys) {
		return {keys: keys, label: label, prefix: prefix};
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$keysDecoder = A4(
	$elm$json$Json$Decode$map3,
	$billstclair$elm_localstorage$PortFunnel$LocalStorage$KeysRecord,
	A2(
		$elm$json$Json$Decode$field,
		'label',
		$elm$json$Json$Decode$nullable($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'prefix', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'keys',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$labeledStringDecoder = function (property) {
	return A3(
		$elm$json$Json$Decode$map2,
		$elm$core$Tuple$pair,
		A2(
			$elm$json$Json$Decode$field,
			'label',
			$elm$json$Json$Decode$nullable($elm$json$Json$Decode$string)),
		A2($elm$json$Json$Decode$field, property, $elm$json$Json$Decode$string));
};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$PutRecord = F2(
	function (key, value) {
		return {key: key, value: value};
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$putDecoder = A3(
	$elm$json$Json$Decode$map2,
	$billstclair$elm_localstorage$PortFunnel$LocalStorage$PutRecord,
	A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$value));
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$NOTAG = {$: 'NOTAG'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$ClearTag = {$: 'ClearTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$GetTag = {$: 'GetTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$GotTag = {$: 'GotTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$KeysTag = {$: 'KeysTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$ListKeysTag = {$: 'ListKeysTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$PutTag = {$: 'PutTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$SessionStorageTag = {$: 'SessionStorageTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$SimulateClearTag = {$: 'SimulateClearTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$SimulateGetTag = {$: 'SimulateGetTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$SimulateListKeysTag = {$: 'SimulateListKeysTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$SimulatePutTag = {$: 'SimulatePutTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$StartupTag = {$: 'StartupTag'};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$clearTag = 'clear';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$getTag = 'get';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$gotTag = 'got';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$keysTag = 'keys';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$listKeysTag = 'listkeys';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$putTag = 'put';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$sessionStorageTag = 'sessionstorage';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$simulateClearTag = 'simulateclear';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$simulateGetTag = 'simulateget';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$simulateListKeysTag = 'simulatelistkeys';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$simulatePutTag = 'simulateput';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$startupTag = 'startup';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$tagDict = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$startupTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$StartupTag),
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$getTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$GetTag),
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$gotTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$GotTag),
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$putTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$PutTag),
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$listKeysTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$ListKeysTag),
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$keysTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$KeysTag),
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$clearTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$ClearTag),
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$sessionStorageTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$SessionStorageTag),
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$simulateGetTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$SimulateGetTag),
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$simulatePutTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$SimulatePutTag),
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$simulateListKeysTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$SimulateListKeysTag),
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$simulateClearTag, $billstclair$elm_localstorage$PortFunnel$LocalStorage$SimulateClearTag)
		]));
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$strtag = function (str) {
	var _v0 = A2($elm$core$Dict$get, str, $billstclair$elm_localstorage$PortFunnel$LocalStorage$tagDict);
	if (_v0.$ === 'Just') {
		var tag = _v0.a;
		return tag;
	} else {
		return $billstclair$elm_localstorage$PortFunnel$LocalStorage$NOTAG;
	}
};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$decode = function (_v0) {
	var tag = _v0.tag;
	var args = _v0.args;
	var _v1 = $billstclair$elm_localstorage$PortFunnel$LocalStorage$strtag(tag);
	switch (_v1.$) {
		case 'GetTag':
			var _v2 = A2(
				$elm$json$Json$Decode$decodeValue,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$labeledStringDecoder('key'),
				args);
			if (_v2.$ === 'Ok') {
				var _v3 = _v2.a;
				var label = _v3.a;
				var key = _v3.b;
				return $elm$core$Result$Ok(
					A2($billstclair$elm_localstorage$PortFunnel$InternalTypes$Get, label, key));
			} else {
				return $elm$core$Result$Err(
					'Get key not a string: ' + A2($elm$json$Json$Encode$encode, 0, args));
			}
		case 'GotTag':
			var _v4 = A2($elm$json$Json$Decode$decodeValue, $billstclair$elm_localstorage$PortFunnel$LocalStorage$gotDecoder, args);
			if (_v4.$ === 'Ok') {
				var label = _v4.a.label;
				var key = _v4.a.key;
				var value = _v4.a.value;
				return $elm$core$Result$Ok(
					A3(
						$billstclair$elm_localstorage$PortFunnel$InternalTypes$Got,
						label,
						key,
						_Utils_eq(value, $elm$json$Json$Encode$null) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(value)));
			} else {
				return $elm$core$Result$Err(
					'Got not { label, key, value }: ' + A2($elm$json$Json$Encode$encode, 0, args));
			}
		case 'PutTag':
			var _v5 = A2($elm$json$Json$Decode$decodeValue, $billstclair$elm_localstorage$PortFunnel$LocalStorage$putDecoder, args);
			if (_v5.$ === 'Ok') {
				var key = _v5.a.key;
				var value = _v5.a.value;
				return $elm$core$Result$Ok(
					A2(
						$billstclair$elm_localstorage$PortFunnel$InternalTypes$Put,
						key,
						_Utils_eq(value, $elm$json$Json$Encode$null) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(value)));
			} else {
				return $elm$core$Result$Err(
					'Put not { key, value }: ' + A2($elm$json$Json$Encode$encode, 0, args));
			}
		case 'ListKeysTag':
			var _v6 = A2(
				$elm$json$Json$Decode$decodeValue,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$labeledStringDecoder('prefix'),
				args);
			if (_v6.$ === 'Ok') {
				var _v7 = _v6.a;
				var label = _v7.a;
				var prefix = _v7.b;
				return $elm$core$Result$Ok(
					A2($billstclair$elm_localstorage$PortFunnel$InternalTypes$ListKeys, label, prefix));
			} else {
				return $elm$core$Result$Err(
					'ListKeys prefix not a string: ' + A2($elm$json$Json$Encode$encode, 0, args));
			}
		case 'KeysTag':
			var _v8 = A2($elm$json$Json$Decode$decodeValue, $billstclair$elm_localstorage$PortFunnel$LocalStorage$keysDecoder, args);
			if (_v8.$ === 'Ok') {
				var label = _v8.a.label;
				var prefix = _v8.a.prefix;
				var keys = _v8.a.keys;
				return $elm$core$Result$Ok(
					A3($billstclair$elm_localstorage$PortFunnel$InternalTypes$Keys, label, prefix, keys));
			} else {
				return $elm$core$Result$Err(
					'Keys not { prefix, keys }: ' + A2($elm$json$Json$Encode$encode, 0, args));
			}
		case 'ClearTag':
			var _v9 = A2($elm$json$Json$Decode$decodeValue, $elm$json$Json$Decode$string, args);
			if (_v9.$ === 'Ok') {
				var prefix = _v9.a;
				return $elm$core$Result$Ok(
					$billstclair$elm_localstorage$PortFunnel$InternalTypes$Clear(prefix));
			} else {
				return $elm$core$Result$Err(
					'Clear prefix not a string: ' + A2($elm$json$Json$Encode$encode, 0, args));
			}
		case 'SessionStorageTag':
			var _v10 = A2($elm$json$Json$Decode$decodeValue, $elm$json$Json$Decode$bool, args);
			if (_v10.$ === 'Ok') {
				var enable = _v10.a;
				return $elm$core$Result$Ok(
					$billstclair$elm_localstorage$PortFunnel$InternalTypes$SessionStorage(enable));
			} else {
				return $elm$core$Result$Err(
					'SessionStorage enable not a bool.' + A2($elm$json$Json$Encode$encode, 0, args));
			}
		case 'StartupTag':
			return $elm$core$Result$Ok($billstclair$elm_localstorage$PortFunnel$InternalTypes$Startup);
		case 'SimulateGetTag':
			var _v11 = A2(
				$elm$json$Json$Decode$decodeValue,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$labeledStringDecoder('key'),
				args);
			if (_v11.$ === 'Ok') {
				var _v12 = _v11.a;
				var label = _v12.a;
				var key = _v12.b;
				return $elm$core$Result$Ok(
					A2($billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulateGet, label, key));
			} else {
				return $elm$core$Result$Err(
					'Get key not a string: ' + A2($elm$json$Json$Encode$encode, 0, args));
			}
		case 'SimulatePutTag':
			var _v13 = A2($elm$json$Json$Decode$decodeValue, $billstclair$elm_localstorage$PortFunnel$LocalStorage$putDecoder, args);
			if (_v13.$ === 'Ok') {
				var key = _v13.a.key;
				var value = _v13.a.value;
				return $elm$core$Result$Ok(
					A2(
						$billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulatePut,
						key,
						_Utils_eq(value, $elm$json$Json$Encode$null) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(value)));
			} else {
				return $elm$core$Result$Err(
					'SimulatePut not { key, value }: ' + A2($elm$json$Json$Encode$encode, 0, args));
			}
		case 'SimulateListKeysTag':
			var _v14 = A2(
				$elm$json$Json$Decode$decodeValue,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$labeledStringDecoder('prefix'),
				args);
			if (_v14.$ === 'Ok') {
				var _v15 = _v14.a;
				var label = _v15.a;
				var prefix = _v15.b;
				return $elm$core$Result$Ok(
					A2($billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulateListKeys, label, prefix));
			} else {
				return $elm$core$Result$Err(
					'SimulateListKeys prefix not a string: ' + A2($elm$json$Json$Encode$encode, 0, args));
			}
		case 'SimulateClearTag':
			var _v16 = A2($elm$json$Json$Decode$decodeValue, $elm$json$Json$Decode$string, args);
			if (_v16.$ === 'Ok') {
				var prefix = _v16.a;
				return $elm$core$Result$Ok(
					$billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulateClear(prefix));
			} else {
				return $elm$core$Result$Err(
					'SimulateClear prefix not a string: ' + A2($elm$json$Json$Encode$encode, 0, args));
			}
		default:
			return $elm$core$Result$Err('Unknown tag: ' + tag);
	}
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$encodeLabeledString = F3(
	function (label, string, property) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'label',
					function () {
						if (label.$ === 'Just') {
							var lab = label.a;
							return $elm$json$Json$Encode$string(lab);
						} else {
							return $elm$json$Json$Encode$null;
						}
					}()),
					_Utils_Tuple2(
					property,
					$elm$json$Json$Encode$string(string))
				]));
	});
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName = 'LocalStorage';
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$encode = function (message) {
	switch (message.$) {
		case 'Startup':
			return A3($billstclair$elm_port_funnel$PortFunnel$GenericMessage, $billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName, $billstclair$elm_localstorage$PortFunnel$LocalStorage$startupTag, $elm$json$Json$Encode$null);
		case 'Get':
			var label = message.a;
			var key = message.b;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$getTag,
				A3($billstclair$elm_localstorage$PortFunnel$LocalStorage$encodeLabeledString, label, key, 'key'));
		case 'Got':
			var label = message.a;
			var key = message.b;
			var value = message.c;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$gotTag,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'label',
							function () {
								if (label.$ === 'Just') {
									var lab = label.a;
									return $elm$json$Json$Encode$string(lab);
								} else {
									return $elm$json$Json$Encode$null;
								}
							}()),
							_Utils_Tuple2(
							'key',
							$elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'value',
							function () {
								if (value.$ === 'Nothing') {
									return $elm$json$Json$Encode$null;
								} else {
									var v = value.a;
									return v;
								}
							}())
						])));
		case 'Put':
			var key = message.a;
			var value = message.b;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$putTag,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							$elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'value',
							function () {
								if (value.$ === 'Nothing') {
									return $elm$json$Json$Encode$null;
								} else {
									var v = value.a;
									return v;
								}
							}())
						])));
		case 'ListKeys':
			var label = message.a;
			var prefix = message.b;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$listKeysTag,
				A3($billstclair$elm_localstorage$PortFunnel$LocalStorage$encodeLabeledString, label, prefix, 'prefix'));
		case 'Keys':
			var label = message.a;
			var prefix = message.b;
			var keys = message.c;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$keysTag,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'label',
							function () {
								if (label.$ === 'Just') {
									var lab = label.a;
									return $elm$json$Json$Encode$string(lab);
								} else {
									return $elm$json$Json$Encode$null;
								}
							}()),
							_Utils_Tuple2(
							'prefix',
							$elm$json$Json$Encode$string(prefix)),
							_Utils_Tuple2(
							'keys',
							A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, keys))
						])));
		case 'Clear':
			var prefix = message.a;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$clearTag,
				$elm$json$Json$Encode$string(prefix));
		case 'SessionStorage':
			var enable = message.a;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$sessionStorageTag,
				$elm$json$Json$Encode$bool(enable));
		case 'SimulateGet':
			var label = message.a;
			var key = message.b;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$simulateGetTag,
				A3($billstclair$elm_localstorage$PortFunnel$LocalStorage$encodeLabeledString, label, key, 'key'));
		case 'SimulatePut':
			var key = message.a;
			var value = message.b;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$simulatePutTag,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'key',
							$elm$json$Json$Encode$string(key)),
							_Utils_Tuple2(
							'value',
							function () {
								if (value.$ === 'Nothing') {
									return $elm$json$Json$Encode$null;
								} else {
									var v = value.a;
									return v;
								}
							}())
						])));
		case 'SimulateListKeys':
			var label = message.a;
			var prefix = message.b;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$simulateListKeysTag,
				A3($billstclair$elm_localstorage$PortFunnel$LocalStorage$encodeLabeledString, label, prefix, 'prefix'));
		default:
			var prefix = message.a;
			return A3(
				$billstclair$elm_port_funnel$PortFunnel$GenericMessage,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
				$billstclair$elm_localstorage$PortFunnel$LocalStorage$simulateClearTag,
				$elm$json$Json$Encode$string(prefix));
	}
};
var $billstclair$elm_port_funnel$PortFunnel$ModuleDesc = function (a) {
	return {$: 'ModuleDesc', a: a};
};
var $billstclair$elm_port_funnel$PortFunnel$ModuleDescRecord = F4(
	function (moduleName, encoder, decoder, process) {
		return {decoder: decoder, encoder: encoder, moduleName: moduleName, process: process};
	});
var $billstclair$elm_port_funnel$PortFunnel$makeModuleDesc = F4(
	function (name, encoder, decoder, processor) {
		return $billstclair$elm_port_funnel$PortFunnel$ModuleDesc(
			A4($billstclair$elm_port_funnel$PortFunnel$ModuleDescRecord, name, encoder, decoder, processor));
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$GetResponse = function (a) {
	return {$: 'GetResponse', a: a};
};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$ListKeysResponse = function (a) {
	return {$: 'ListKeysResponse', a: a};
};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$NoResponse = {$: 'NoResponse'};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $elm_community$dict_extra$Dict$Extra$removeWhen = F2(
	function (pred, dict) {
		return A2(
			$elm$core$Dict$filter,
			F2(
				function (k, v) {
					return !A2(pred, k, v);
				}),
			dict);
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$stripPrefix = F2(
	function (prefix, key) {
		return (prefix === '') ? key : A2(
			$elm$core$String$dropLeft,
			1 + $elm$core$String$length(prefix),
			key);
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$process = F2(
	function (message, boxedState) {
		var state = boxedState.a;
		switch (message.$) {
			case 'Got':
				var label = message.a;
				var key = message.b;
				var value = message.c;
				return _Utils_Tuple2(
					boxedState,
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$GetResponse(
						{
							key: A2($billstclair$elm_localstorage$PortFunnel$LocalStorage$stripPrefix, state.prefix, key),
							label: label,
							value: value
						}));
			case 'Keys':
				var label = message.a;
				var prefix = message.b;
				var keys = message.c;
				return _Utils_Tuple2(
					boxedState,
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$ListKeysResponse(
						{
							keys: A2(
								$elm$core$List$map,
								$billstclair$elm_localstorage$PortFunnel$LocalStorage$stripPrefix(state.prefix),
								keys),
							label: label,
							prefix: A2($billstclair$elm_localstorage$PortFunnel$LocalStorage$stripPrefix, state.prefix, prefix)
						}));
			case 'Startup':
				return _Utils_Tuple2(
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$State(
						_Utils_update(
							state,
							{isLoaded: true})),
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$NoResponse);
			case 'SimulateGet':
				var label = message.a;
				var key = message.b;
				return _Utils_Tuple2(
					boxedState,
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$GetResponse(
						{
							key: A2($billstclair$elm_localstorage$PortFunnel$LocalStorage$stripPrefix, state.prefix, key),
							label: label,
							value: A2($elm$core$Dict$get, key, state.simulationDict)
						}));
			case 'SimulatePut':
				var key = message.a;
				var value = message.b;
				return _Utils_Tuple2(
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$State(
						_Utils_update(
							state,
							{
								simulationDict: function () {
									if (value.$ === 'Nothing') {
										return A2($elm$core$Dict$remove, key, state.simulationDict);
									} else {
										var v = value.a;
										return A3($elm$core$Dict$insert, key, v, state.simulationDict);
									}
								}()
							})),
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$NoResponse);
			case 'SimulateListKeys':
				var label = message.a;
				var prefix = message.b;
				return _Utils_Tuple2(
					boxedState,
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$ListKeysResponse(
						{
							keys: A3(
								$elm$core$Dict$foldr,
								F3(
									function (k, _v2, res) {
										return A2($elm$core$String$startsWith, prefix, k) ? A2(
											$elm$core$List$cons,
											A2($billstclair$elm_localstorage$PortFunnel$LocalStorage$stripPrefix, state.prefix, k),
											res) : res;
									}),
								_List_Nil,
								state.simulationDict),
							label: label,
							prefix: A2($billstclair$elm_localstorage$PortFunnel$LocalStorage$stripPrefix, state.prefix, prefix)
						}));
			case 'SimulateClear':
				var prefix = message.a;
				return _Utils_Tuple2(
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$State(
						_Utils_update(
							state,
							{
								simulationDict: A2(
									$elm_community$dict_extra$Dict$Extra$removeWhen,
									F2(
										function (k, _v3) {
											return A2($elm$core$String$startsWith, prefix, k);
										}),
									state.simulationDict)
							})),
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$NoResponse);
			default:
				return _Utils_Tuple2(
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$State(state),
					$billstclair$elm_localstorage$PortFunnel$LocalStorage$NoResponse);
		}
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleDesc = A4($billstclair$elm_port_funnel$PortFunnel$makeModuleDesc, $billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName, $billstclair$elm_localstorage$PortFunnel$LocalStorage$encode, $billstclair$elm_localstorage$PortFunnel$LocalStorage$decode, $billstclair$elm_localstorage$PortFunnel$LocalStorage$process);
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$simulator = function (message) {
	switch (message.$) {
		case 'Get':
			var label = message.a;
			var key = message.b;
			return $elm$core$Maybe$Just(
				A2($billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulateGet, label, key));
		case 'Put':
			var key = message.a;
			var value = message.b;
			return $elm$core$Maybe$Just(
				A2($billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulatePut, key, value));
		case 'ListKeys':
			var label = message.a;
			var prefix = message.b;
			return $elm$core$Maybe$Just(
				A2($billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulateListKeys, label, prefix));
		case 'Clear':
			var prefix = message.a;
			return $elm$core$Maybe$Just(
				$billstclair$elm_localstorage$PortFunnel$InternalTypes$SimulateClear(prefix));
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$makeSimulatedCmdPort = A2($billstclair$elm_port_funnel$PortFunnel$makeSimulatedFunnelCmdPort, $billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleDesc, $billstclair$elm_localstorage$PortFunnel$LocalStorage$simulator);
var $author$project$PortFunnels$simulatedPortDict = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2($billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName, $billstclair$elm_localstorage$PortFunnel$LocalStorage$makeSimulatedCmdPort)
		]));
var $author$project$PortFunnels$getCmdPort = F3(
	function (tagger, moduleName, useSimulator) {
		if (!useSimulator) {
			return $author$project$PortFunnels$cmdPort;
		} else {
			var _v0 = A2($elm$core$Dict$get, moduleName, $author$project$PortFunnels$simulatedPortDict);
			if (_v0.$ === 'Just') {
				var makeSimulatedCmdPort = _v0.a;
				return makeSimulatedCmdPort(tagger);
			} else {
				return $author$project$PortFunnels$cmdPort;
			}
		}
	});
var $author$project$Main$getCmdPort = F2(
	function (moduleName, model) {
		return A3($author$project$PortFunnels$getCmdPort, $author$project$Main$Process, moduleName, model.useSimulator);
	});
var $author$project$Main$getCurrentGraph = function (model) {
	return {filters: model.items, program: model.program};
};
var $author$project$Main$GotDot = function (a) {
	return {$: 'GotDot', a: a};
};
var $elm_community$json_extra$Json$Decode$Extra$andMap = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Main$filtToString = F2(
	function (model, item) {
		var filt = A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2('', true),
			A2($elm_community$list_extra$List$Extra$getAt, item.selectIndex, model.initData.filters));
		var filtText = filt.a;
		var hasParam = filt.b;
		var actionText = function () {
			var _v0 = A2($elm_community$list_extra$List$Extra$getAt, item.actionIndex, model.initData.actions);
			if (_v0.$ === 'Just') {
				var str = _v0.a;
				return str + ' ';
			} else {
				return '';
			}
		}();
		return item.enabled ? (hasParam ? (actionText + (filtText + (' ' + item.param))) : _Utils_ap(actionText, filtText)) : '';
	});
var $elm_community$list_extra$List$Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _v0) {
				var i = _v0.a;
				var thisAcc = _v0.b;
				return _Utils_Tuple2(
					i - 1,
					A3(func, i, x, thisAcc));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(
				$elm$core$List$length(list) - 1,
				acc),
			list).b;
	});
var $elm_community$list_extra$List$Extra$findIndices = function (predicate) {
	var consIndexIf = F3(
		function (index, x, acc) {
			return predicate(x) ? A2($elm$core$List$cons, index, acc) : acc;
		});
	return A2($elm_community$list_extra$List$Extra$indexedFoldr, consIndexIf, _List_Nil);
};
var $elm_community$list_extra$List$Extra$removeIfIndex = function (predicate) {
	return A2(
		$elm_community$list_extra$List$Extra$indexedFoldr,
		F3(
			function (index, item, acc) {
				return predicate(index) ? acc : A2($elm$core$List$cons, item, acc);
			}),
		_List_Nil);
};
var $elm$core$String$trim = _String_trim;
var $author$project$Main$filtsToString = function (model) {
	var notEnabledInds = A2(
		$elm_community$list_extra$List$Extra$findIndices,
		function (filt) {
			return !filt.enabled;
		},
		model.items);
	var enabledItems = A2(
		$elm_community$list_extra$List$Extra$removeIfIndex,
		function (index) {
			return A2($elm$core$List$member, index, notEnabledInds);
		},
		model.items);
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			function (filt) {
				return $elm$core$String$trim(
					A2($author$project$Main$filtToString, model, filt));
			},
			enabledItems));
};
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $elm$http$Http$post = function (r) {
	return $elm$http$Http$request(
		{body: r.body, expect: r.expect, headers: _List_Nil, method: 'POST', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $author$project$Main$xtraBackendURL = 'http://localhost:8081/trace';
var $author$project$Main$getDotString = function (model) {
	return $elm$http$Http$post(
		{
			body: $elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'prog',
							$elm$json$Json$Encode$string(
								function ($) {
									return $.program;
								}(model))),
							_Utils_Tuple2(
							'filter',
							$elm$json$Json$Encode$string(
								$author$project$Main$filtsToString(model)))
						]))),
			expect: A2(
				$elm$http$Http$expectJson,
				$author$project$Main$GotDot,
				A2(
					$elm_community$json_extra$Json$Decode$Extra$andMap,
					A2($elm$json$Json$Decode$field, 'error', $elm$json$Json$Decode$string),
					A2(
						$elm_community$json_extra$Json$Decode$Extra$andMap,
						A2($elm$json$Json$Decode$field, 'dot', $elm$json$Json$Decode$string),
						$elm$json$Json$Decode$succeed($elm$core$Tuple$pair)))),
			url: $author$project$Main$xtraBackendURL
		});
};
var $author$project$Main$GotInit = function (a) {
	return {$: 'GotInit', a: a};
};
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{body: $elm$http$Http$emptyBody, expect: r.expect, headers: _List_Nil, method: 'GET', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $author$project$UITypes$InitType = F5(
	function (actions, funcFormat, filters, shortenTokens, examples) {
		return {actions: actions, examples: examples, filters: filters, funcFormat: funcFormat, shortenTokens: shortenTokens};
	});
var $author$project$CustomDecoders$actionsDecoder = A2(
	$elm$json$Json$Decode$field,
	'actions',
	$elm$json$Json$Decode$list($elm$json$Json$Decode$string));
var $author$project$CustomDecoders$exampleDecoder = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2($elm$json$Json$Decode$field, 'progText', $elm$json$Json$Decode$string),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm$json$Json$Decode$field, 'progName', $elm$json$Json$Decode$string),
		$elm$json$Json$Decode$succeed($elm$core$Tuple$pair)));
var $author$project$CustomDecoders$examplesDecoder = A2(
	$elm$json$Json$Decode$field,
	'examples',
	A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$list($author$project$CustomDecoders$exampleDecoder)));
var $author$project$CustomDecoders$filterDecoder = A2(
	$elm_community$json_extra$Json$Decode$Extra$andMap,
	A2($elm$json$Json$Decode$field, 'param', $elm$json$Json$Decode$bool),
	A2(
		$elm_community$json_extra$Json$Decode$Extra$andMap,
		A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
		$elm$json$Json$Decode$succeed($elm$core$Tuple$pair)));
var $author$project$CustomDecoders$filtersDecoder = A2(
	$elm$json$Json$Decode$field,
	'filters',
	$elm$json$Json$Decode$list($author$project$CustomDecoders$filterDecoder));
var $author$project$UITypes$FunctionFormat = F3(
	function (a, b, c) {
		return {$: 'FunctionFormat', a: a, b: b, c: c};
	});
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $author$project$CustomDecoders$functionFormatDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$UITypes$FunctionFormat,
	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$index, 2, $elm$json$Json$Decode$string));
var $author$project$CustomDecoders$funcFormatDecoder = A2($elm$json$Json$Decode$field, 'funcFormat', $author$project$CustomDecoders$functionFormatDecoder);
var $author$project$CustomDecoders$shortenTokensDecoder = A2(
	$elm$json$Json$Decode$field,
	'shortenTokens',
	$elm$json$Json$Decode$list($elm$json$Json$Decode$string));
var $author$project$CustomDecoders$initDecoder = A6($elm$json$Json$Decode$map5, $author$project$UITypes$InitType, $author$project$CustomDecoders$actionsDecoder, $author$project$CustomDecoders$funcFormatDecoder, $author$project$CustomDecoders$filtersDecoder, $author$project$CustomDecoders$shortenTokensDecoder, $author$project$CustomDecoders$examplesDecoder);
var $author$project$Main$xtraBackendURLInit = 'http://localhost:8081/init';
var $author$project$Main$getInitData = function (_v0) {
	return $elm$http$Http$get(
		{
			expect: A2($elm$http$Http$expectJson, $author$project$Main$GotInit, $author$project$CustomDecoders$initDecoder),
			url: $author$project$Main$xtraBackendURLInit
		});
};
var $brandly$elm_dot_lang$DotLang$Dot = F3(
	function (a, b, c) {
		return {$: 'Dot', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $brandly$elm_dot_lang$DotLang$Digraph = {$: 'Digraph'};
var $brandly$elm_dot_lang$DotLang$Graph = {$: 'Graph'};
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $brandly$elm_dot_lang$DotLang$symbolToType = function (list) {
	return $elm$parser$Parser$oneOf(
		A2(
			$elm$core$List$map,
			function (_v0) {
				var str = _v0.a;
				var t = _v0.b;
				return A2(
					$elm$parser$Parser$map,
					function (_v1) {
						return t;
					},
					$elm$parser$Parser$symbol(str));
			},
			list));
};
var $brandly$elm_dot_lang$DotLang$edgeType = $brandly$elm_dot_lang$DotLang$symbolToType(
	_List_fromArray(
		[
			_Utils_Tuple2('graph', $brandly$elm_dot_lang$DotLang$Graph),
			_Utils_Tuple2('digraph', $brandly$elm_dot_lang$DotLang$Digraph)
		]));
var $brandly$elm_dot_lang$DotLang$HtmlID = function (a) {
	return {$: 'HtmlID', a: a};
};
var $brandly$elm_dot_lang$DotLang$ID = function (a) {
	return {$: 'ID', a: a};
};
var $brandly$elm_dot_lang$DotLang$NumeralID = function (a) {
	return {$: 'NumeralID', a: a};
};
var $elm$parser$Parser$ExpectingFloat = {$: 'ExpectingFloat'};
var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var $elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {col: s.col + (newOffset - s.offset), context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src};
	});
var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
var $elm$parser$Parser$Advanced$consumeExp = F2(
	function (offset, src) {
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
			var eOffset = offset + 1;
			var expOffset = (A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src)) ? (eOffset + 1) : eOffset;
			var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
			return _Utils_eq(expOffset, newOffset) ? (-newOffset) : newOffset;
		} else {
			return offset;
		}
	});
var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(
	function (offset, src) {
		return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2(
			$elm$parser$Parser$Advanced$consumeExp,
			A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src),
			src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
	});
var $elm$parser$Parser$Advanced$finalizeInt = F5(
	function (invalid, handler, startOffset, _v0, s) {
		var endOffset = _v0.a;
		var n = _v0.b;
		if (handler.$ === 'Err') {
			var x = handler.a;
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.offset, startOffset) < 0,
				A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				toValue(n),
				A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
		}
	});
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$core$String$toFloat = _String_toFloat;
var $elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
		if (floatOffset < 0) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A4($elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
		} else {
			if (_Utils_eq(s.offset, floatOffset)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
				} else {
					if (floatSettings.$ === 'Err') {
						var x = floatSettings.a;
						return A2(
							$elm$parser$Parser$Advanced$Bad,
							true,
							A2($elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _v1 = $elm$core$String$toFloat(
							A3($elm$core$String$slice, s.offset, floatOffset, s.src));
						if (_v1.$ === 'Nothing') {
							return A2(
								$elm$parser$Parser$Advanced$Bad,
								true,
								A2($elm$parser$Parser$Advanced$fromState, s, invalid));
						} else {
							var n = _v1.a;
							return A3(
								$elm$parser$Parser$Advanced$Good,
								true,
								toValue(n),
								A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
						}
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$number = function (c) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
				var zeroOffset = s.offset + 1;
				var baseOffset = zeroOffset + 1;
				return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.hex,
					baseOffset,
					A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.octal,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.binary,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src),
					s) : A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					_Utils_Tuple2(zeroOffset, 0),
					s)));
			} else {
				return A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					A3($elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src),
					s);
			}
		});
};
var $elm$parser$Parser$Advanced$float = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				binary: $elm$core$Result$Err(invalid),
				expecting: expecting,
				_float: $elm$core$Result$Ok($elm$core$Basics$identity),
				hex: $elm$core$Result$Err(invalid),
				_int: $elm$core$Result$Ok($elm$core$Basics$toFloat),
				invalid: invalid,
				octal: $elm$core$Result$Err(invalid)
			});
	});
var $elm$parser$Parser$float = A2($elm$parser$Parser$Advanced$float, $elm$parser$Parser$ExpectingFloat, $elm$parser$Parser$ExpectingFloat);
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $brandly$elm_dot_lang$DotLang$negative = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			function (_v0) {
				return true;
			},
			$elm$parser$Parser$symbol('-')),
			$elm$parser$Parser$succeed(false)
		]));
var $hecrj$html_parser$Html$Parser$Element = F3(
	function (a, b, c) {
		return {$: 'Element', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $hecrj$html_parser$Html$Parser$chompOneOrMore = function (fn) {
	return A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$chompIf(fn),
		$elm$parser$Parser$chompWhile(fn));
};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $hecrj$html_parser$Html$Parser$isSpaceCharacter = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr(' ')) || (_Utils_eq(
		c,
		_Utils_chr('\t')) || (_Utils_eq(
		c,
		_Utils_chr('\n')) || (_Utils_eq(
		c,
		_Utils_chr('\u000D')) || (_Utils_eq(
		c,
		_Utils_chr('\u000C')) || _Utils_eq(
		c,
		_Utils_chr('\u00A0'))))));
};
var $elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $elm$core$String$toLower = _String_toLower;
var $hecrj$html_parser$Html$Parser$closingTag = function (name) {
	var chompName = A2(
		$elm$parser$Parser$andThen,
		function (closingName) {
			return _Utils_eq(
				$elm$core$String$toLower(closingName),
				name) ? $elm$parser$Parser$succeed(_Utils_Tuple0) : $elm$parser$Parser$problem('closing tag does not match opening tag: ' + name);
		},
		$elm$parser$Parser$getChompedString(
			$hecrj$html_parser$Html$Parser$chompOneOrMore(
				function (c) {
					return (!$hecrj$html_parser$Html$Parser$isSpaceCharacter(c)) && (!_Utils_eq(
						c,
						_Utils_chr('>')));
				})));
	return A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$eq(
							_Utils_chr('<'))),
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$eq(
							_Utils_chr('/')))),
				chompName),
			$elm$parser$Parser$chompWhile($hecrj$html_parser$Html$Parser$isSpaceCharacter)),
		$elm$parser$Parser$chompIf(
			$elm$core$Basics$eq(
				_Utils_chr('>'))));
};
var $hecrj$html_parser$Html$Parser$Comment = function (a) {
	return {$: 'Comment', a: a};
};
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.context)) : A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, newOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 'Expecting', a: a};
};
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$chompUntil = function (str) {
	return $elm$parser$Parser$Advanced$chompUntil(
		$elm$parser$Parser$toToken(str));
};
var $elm$parser$Parser$token = function (str) {
	return $elm$parser$Parser$Advanced$token(
		$elm$parser$Parser$toToken(str));
};
var $hecrj$html_parser$Html$Parser$commentString = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$token('<!')),
		$elm$parser$Parser$token('--')),
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$getChompedString(
			$elm$parser$Parser$chompUntil('-->')),
		$elm$parser$Parser$token('-->')));
var $hecrj$html_parser$Html$Parser$comment = A2($elm$parser$Parser$map, $hecrj$html_parser$Html$Parser$Comment, $hecrj$html_parser$Html$Parser$commentString);
var $hecrj$html_parser$Html$Parser$voidElements = _List_fromArray(
	['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
var $hecrj$html_parser$Html$Parser$isVoidElement = function (name) {
	return A2($elm$core$List$member, name, $hecrj$html_parser$Html$Parser$voidElements);
};
var $elm$parser$Parser$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (step.$ === 'Loop') {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $hecrj$html_parser$Html$Parser$many = function (parser_) {
	return A2(
		$elm$parser$Parser$loop,
		_List_Nil,
		function (list) {
			return $elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$map,
						function (_new) {
							return $elm$parser$Parser$Loop(
								A2($elm$core$List$cons, _new, list));
						},
						parser_),
						$elm$parser$Parser$succeed(
						$elm$parser$Parser$Done(
							$elm$core$List$reverse(list)))
					]));
		});
};
var $hecrj$html_parser$Html$Parser$isTagAttributeCharacter = function (c) {
	return (!$hecrj$html_parser$Html$Parser$isSpaceCharacter(c)) && ((!_Utils_eq(
		c,
		_Utils_chr('\"'))) && ((!_Utils_eq(
		c,
		_Utils_chr('\''))) && ((!_Utils_eq(
		c,
		_Utils_chr('>'))) && ((!_Utils_eq(
		c,
		_Utils_chr('/'))) && (!_Utils_eq(
		c,
		_Utils_chr('=')))))));
};
var $hecrj$html_parser$Html$Parser$tagAttributeName = A2(
	$elm$parser$Parser$map,
	$elm$core$String$toLower,
	$elm$parser$Parser$getChompedString(
		$hecrj$html_parser$Html$Parser$chompOneOrMore($hecrj$html_parser$Html$Parser$isTagAttributeCharacter)));
var $hecrj$html_parser$Html$Parser$chompSemicolon = $elm$parser$Parser$chompIf(
	$elm$core$Basics$eq(
		_Utils_chr(';')));
var $hecrj$html_parser$Html$Parser$NamedCharacterReferences$dict = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('Aacute', 'Á'),
			_Utils_Tuple2('aacute', 'á'),
			_Utils_Tuple2('Abreve', 'Ă'),
			_Utils_Tuple2('abreve', 'ă'),
			_Utils_Tuple2('ac', '∾'),
			_Utils_Tuple2('acd', '∿'),
			_Utils_Tuple2('acE', '∾̳'),
			_Utils_Tuple2('Acirc', 'Â'),
			_Utils_Tuple2('acirc', 'â'),
			_Utils_Tuple2('acute', '´'),
			_Utils_Tuple2('Acy', 'А'),
			_Utils_Tuple2('acy', 'а'),
			_Utils_Tuple2('AElig', 'Æ'),
			_Utils_Tuple2('aelig', 'æ'),
			_Utils_Tuple2('af', '\u2061'),
			_Utils_Tuple2('Afr', '\uD835\uDD04'),
			_Utils_Tuple2('afr', '\uD835\uDD1E'),
			_Utils_Tuple2('Agrave', 'À'),
			_Utils_Tuple2('agrave', 'à'),
			_Utils_Tuple2('alefsym', 'ℵ'),
			_Utils_Tuple2('aleph', 'ℵ'),
			_Utils_Tuple2('Alpha', 'Α'),
			_Utils_Tuple2('alpha', 'α'),
			_Utils_Tuple2('Amacr', 'Ā'),
			_Utils_Tuple2('amacr', 'ā'),
			_Utils_Tuple2('amalg', '⨿'),
			_Utils_Tuple2('amp', '&'),
			_Utils_Tuple2('AMP', '&'),
			_Utils_Tuple2('andand', '⩕'),
			_Utils_Tuple2('And', '⩓'),
			_Utils_Tuple2('and', '∧'),
			_Utils_Tuple2('andd', '⩜'),
			_Utils_Tuple2('andslope', '⩘'),
			_Utils_Tuple2('andv', '⩚'),
			_Utils_Tuple2('ang', '∠'),
			_Utils_Tuple2('ange', '⦤'),
			_Utils_Tuple2('angle', '∠'),
			_Utils_Tuple2('angmsdaa', '⦨'),
			_Utils_Tuple2('angmsdab', '⦩'),
			_Utils_Tuple2('angmsdac', '⦪'),
			_Utils_Tuple2('angmsdad', '⦫'),
			_Utils_Tuple2('angmsdae', '⦬'),
			_Utils_Tuple2('angmsdaf', '⦭'),
			_Utils_Tuple2('angmsdag', '⦮'),
			_Utils_Tuple2('angmsdah', '⦯'),
			_Utils_Tuple2('angmsd', '∡'),
			_Utils_Tuple2('angrt', '∟'),
			_Utils_Tuple2('angrtvb', '⊾'),
			_Utils_Tuple2('angrtvbd', '⦝'),
			_Utils_Tuple2('angsph', '∢'),
			_Utils_Tuple2('angst', 'Å'),
			_Utils_Tuple2('angzarr', '⍼'),
			_Utils_Tuple2('Aogon', 'Ą'),
			_Utils_Tuple2('aogon', 'ą'),
			_Utils_Tuple2('Aopf', '\uD835\uDD38'),
			_Utils_Tuple2('aopf', '\uD835\uDD52'),
			_Utils_Tuple2('apacir', '⩯'),
			_Utils_Tuple2('ap', '≈'),
			_Utils_Tuple2('apE', '⩰'),
			_Utils_Tuple2('ape', '≊'),
			_Utils_Tuple2('apid', '≋'),
			_Utils_Tuple2('apos', '\''),
			_Utils_Tuple2('ApplyFunction', '\u2061'),
			_Utils_Tuple2('approx', '≈'),
			_Utils_Tuple2('approxeq', '≊'),
			_Utils_Tuple2('Aring', 'Å'),
			_Utils_Tuple2('aring', 'å'),
			_Utils_Tuple2('Ascr', '\uD835\uDC9C'),
			_Utils_Tuple2('ascr', '\uD835\uDCB6'),
			_Utils_Tuple2('Assign', '≔'),
			_Utils_Tuple2('ast', '*'),
			_Utils_Tuple2('asymp', '≈'),
			_Utils_Tuple2('asympeq', '≍'),
			_Utils_Tuple2('Atilde', 'Ã'),
			_Utils_Tuple2('atilde', 'ã'),
			_Utils_Tuple2('Auml', 'Ä'),
			_Utils_Tuple2('auml', 'ä'),
			_Utils_Tuple2('awconint', '∳'),
			_Utils_Tuple2('awint', '⨑'),
			_Utils_Tuple2('backcong', '≌'),
			_Utils_Tuple2('backepsilon', '϶'),
			_Utils_Tuple2('backprime', '‵'),
			_Utils_Tuple2('backsim', '∽'),
			_Utils_Tuple2('backsimeq', '⋍'),
			_Utils_Tuple2('Backslash', '∖'),
			_Utils_Tuple2('Barv', '⫧'),
			_Utils_Tuple2('barvee', '⊽'),
			_Utils_Tuple2('barwed', '⌅'),
			_Utils_Tuple2('Barwed', '⌆'),
			_Utils_Tuple2('barwedge', '⌅'),
			_Utils_Tuple2('bbrk', '⎵'),
			_Utils_Tuple2('bbrktbrk', '⎶'),
			_Utils_Tuple2('bcong', '≌'),
			_Utils_Tuple2('Bcy', 'Б'),
			_Utils_Tuple2('bcy', 'б'),
			_Utils_Tuple2('bdquo', '„'),
			_Utils_Tuple2('becaus', '∵'),
			_Utils_Tuple2('because', '∵'),
			_Utils_Tuple2('Because', '∵'),
			_Utils_Tuple2('bemptyv', '⦰'),
			_Utils_Tuple2('bepsi', '϶'),
			_Utils_Tuple2('bernou', 'ℬ'),
			_Utils_Tuple2('Bernoullis', 'ℬ'),
			_Utils_Tuple2('Beta', 'Β'),
			_Utils_Tuple2('beta', 'β'),
			_Utils_Tuple2('beth', 'ℶ'),
			_Utils_Tuple2('between', '≬'),
			_Utils_Tuple2('Bfr', '\uD835\uDD05'),
			_Utils_Tuple2('bfr', '\uD835\uDD1F'),
			_Utils_Tuple2('bigcap', '⋂'),
			_Utils_Tuple2('bigcirc', '◯'),
			_Utils_Tuple2('bigcup', '⋃'),
			_Utils_Tuple2('bigodot', '⨀'),
			_Utils_Tuple2('bigoplus', '⨁'),
			_Utils_Tuple2('bigotimes', '⨂'),
			_Utils_Tuple2('bigsqcup', '⨆'),
			_Utils_Tuple2('bigstar', '★'),
			_Utils_Tuple2('bigtriangledown', '▽'),
			_Utils_Tuple2('bigtriangleup', '△'),
			_Utils_Tuple2('biguplus', '⨄'),
			_Utils_Tuple2('bigvee', '⋁'),
			_Utils_Tuple2('bigwedge', '⋀'),
			_Utils_Tuple2('bkarow', '⤍'),
			_Utils_Tuple2('blacklozenge', '⧫'),
			_Utils_Tuple2('blacksquare', '▪'),
			_Utils_Tuple2('blacktriangle', '▴'),
			_Utils_Tuple2('blacktriangledown', '▾'),
			_Utils_Tuple2('blacktriangleleft', '◂'),
			_Utils_Tuple2('blacktriangleright', '▸'),
			_Utils_Tuple2('blank', '␣'),
			_Utils_Tuple2('blk12', '▒'),
			_Utils_Tuple2('blk14', '░'),
			_Utils_Tuple2('blk34', '▓'),
			_Utils_Tuple2('block', '█'),
			_Utils_Tuple2('bne', '=⃥'),
			_Utils_Tuple2('bnequiv', '≡⃥'),
			_Utils_Tuple2('bNot', '⫭'),
			_Utils_Tuple2('bnot', '⌐'),
			_Utils_Tuple2('Bopf', '\uD835\uDD39'),
			_Utils_Tuple2('bopf', '\uD835\uDD53'),
			_Utils_Tuple2('bot', '⊥'),
			_Utils_Tuple2('bottom', '⊥'),
			_Utils_Tuple2('bowtie', '⋈'),
			_Utils_Tuple2('boxbox', '⧉'),
			_Utils_Tuple2('boxdl', '┐'),
			_Utils_Tuple2('boxdL', '╕'),
			_Utils_Tuple2('boxDl', '╖'),
			_Utils_Tuple2('boxDL', '╗'),
			_Utils_Tuple2('boxdr', '┌'),
			_Utils_Tuple2('boxdR', '╒'),
			_Utils_Tuple2('boxDr', '╓'),
			_Utils_Tuple2('boxDR', '╔'),
			_Utils_Tuple2('boxh', '─'),
			_Utils_Tuple2('boxH', '═'),
			_Utils_Tuple2('boxhd', '┬'),
			_Utils_Tuple2('boxHd', '╤'),
			_Utils_Tuple2('boxhD', '╥'),
			_Utils_Tuple2('boxHD', '╦'),
			_Utils_Tuple2('boxhu', '┴'),
			_Utils_Tuple2('boxHu', '╧'),
			_Utils_Tuple2('boxhU', '╨'),
			_Utils_Tuple2('boxHU', '╩'),
			_Utils_Tuple2('boxminus', '⊟'),
			_Utils_Tuple2('boxplus', '⊞'),
			_Utils_Tuple2('boxtimes', '⊠'),
			_Utils_Tuple2('boxul', '┘'),
			_Utils_Tuple2('boxuL', '╛'),
			_Utils_Tuple2('boxUl', '╜'),
			_Utils_Tuple2('boxUL', '╝'),
			_Utils_Tuple2('boxur', '└'),
			_Utils_Tuple2('boxuR', '╘'),
			_Utils_Tuple2('boxUr', '╙'),
			_Utils_Tuple2('boxUR', '╚'),
			_Utils_Tuple2('boxv', '│'),
			_Utils_Tuple2('boxV', '║'),
			_Utils_Tuple2('boxvh', '┼'),
			_Utils_Tuple2('boxvH', '╪'),
			_Utils_Tuple2('boxVh', '╫'),
			_Utils_Tuple2('boxVH', '╬'),
			_Utils_Tuple2('boxvl', '┤'),
			_Utils_Tuple2('boxvL', '╡'),
			_Utils_Tuple2('boxVl', '╢'),
			_Utils_Tuple2('boxVL', '╣'),
			_Utils_Tuple2('boxvr', '├'),
			_Utils_Tuple2('boxvR', '╞'),
			_Utils_Tuple2('boxVr', '╟'),
			_Utils_Tuple2('boxVR', '╠'),
			_Utils_Tuple2('bprime', '‵'),
			_Utils_Tuple2('breve', '˘'),
			_Utils_Tuple2('Breve', '˘'),
			_Utils_Tuple2('brvbar', '¦'),
			_Utils_Tuple2('bscr', '\uD835\uDCB7'),
			_Utils_Tuple2('Bscr', 'ℬ'),
			_Utils_Tuple2('bsemi', '⁏'),
			_Utils_Tuple2('bsim', '∽'),
			_Utils_Tuple2('bsime', '⋍'),
			_Utils_Tuple2('bsolb', '⧅'),
			_Utils_Tuple2('bsol', '\\'),
			_Utils_Tuple2('bsolhsub', '⟈'),
			_Utils_Tuple2('bull', '•'),
			_Utils_Tuple2('bullet', '•'),
			_Utils_Tuple2('bump', '≎'),
			_Utils_Tuple2('bumpE', '⪮'),
			_Utils_Tuple2('bumpe', '≏'),
			_Utils_Tuple2('Bumpeq', '≎'),
			_Utils_Tuple2('bumpeq', '≏'),
			_Utils_Tuple2('Cacute', 'Ć'),
			_Utils_Tuple2('cacute', 'ć'),
			_Utils_Tuple2('capand', '⩄'),
			_Utils_Tuple2('capbrcup', '⩉'),
			_Utils_Tuple2('capcap', '⩋'),
			_Utils_Tuple2('cap', '∩'),
			_Utils_Tuple2('Cap', '⋒'),
			_Utils_Tuple2('capcup', '⩇'),
			_Utils_Tuple2('capdot', '⩀'),
			_Utils_Tuple2('CapitalDifferentialD', 'ⅅ'),
			_Utils_Tuple2('caps', '∩︀'),
			_Utils_Tuple2('caret', '⁁'),
			_Utils_Tuple2('caron', 'ˇ'),
			_Utils_Tuple2('Cayleys', 'ℭ'),
			_Utils_Tuple2('ccaps', '⩍'),
			_Utils_Tuple2('Ccaron', 'Č'),
			_Utils_Tuple2('ccaron', 'č'),
			_Utils_Tuple2('Ccedil', 'Ç'),
			_Utils_Tuple2('ccedil', 'ç'),
			_Utils_Tuple2('Ccirc', 'Ĉ'),
			_Utils_Tuple2('ccirc', 'ĉ'),
			_Utils_Tuple2('Cconint', '∰'),
			_Utils_Tuple2('ccups', '⩌'),
			_Utils_Tuple2('ccupssm', '⩐'),
			_Utils_Tuple2('Cdot', 'Ċ'),
			_Utils_Tuple2('cdot', 'ċ'),
			_Utils_Tuple2('cedil', '¸'),
			_Utils_Tuple2('Cedilla', '¸'),
			_Utils_Tuple2('cemptyv', '⦲'),
			_Utils_Tuple2('cent', '¢'),
			_Utils_Tuple2('centerdot', '·'),
			_Utils_Tuple2('CenterDot', '·'),
			_Utils_Tuple2('cfr', '\uD835\uDD20'),
			_Utils_Tuple2('Cfr', 'ℭ'),
			_Utils_Tuple2('CHcy', 'Ч'),
			_Utils_Tuple2('chcy', 'ч'),
			_Utils_Tuple2('check', '✓'),
			_Utils_Tuple2('checkmark', '✓'),
			_Utils_Tuple2('Chi', 'Χ'),
			_Utils_Tuple2('chi', 'χ'),
			_Utils_Tuple2('circ', 'ˆ'),
			_Utils_Tuple2('circeq', '≗'),
			_Utils_Tuple2('circlearrowleft', '↺'),
			_Utils_Tuple2('circlearrowright', '↻'),
			_Utils_Tuple2('circledast', '⊛'),
			_Utils_Tuple2('circledcirc', '⊚'),
			_Utils_Tuple2('circleddash', '⊝'),
			_Utils_Tuple2('CircleDot', '⊙'),
			_Utils_Tuple2('circledR', '®'),
			_Utils_Tuple2('circledS', 'Ⓢ'),
			_Utils_Tuple2('CircleMinus', '⊖'),
			_Utils_Tuple2('CirclePlus', '⊕'),
			_Utils_Tuple2('CircleTimes', '⊗'),
			_Utils_Tuple2('cir', '○'),
			_Utils_Tuple2('cirE', '⧃'),
			_Utils_Tuple2('cire', '≗'),
			_Utils_Tuple2('cirfnint', '⨐'),
			_Utils_Tuple2('cirmid', '⫯'),
			_Utils_Tuple2('cirscir', '⧂'),
			_Utils_Tuple2('ClockwiseContourIntegral', '∲'),
			_Utils_Tuple2('CloseCurlyDoubleQuote', '”'),
			_Utils_Tuple2('CloseCurlyQuote', '’'),
			_Utils_Tuple2('clubs', '♣'),
			_Utils_Tuple2('clubsuit', '♣'),
			_Utils_Tuple2('colon', ':'),
			_Utils_Tuple2('Colon', '∷'),
			_Utils_Tuple2('Colone', '⩴'),
			_Utils_Tuple2('colone', '≔'),
			_Utils_Tuple2('coloneq', '≔'),
			_Utils_Tuple2('comma', ','),
			_Utils_Tuple2('commat', '@'),
			_Utils_Tuple2('comp', '∁'),
			_Utils_Tuple2('compfn', '∘'),
			_Utils_Tuple2('complement', '∁'),
			_Utils_Tuple2('complexes', 'ℂ'),
			_Utils_Tuple2('cong', '≅'),
			_Utils_Tuple2('congdot', '⩭'),
			_Utils_Tuple2('Congruent', '≡'),
			_Utils_Tuple2('conint', '∮'),
			_Utils_Tuple2('Conint', '∯'),
			_Utils_Tuple2('ContourIntegral', '∮'),
			_Utils_Tuple2('copf', '\uD835\uDD54'),
			_Utils_Tuple2('Copf', 'ℂ'),
			_Utils_Tuple2('coprod', '∐'),
			_Utils_Tuple2('Coproduct', '∐'),
			_Utils_Tuple2('copy', '©'),
			_Utils_Tuple2('COPY', '©'),
			_Utils_Tuple2('copysr', '℗'),
			_Utils_Tuple2('CounterClockwiseContourIntegral', '∳'),
			_Utils_Tuple2('crarr', '↵'),
			_Utils_Tuple2('cross', '✗'),
			_Utils_Tuple2('Cross', '⨯'),
			_Utils_Tuple2('Cscr', '\uD835\uDC9E'),
			_Utils_Tuple2('cscr', '\uD835\uDCB8'),
			_Utils_Tuple2('csub', '⫏'),
			_Utils_Tuple2('csube', '⫑'),
			_Utils_Tuple2('csup', '⫐'),
			_Utils_Tuple2('csupe', '⫒'),
			_Utils_Tuple2('ctdot', '⋯'),
			_Utils_Tuple2('cudarrl', '⤸'),
			_Utils_Tuple2('cudarrr', '⤵'),
			_Utils_Tuple2('cuepr', '⋞'),
			_Utils_Tuple2('cuesc', '⋟'),
			_Utils_Tuple2('cularr', '↶'),
			_Utils_Tuple2('cularrp', '⤽'),
			_Utils_Tuple2('cupbrcap', '⩈'),
			_Utils_Tuple2('cupcap', '⩆'),
			_Utils_Tuple2('CupCap', '≍'),
			_Utils_Tuple2('cup', '∪'),
			_Utils_Tuple2('Cup', '⋓'),
			_Utils_Tuple2('cupcup', '⩊'),
			_Utils_Tuple2('cupdot', '⊍'),
			_Utils_Tuple2('cupor', '⩅'),
			_Utils_Tuple2('cups', '∪︀'),
			_Utils_Tuple2('curarr', '↷'),
			_Utils_Tuple2('curarrm', '⤼'),
			_Utils_Tuple2('curlyeqprec', '⋞'),
			_Utils_Tuple2('curlyeqsucc', '⋟'),
			_Utils_Tuple2('curlyvee', '⋎'),
			_Utils_Tuple2('curlywedge', '⋏'),
			_Utils_Tuple2('curren', '¤'),
			_Utils_Tuple2('curvearrowleft', '↶'),
			_Utils_Tuple2('curvearrowright', '↷'),
			_Utils_Tuple2('cuvee', '⋎'),
			_Utils_Tuple2('cuwed', '⋏'),
			_Utils_Tuple2('cwconint', '∲'),
			_Utils_Tuple2('cwint', '∱'),
			_Utils_Tuple2('cylcty', '⌭'),
			_Utils_Tuple2('dagger', '†'),
			_Utils_Tuple2('Dagger', '‡'),
			_Utils_Tuple2('daleth', 'ℸ'),
			_Utils_Tuple2('darr', '↓'),
			_Utils_Tuple2('Darr', '↡'),
			_Utils_Tuple2('dArr', '⇓'),
			_Utils_Tuple2('dash', '‐'),
			_Utils_Tuple2('Dashv', '⫤'),
			_Utils_Tuple2('dashv', '⊣'),
			_Utils_Tuple2('dbkarow', '⤏'),
			_Utils_Tuple2('dblac', '˝'),
			_Utils_Tuple2('Dcaron', 'Ď'),
			_Utils_Tuple2('dcaron', 'ď'),
			_Utils_Tuple2('Dcy', 'Д'),
			_Utils_Tuple2('dcy', 'д'),
			_Utils_Tuple2('ddagger', '‡'),
			_Utils_Tuple2('ddarr', '⇊'),
			_Utils_Tuple2('DD', 'ⅅ'),
			_Utils_Tuple2('dd', 'ⅆ'),
			_Utils_Tuple2('DDotrahd', '⤑'),
			_Utils_Tuple2('ddotseq', '⩷'),
			_Utils_Tuple2('deg', '°'),
			_Utils_Tuple2('Del', '∇'),
			_Utils_Tuple2('Delta', 'Δ'),
			_Utils_Tuple2('delta', 'δ'),
			_Utils_Tuple2('demptyv', '⦱'),
			_Utils_Tuple2('dfisht', '⥿'),
			_Utils_Tuple2('Dfr', '\uD835\uDD07'),
			_Utils_Tuple2('dfr', '\uD835\uDD21'),
			_Utils_Tuple2('dHar', '⥥'),
			_Utils_Tuple2('dharl', '⇃'),
			_Utils_Tuple2('dharr', '⇂'),
			_Utils_Tuple2('DiacriticalAcute', '´'),
			_Utils_Tuple2('DiacriticalDot', '˙'),
			_Utils_Tuple2('DiacriticalDoubleAcute', '˝'),
			_Utils_Tuple2('DiacriticalGrave', '`'),
			_Utils_Tuple2('DiacriticalTilde', '˜'),
			_Utils_Tuple2('diam', '⋄'),
			_Utils_Tuple2('diamond', '⋄'),
			_Utils_Tuple2('Diamond', '⋄'),
			_Utils_Tuple2('diamondsuit', '♦'),
			_Utils_Tuple2('diams', '♦'),
			_Utils_Tuple2('die', '¨'),
			_Utils_Tuple2('DifferentialD', 'ⅆ'),
			_Utils_Tuple2('digamma', 'ϝ'),
			_Utils_Tuple2('disin', '⋲'),
			_Utils_Tuple2('div', '÷'),
			_Utils_Tuple2('divide', '÷'),
			_Utils_Tuple2('divideontimes', '⋇'),
			_Utils_Tuple2('divonx', '⋇'),
			_Utils_Tuple2('DJcy', 'Ђ'),
			_Utils_Tuple2('djcy', 'ђ'),
			_Utils_Tuple2('dlcorn', '⌞'),
			_Utils_Tuple2('dlcrop', '⌍'),
			_Utils_Tuple2('dollar', '$'),
			_Utils_Tuple2('Dopf', '\uD835\uDD3B'),
			_Utils_Tuple2('dopf', '\uD835\uDD55'),
			_Utils_Tuple2('Dot', '¨'),
			_Utils_Tuple2('dot', '˙'),
			_Utils_Tuple2('DotDot', '⃜'),
			_Utils_Tuple2('doteq', '≐'),
			_Utils_Tuple2('doteqdot', '≑'),
			_Utils_Tuple2('DotEqual', '≐'),
			_Utils_Tuple2('dotminus', '∸'),
			_Utils_Tuple2('dotplus', '∔'),
			_Utils_Tuple2('dotsquare', '⊡'),
			_Utils_Tuple2('doublebarwedge', '⌆'),
			_Utils_Tuple2('DoubleContourIntegral', '∯'),
			_Utils_Tuple2('DoubleDot', '¨'),
			_Utils_Tuple2('DoubleDownArrow', '⇓'),
			_Utils_Tuple2('DoubleLeftArrow', '⇐'),
			_Utils_Tuple2('DoubleLeftRightArrow', '⇔'),
			_Utils_Tuple2('DoubleLeftTee', '⫤'),
			_Utils_Tuple2('DoubleLongLeftArrow', '⟸'),
			_Utils_Tuple2('DoubleLongLeftRightArrow', '⟺'),
			_Utils_Tuple2('DoubleLongRightArrow', '⟹'),
			_Utils_Tuple2('DoubleRightArrow', '⇒'),
			_Utils_Tuple2('DoubleRightTee', '⊨'),
			_Utils_Tuple2('DoubleUpArrow', '⇑'),
			_Utils_Tuple2('DoubleUpDownArrow', '⇕'),
			_Utils_Tuple2('DoubleVerticalBar', '∥'),
			_Utils_Tuple2('DownArrowBar', '⤓'),
			_Utils_Tuple2('downarrow', '↓'),
			_Utils_Tuple2('DownArrow', '↓'),
			_Utils_Tuple2('Downarrow', '⇓'),
			_Utils_Tuple2('DownArrowUpArrow', '⇵'),
			_Utils_Tuple2('DownBreve', '̑'),
			_Utils_Tuple2('downdownarrows', '⇊'),
			_Utils_Tuple2('downharpoonleft', '⇃'),
			_Utils_Tuple2('downharpoonright', '⇂'),
			_Utils_Tuple2('DownLeftRightVector', '⥐'),
			_Utils_Tuple2('DownLeftTeeVector', '⥞'),
			_Utils_Tuple2('DownLeftVectorBar', '⥖'),
			_Utils_Tuple2('DownLeftVector', '↽'),
			_Utils_Tuple2('DownRightTeeVector', '⥟'),
			_Utils_Tuple2('DownRightVectorBar', '⥗'),
			_Utils_Tuple2('DownRightVector', '⇁'),
			_Utils_Tuple2('DownTeeArrow', '↧'),
			_Utils_Tuple2('DownTee', '⊤'),
			_Utils_Tuple2('drbkarow', '⤐'),
			_Utils_Tuple2('drcorn', '⌟'),
			_Utils_Tuple2('drcrop', '⌌'),
			_Utils_Tuple2('Dscr', '\uD835\uDC9F'),
			_Utils_Tuple2('dscr', '\uD835\uDCB9'),
			_Utils_Tuple2('DScy', 'Ѕ'),
			_Utils_Tuple2('dscy', 'ѕ'),
			_Utils_Tuple2('dsol', '⧶'),
			_Utils_Tuple2('Dstrok', 'Đ'),
			_Utils_Tuple2('dstrok', 'đ'),
			_Utils_Tuple2('dtdot', '⋱'),
			_Utils_Tuple2('dtri', '▿'),
			_Utils_Tuple2('dtrif', '▾'),
			_Utils_Tuple2('duarr', '⇵'),
			_Utils_Tuple2('duhar', '⥯'),
			_Utils_Tuple2('dwangle', '⦦'),
			_Utils_Tuple2('DZcy', 'Џ'),
			_Utils_Tuple2('dzcy', 'џ'),
			_Utils_Tuple2('dzigrarr', '⟿'),
			_Utils_Tuple2('Eacute', 'É'),
			_Utils_Tuple2('eacute', 'é'),
			_Utils_Tuple2('easter', '⩮'),
			_Utils_Tuple2('Ecaron', 'Ě'),
			_Utils_Tuple2('ecaron', 'ě'),
			_Utils_Tuple2('Ecirc', 'Ê'),
			_Utils_Tuple2('ecirc', 'ê'),
			_Utils_Tuple2('ecir', '≖'),
			_Utils_Tuple2('ecolon', '≕'),
			_Utils_Tuple2('Ecy', 'Э'),
			_Utils_Tuple2('ecy', 'э'),
			_Utils_Tuple2('eDDot', '⩷'),
			_Utils_Tuple2('Edot', 'Ė'),
			_Utils_Tuple2('edot', 'ė'),
			_Utils_Tuple2('eDot', '≑'),
			_Utils_Tuple2('ee', 'ⅇ'),
			_Utils_Tuple2('efDot', '≒'),
			_Utils_Tuple2('Efr', '\uD835\uDD08'),
			_Utils_Tuple2('efr', '\uD835\uDD22'),
			_Utils_Tuple2('eg', '⪚'),
			_Utils_Tuple2('Egrave', 'È'),
			_Utils_Tuple2('egrave', 'è'),
			_Utils_Tuple2('egs', '⪖'),
			_Utils_Tuple2('egsdot', '⪘'),
			_Utils_Tuple2('el', '⪙'),
			_Utils_Tuple2('Element', '∈'),
			_Utils_Tuple2('elinters', '⏧'),
			_Utils_Tuple2('ell', 'ℓ'),
			_Utils_Tuple2('els', '⪕'),
			_Utils_Tuple2('elsdot', '⪗'),
			_Utils_Tuple2('Emacr', 'Ē'),
			_Utils_Tuple2('emacr', 'ē'),
			_Utils_Tuple2('empty', '∅'),
			_Utils_Tuple2('emptyset', '∅'),
			_Utils_Tuple2('EmptySmallSquare', '◻'),
			_Utils_Tuple2('emptyv', '∅'),
			_Utils_Tuple2('EmptyVerySmallSquare', '▫'),
			_Utils_Tuple2('emsp13', '\u2004'),
			_Utils_Tuple2('emsp14', '\u2005'),
			_Utils_Tuple2('emsp', '\u2003'),
			_Utils_Tuple2('ENG', 'Ŋ'),
			_Utils_Tuple2('eng', 'ŋ'),
			_Utils_Tuple2('ensp', '\u2002'),
			_Utils_Tuple2('Eogon', 'Ę'),
			_Utils_Tuple2('eogon', 'ę'),
			_Utils_Tuple2('Eopf', '\uD835\uDD3C'),
			_Utils_Tuple2('eopf', '\uD835\uDD56'),
			_Utils_Tuple2('epar', '⋕'),
			_Utils_Tuple2('eparsl', '⧣'),
			_Utils_Tuple2('eplus', '⩱'),
			_Utils_Tuple2('epsi', 'ε'),
			_Utils_Tuple2('Epsilon', 'Ε'),
			_Utils_Tuple2('epsilon', 'ε'),
			_Utils_Tuple2('epsiv', 'ϵ'),
			_Utils_Tuple2('eqcirc', '≖'),
			_Utils_Tuple2('eqcolon', '≕'),
			_Utils_Tuple2('eqsim', '≂'),
			_Utils_Tuple2('eqslantgtr', '⪖'),
			_Utils_Tuple2('eqslantless', '⪕'),
			_Utils_Tuple2('Equal', '⩵'),
			_Utils_Tuple2('equals', '='),
			_Utils_Tuple2('EqualTilde', '≂'),
			_Utils_Tuple2('equest', '≟'),
			_Utils_Tuple2('Equilibrium', '⇌'),
			_Utils_Tuple2('equiv', '≡'),
			_Utils_Tuple2('equivDD', '⩸'),
			_Utils_Tuple2('eqvparsl', '⧥'),
			_Utils_Tuple2('erarr', '⥱'),
			_Utils_Tuple2('erDot', '≓'),
			_Utils_Tuple2('escr', 'ℯ'),
			_Utils_Tuple2('Escr', 'ℰ'),
			_Utils_Tuple2('esdot', '≐'),
			_Utils_Tuple2('Esim', '⩳'),
			_Utils_Tuple2('esim', '≂'),
			_Utils_Tuple2('Eta', 'Η'),
			_Utils_Tuple2('eta', 'η'),
			_Utils_Tuple2('ETH', 'Ð'),
			_Utils_Tuple2('eth', 'ð'),
			_Utils_Tuple2('Euml', 'Ë'),
			_Utils_Tuple2('euml', 'ë'),
			_Utils_Tuple2('euro', '€'),
			_Utils_Tuple2('excl', '!'),
			_Utils_Tuple2('exist', '∃'),
			_Utils_Tuple2('Exists', '∃'),
			_Utils_Tuple2('expectation', 'ℰ'),
			_Utils_Tuple2('exponentiale', 'ⅇ'),
			_Utils_Tuple2('ExponentialE', 'ⅇ'),
			_Utils_Tuple2('fallingdotseq', '≒'),
			_Utils_Tuple2('Fcy', 'Ф'),
			_Utils_Tuple2('fcy', 'ф'),
			_Utils_Tuple2('female', '♀'),
			_Utils_Tuple2('ffilig', 'ﬃ'),
			_Utils_Tuple2('fflig', 'ﬀ'),
			_Utils_Tuple2('ffllig', 'ﬄ'),
			_Utils_Tuple2('Ffr', '\uD835\uDD09'),
			_Utils_Tuple2('ffr', '\uD835\uDD23'),
			_Utils_Tuple2('filig', 'ﬁ'),
			_Utils_Tuple2('FilledSmallSquare', '◼'),
			_Utils_Tuple2('FilledVerySmallSquare', '▪'),
			_Utils_Tuple2('fjlig', 'fj'),
			_Utils_Tuple2('flat', '♭'),
			_Utils_Tuple2('fllig', 'ﬂ'),
			_Utils_Tuple2('fltns', '▱'),
			_Utils_Tuple2('fnof', 'ƒ'),
			_Utils_Tuple2('Fopf', '\uD835\uDD3D'),
			_Utils_Tuple2('fopf', '\uD835\uDD57'),
			_Utils_Tuple2('forall', '∀'),
			_Utils_Tuple2('ForAll', '∀'),
			_Utils_Tuple2('fork', '⋔'),
			_Utils_Tuple2('forkv', '⫙'),
			_Utils_Tuple2('Fouriertrf', 'ℱ'),
			_Utils_Tuple2('fpartint', '⨍'),
			_Utils_Tuple2('frac12', '½'),
			_Utils_Tuple2('frac13', '⅓'),
			_Utils_Tuple2('frac14', '¼'),
			_Utils_Tuple2('frac15', '⅕'),
			_Utils_Tuple2('frac16', '⅙'),
			_Utils_Tuple2('frac18', '⅛'),
			_Utils_Tuple2('frac23', '⅔'),
			_Utils_Tuple2('frac25', '⅖'),
			_Utils_Tuple2('frac34', '¾'),
			_Utils_Tuple2('frac35', '⅗'),
			_Utils_Tuple2('frac38', '⅜'),
			_Utils_Tuple2('frac45', '⅘'),
			_Utils_Tuple2('frac56', '⅚'),
			_Utils_Tuple2('frac58', '⅝'),
			_Utils_Tuple2('frac78', '⅞'),
			_Utils_Tuple2('frasl', '⁄'),
			_Utils_Tuple2('frown', '⌢'),
			_Utils_Tuple2('fscr', '\uD835\uDCBB'),
			_Utils_Tuple2('Fscr', 'ℱ'),
			_Utils_Tuple2('gacute', 'ǵ'),
			_Utils_Tuple2('Gamma', 'Γ'),
			_Utils_Tuple2('gamma', 'γ'),
			_Utils_Tuple2('Gammad', 'Ϝ'),
			_Utils_Tuple2('gammad', 'ϝ'),
			_Utils_Tuple2('gap', '⪆'),
			_Utils_Tuple2('Gbreve', 'Ğ'),
			_Utils_Tuple2('gbreve', 'ğ'),
			_Utils_Tuple2('Gcedil', 'Ģ'),
			_Utils_Tuple2('Gcirc', 'Ĝ'),
			_Utils_Tuple2('gcirc', 'ĝ'),
			_Utils_Tuple2('Gcy', 'Г'),
			_Utils_Tuple2('gcy', 'г'),
			_Utils_Tuple2('Gdot', 'Ġ'),
			_Utils_Tuple2('gdot', 'ġ'),
			_Utils_Tuple2('ge', '≥'),
			_Utils_Tuple2('gE', '≧'),
			_Utils_Tuple2('gEl', '⪌'),
			_Utils_Tuple2('gel', '⋛'),
			_Utils_Tuple2('geq', '≥'),
			_Utils_Tuple2('geqq', '≧'),
			_Utils_Tuple2('geqslant', '⩾'),
			_Utils_Tuple2('gescc', '⪩'),
			_Utils_Tuple2('ges', '⩾'),
			_Utils_Tuple2('gesdot', '⪀'),
			_Utils_Tuple2('gesdoto', '⪂'),
			_Utils_Tuple2('gesdotol', '⪄'),
			_Utils_Tuple2('gesl', '⋛︀'),
			_Utils_Tuple2('gesles', '⪔'),
			_Utils_Tuple2('Gfr', '\uD835\uDD0A'),
			_Utils_Tuple2('gfr', '\uD835\uDD24'),
			_Utils_Tuple2('gg', '≫'),
			_Utils_Tuple2('Gg', '⋙'),
			_Utils_Tuple2('ggg', '⋙'),
			_Utils_Tuple2('gimel', 'ℷ'),
			_Utils_Tuple2('GJcy', 'Ѓ'),
			_Utils_Tuple2('gjcy', 'ѓ'),
			_Utils_Tuple2('gla', '⪥'),
			_Utils_Tuple2('gl', '≷'),
			_Utils_Tuple2('glE', '⪒'),
			_Utils_Tuple2('glj', '⪤'),
			_Utils_Tuple2('gnap', '⪊'),
			_Utils_Tuple2('gnapprox', '⪊'),
			_Utils_Tuple2('gne', '⪈'),
			_Utils_Tuple2('gnE', '≩'),
			_Utils_Tuple2('gneq', '⪈'),
			_Utils_Tuple2('gneqq', '≩'),
			_Utils_Tuple2('gnsim', '⋧'),
			_Utils_Tuple2('Gopf', '\uD835\uDD3E'),
			_Utils_Tuple2('gopf', '\uD835\uDD58'),
			_Utils_Tuple2('grave', '`'),
			_Utils_Tuple2('GreaterEqual', '≥'),
			_Utils_Tuple2('GreaterEqualLess', '⋛'),
			_Utils_Tuple2('GreaterFullEqual', '≧'),
			_Utils_Tuple2('GreaterGreater', '⪢'),
			_Utils_Tuple2('GreaterLess', '≷'),
			_Utils_Tuple2('GreaterSlantEqual', '⩾'),
			_Utils_Tuple2('GreaterTilde', '≳'),
			_Utils_Tuple2('Gscr', '\uD835\uDCA2'),
			_Utils_Tuple2('gscr', 'ℊ'),
			_Utils_Tuple2('gsim', '≳'),
			_Utils_Tuple2('gsime', '⪎'),
			_Utils_Tuple2('gsiml', '⪐'),
			_Utils_Tuple2('gtcc', '⪧'),
			_Utils_Tuple2('gtcir', '⩺'),
			_Utils_Tuple2('gt', '>'),
			_Utils_Tuple2('GT', '>'),
			_Utils_Tuple2('Gt', '≫'),
			_Utils_Tuple2('gtdot', '⋗'),
			_Utils_Tuple2('gtlPar', '⦕'),
			_Utils_Tuple2('gtquest', '⩼'),
			_Utils_Tuple2('gtrapprox', '⪆'),
			_Utils_Tuple2('gtrarr', '⥸'),
			_Utils_Tuple2('gtrdot', '⋗'),
			_Utils_Tuple2('gtreqless', '⋛'),
			_Utils_Tuple2('gtreqqless', '⪌'),
			_Utils_Tuple2('gtrless', '≷'),
			_Utils_Tuple2('gtrsim', '≳'),
			_Utils_Tuple2('gvertneqq', '≩︀'),
			_Utils_Tuple2('gvnE', '≩︀'),
			_Utils_Tuple2('Hacek', 'ˇ'),
			_Utils_Tuple2('hairsp', '\u200A'),
			_Utils_Tuple2('half', '½'),
			_Utils_Tuple2('hamilt', 'ℋ'),
			_Utils_Tuple2('HARDcy', 'Ъ'),
			_Utils_Tuple2('hardcy', 'ъ'),
			_Utils_Tuple2('harrcir', '⥈'),
			_Utils_Tuple2('harr', '↔'),
			_Utils_Tuple2('hArr', '⇔'),
			_Utils_Tuple2('harrw', '↭'),
			_Utils_Tuple2('Hat', '^'),
			_Utils_Tuple2('hbar', 'ℏ'),
			_Utils_Tuple2('Hcirc', 'Ĥ'),
			_Utils_Tuple2('hcirc', 'ĥ'),
			_Utils_Tuple2('hearts', '♥'),
			_Utils_Tuple2('heartsuit', '♥'),
			_Utils_Tuple2('hellip', '…'),
			_Utils_Tuple2('hercon', '⊹'),
			_Utils_Tuple2('hfr', '\uD835\uDD25'),
			_Utils_Tuple2('Hfr', 'ℌ'),
			_Utils_Tuple2('HilbertSpace', 'ℋ'),
			_Utils_Tuple2('hksearow', '⤥'),
			_Utils_Tuple2('hkswarow', '⤦'),
			_Utils_Tuple2('hoarr', '⇿'),
			_Utils_Tuple2('homtht', '∻'),
			_Utils_Tuple2('hookleftarrow', '↩'),
			_Utils_Tuple2('hookrightarrow', '↪'),
			_Utils_Tuple2('hopf', '\uD835\uDD59'),
			_Utils_Tuple2('Hopf', 'ℍ'),
			_Utils_Tuple2('horbar', '―'),
			_Utils_Tuple2('HorizontalLine', '─'),
			_Utils_Tuple2('hscr', '\uD835\uDCBD'),
			_Utils_Tuple2('Hscr', 'ℋ'),
			_Utils_Tuple2('hslash', 'ℏ'),
			_Utils_Tuple2('Hstrok', 'Ħ'),
			_Utils_Tuple2('hstrok', 'ħ'),
			_Utils_Tuple2('HumpDownHump', '≎'),
			_Utils_Tuple2('HumpEqual', '≏'),
			_Utils_Tuple2('hybull', '⁃'),
			_Utils_Tuple2('hyphen', '‐'),
			_Utils_Tuple2('Iacute', 'Í'),
			_Utils_Tuple2('iacute', 'í'),
			_Utils_Tuple2('ic', '\u2063'),
			_Utils_Tuple2('Icirc', 'Î'),
			_Utils_Tuple2('icirc', 'î'),
			_Utils_Tuple2('Icy', 'И'),
			_Utils_Tuple2('icy', 'и'),
			_Utils_Tuple2('Idot', 'İ'),
			_Utils_Tuple2('IEcy', 'Е'),
			_Utils_Tuple2('iecy', 'е'),
			_Utils_Tuple2('iexcl', '¡'),
			_Utils_Tuple2('iff', '⇔'),
			_Utils_Tuple2('ifr', '\uD835\uDD26'),
			_Utils_Tuple2('Ifr', 'ℑ'),
			_Utils_Tuple2('Igrave', 'Ì'),
			_Utils_Tuple2('igrave', 'ì'),
			_Utils_Tuple2('ii', 'ⅈ'),
			_Utils_Tuple2('iiiint', '⨌'),
			_Utils_Tuple2('iiint', '∭'),
			_Utils_Tuple2('iinfin', '⧜'),
			_Utils_Tuple2('iiota', '℩'),
			_Utils_Tuple2('IJlig', 'Ĳ'),
			_Utils_Tuple2('ijlig', 'ĳ'),
			_Utils_Tuple2('Imacr', 'Ī'),
			_Utils_Tuple2('imacr', 'ī'),
			_Utils_Tuple2('image', 'ℑ'),
			_Utils_Tuple2('ImaginaryI', 'ⅈ'),
			_Utils_Tuple2('imagline', 'ℐ'),
			_Utils_Tuple2('imagpart', 'ℑ'),
			_Utils_Tuple2('imath', 'ı'),
			_Utils_Tuple2('Im', 'ℑ'),
			_Utils_Tuple2('imof', '⊷'),
			_Utils_Tuple2('imped', 'Ƶ'),
			_Utils_Tuple2('Implies', '⇒'),
			_Utils_Tuple2('incare', '℅'),
			_Utils_Tuple2('in', '∈'),
			_Utils_Tuple2('infin', '∞'),
			_Utils_Tuple2('infintie', '⧝'),
			_Utils_Tuple2('inodot', 'ı'),
			_Utils_Tuple2('intcal', '⊺'),
			_Utils_Tuple2('int', '∫'),
			_Utils_Tuple2('Int', '∬'),
			_Utils_Tuple2('integers', 'ℤ'),
			_Utils_Tuple2('Integral', '∫'),
			_Utils_Tuple2('intercal', '⊺'),
			_Utils_Tuple2('Intersection', '⋂'),
			_Utils_Tuple2('intlarhk', '⨗'),
			_Utils_Tuple2('intprod', '⨼'),
			_Utils_Tuple2('InvisibleComma', '\u2063'),
			_Utils_Tuple2('InvisibleTimes', '\u2062'),
			_Utils_Tuple2('IOcy', 'Ё'),
			_Utils_Tuple2('iocy', 'ё'),
			_Utils_Tuple2('Iogon', 'Į'),
			_Utils_Tuple2('iogon', 'į'),
			_Utils_Tuple2('Iopf', '\uD835\uDD40'),
			_Utils_Tuple2('iopf', '\uD835\uDD5A'),
			_Utils_Tuple2('Iota', 'Ι'),
			_Utils_Tuple2('iota', 'ι'),
			_Utils_Tuple2('iprod', '⨼'),
			_Utils_Tuple2('iquest', '¿'),
			_Utils_Tuple2('iscr', '\uD835\uDCBE'),
			_Utils_Tuple2('Iscr', 'ℐ'),
			_Utils_Tuple2('isin', '∈'),
			_Utils_Tuple2('isindot', '⋵'),
			_Utils_Tuple2('isinE', '⋹'),
			_Utils_Tuple2('isins', '⋴'),
			_Utils_Tuple2('isinsv', '⋳'),
			_Utils_Tuple2('isinv', '∈'),
			_Utils_Tuple2('it', '\u2062'),
			_Utils_Tuple2('Itilde', 'Ĩ'),
			_Utils_Tuple2('itilde', 'ĩ'),
			_Utils_Tuple2('Iukcy', 'І'),
			_Utils_Tuple2('iukcy', 'і'),
			_Utils_Tuple2('Iuml', 'Ï'),
			_Utils_Tuple2('iuml', 'ï'),
			_Utils_Tuple2('Jcirc', 'Ĵ'),
			_Utils_Tuple2('jcirc', 'ĵ'),
			_Utils_Tuple2('Jcy', 'Й'),
			_Utils_Tuple2('jcy', 'й'),
			_Utils_Tuple2('Jfr', '\uD835\uDD0D'),
			_Utils_Tuple2('jfr', '\uD835\uDD27'),
			_Utils_Tuple2('jmath', 'ȷ'),
			_Utils_Tuple2('Jopf', '\uD835\uDD41'),
			_Utils_Tuple2('jopf', '\uD835\uDD5B'),
			_Utils_Tuple2('Jscr', '\uD835\uDCA5'),
			_Utils_Tuple2('jscr', '\uD835\uDCBF'),
			_Utils_Tuple2('Jsercy', 'Ј'),
			_Utils_Tuple2('jsercy', 'ј'),
			_Utils_Tuple2('Jukcy', 'Є'),
			_Utils_Tuple2('jukcy', 'є'),
			_Utils_Tuple2('Kappa', 'Κ'),
			_Utils_Tuple2('kappa', 'κ'),
			_Utils_Tuple2('kappav', 'ϰ'),
			_Utils_Tuple2('Kcedil', 'Ķ'),
			_Utils_Tuple2('kcedil', 'ķ'),
			_Utils_Tuple2('Kcy', 'К'),
			_Utils_Tuple2('kcy', 'к'),
			_Utils_Tuple2('Kfr', '\uD835\uDD0E'),
			_Utils_Tuple2('kfr', '\uD835\uDD28'),
			_Utils_Tuple2('kgreen', 'ĸ'),
			_Utils_Tuple2('KHcy', 'Х'),
			_Utils_Tuple2('khcy', 'х'),
			_Utils_Tuple2('KJcy', 'Ќ'),
			_Utils_Tuple2('kjcy', 'ќ'),
			_Utils_Tuple2('Kopf', '\uD835\uDD42'),
			_Utils_Tuple2('kopf', '\uD835\uDD5C'),
			_Utils_Tuple2('Kscr', '\uD835\uDCA6'),
			_Utils_Tuple2('kscr', '\uD835\uDCC0'),
			_Utils_Tuple2('lAarr', '⇚'),
			_Utils_Tuple2('Lacute', 'Ĺ'),
			_Utils_Tuple2('lacute', 'ĺ'),
			_Utils_Tuple2('laemptyv', '⦴'),
			_Utils_Tuple2('lagran', 'ℒ'),
			_Utils_Tuple2('Lambda', 'Λ'),
			_Utils_Tuple2('lambda', 'λ'),
			_Utils_Tuple2('lang', '⟨'),
			_Utils_Tuple2('Lang', '⟪'),
			_Utils_Tuple2('langd', '⦑'),
			_Utils_Tuple2('langle', '⟨'),
			_Utils_Tuple2('lap', '⪅'),
			_Utils_Tuple2('Laplacetrf', 'ℒ'),
			_Utils_Tuple2('laquo', '«'),
			_Utils_Tuple2('larrb', '⇤'),
			_Utils_Tuple2('larrbfs', '⤟'),
			_Utils_Tuple2('larr', '←'),
			_Utils_Tuple2('Larr', '↞'),
			_Utils_Tuple2('lArr', '⇐'),
			_Utils_Tuple2('larrfs', '⤝'),
			_Utils_Tuple2('larrhk', '↩'),
			_Utils_Tuple2('larrlp', '↫'),
			_Utils_Tuple2('larrpl', '⤹'),
			_Utils_Tuple2('larrsim', '⥳'),
			_Utils_Tuple2('larrtl', '↢'),
			_Utils_Tuple2('latail', '⤙'),
			_Utils_Tuple2('lAtail', '⤛'),
			_Utils_Tuple2('lat', '⪫'),
			_Utils_Tuple2('late', '⪭'),
			_Utils_Tuple2('lates', '⪭︀'),
			_Utils_Tuple2('lbarr', '⤌'),
			_Utils_Tuple2('lBarr', '⤎'),
			_Utils_Tuple2('lbbrk', '❲'),
			_Utils_Tuple2('lbrace', '{'),
			_Utils_Tuple2('lbrack', '['),
			_Utils_Tuple2('lbrke', '⦋'),
			_Utils_Tuple2('lbrksld', '⦏'),
			_Utils_Tuple2('lbrkslu', '⦍'),
			_Utils_Tuple2('Lcaron', 'Ľ'),
			_Utils_Tuple2('lcaron', 'ľ'),
			_Utils_Tuple2('Lcedil', 'Ļ'),
			_Utils_Tuple2('lcedil', 'ļ'),
			_Utils_Tuple2('lceil', '⌈'),
			_Utils_Tuple2('lcub', '{'),
			_Utils_Tuple2('Lcy', 'Л'),
			_Utils_Tuple2('lcy', 'л'),
			_Utils_Tuple2('ldca', '⤶'),
			_Utils_Tuple2('ldquo', '“'),
			_Utils_Tuple2('ldquor', '„'),
			_Utils_Tuple2('ldrdhar', '⥧'),
			_Utils_Tuple2('ldrushar', '⥋'),
			_Utils_Tuple2('ldsh', '↲'),
			_Utils_Tuple2('le', '≤'),
			_Utils_Tuple2('lE', '≦'),
			_Utils_Tuple2('LeftAngleBracket', '⟨'),
			_Utils_Tuple2('LeftArrowBar', '⇤'),
			_Utils_Tuple2('leftarrow', '←'),
			_Utils_Tuple2('LeftArrow', '←'),
			_Utils_Tuple2('Leftarrow', '⇐'),
			_Utils_Tuple2('LeftArrowRightArrow', '⇆'),
			_Utils_Tuple2('leftarrowtail', '↢'),
			_Utils_Tuple2('LeftCeiling', '⌈'),
			_Utils_Tuple2('LeftDoubleBracket', '⟦'),
			_Utils_Tuple2('LeftDownTeeVector', '⥡'),
			_Utils_Tuple2('LeftDownVectorBar', '⥙'),
			_Utils_Tuple2('LeftDownVector', '⇃'),
			_Utils_Tuple2('LeftFloor', '⌊'),
			_Utils_Tuple2('leftharpoondown', '↽'),
			_Utils_Tuple2('leftharpoonup', '↼'),
			_Utils_Tuple2('leftleftarrows', '⇇'),
			_Utils_Tuple2('leftrightarrow', '↔'),
			_Utils_Tuple2('LeftRightArrow', '↔'),
			_Utils_Tuple2('Leftrightarrow', '⇔'),
			_Utils_Tuple2('leftrightarrows', '⇆'),
			_Utils_Tuple2('leftrightharpoons', '⇋'),
			_Utils_Tuple2('leftrightsquigarrow', '↭'),
			_Utils_Tuple2('LeftRightVector', '⥎'),
			_Utils_Tuple2('LeftTeeArrow', '↤'),
			_Utils_Tuple2('LeftTee', '⊣'),
			_Utils_Tuple2('LeftTeeVector', '⥚'),
			_Utils_Tuple2('leftthreetimes', '⋋'),
			_Utils_Tuple2('LeftTriangleBar', '⧏'),
			_Utils_Tuple2('LeftTriangle', '⊲'),
			_Utils_Tuple2('LeftTriangleEqual', '⊴'),
			_Utils_Tuple2('LeftUpDownVector', '⥑'),
			_Utils_Tuple2('LeftUpTeeVector', '⥠'),
			_Utils_Tuple2('LeftUpVectorBar', '⥘'),
			_Utils_Tuple2('LeftUpVector', '↿'),
			_Utils_Tuple2('LeftVectorBar', '⥒'),
			_Utils_Tuple2('LeftVector', '↼'),
			_Utils_Tuple2('lEg', '⪋'),
			_Utils_Tuple2('leg', '⋚'),
			_Utils_Tuple2('leq', '≤'),
			_Utils_Tuple2('leqq', '≦'),
			_Utils_Tuple2('leqslant', '⩽'),
			_Utils_Tuple2('lescc', '⪨'),
			_Utils_Tuple2('les', '⩽'),
			_Utils_Tuple2('lesdot', '⩿'),
			_Utils_Tuple2('lesdoto', '⪁'),
			_Utils_Tuple2('lesdotor', '⪃'),
			_Utils_Tuple2('lesg', '⋚︀'),
			_Utils_Tuple2('lesges', '⪓'),
			_Utils_Tuple2('lessapprox', '⪅'),
			_Utils_Tuple2('lessdot', '⋖'),
			_Utils_Tuple2('lesseqgtr', '⋚'),
			_Utils_Tuple2('lesseqqgtr', '⪋'),
			_Utils_Tuple2('LessEqualGreater', '⋚'),
			_Utils_Tuple2('LessFullEqual', '≦'),
			_Utils_Tuple2('LessGreater', '≶'),
			_Utils_Tuple2('lessgtr', '≶'),
			_Utils_Tuple2('LessLess', '⪡'),
			_Utils_Tuple2('lesssim', '≲'),
			_Utils_Tuple2('LessSlantEqual', '⩽'),
			_Utils_Tuple2('LessTilde', '≲'),
			_Utils_Tuple2('lfisht', '⥼'),
			_Utils_Tuple2('lfloor', '⌊'),
			_Utils_Tuple2('Lfr', '\uD835\uDD0F'),
			_Utils_Tuple2('lfr', '\uD835\uDD29'),
			_Utils_Tuple2('lg', '≶'),
			_Utils_Tuple2('lgE', '⪑'),
			_Utils_Tuple2('lHar', '⥢'),
			_Utils_Tuple2('lhard', '↽'),
			_Utils_Tuple2('lharu', '↼'),
			_Utils_Tuple2('lharul', '⥪'),
			_Utils_Tuple2('lhblk', '▄'),
			_Utils_Tuple2('LJcy', 'Љ'),
			_Utils_Tuple2('ljcy', 'љ'),
			_Utils_Tuple2('llarr', '⇇'),
			_Utils_Tuple2('ll', '≪'),
			_Utils_Tuple2('Ll', '⋘'),
			_Utils_Tuple2('llcorner', '⌞'),
			_Utils_Tuple2('Lleftarrow', '⇚'),
			_Utils_Tuple2('llhard', '⥫'),
			_Utils_Tuple2('lltri', '◺'),
			_Utils_Tuple2('Lmidot', 'Ŀ'),
			_Utils_Tuple2('lmidot', 'ŀ'),
			_Utils_Tuple2('lmoustache', '⎰'),
			_Utils_Tuple2('lmoust', '⎰'),
			_Utils_Tuple2('lnap', '⪉'),
			_Utils_Tuple2('lnapprox', '⪉'),
			_Utils_Tuple2('lne', '⪇'),
			_Utils_Tuple2('lnE', '≨'),
			_Utils_Tuple2('lneq', '⪇'),
			_Utils_Tuple2('lneqq', '≨'),
			_Utils_Tuple2('lnsim', '⋦'),
			_Utils_Tuple2('loang', '⟬'),
			_Utils_Tuple2('loarr', '⇽'),
			_Utils_Tuple2('lobrk', '⟦'),
			_Utils_Tuple2('longleftarrow', '⟵'),
			_Utils_Tuple2('LongLeftArrow', '⟵'),
			_Utils_Tuple2('Longleftarrow', '⟸'),
			_Utils_Tuple2('longleftrightarrow', '⟷'),
			_Utils_Tuple2('LongLeftRightArrow', '⟷'),
			_Utils_Tuple2('Longleftrightarrow', '⟺'),
			_Utils_Tuple2('longmapsto', '⟼'),
			_Utils_Tuple2('longrightarrow', '⟶'),
			_Utils_Tuple2('LongRightArrow', '⟶'),
			_Utils_Tuple2('Longrightarrow', '⟹'),
			_Utils_Tuple2('looparrowleft', '↫'),
			_Utils_Tuple2('looparrowright', '↬'),
			_Utils_Tuple2('lopar', '⦅'),
			_Utils_Tuple2('Lopf', '\uD835\uDD43'),
			_Utils_Tuple2('lopf', '\uD835\uDD5D'),
			_Utils_Tuple2('loplus', '⨭'),
			_Utils_Tuple2('lotimes', '⨴'),
			_Utils_Tuple2('lowast', '∗'),
			_Utils_Tuple2('lowbar', '_'),
			_Utils_Tuple2('LowerLeftArrow', '↙'),
			_Utils_Tuple2('LowerRightArrow', '↘'),
			_Utils_Tuple2('loz', '◊'),
			_Utils_Tuple2('lozenge', '◊'),
			_Utils_Tuple2('lozf', '⧫'),
			_Utils_Tuple2('lpar', '('),
			_Utils_Tuple2('lparlt', '⦓'),
			_Utils_Tuple2('lrarr', '⇆'),
			_Utils_Tuple2('lrcorner', '⌟'),
			_Utils_Tuple2('lrhar', '⇋'),
			_Utils_Tuple2('lrhard', '⥭'),
			_Utils_Tuple2('lrm', '\u200E'),
			_Utils_Tuple2('lrtri', '⊿'),
			_Utils_Tuple2('lsaquo', '‹'),
			_Utils_Tuple2('lscr', '\uD835\uDCC1'),
			_Utils_Tuple2('Lscr', 'ℒ'),
			_Utils_Tuple2('lsh', '↰'),
			_Utils_Tuple2('Lsh', '↰'),
			_Utils_Tuple2('lsim', '≲'),
			_Utils_Tuple2('lsime', '⪍'),
			_Utils_Tuple2('lsimg', '⪏'),
			_Utils_Tuple2('lsqb', '['),
			_Utils_Tuple2('lsquo', '‘'),
			_Utils_Tuple2('lsquor', '‚'),
			_Utils_Tuple2('Lstrok', 'Ł'),
			_Utils_Tuple2('lstrok', 'ł'),
			_Utils_Tuple2('ltcc', '⪦'),
			_Utils_Tuple2('ltcir', '⩹'),
			_Utils_Tuple2('lt', '<'),
			_Utils_Tuple2('LT', '<'),
			_Utils_Tuple2('Lt', '≪'),
			_Utils_Tuple2('ltdot', '⋖'),
			_Utils_Tuple2('lthree', '⋋'),
			_Utils_Tuple2('ltimes', '⋉'),
			_Utils_Tuple2('ltlarr', '⥶'),
			_Utils_Tuple2('ltquest', '⩻'),
			_Utils_Tuple2('ltri', '◃'),
			_Utils_Tuple2('ltrie', '⊴'),
			_Utils_Tuple2('ltrif', '◂'),
			_Utils_Tuple2('ltrPar', '⦖'),
			_Utils_Tuple2('lurdshar', '⥊'),
			_Utils_Tuple2('luruhar', '⥦'),
			_Utils_Tuple2('lvertneqq', '≨︀'),
			_Utils_Tuple2('lvnE', '≨︀'),
			_Utils_Tuple2('macr', '¯'),
			_Utils_Tuple2('male', '♂'),
			_Utils_Tuple2('malt', '✠'),
			_Utils_Tuple2('maltese', '✠'),
			_Utils_Tuple2('Map', '⤅'),
			_Utils_Tuple2('map', '↦'),
			_Utils_Tuple2('mapsto', '↦'),
			_Utils_Tuple2('mapstodown', '↧'),
			_Utils_Tuple2('mapstoleft', '↤'),
			_Utils_Tuple2('mapstoup', '↥'),
			_Utils_Tuple2('marker', '▮'),
			_Utils_Tuple2('mcomma', '⨩'),
			_Utils_Tuple2('Mcy', 'М'),
			_Utils_Tuple2('mcy', 'м'),
			_Utils_Tuple2('mdash', '—'),
			_Utils_Tuple2('mDDot', '∺'),
			_Utils_Tuple2('measuredangle', '∡'),
			_Utils_Tuple2('MediumSpace', '\u205F'),
			_Utils_Tuple2('Mellintrf', 'ℳ'),
			_Utils_Tuple2('Mfr', '\uD835\uDD10'),
			_Utils_Tuple2('mfr', '\uD835\uDD2A'),
			_Utils_Tuple2('mho', '℧'),
			_Utils_Tuple2('micro', 'µ'),
			_Utils_Tuple2('midast', '*'),
			_Utils_Tuple2('midcir', '⫰'),
			_Utils_Tuple2('mid', '∣'),
			_Utils_Tuple2('middot', '·'),
			_Utils_Tuple2('minusb', '⊟'),
			_Utils_Tuple2('minus', '−'),
			_Utils_Tuple2('minusd', '∸'),
			_Utils_Tuple2('minusdu', '⨪'),
			_Utils_Tuple2('MinusPlus', '∓'),
			_Utils_Tuple2('mlcp', '⫛'),
			_Utils_Tuple2('mldr', '…'),
			_Utils_Tuple2('mnplus', '∓'),
			_Utils_Tuple2('models', '⊧'),
			_Utils_Tuple2('Mopf', '\uD835\uDD44'),
			_Utils_Tuple2('mopf', '\uD835\uDD5E'),
			_Utils_Tuple2('mp', '∓'),
			_Utils_Tuple2('mscr', '\uD835\uDCC2'),
			_Utils_Tuple2('Mscr', 'ℳ'),
			_Utils_Tuple2('mstpos', '∾'),
			_Utils_Tuple2('Mu', 'Μ'),
			_Utils_Tuple2('mu', 'μ'),
			_Utils_Tuple2('multimap', '⊸'),
			_Utils_Tuple2('mumap', '⊸'),
			_Utils_Tuple2('nabla', '∇'),
			_Utils_Tuple2('Nacute', 'Ń'),
			_Utils_Tuple2('nacute', 'ń'),
			_Utils_Tuple2('nang', '∠⃒'),
			_Utils_Tuple2('nap', '≉'),
			_Utils_Tuple2('napE', '⩰̸'),
			_Utils_Tuple2('napid', '≋̸'),
			_Utils_Tuple2('napos', 'ŉ'),
			_Utils_Tuple2('napprox', '≉'),
			_Utils_Tuple2('natural', '♮'),
			_Utils_Tuple2('naturals', 'ℕ'),
			_Utils_Tuple2('natur', '♮'),
			_Utils_Tuple2('nbsp', '\u00A0'),
			_Utils_Tuple2('nbump', '≎̸'),
			_Utils_Tuple2('nbumpe', '≏̸'),
			_Utils_Tuple2('ncap', '⩃'),
			_Utils_Tuple2('Ncaron', 'Ň'),
			_Utils_Tuple2('ncaron', 'ň'),
			_Utils_Tuple2('Ncedil', 'Ņ'),
			_Utils_Tuple2('ncedil', 'ņ'),
			_Utils_Tuple2('ncong', '≇'),
			_Utils_Tuple2('ncongdot', '⩭̸'),
			_Utils_Tuple2('ncup', '⩂'),
			_Utils_Tuple2('Ncy', 'Н'),
			_Utils_Tuple2('ncy', 'н'),
			_Utils_Tuple2('ndash', '–'),
			_Utils_Tuple2('nearhk', '⤤'),
			_Utils_Tuple2('nearr', '↗'),
			_Utils_Tuple2('neArr', '⇗'),
			_Utils_Tuple2('nearrow', '↗'),
			_Utils_Tuple2('ne', '≠'),
			_Utils_Tuple2('nedot', '≐̸'),
			_Utils_Tuple2('NegativeMediumSpace', '\u200B'),
			_Utils_Tuple2('NegativeThickSpace', '\u200B'),
			_Utils_Tuple2('NegativeThinSpace', '\u200B'),
			_Utils_Tuple2('NegativeVeryThinSpace', '\u200B'),
			_Utils_Tuple2('nequiv', '≢'),
			_Utils_Tuple2('nesear', '⤨'),
			_Utils_Tuple2('nesim', '≂̸'),
			_Utils_Tuple2('NestedGreaterGreater', '≫'),
			_Utils_Tuple2('NestedLessLess', '≪'),
			_Utils_Tuple2('NewLine', '\n'),
			_Utils_Tuple2('nexist', '∄'),
			_Utils_Tuple2('nexists', '∄'),
			_Utils_Tuple2('Nfr', '\uD835\uDD11'),
			_Utils_Tuple2('nfr', '\uD835\uDD2B'),
			_Utils_Tuple2('ngE', '≧̸'),
			_Utils_Tuple2('nge', '≱'),
			_Utils_Tuple2('ngeq', '≱'),
			_Utils_Tuple2('ngeqq', '≧̸'),
			_Utils_Tuple2('ngeqslant', '⩾̸'),
			_Utils_Tuple2('nges', '⩾̸'),
			_Utils_Tuple2('nGg', '⋙̸'),
			_Utils_Tuple2('ngsim', '≵'),
			_Utils_Tuple2('nGt', '≫⃒'),
			_Utils_Tuple2('ngt', '≯'),
			_Utils_Tuple2('ngtr', '≯'),
			_Utils_Tuple2('nGtv', '≫̸'),
			_Utils_Tuple2('nharr', '↮'),
			_Utils_Tuple2('nhArr', '⇎'),
			_Utils_Tuple2('nhpar', '⫲'),
			_Utils_Tuple2('ni', '∋'),
			_Utils_Tuple2('nis', '⋼'),
			_Utils_Tuple2('nisd', '⋺'),
			_Utils_Tuple2('niv', '∋'),
			_Utils_Tuple2('NJcy', 'Њ'),
			_Utils_Tuple2('njcy', 'њ'),
			_Utils_Tuple2('nlarr', '↚'),
			_Utils_Tuple2('nlArr', '⇍'),
			_Utils_Tuple2('nldr', '‥'),
			_Utils_Tuple2('nlE', '≦̸'),
			_Utils_Tuple2('nle', '≰'),
			_Utils_Tuple2('nleftarrow', '↚'),
			_Utils_Tuple2('nLeftarrow', '⇍'),
			_Utils_Tuple2('nleftrightarrow', '↮'),
			_Utils_Tuple2('nLeftrightarrow', '⇎'),
			_Utils_Tuple2('nleq', '≰'),
			_Utils_Tuple2('nleqq', '≦̸'),
			_Utils_Tuple2('nleqslant', '⩽̸'),
			_Utils_Tuple2('nles', '⩽̸'),
			_Utils_Tuple2('nless', '≮'),
			_Utils_Tuple2('nLl', '⋘̸'),
			_Utils_Tuple2('nlsim', '≴'),
			_Utils_Tuple2('nLt', '≪⃒'),
			_Utils_Tuple2('nlt', '≮'),
			_Utils_Tuple2('nltri', '⋪'),
			_Utils_Tuple2('nltrie', '⋬'),
			_Utils_Tuple2('nLtv', '≪̸'),
			_Utils_Tuple2('nmid', '∤'),
			_Utils_Tuple2('NoBreak', '\u2060'),
			_Utils_Tuple2('NonBreakingSpace', '\u00A0'),
			_Utils_Tuple2('nopf', '\uD835\uDD5F'),
			_Utils_Tuple2('Nopf', 'ℕ'),
			_Utils_Tuple2('Not', '⫬'),
			_Utils_Tuple2('not', '¬'),
			_Utils_Tuple2('NotCongruent', '≢'),
			_Utils_Tuple2('NotCupCap', '≭'),
			_Utils_Tuple2('NotDoubleVerticalBar', '∦'),
			_Utils_Tuple2('NotElement', '∉'),
			_Utils_Tuple2('NotEqual', '≠'),
			_Utils_Tuple2('NotEqualTilde', '≂̸'),
			_Utils_Tuple2('NotExists', '∄'),
			_Utils_Tuple2('NotGreater', '≯'),
			_Utils_Tuple2('NotGreaterEqual', '≱'),
			_Utils_Tuple2('NotGreaterFullEqual', '≧̸'),
			_Utils_Tuple2('NotGreaterGreater', '≫̸'),
			_Utils_Tuple2('NotGreaterLess', '≹'),
			_Utils_Tuple2('NotGreaterSlantEqual', '⩾̸'),
			_Utils_Tuple2('NotGreaterTilde', '≵'),
			_Utils_Tuple2('NotHumpDownHump', '≎̸'),
			_Utils_Tuple2('NotHumpEqual', '≏̸'),
			_Utils_Tuple2('notin', '∉'),
			_Utils_Tuple2('notindot', '⋵̸'),
			_Utils_Tuple2('notinE', '⋹̸'),
			_Utils_Tuple2('notinva', '∉'),
			_Utils_Tuple2('notinvb', '⋷'),
			_Utils_Tuple2('notinvc', '⋶'),
			_Utils_Tuple2('NotLeftTriangleBar', '⧏̸'),
			_Utils_Tuple2('NotLeftTriangle', '⋪'),
			_Utils_Tuple2('NotLeftTriangleEqual', '⋬'),
			_Utils_Tuple2('NotLess', '≮'),
			_Utils_Tuple2('NotLessEqual', '≰'),
			_Utils_Tuple2('NotLessGreater', '≸'),
			_Utils_Tuple2('NotLessLess', '≪̸'),
			_Utils_Tuple2('NotLessSlantEqual', '⩽̸'),
			_Utils_Tuple2('NotLessTilde', '≴'),
			_Utils_Tuple2('NotNestedGreaterGreater', '⪢̸'),
			_Utils_Tuple2('NotNestedLessLess', '⪡̸'),
			_Utils_Tuple2('notni', '∌'),
			_Utils_Tuple2('notniva', '∌'),
			_Utils_Tuple2('notnivb', '⋾'),
			_Utils_Tuple2('notnivc', '⋽'),
			_Utils_Tuple2('NotPrecedes', '⊀'),
			_Utils_Tuple2('NotPrecedesEqual', '⪯̸'),
			_Utils_Tuple2('NotPrecedesSlantEqual', '⋠'),
			_Utils_Tuple2('NotReverseElement', '∌'),
			_Utils_Tuple2('NotRightTriangleBar', '⧐̸'),
			_Utils_Tuple2('NotRightTriangle', '⋫'),
			_Utils_Tuple2('NotRightTriangleEqual', '⋭'),
			_Utils_Tuple2('NotSquareSubset', '⊏̸'),
			_Utils_Tuple2('NotSquareSubsetEqual', '⋢'),
			_Utils_Tuple2('NotSquareSuperset', '⊐̸'),
			_Utils_Tuple2('NotSquareSupersetEqual', '⋣'),
			_Utils_Tuple2('NotSubset', '⊂⃒'),
			_Utils_Tuple2('NotSubsetEqual', '⊈'),
			_Utils_Tuple2('NotSucceeds', '⊁'),
			_Utils_Tuple2('NotSucceedsEqual', '⪰̸'),
			_Utils_Tuple2('NotSucceedsSlantEqual', '⋡'),
			_Utils_Tuple2('NotSucceedsTilde', '≿̸'),
			_Utils_Tuple2('NotSuperset', '⊃⃒'),
			_Utils_Tuple2('NotSupersetEqual', '⊉'),
			_Utils_Tuple2('NotTilde', '≁'),
			_Utils_Tuple2('NotTildeEqual', '≄'),
			_Utils_Tuple2('NotTildeFullEqual', '≇'),
			_Utils_Tuple2('NotTildeTilde', '≉'),
			_Utils_Tuple2('NotVerticalBar', '∤'),
			_Utils_Tuple2('nparallel', '∦'),
			_Utils_Tuple2('npar', '∦'),
			_Utils_Tuple2('nparsl', '⫽⃥'),
			_Utils_Tuple2('npart', '∂̸'),
			_Utils_Tuple2('npolint', '⨔'),
			_Utils_Tuple2('npr', '⊀'),
			_Utils_Tuple2('nprcue', '⋠'),
			_Utils_Tuple2('nprec', '⊀'),
			_Utils_Tuple2('npreceq', '⪯̸'),
			_Utils_Tuple2('npre', '⪯̸'),
			_Utils_Tuple2('nrarrc', '⤳̸'),
			_Utils_Tuple2('nrarr', '↛'),
			_Utils_Tuple2('nrArr', '⇏'),
			_Utils_Tuple2('nrarrw', '↝̸'),
			_Utils_Tuple2('nrightarrow', '↛'),
			_Utils_Tuple2('nRightarrow', '⇏'),
			_Utils_Tuple2('nrtri', '⋫'),
			_Utils_Tuple2('nrtrie', '⋭'),
			_Utils_Tuple2('nsc', '⊁'),
			_Utils_Tuple2('nsccue', '⋡'),
			_Utils_Tuple2('nsce', '⪰̸'),
			_Utils_Tuple2('Nscr', '\uD835\uDCA9'),
			_Utils_Tuple2('nscr', '\uD835\uDCC3'),
			_Utils_Tuple2('nshortmid', '∤'),
			_Utils_Tuple2('nshortparallel', '∦'),
			_Utils_Tuple2('nsim', '≁'),
			_Utils_Tuple2('nsime', '≄'),
			_Utils_Tuple2('nsimeq', '≄'),
			_Utils_Tuple2('nsmid', '∤'),
			_Utils_Tuple2('nspar', '∦'),
			_Utils_Tuple2('nsqsube', '⋢'),
			_Utils_Tuple2('nsqsupe', '⋣'),
			_Utils_Tuple2('nsub', '⊄'),
			_Utils_Tuple2('nsubE', '⫅̸'),
			_Utils_Tuple2('nsube', '⊈'),
			_Utils_Tuple2('nsubset', '⊂⃒'),
			_Utils_Tuple2('nsubseteq', '⊈'),
			_Utils_Tuple2('nsubseteqq', '⫅̸'),
			_Utils_Tuple2('nsucc', '⊁'),
			_Utils_Tuple2('nsucceq', '⪰̸'),
			_Utils_Tuple2('nsup', '⊅'),
			_Utils_Tuple2('nsupE', '⫆̸'),
			_Utils_Tuple2('nsupe', '⊉'),
			_Utils_Tuple2('nsupset', '⊃⃒'),
			_Utils_Tuple2('nsupseteq', '⊉'),
			_Utils_Tuple2('nsupseteqq', '⫆̸'),
			_Utils_Tuple2('ntgl', '≹'),
			_Utils_Tuple2('Ntilde', 'Ñ'),
			_Utils_Tuple2('ntilde', 'ñ'),
			_Utils_Tuple2('ntlg', '≸'),
			_Utils_Tuple2('ntriangleleft', '⋪'),
			_Utils_Tuple2('ntrianglelefteq', '⋬'),
			_Utils_Tuple2('ntriangleright', '⋫'),
			_Utils_Tuple2('ntrianglerighteq', '⋭'),
			_Utils_Tuple2('Nu', 'Ν'),
			_Utils_Tuple2('nu', 'ν'),
			_Utils_Tuple2('num', '#'),
			_Utils_Tuple2('numero', '№'),
			_Utils_Tuple2('numsp', '\u2007'),
			_Utils_Tuple2('nvap', '≍⃒'),
			_Utils_Tuple2('nvdash', '⊬'),
			_Utils_Tuple2('nvDash', '⊭'),
			_Utils_Tuple2('nVdash', '⊮'),
			_Utils_Tuple2('nVDash', '⊯'),
			_Utils_Tuple2('nvge', '≥⃒'),
			_Utils_Tuple2('nvgt', '>⃒'),
			_Utils_Tuple2('nvHarr', '⤄'),
			_Utils_Tuple2('nvinfin', '⧞'),
			_Utils_Tuple2('nvlArr', '⤂'),
			_Utils_Tuple2('nvle', '≤⃒'),
			_Utils_Tuple2('nvlt', '<⃒'),
			_Utils_Tuple2('nvltrie', '⊴⃒'),
			_Utils_Tuple2('nvrArr', '⤃'),
			_Utils_Tuple2('nvrtrie', '⊵⃒'),
			_Utils_Tuple2('nvsim', '∼⃒'),
			_Utils_Tuple2('nwarhk', '⤣'),
			_Utils_Tuple2('nwarr', '↖'),
			_Utils_Tuple2('nwArr', '⇖'),
			_Utils_Tuple2('nwarrow', '↖'),
			_Utils_Tuple2('nwnear', '⤧'),
			_Utils_Tuple2('Oacute', 'Ó'),
			_Utils_Tuple2('oacute', 'ó'),
			_Utils_Tuple2('oast', '⊛'),
			_Utils_Tuple2('Ocirc', 'Ô'),
			_Utils_Tuple2('ocirc', 'ô'),
			_Utils_Tuple2('ocir', '⊚'),
			_Utils_Tuple2('Ocy', 'О'),
			_Utils_Tuple2('ocy', 'о'),
			_Utils_Tuple2('odash', '⊝'),
			_Utils_Tuple2('Odblac', 'Ő'),
			_Utils_Tuple2('odblac', 'ő'),
			_Utils_Tuple2('odiv', '⨸'),
			_Utils_Tuple2('odot', '⊙'),
			_Utils_Tuple2('odsold', '⦼'),
			_Utils_Tuple2('OElig', 'Œ'),
			_Utils_Tuple2('oelig', 'œ'),
			_Utils_Tuple2('ofcir', '⦿'),
			_Utils_Tuple2('Ofr', '\uD835\uDD12'),
			_Utils_Tuple2('ofr', '\uD835\uDD2C'),
			_Utils_Tuple2('ogon', '˛'),
			_Utils_Tuple2('Ograve', 'Ò'),
			_Utils_Tuple2('ograve', 'ò'),
			_Utils_Tuple2('ogt', '⧁'),
			_Utils_Tuple2('ohbar', '⦵'),
			_Utils_Tuple2('ohm', 'Ω'),
			_Utils_Tuple2('oint', '∮'),
			_Utils_Tuple2('olarr', '↺'),
			_Utils_Tuple2('olcir', '⦾'),
			_Utils_Tuple2('olcross', '⦻'),
			_Utils_Tuple2('oline', '‾'),
			_Utils_Tuple2('olt', '⧀'),
			_Utils_Tuple2('Omacr', 'Ō'),
			_Utils_Tuple2('omacr', 'ō'),
			_Utils_Tuple2('Omega', 'Ω'),
			_Utils_Tuple2('omega', 'ω'),
			_Utils_Tuple2('Omicron', 'Ο'),
			_Utils_Tuple2('omicron', 'ο'),
			_Utils_Tuple2('omid', '⦶'),
			_Utils_Tuple2('ominus', '⊖'),
			_Utils_Tuple2('Oopf', '\uD835\uDD46'),
			_Utils_Tuple2('oopf', '\uD835\uDD60'),
			_Utils_Tuple2('opar', '⦷'),
			_Utils_Tuple2('OpenCurlyDoubleQuote', '“'),
			_Utils_Tuple2('OpenCurlyQuote', '‘'),
			_Utils_Tuple2('operp', '⦹'),
			_Utils_Tuple2('oplus', '⊕'),
			_Utils_Tuple2('orarr', '↻'),
			_Utils_Tuple2('Or', '⩔'),
			_Utils_Tuple2('or', '∨'),
			_Utils_Tuple2('ord', '⩝'),
			_Utils_Tuple2('order', 'ℴ'),
			_Utils_Tuple2('orderof', 'ℴ'),
			_Utils_Tuple2('ordf', 'ª'),
			_Utils_Tuple2('ordm', 'º'),
			_Utils_Tuple2('origof', '⊶'),
			_Utils_Tuple2('oror', '⩖'),
			_Utils_Tuple2('orslope', '⩗'),
			_Utils_Tuple2('orv', '⩛'),
			_Utils_Tuple2('oS', 'Ⓢ'),
			_Utils_Tuple2('Oscr', '\uD835\uDCAA'),
			_Utils_Tuple2('oscr', 'ℴ'),
			_Utils_Tuple2('Oslash', 'Ø'),
			_Utils_Tuple2('oslash', 'ø'),
			_Utils_Tuple2('osol', '⊘'),
			_Utils_Tuple2('Otilde', 'Õ'),
			_Utils_Tuple2('otilde', 'õ'),
			_Utils_Tuple2('otimesas', '⨶'),
			_Utils_Tuple2('Otimes', '⨷'),
			_Utils_Tuple2('otimes', '⊗'),
			_Utils_Tuple2('Ouml', 'Ö'),
			_Utils_Tuple2('ouml', 'ö'),
			_Utils_Tuple2('ovbar', '⌽'),
			_Utils_Tuple2('OverBar', '‾'),
			_Utils_Tuple2('OverBrace', '⏞'),
			_Utils_Tuple2('OverBracket', '⎴'),
			_Utils_Tuple2('OverParenthesis', '⏜'),
			_Utils_Tuple2('para', '¶'),
			_Utils_Tuple2('parallel', '∥'),
			_Utils_Tuple2('par', '∥'),
			_Utils_Tuple2('parsim', '⫳'),
			_Utils_Tuple2('parsl', '⫽'),
			_Utils_Tuple2('part', '∂'),
			_Utils_Tuple2('PartialD', '∂'),
			_Utils_Tuple2('Pcy', 'П'),
			_Utils_Tuple2('pcy', 'п'),
			_Utils_Tuple2('percnt', '%'),
			_Utils_Tuple2('period', '.'),
			_Utils_Tuple2('permil', '‰'),
			_Utils_Tuple2('perp', '⊥'),
			_Utils_Tuple2('pertenk', '‱'),
			_Utils_Tuple2('Pfr', '\uD835\uDD13'),
			_Utils_Tuple2('pfr', '\uD835\uDD2D'),
			_Utils_Tuple2('Phi', 'Φ'),
			_Utils_Tuple2('phi', 'φ'),
			_Utils_Tuple2('phiv', 'ϕ'),
			_Utils_Tuple2('phmmat', 'ℳ'),
			_Utils_Tuple2('phone', '☎'),
			_Utils_Tuple2('Pi', 'Π'),
			_Utils_Tuple2('pi', 'π'),
			_Utils_Tuple2('pitchfork', '⋔'),
			_Utils_Tuple2('piv', 'ϖ'),
			_Utils_Tuple2('planck', 'ℏ'),
			_Utils_Tuple2('planckh', 'ℎ'),
			_Utils_Tuple2('plankv', 'ℏ'),
			_Utils_Tuple2('plusacir', '⨣'),
			_Utils_Tuple2('plusb', '⊞'),
			_Utils_Tuple2('pluscir', '⨢'),
			_Utils_Tuple2('plus', '+'),
			_Utils_Tuple2('plusdo', '∔'),
			_Utils_Tuple2('plusdu', '⨥'),
			_Utils_Tuple2('pluse', '⩲'),
			_Utils_Tuple2('PlusMinus', '±'),
			_Utils_Tuple2('plusmn', '±'),
			_Utils_Tuple2('plussim', '⨦'),
			_Utils_Tuple2('plustwo', '⨧'),
			_Utils_Tuple2('pm', '±'),
			_Utils_Tuple2('Poincareplane', 'ℌ'),
			_Utils_Tuple2('pointint', '⨕'),
			_Utils_Tuple2('popf', '\uD835\uDD61'),
			_Utils_Tuple2('Popf', 'ℙ'),
			_Utils_Tuple2('pound', '£'),
			_Utils_Tuple2('prap', '⪷'),
			_Utils_Tuple2('Pr', '⪻'),
			_Utils_Tuple2('pr', '≺'),
			_Utils_Tuple2('prcue', '≼'),
			_Utils_Tuple2('precapprox', '⪷'),
			_Utils_Tuple2('prec', '≺'),
			_Utils_Tuple2('preccurlyeq', '≼'),
			_Utils_Tuple2('Precedes', '≺'),
			_Utils_Tuple2('PrecedesEqual', '⪯'),
			_Utils_Tuple2('PrecedesSlantEqual', '≼'),
			_Utils_Tuple2('PrecedesTilde', '≾'),
			_Utils_Tuple2('preceq', '⪯'),
			_Utils_Tuple2('precnapprox', '⪹'),
			_Utils_Tuple2('precneqq', '⪵'),
			_Utils_Tuple2('precnsim', '⋨'),
			_Utils_Tuple2('pre', '⪯'),
			_Utils_Tuple2('prE', '⪳'),
			_Utils_Tuple2('precsim', '≾'),
			_Utils_Tuple2('prime', '′'),
			_Utils_Tuple2('Prime', '″'),
			_Utils_Tuple2('primes', 'ℙ'),
			_Utils_Tuple2('prnap', '⪹'),
			_Utils_Tuple2('prnE', '⪵'),
			_Utils_Tuple2('prnsim', '⋨'),
			_Utils_Tuple2('prod', '∏'),
			_Utils_Tuple2('Product', '∏'),
			_Utils_Tuple2('profalar', '⌮'),
			_Utils_Tuple2('profline', '⌒'),
			_Utils_Tuple2('profsurf', '⌓'),
			_Utils_Tuple2('prop', '∝'),
			_Utils_Tuple2('Proportional', '∝'),
			_Utils_Tuple2('Proportion', '∷'),
			_Utils_Tuple2('propto', '∝'),
			_Utils_Tuple2('prsim', '≾'),
			_Utils_Tuple2('prurel', '⊰'),
			_Utils_Tuple2('Pscr', '\uD835\uDCAB'),
			_Utils_Tuple2('pscr', '\uD835\uDCC5'),
			_Utils_Tuple2('Psi', 'Ψ'),
			_Utils_Tuple2('psi', 'ψ'),
			_Utils_Tuple2('puncsp', '\u2008'),
			_Utils_Tuple2('Qfr', '\uD835\uDD14'),
			_Utils_Tuple2('qfr', '\uD835\uDD2E'),
			_Utils_Tuple2('qint', '⨌'),
			_Utils_Tuple2('qopf', '\uD835\uDD62'),
			_Utils_Tuple2('Qopf', 'ℚ'),
			_Utils_Tuple2('qprime', '⁗'),
			_Utils_Tuple2('Qscr', '\uD835\uDCAC'),
			_Utils_Tuple2('qscr', '\uD835\uDCC6'),
			_Utils_Tuple2('quaternions', 'ℍ'),
			_Utils_Tuple2('quatint', '⨖'),
			_Utils_Tuple2('quest', '?'),
			_Utils_Tuple2('questeq', '≟'),
			_Utils_Tuple2('quot', '\"'),
			_Utils_Tuple2('QUOT', '\"'),
			_Utils_Tuple2('rAarr', '⇛'),
			_Utils_Tuple2('race', '∽̱'),
			_Utils_Tuple2('Racute', 'Ŕ'),
			_Utils_Tuple2('racute', 'ŕ'),
			_Utils_Tuple2('radic', '√'),
			_Utils_Tuple2('raemptyv', '⦳'),
			_Utils_Tuple2('rang', '⟩'),
			_Utils_Tuple2('Rang', '⟫'),
			_Utils_Tuple2('rangd', '⦒'),
			_Utils_Tuple2('range', '⦥'),
			_Utils_Tuple2('rangle', '⟩'),
			_Utils_Tuple2('raquo', '»'),
			_Utils_Tuple2('rarrap', '⥵'),
			_Utils_Tuple2('rarrb', '⇥'),
			_Utils_Tuple2('rarrbfs', '⤠'),
			_Utils_Tuple2('rarrc', '⤳'),
			_Utils_Tuple2('rarr', '→'),
			_Utils_Tuple2('Rarr', '↠'),
			_Utils_Tuple2('rArr', '⇒'),
			_Utils_Tuple2('rarrfs', '⤞'),
			_Utils_Tuple2('rarrhk', '↪'),
			_Utils_Tuple2('rarrlp', '↬'),
			_Utils_Tuple2('rarrpl', '⥅'),
			_Utils_Tuple2('rarrsim', '⥴'),
			_Utils_Tuple2('Rarrtl', '⤖'),
			_Utils_Tuple2('rarrtl', '↣'),
			_Utils_Tuple2('rarrw', '↝'),
			_Utils_Tuple2('ratail', '⤚'),
			_Utils_Tuple2('rAtail', '⤜'),
			_Utils_Tuple2('ratio', '∶'),
			_Utils_Tuple2('rationals', 'ℚ'),
			_Utils_Tuple2('rbarr', '⤍'),
			_Utils_Tuple2('rBarr', '⤏'),
			_Utils_Tuple2('RBarr', '⤐'),
			_Utils_Tuple2('rbbrk', '❳'),
			_Utils_Tuple2('rbrace', '}'),
			_Utils_Tuple2('rbrack', ']'),
			_Utils_Tuple2('rbrke', '⦌'),
			_Utils_Tuple2('rbrksld', '⦎'),
			_Utils_Tuple2('rbrkslu', '⦐'),
			_Utils_Tuple2('Rcaron', 'Ř'),
			_Utils_Tuple2('rcaron', 'ř'),
			_Utils_Tuple2('Rcedil', 'Ŗ'),
			_Utils_Tuple2('rcedil', 'ŗ'),
			_Utils_Tuple2('rceil', '⌉'),
			_Utils_Tuple2('rcub', '}'),
			_Utils_Tuple2('Rcy', 'Р'),
			_Utils_Tuple2('rcy', 'р'),
			_Utils_Tuple2('rdca', '⤷'),
			_Utils_Tuple2('rdldhar', '⥩'),
			_Utils_Tuple2('rdquo', '”'),
			_Utils_Tuple2('rdquor', '”'),
			_Utils_Tuple2('rdsh', '↳'),
			_Utils_Tuple2('real', 'ℜ'),
			_Utils_Tuple2('realine', 'ℛ'),
			_Utils_Tuple2('realpart', 'ℜ'),
			_Utils_Tuple2('reals', 'ℝ'),
			_Utils_Tuple2('Re', 'ℜ'),
			_Utils_Tuple2('rect', '▭'),
			_Utils_Tuple2('reg', '®'),
			_Utils_Tuple2('REG', '®'),
			_Utils_Tuple2('ReverseElement', '∋'),
			_Utils_Tuple2('ReverseEquilibrium', '⇋'),
			_Utils_Tuple2('ReverseUpEquilibrium', '⥯'),
			_Utils_Tuple2('rfisht', '⥽'),
			_Utils_Tuple2('rfloor', '⌋'),
			_Utils_Tuple2('rfr', '\uD835\uDD2F'),
			_Utils_Tuple2('Rfr', 'ℜ'),
			_Utils_Tuple2('rHar', '⥤'),
			_Utils_Tuple2('rhard', '⇁'),
			_Utils_Tuple2('rharu', '⇀'),
			_Utils_Tuple2('rharul', '⥬'),
			_Utils_Tuple2('Rho', 'Ρ'),
			_Utils_Tuple2('rho', 'ρ'),
			_Utils_Tuple2('rhov', 'ϱ'),
			_Utils_Tuple2('RightAngleBracket', '⟩'),
			_Utils_Tuple2('RightArrowBar', '⇥'),
			_Utils_Tuple2('rightarrow', '→'),
			_Utils_Tuple2('RightArrow', '→'),
			_Utils_Tuple2('Rightarrow', '⇒'),
			_Utils_Tuple2('RightArrowLeftArrow', '⇄'),
			_Utils_Tuple2('rightarrowtail', '↣'),
			_Utils_Tuple2('RightCeiling', '⌉'),
			_Utils_Tuple2('RightDoubleBracket', '⟧'),
			_Utils_Tuple2('RightDownTeeVector', '⥝'),
			_Utils_Tuple2('RightDownVectorBar', '⥕'),
			_Utils_Tuple2('RightDownVector', '⇂'),
			_Utils_Tuple2('RightFloor', '⌋'),
			_Utils_Tuple2('rightharpoondown', '⇁'),
			_Utils_Tuple2('rightharpoonup', '⇀'),
			_Utils_Tuple2('rightleftarrows', '⇄'),
			_Utils_Tuple2('rightleftharpoons', '⇌'),
			_Utils_Tuple2('rightrightarrows', '⇉'),
			_Utils_Tuple2('rightsquigarrow', '↝'),
			_Utils_Tuple2('RightTeeArrow', '↦'),
			_Utils_Tuple2('RightTee', '⊢'),
			_Utils_Tuple2('RightTeeVector', '⥛'),
			_Utils_Tuple2('rightthreetimes', '⋌'),
			_Utils_Tuple2('RightTriangleBar', '⧐'),
			_Utils_Tuple2('RightTriangle', '⊳'),
			_Utils_Tuple2('RightTriangleEqual', '⊵'),
			_Utils_Tuple2('RightUpDownVector', '⥏'),
			_Utils_Tuple2('RightUpTeeVector', '⥜'),
			_Utils_Tuple2('RightUpVectorBar', '⥔'),
			_Utils_Tuple2('RightUpVector', '↾'),
			_Utils_Tuple2('RightVectorBar', '⥓'),
			_Utils_Tuple2('RightVector', '⇀'),
			_Utils_Tuple2('ring', '˚'),
			_Utils_Tuple2('risingdotseq', '≓'),
			_Utils_Tuple2('rlarr', '⇄'),
			_Utils_Tuple2('rlhar', '⇌'),
			_Utils_Tuple2('rlm', '\u200F'),
			_Utils_Tuple2('rmoustache', '⎱'),
			_Utils_Tuple2('rmoust', '⎱'),
			_Utils_Tuple2('rnmid', '⫮'),
			_Utils_Tuple2('roang', '⟭'),
			_Utils_Tuple2('roarr', '⇾'),
			_Utils_Tuple2('robrk', '⟧'),
			_Utils_Tuple2('ropar', '⦆'),
			_Utils_Tuple2('ropf', '\uD835\uDD63'),
			_Utils_Tuple2('Ropf', 'ℝ'),
			_Utils_Tuple2('roplus', '⨮'),
			_Utils_Tuple2('rotimes', '⨵'),
			_Utils_Tuple2('RoundImplies', '⥰'),
			_Utils_Tuple2('rpar', ')'),
			_Utils_Tuple2('rpargt', '⦔'),
			_Utils_Tuple2('rppolint', '⨒'),
			_Utils_Tuple2('rrarr', '⇉'),
			_Utils_Tuple2('Rrightarrow', '⇛'),
			_Utils_Tuple2('rsaquo', '›'),
			_Utils_Tuple2('rscr', '\uD835\uDCC7'),
			_Utils_Tuple2('Rscr', 'ℛ'),
			_Utils_Tuple2('rsh', '↱'),
			_Utils_Tuple2('Rsh', '↱'),
			_Utils_Tuple2('rsqb', ']'),
			_Utils_Tuple2('rsquo', '’'),
			_Utils_Tuple2('rsquor', '’'),
			_Utils_Tuple2('rthree', '⋌'),
			_Utils_Tuple2('rtimes', '⋊'),
			_Utils_Tuple2('rtri', '▹'),
			_Utils_Tuple2('rtrie', '⊵'),
			_Utils_Tuple2('rtrif', '▸'),
			_Utils_Tuple2('rtriltri', '⧎'),
			_Utils_Tuple2('RuleDelayed', '⧴'),
			_Utils_Tuple2('ruluhar', '⥨'),
			_Utils_Tuple2('rx', '℞'),
			_Utils_Tuple2('Sacute', 'Ś'),
			_Utils_Tuple2('sacute', 'ś'),
			_Utils_Tuple2('sbquo', '‚'),
			_Utils_Tuple2('scap', '⪸'),
			_Utils_Tuple2('Scaron', 'Š'),
			_Utils_Tuple2('scaron', 'š'),
			_Utils_Tuple2('Sc', '⪼'),
			_Utils_Tuple2('sc', '≻'),
			_Utils_Tuple2('sccue', '≽'),
			_Utils_Tuple2('sce', '⪰'),
			_Utils_Tuple2('scE', '⪴'),
			_Utils_Tuple2('Scedil', 'Ş'),
			_Utils_Tuple2('scedil', 'ş'),
			_Utils_Tuple2('Scirc', 'Ŝ'),
			_Utils_Tuple2('scirc', 'ŝ'),
			_Utils_Tuple2('scnap', '⪺'),
			_Utils_Tuple2('scnE', '⪶'),
			_Utils_Tuple2('scnsim', '⋩'),
			_Utils_Tuple2('scpolint', '⨓'),
			_Utils_Tuple2('scsim', '≿'),
			_Utils_Tuple2('Scy', 'С'),
			_Utils_Tuple2('scy', 'с'),
			_Utils_Tuple2('sdotb', '⊡'),
			_Utils_Tuple2('sdot', '⋅'),
			_Utils_Tuple2('sdote', '⩦'),
			_Utils_Tuple2('searhk', '⤥'),
			_Utils_Tuple2('searr', '↘'),
			_Utils_Tuple2('seArr', '⇘'),
			_Utils_Tuple2('searrow', '↘'),
			_Utils_Tuple2('sect', '§'),
			_Utils_Tuple2('semi', ';'),
			_Utils_Tuple2('seswar', '⤩'),
			_Utils_Tuple2('setminus', '∖'),
			_Utils_Tuple2('setmn', '∖'),
			_Utils_Tuple2('sext', '✶'),
			_Utils_Tuple2('Sfr', '\uD835\uDD16'),
			_Utils_Tuple2('sfr', '\uD835\uDD30'),
			_Utils_Tuple2('sfrown', '⌢'),
			_Utils_Tuple2('sharp', '♯'),
			_Utils_Tuple2('SHCHcy', 'Щ'),
			_Utils_Tuple2('shchcy', 'щ'),
			_Utils_Tuple2('SHcy', 'Ш'),
			_Utils_Tuple2('shcy', 'ш'),
			_Utils_Tuple2('ShortDownArrow', '↓'),
			_Utils_Tuple2('ShortLeftArrow', '←'),
			_Utils_Tuple2('shortmid', '∣'),
			_Utils_Tuple2('shortparallel', '∥'),
			_Utils_Tuple2('ShortRightArrow', '→'),
			_Utils_Tuple2('ShortUpArrow', '↑'),
			_Utils_Tuple2('shy', '\u00AD'),
			_Utils_Tuple2('Sigma', 'Σ'),
			_Utils_Tuple2('sigma', 'σ'),
			_Utils_Tuple2('sigmaf', 'ς'),
			_Utils_Tuple2('sigmav', 'ς'),
			_Utils_Tuple2('sim', '∼'),
			_Utils_Tuple2('simdot', '⩪'),
			_Utils_Tuple2('sime', '≃'),
			_Utils_Tuple2('simeq', '≃'),
			_Utils_Tuple2('simg', '⪞'),
			_Utils_Tuple2('simgE', '⪠'),
			_Utils_Tuple2('siml', '⪝'),
			_Utils_Tuple2('simlE', '⪟'),
			_Utils_Tuple2('simne', '≆'),
			_Utils_Tuple2('simplus', '⨤'),
			_Utils_Tuple2('simrarr', '⥲'),
			_Utils_Tuple2('slarr', '←'),
			_Utils_Tuple2('SmallCircle', '∘'),
			_Utils_Tuple2('smallsetminus', '∖'),
			_Utils_Tuple2('smashp', '⨳'),
			_Utils_Tuple2('smeparsl', '⧤'),
			_Utils_Tuple2('smid', '∣'),
			_Utils_Tuple2('smile', '⌣'),
			_Utils_Tuple2('smt', '⪪'),
			_Utils_Tuple2('smte', '⪬'),
			_Utils_Tuple2('smtes', '⪬︀'),
			_Utils_Tuple2('SOFTcy', 'Ь'),
			_Utils_Tuple2('softcy', 'ь'),
			_Utils_Tuple2('solbar', '⌿'),
			_Utils_Tuple2('solb', '⧄'),
			_Utils_Tuple2('sol', '/'),
			_Utils_Tuple2('Sopf', '\uD835\uDD4A'),
			_Utils_Tuple2('sopf', '\uD835\uDD64'),
			_Utils_Tuple2('spades', '♠'),
			_Utils_Tuple2('spadesuit', '♠'),
			_Utils_Tuple2('spar', '∥'),
			_Utils_Tuple2('sqcap', '⊓'),
			_Utils_Tuple2('sqcaps', '⊓︀'),
			_Utils_Tuple2('sqcup', '⊔'),
			_Utils_Tuple2('sqcups', '⊔︀'),
			_Utils_Tuple2('Sqrt', '√'),
			_Utils_Tuple2('sqsub', '⊏'),
			_Utils_Tuple2('sqsube', '⊑'),
			_Utils_Tuple2('sqsubset', '⊏'),
			_Utils_Tuple2('sqsubseteq', '⊑'),
			_Utils_Tuple2('sqsup', '⊐'),
			_Utils_Tuple2('sqsupe', '⊒'),
			_Utils_Tuple2('sqsupset', '⊐'),
			_Utils_Tuple2('sqsupseteq', '⊒'),
			_Utils_Tuple2('square', '□'),
			_Utils_Tuple2('Square', '□'),
			_Utils_Tuple2('SquareIntersection', '⊓'),
			_Utils_Tuple2('SquareSubset', '⊏'),
			_Utils_Tuple2('SquareSubsetEqual', '⊑'),
			_Utils_Tuple2('SquareSuperset', '⊐'),
			_Utils_Tuple2('SquareSupersetEqual', '⊒'),
			_Utils_Tuple2('SquareUnion', '⊔'),
			_Utils_Tuple2('squarf', '▪'),
			_Utils_Tuple2('squ', '□'),
			_Utils_Tuple2('squf', '▪'),
			_Utils_Tuple2('srarr', '→'),
			_Utils_Tuple2('Sscr', '\uD835\uDCAE'),
			_Utils_Tuple2('sscr', '\uD835\uDCC8'),
			_Utils_Tuple2('ssetmn', '∖'),
			_Utils_Tuple2('ssmile', '⌣'),
			_Utils_Tuple2('sstarf', '⋆'),
			_Utils_Tuple2('Star', '⋆'),
			_Utils_Tuple2('star', '☆'),
			_Utils_Tuple2('starf', '★'),
			_Utils_Tuple2('straightepsilon', 'ϵ'),
			_Utils_Tuple2('straightphi', 'ϕ'),
			_Utils_Tuple2('strns', '¯'),
			_Utils_Tuple2('sub', '⊂'),
			_Utils_Tuple2('Sub', '⋐'),
			_Utils_Tuple2('subdot', '⪽'),
			_Utils_Tuple2('subE', '⫅'),
			_Utils_Tuple2('sube', '⊆'),
			_Utils_Tuple2('subedot', '⫃'),
			_Utils_Tuple2('submult', '⫁'),
			_Utils_Tuple2('subnE', '⫋'),
			_Utils_Tuple2('subne', '⊊'),
			_Utils_Tuple2('subplus', '⪿'),
			_Utils_Tuple2('subrarr', '⥹'),
			_Utils_Tuple2('subset', '⊂'),
			_Utils_Tuple2('Subset', '⋐'),
			_Utils_Tuple2('subseteq', '⊆'),
			_Utils_Tuple2('subseteqq', '⫅'),
			_Utils_Tuple2('SubsetEqual', '⊆'),
			_Utils_Tuple2('subsetneq', '⊊'),
			_Utils_Tuple2('subsetneqq', '⫋'),
			_Utils_Tuple2('subsim', '⫇'),
			_Utils_Tuple2('subsub', '⫕'),
			_Utils_Tuple2('subsup', '⫓'),
			_Utils_Tuple2('succapprox', '⪸'),
			_Utils_Tuple2('succ', '≻'),
			_Utils_Tuple2('succcurlyeq', '≽'),
			_Utils_Tuple2('Succeeds', '≻'),
			_Utils_Tuple2('SucceedsEqual', '⪰'),
			_Utils_Tuple2('SucceedsSlantEqual', '≽'),
			_Utils_Tuple2('SucceedsTilde', '≿'),
			_Utils_Tuple2('succeq', '⪰'),
			_Utils_Tuple2('succnapprox', '⪺'),
			_Utils_Tuple2('succneqq', '⪶'),
			_Utils_Tuple2('succnsim', '⋩'),
			_Utils_Tuple2('succsim', '≿'),
			_Utils_Tuple2('SuchThat', '∋'),
			_Utils_Tuple2('sum', '∑'),
			_Utils_Tuple2('Sum', '∑'),
			_Utils_Tuple2('sung', '♪'),
			_Utils_Tuple2('sup1', '¹'),
			_Utils_Tuple2('sup2', '²'),
			_Utils_Tuple2('sup3', '³'),
			_Utils_Tuple2('sup', '⊃'),
			_Utils_Tuple2('Sup', '⋑'),
			_Utils_Tuple2('supdot', '⪾'),
			_Utils_Tuple2('supdsub', '⫘'),
			_Utils_Tuple2('supE', '⫆'),
			_Utils_Tuple2('supe', '⊇'),
			_Utils_Tuple2('supedot', '⫄'),
			_Utils_Tuple2('Superset', '⊃'),
			_Utils_Tuple2('SupersetEqual', '⊇'),
			_Utils_Tuple2('suphsol', '⟉'),
			_Utils_Tuple2('suphsub', '⫗'),
			_Utils_Tuple2('suplarr', '⥻'),
			_Utils_Tuple2('supmult', '⫂'),
			_Utils_Tuple2('supnE', '⫌'),
			_Utils_Tuple2('supne', '⊋'),
			_Utils_Tuple2('supplus', '⫀'),
			_Utils_Tuple2('supset', '⊃'),
			_Utils_Tuple2('Supset', '⋑'),
			_Utils_Tuple2('supseteq', '⊇'),
			_Utils_Tuple2('supseteqq', '⫆'),
			_Utils_Tuple2('supsetneq', '⊋'),
			_Utils_Tuple2('supsetneqq', '⫌'),
			_Utils_Tuple2('supsim', '⫈'),
			_Utils_Tuple2('supsub', '⫔'),
			_Utils_Tuple2('supsup', '⫖'),
			_Utils_Tuple2('swarhk', '⤦'),
			_Utils_Tuple2('swarr', '↙'),
			_Utils_Tuple2('swArr', '⇙'),
			_Utils_Tuple2('swarrow', '↙'),
			_Utils_Tuple2('swnwar', '⤪'),
			_Utils_Tuple2('szlig', 'ß'),
			_Utils_Tuple2('Tab', '\t'),
			_Utils_Tuple2('target', '⌖'),
			_Utils_Tuple2('Tau', 'Τ'),
			_Utils_Tuple2('tau', 'τ'),
			_Utils_Tuple2('tbrk', '⎴'),
			_Utils_Tuple2('Tcaron', 'Ť'),
			_Utils_Tuple2('tcaron', 'ť'),
			_Utils_Tuple2('Tcedil', 'Ţ'),
			_Utils_Tuple2('tcedil', 'ţ'),
			_Utils_Tuple2('Tcy', 'Т'),
			_Utils_Tuple2('tcy', 'т'),
			_Utils_Tuple2('tdot', '⃛'),
			_Utils_Tuple2('telrec', '⌕'),
			_Utils_Tuple2('Tfr', '\uD835\uDD17'),
			_Utils_Tuple2('tfr', '\uD835\uDD31'),
			_Utils_Tuple2('there4', '∴'),
			_Utils_Tuple2('therefore', '∴'),
			_Utils_Tuple2('Therefore', '∴'),
			_Utils_Tuple2('Theta', 'Θ'),
			_Utils_Tuple2('theta', 'θ'),
			_Utils_Tuple2('thetasym', 'ϑ'),
			_Utils_Tuple2('thetav', 'ϑ'),
			_Utils_Tuple2('thickapprox', '≈'),
			_Utils_Tuple2('thicksim', '∼'),
			_Utils_Tuple2('ThickSpace', '\u205F\u200A'),
			_Utils_Tuple2('ThinSpace', '\u2009'),
			_Utils_Tuple2('thinsp', '\u2009'),
			_Utils_Tuple2('thkap', '≈'),
			_Utils_Tuple2('thksim', '∼'),
			_Utils_Tuple2('THORN', 'Þ'),
			_Utils_Tuple2('thorn', 'þ'),
			_Utils_Tuple2('tilde', '˜'),
			_Utils_Tuple2('Tilde', '∼'),
			_Utils_Tuple2('TildeEqual', '≃'),
			_Utils_Tuple2('TildeFullEqual', '≅'),
			_Utils_Tuple2('TildeTilde', '≈'),
			_Utils_Tuple2('timesbar', '⨱'),
			_Utils_Tuple2('timesb', '⊠'),
			_Utils_Tuple2('times', '×'),
			_Utils_Tuple2('timesd', '⨰'),
			_Utils_Tuple2('tint', '∭'),
			_Utils_Tuple2('toea', '⤨'),
			_Utils_Tuple2('topbot', '⌶'),
			_Utils_Tuple2('topcir', '⫱'),
			_Utils_Tuple2('top', '⊤'),
			_Utils_Tuple2('Topf', '\uD835\uDD4B'),
			_Utils_Tuple2('topf', '\uD835\uDD65'),
			_Utils_Tuple2('topfork', '⫚'),
			_Utils_Tuple2('tosa', '⤩'),
			_Utils_Tuple2('tprime', '‴'),
			_Utils_Tuple2('trade', '™'),
			_Utils_Tuple2('TRADE', '™'),
			_Utils_Tuple2('triangle', '▵'),
			_Utils_Tuple2('triangledown', '▿'),
			_Utils_Tuple2('triangleleft', '◃'),
			_Utils_Tuple2('trianglelefteq', '⊴'),
			_Utils_Tuple2('triangleq', '≜'),
			_Utils_Tuple2('triangleright', '▹'),
			_Utils_Tuple2('trianglerighteq', '⊵'),
			_Utils_Tuple2('tridot', '◬'),
			_Utils_Tuple2('trie', '≜'),
			_Utils_Tuple2('triminus', '⨺'),
			_Utils_Tuple2('TripleDot', '⃛'),
			_Utils_Tuple2('triplus', '⨹'),
			_Utils_Tuple2('trisb', '⧍'),
			_Utils_Tuple2('tritime', '⨻'),
			_Utils_Tuple2('trpezium', '⏢'),
			_Utils_Tuple2('Tscr', '\uD835\uDCAF'),
			_Utils_Tuple2('tscr', '\uD835\uDCC9'),
			_Utils_Tuple2('TScy', 'Ц'),
			_Utils_Tuple2('tscy', 'ц'),
			_Utils_Tuple2('TSHcy', 'Ћ'),
			_Utils_Tuple2('tshcy', 'ћ'),
			_Utils_Tuple2('Tstrok', 'Ŧ'),
			_Utils_Tuple2('tstrok', 'ŧ'),
			_Utils_Tuple2('twixt', '≬'),
			_Utils_Tuple2('twoheadleftarrow', '↞'),
			_Utils_Tuple2('twoheadrightarrow', '↠'),
			_Utils_Tuple2('Uacute', 'Ú'),
			_Utils_Tuple2('uacute', 'ú'),
			_Utils_Tuple2('uarr', '↑'),
			_Utils_Tuple2('Uarr', '↟'),
			_Utils_Tuple2('uArr', '⇑'),
			_Utils_Tuple2('Uarrocir', '⥉'),
			_Utils_Tuple2('Ubrcy', 'Ў'),
			_Utils_Tuple2('ubrcy', 'ў'),
			_Utils_Tuple2('Ubreve', 'Ŭ'),
			_Utils_Tuple2('ubreve', 'ŭ'),
			_Utils_Tuple2('Ucirc', 'Û'),
			_Utils_Tuple2('ucirc', 'û'),
			_Utils_Tuple2('Ucy', 'У'),
			_Utils_Tuple2('ucy', 'у'),
			_Utils_Tuple2('udarr', '⇅'),
			_Utils_Tuple2('Udblac', 'Ű'),
			_Utils_Tuple2('udblac', 'ű'),
			_Utils_Tuple2('udhar', '⥮'),
			_Utils_Tuple2('ufisht', '⥾'),
			_Utils_Tuple2('Ufr', '\uD835\uDD18'),
			_Utils_Tuple2('ufr', '\uD835\uDD32'),
			_Utils_Tuple2('Ugrave', 'Ù'),
			_Utils_Tuple2('ugrave', 'ù'),
			_Utils_Tuple2('uHar', '⥣'),
			_Utils_Tuple2('uharl', '↿'),
			_Utils_Tuple2('uharr', '↾'),
			_Utils_Tuple2('uhblk', '▀'),
			_Utils_Tuple2('ulcorn', '⌜'),
			_Utils_Tuple2('ulcorner', '⌜'),
			_Utils_Tuple2('ulcrop', '⌏'),
			_Utils_Tuple2('ultri', '◸'),
			_Utils_Tuple2('Umacr', 'Ū'),
			_Utils_Tuple2('umacr', 'ū'),
			_Utils_Tuple2('uml', '¨'),
			_Utils_Tuple2('UnderBar', '_'),
			_Utils_Tuple2('UnderBrace', '⏟'),
			_Utils_Tuple2('UnderBracket', '⎵'),
			_Utils_Tuple2('UnderParenthesis', '⏝'),
			_Utils_Tuple2('Union', '⋃'),
			_Utils_Tuple2('UnionPlus', '⊎'),
			_Utils_Tuple2('Uogon', 'Ų'),
			_Utils_Tuple2('uogon', 'ų'),
			_Utils_Tuple2('Uopf', '\uD835\uDD4C'),
			_Utils_Tuple2('uopf', '\uD835\uDD66'),
			_Utils_Tuple2('UpArrowBar', '⤒'),
			_Utils_Tuple2('uparrow', '↑'),
			_Utils_Tuple2('UpArrow', '↑'),
			_Utils_Tuple2('Uparrow', '⇑'),
			_Utils_Tuple2('UpArrowDownArrow', '⇅'),
			_Utils_Tuple2('updownarrow', '↕'),
			_Utils_Tuple2('UpDownArrow', '↕'),
			_Utils_Tuple2('Updownarrow', '⇕'),
			_Utils_Tuple2('UpEquilibrium', '⥮'),
			_Utils_Tuple2('upharpoonleft', '↿'),
			_Utils_Tuple2('upharpoonright', '↾'),
			_Utils_Tuple2('uplus', '⊎'),
			_Utils_Tuple2('UpperLeftArrow', '↖'),
			_Utils_Tuple2('UpperRightArrow', '↗'),
			_Utils_Tuple2('upsi', 'υ'),
			_Utils_Tuple2('Upsi', 'ϒ'),
			_Utils_Tuple2('upsih', 'ϒ'),
			_Utils_Tuple2('Upsilon', 'Υ'),
			_Utils_Tuple2('upsilon', 'υ'),
			_Utils_Tuple2('UpTeeArrow', '↥'),
			_Utils_Tuple2('UpTee', '⊥'),
			_Utils_Tuple2('upuparrows', '⇈'),
			_Utils_Tuple2('urcorn', '⌝'),
			_Utils_Tuple2('urcorner', '⌝'),
			_Utils_Tuple2('urcrop', '⌎'),
			_Utils_Tuple2('Uring', 'Ů'),
			_Utils_Tuple2('uring', 'ů'),
			_Utils_Tuple2('urtri', '◹'),
			_Utils_Tuple2('Uscr', '\uD835\uDCB0'),
			_Utils_Tuple2('uscr', '\uD835\uDCCA'),
			_Utils_Tuple2('utdot', '⋰'),
			_Utils_Tuple2('Utilde', 'Ũ'),
			_Utils_Tuple2('utilde', 'ũ'),
			_Utils_Tuple2('utri', '▵'),
			_Utils_Tuple2('utrif', '▴'),
			_Utils_Tuple2('uuarr', '⇈'),
			_Utils_Tuple2('Uuml', 'Ü'),
			_Utils_Tuple2('uuml', 'ü'),
			_Utils_Tuple2('uwangle', '⦧'),
			_Utils_Tuple2('vangrt', '⦜'),
			_Utils_Tuple2('varepsilon', 'ϵ'),
			_Utils_Tuple2('varkappa', 'ϰ'),
			_Utils_Tuple2('varnothing', '∅'),
			_Utils_Tuple2('varphi', 'ϕ'),
			_Utils_Tuple2('varpi', 'ϖ'),
			_Utils_Tuple2('varpropto', '∝'),
			_Utils_Tuple2('varr', '↕'),
			_Utils_Tuple2('vArr', '⇕'),
			_Utils_Tuple2('varrho', 'ϱ'),
			_Utils_Tuple2('varsigma', 'ς'),
			_Utils_Tuple2('varsubsetneq', '⊊︀'),
			_Utils_Tuple2('varsubsetneqq', '⫋︀'),
			_Utils_Tuple2('varsupsetneq', '⊋︀'),
			_Utils_Tuple2('varsupsetneqq', '⫌︀'),
			_Utils_Tuple2('vartheta', 'ϑ'),
			_Utils_Tuple2('vartriangleleft', '⊲'),
			_Utils_Tuple2('vartriangleright', '⊳'),
			_Utils_Tuple2('vBar', '⫨'),
			_Utils_Tuple2('Vbar', '⫫'),
			_Utils_Tuple2('vBarv', '⫩'),
			_Utils_Tuple2('Vcy', 'В'),
			_Utils_Tuple2('vcy', 'в'),
			_Utils_Tuple2('vdash', '⊢'),
			_Utils_Tuple2('vDash', '⊨'),
			_Utils_Tuple2('Vdash', '⊩'),
			_Utils_Tuple2('VDash', '⊫'),
			_Utils_Tuple2('Vdashl', '⫦'),
			_Utils_Tuple2('veebar', '⊻'),
			_Utils_Tuple2('vee', '∨'),
			_Utils_Tuple2('Vee', '⋁'),
			_Utils_Tuple2('veeeq', '≚'),
			_Utils_Tuple2('vellip', '⋮'),
			_Utils_Tuple2('verbar', '|'),
			_Utils_Tuple2('Verbar', '‖'),
			_Utils_Tuple2('vert', '|'),
			_Utils_Tuple2('Vert', '‖'),
			_Utils_Tuple2('VerticalBar', '∣'),
			_Utils_Tuple2('VerticalLine', '|'),
			_Utils_Tuple2('VerticalSeparator', '❘'),
			_Utils_Tuple2('VerticalTilde', '≀'),
			_Utils_Tuple2('VeryThinSpace', '\u200A'),
			_Utils_Tuple2('Vfr', '\uD835\uDD19'),
			_Utils_Tuple2('vfr', '\uD835\uDD33'),
			_Utils_Tuple2('vltri', '⊲'),
			_Utils_Tuple2('vnsub', '⊂⃒'),
			_Utils_Tuple2('vnsup', '⊃⃒'),
			_Utils_Tuple2('Vopf', '\uD835\uDD4D'),
			_Utils_Tuple2('vopf', '\uD835\uDD67'),
			_Utils_Tuple2('vprop', '∝'),
			_Utils_Tuple2('vrtri', '⊳'),
			_Utils_Tuple2('Vscr', '\uD835\uDCB1'),
			_Utils_Tuple2('vscr', '\uD835\uDCCB'),
			_Utils_Tuple2('vsubnE', '⫋︀'),
			_Utils_Tuple2('vsubne', '⊊︀'),
			_Utils_Tuple2('vsupnE', '⫌︀'),
			_Utils_Tuple2('vsupne', '⊋︀'),
			_Utils_Tuple2('Vvdash', '⊪'),
			_Utils_Tuple2('vzigzag', '⦚'),
			_Utils_Tuple2('Wcirc', 'Ŵ'),
			_Utils_Tuple2('wcirc', 'ŵ'),
			_Utils_Tuple2('wedbar', '⩟'),
			_Utils_Tuple2('wedge', '∧'),
			_Utils_Tuple2('Wedge', '⋀'),
			_Utils_Tuple2('wedgeq', '≙'),
			_Utils_Tuple2('weierp', '℘'),
			_Utils_Tuple2('Wfr', '\uD835\uDD1A'),
			_Utils_Tuple2('wfr', '\uD835\uDD34'),
			_Utils_Tuple2('Wopf', '\uD835\uDD4E'),
			_Utils_Tuple2('wopf', '\uD835\uDD68'),
			_Utils_Tuple2('wp', '℘'),
			_Utils_Tuple2('wr', '≀'),
			_Utils_Tuple2('wreath', '≀'),
			_Utils_Tuple2('Wscr', '\uD835\uDCB2'),
			_Utils_Tuple2('wscr', '\uD835\uDCCC'),
			_Utils_Tuple2('xcap', '⋂'),
			_Utils_Tuple2('xcirc', '◯'),
			_Utils_Tuple2('xcup', '⋃'),
			_Utils_Tuple2('xdtri', '▽'),
			_Utils_Tuple2('Xfr', '\uD835\uDD1B'),
			_Utils_Tuple2('xfr', '\uD835\uDD35'),
			_Utils_Tuple2('xharr', '⟷'),
			_Utils_Tuple2('xhArr', '⟺'),
			_Utils_Tuple2('Xi', 'Ξ'),
			_Utils_Tuple2('xi', 'ξ'),
			_Utils_Tuple2('xlarr', '⟵'),
			_Utils_Tuple2('xlArr', '⟸'),
			_Utils_Tuple2('xmap', '⟼'),
			_Utils_Tuple2('xnis', '⋻'),
			_Utils_Tuple2('xodot', '⨀'),
			_Utils_Tuple2('Xopf', '\uD835\uDD4F'),
			_Utils_Tuple2('xopf', '\uD835\uDD69'),
			_Utils_Tuple2('xoplus', '⨁'),
			_Utils_Tuple2('xotime', '⨂'),
			_Utils_Tuple2('xrarr', '⟶'),
			_Utils_Tuple2('xrArr', '⟹'),
			_Utils_Tuple2('Xscr', '\uD835\uDCB3'),
			_Utils_Tuple2('xscr', '\uD835\uDCCD'),
			_Utils_Tuple2('xsqcup', '⨆'),
			_Utils_Tuple2('xuplus', '⨄'),
			_Utils_Tuple2('xutri', '△'),
			_Utils_Tuple2('xvee', '⋁'),
			_Utils_Tuple2('xwedge', '⋀'),
			_Utils_Tuple2('Yacute', 'Ý'),
			_Utils_Tuple2('yacute', 'ý'),
			_Utils_Tuple2('YAcy', 'Я'),
			_Utils_Tuple2('yacy', 'я'),
			_Utils_Tuple2('Ycirc', 'Ŷ'),
			_Utils_Tuple2('ycirc', 'ŷ'),
			_Utils_Tuple2('Ycy', 'Ы'),
			_Utils_Tuple2('ycy', 'ы'),
			_Utils_Tuple2('yen', '¥'),
			_Utils_Tuple2('Yfr', '\uD835\uDD1C'),
			_Utils_Tuple2('yfr', '\uD835\uDD36'),
			_Utils_Tuple2('YIcy', 'Ї'),
			_Utils_Tuple2('yicy', 'ї'),
			_Utils_Tuple2('Yopf', '\uD835\uDD50'),
			_Utils_Tuple2('yopf', '\uD835\uDD6A'),
			_Utils_Tuple2('Yscr', '\uD835\uDCB4'),
			_Utils_Tuple2('yscr', '\uD835\uDCCE'),
			_Utils_Tuple2('YUcy', 'Ю'),
			_Utils_Tuple2('yucy', 'ю'),
			_Utils_Tuple2('yuml', 'ÿ'),
			_Utils_Tuple2('Yuml', 'Ÿ'),
			_Utils_Tuple2('Zacute', 'Ź'),
			_Utils_Tuple2('zacute', 'ź'),
			_Utils_Tuple2('Zcaron', 'Ž'),
			_Utils_Tuple2('zcaron', 'ž'),
			_Utils_Tuple2('Zcy', 'З'),
			_Utils_Tuple2('zcy', 'з'),
			_Utils_Tuple2('Zdot', 'Ż'),
			_Utils_Tuple2('zdot', 'ż'),
			_Utils_Tuple2('zeetrf', 'ℨ'),
			_Utils_Tuple2('ZeroWidthSpace', '\u200B'),
			_Utils_Tuple2('Zeta', 'Ζ'),
			_Utils_Tuple2('zeta', 'ζ'),
			_Utils_Tuple2('zfr', '\uD835\uDD37'),
			_Utils_Tuple2('Zfr', 'ℨ'),
			_Utils_Tuple2('ZHcy', 'Ж'),
			_Utils_Tuple2('zhcy', 'ж'),
			_Utils_Tuple2('zigrarr', '⇝'),
			_Utils_Tuple2('zopf', '\uD835\uDD6B'),
			_Utils_Tuple2('Zopf', 'ℤ'),
			_Utils_Tuple2('Zscr', '\uD835\uDCB5'),
			_Utils_Tuple2('zscr', '\uD835\uDCCF'),
			_Utils_Tuple2('zwj', '\u200D'),
			_Utils_Tuple2('zwnj', '\u200C')
		]));
var $hecrj$html_parser$Html$Parser$namedCharacterReference = A2(
	$elm$parser$Parser$map,
	function (reference) {
		return A2(
			$elm$core$Maybe$withDefault,
			'&' + (reference + ';'),
			A2($elm$core$Dict$get, reference, $hecrj$html_parser$Html$Parser$NamedCharacterReferences$dict));
	},
	$elm$parser$Parser$getChompedString(
		$hecrj$html_parser$Html$Parser$chompOneOrMore($elm$core$Char$isAlpha)));
var $elm$core$Basics$pow = _Basics_pow;
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char.valueOf()) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $elm$core$Char$isHexDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return ((48 <= code) && (code <= 57)) || (((65 <= code) && (code <= 70)) || ((97 <= code) && (code <= 102)));
};
var $hecrj$html_parser$Html$Parser$hexadecimal = A2(
	$elm$parser$Parser$andThen,
	function (hex) {
		var _v0 = $rtfeldman$elm_hex$Hex$fromString(
			$elm$core$String$toLower(hex));
		if (_v0.$ === 'Ok') {
			var value = _v0.a;
			return $elm$parser$Parser$succeed(value);
		} else {
			var error = _v0.a;
			return $elm$parser$Parser$problem(error);
		}
	},
	$elm$parser$Parser$getChompedString(
		$hecrj$html_parser$Html$Parser$chompOneOrMore($elm$core$Char$isHexDigit)));
var $elm$parser$Parser$ExpectingInt = {$: 'ExpectingInt'};
var $elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				binary: $elm$core$Result$Err(invalid),
				expecting: expecting,
				_float: $elm$core$Result$Err(invalid),
				hex: $elm$core$Result$Err(invalid),
				_int: $elm$core$Result$Ok($elm$core$Basics$identity),
				invalid: invalid,
				octal: $elm$core$Result$Err(invalid)
			});
	});
var $elm$parser$Parser$int = A2($elm$parser$Parser$Advanced$int, $elm$parser$Parser$ExpectingInt, $elm$parser$Parser$ExpectingInt);
var $hecrj$html_parser$Html$Parser$numericCharacterReference = function () {
	var codepoint = $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$chompIf(
						function (c) {
							return _Utils_eq(
								c,
								_Utils_chr('x')) || _Utils_eq(
								c,
								_Utils_chr('X'));
						})),
				$hecrj$html_parser$Html$Parser$hexadecimal),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$chompWhile(
						$elm$core$Basics$eq(
							_Utils_chr('0')))),
				$elm$parser$Parser$int)
			]));
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$chompIf(
				$elm$core$Basics$eq(
					_Utils_chr('#')))),
		A2(
			$elm$parser$Parser$map,
			A2($elm$core$Basics$composeR, $elm$core$Char$fromCode, $elm$core$String$fromChar),
			codepoint));
}();
var $hecrj$html_parser$Html$Parser$characterReference = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$chompIf(
			$elm$core$Basics$eq(
				_Utils_chr('&')))),
	$elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$backtrackable($hecrj$html_parser$Html$Parser$namedCharacterReference),
				$hecrj$html_parser$Html$Parser$chompSemicolon),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$backtrackable($hecrj$html_parser$Html$Parser$numericCharacterReference),
				$hecrj$html_parser$Html$Parser$chompSemicolon),
				$elm$parser$Parser$succeed('&')
			])));
var $hecrj$html_parser$Html$Parser$tagAttributeQuotedValue = function (quote) {
	var isQuotedValueChar = function (c) {
		return (!_Utils_eq(c, quote)) && (!_Utils_eq(
			c,
			_Utils_chr('&')));
	};
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$chompIf(
				$elm$core$Basics$eq(quote))),
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$map,
				$elm$core$String$join(''),
				$hecrj$html_parser$Html$Parser$many(
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$getChompedString(
								$hecrj$html_parser$Html$Parser$chompOneOrMore(isQuotedValueChar)),
								$hecrj$html_parser$Html$Parser$characterReference
							])))),
			$elm$parser$Parser$chompIf(
				$elm$core$Basics$eq(quote))));
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $hecrj$html_parser$Html$Parser$oneOrMore = F2(
	function (type_, parser_) {
		return A2(
			$elm$parser$Parser$loop,
			_List_Nil,
			function (list) {
				return $elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$map,
							function (_new) {
								return $elm$parser$Parser$Loop(
									A2($elm$core$List$cons, _new, list));
							},
							parser_),
							$elm$core$List$isEmpty(list) ? $elm$parser$Parser$problem('expecting at least one ' + type_) : $elm$parser$Parser$succeed(
							$elm$parser$Parser$Done(
								$elm$core$List$reverse(list)))
						]));
			});
	});
var $hecrj$html_parser$Html$Parser$tagAttributeUnquotedValue = function () {
	var isUnquotedValueChar = function (c) {
		return (!$hecrj$html_parser$Html$Parser$isSpaceCharacter(c)) && ((!_Utils_eq(
			c,
			_Utils_chr('\"'))) && ((!_Utils_eq(
			c,
			_Utils_chr('\''))) && ((!_Utils_eq(
			c,
			_Utils_chr('='))) && ((!_Utils_eq(
			c,
			_Utils_chr('<'))) && ((!_Utils_eq(
			c,
			_Utils_chr('>'))) && ((!_Utils_eq(
			c,
			_Utils_chr('`'))) && (!_Utils_eq(
			c,
			_Utils_chr('&')))))))));
	};
	return A2(
		$elm$parser$Parser$map,
		$elm$core$String$join(''),
		A2(
			$hecrj$html_parser$Html$Parser$oneOrMore,
			'attribute value',
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$getChompedString(
						$hecrj$html_parser$Html$Parser$chompOneOrMore(isUnquotedValueChar)),
						$hecrj$html_parser$Html$Parser$characterReference
					]))));
}();
var $hecrj$html_parser$Html$Parser$tagAttributeValue = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$eq(
							_Utils_chr('=')))),
				$elm$parser$Parser$chompWhile($hecrj$html_parser$Html$Parser$isSpaceCharacter)),
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						$hecrj$html_parser$Html$Parser$tagAttributeUnquotedValue,
						$hecrj$html_parser$Html$Parser$tagAttributeQuotedValue(
						_Utils_chr('\"')),
						$hecrj$html_parser$Html$Parser$tagAttributeQuotedValue(
						_Utils_chr('\''))
					]))),
			$elm$parser$Parser$succeed('')
		]));
var $hecrj$html_parser$Html$Parser$tagAttribute = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		A2(
			$elm$parser$Parser$ignorer,
			$hecrj$html_parser$Html$Parser$tagAttributeName,
			$elm$parser$Parser$chompWhile($hecrj$html_parser$Html$Parser$isSpaceCharacter))),
	A2(
		$elm$parser$Parser$ignorer,
		$hecrj$html_parser$Html$Parser$tagAttributeValue,
		$elm$parser$Parser$chompWhile($hecrj$html_parser$Html$Parser$isSpaceCharacter)));
var $hecrj$html_parser$Html$Parser$tagAttributes = $hecrj$html_parser$Html$Parser$many($hecrj$html_parser$Html$Parser$tagAttribute);
var $hecrj$html_parser$Html$Parser$tagName = A2(
	$elm$parser$Parser$map,
	$elm$core$String$toLower,
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$chompIf($elm$core$Char$isAlphaNum),
			$elm$parser$Parser$chompWhile(
				function (c) {
					return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
						c,
						_Utils_chr('-'));
				}))));
var $hecrj$html_parser$Html$Parser$Text = function (a) {
	return {$: 'Text', a: a};
};
var $hecrj$html_parser$Html$Parser$text = A2(
	$elm$parser$Parser$map,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$String$join(''),
		$hecrj$html_parser$Html$Parser$Text),
	A2(
		$hecrj$html_parser$Html$Parser$oneOrMore,
		'text element',
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$getChompedString(
					$hecrj$html_parser$Html$Parser$chompOneOrMore(
						function (c) {
							return (!_Utils_eq(
								c,
								_Utils_chr('<'))) && (!_Utils_eq(
								c,
								_Utils_chr('&')));
						})),
					$hecrj$html_parser$Html$Parser$characterReference
				]))));
function $hecrj$html_parser$Html$Parser$cyclic$node() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$hecrj$html_parser$Html$Parser$text,
				$hecrj$html_parser$Html$Parser$comment,
				$hecrj$html_parser$Html$Parser$cyclic$element()
			]));
}
function $hecrj$html_parser$Html$Parser$cyclic$element() {
	return A2(
		$elm$parser$Parser$andThen,
		function (_v0) {
			var name = _v0.a;
			var attributes = _v0.b;
			return $hecrj$html_parser$Html$Parser$isVoidElement(name) ? A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						A3($hecrj$html_parser$Html$Parser$Element, name, attributes, _List_Nil)),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$chompIf(
								$elm$core$Basics$eq(
									_Utils_chr('/'))),
								$elm$parser$Parser$succeed(_Utils_Tuple0)
							]))),
				$elm$parser$Parser$chompIf(
					$elm$core$Basics$eq(
						_Utils_chr('>')))) : A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						A2($hecrj$html_parser$Html$Parser$Element, name, attributes)),
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$eq(
							_Utils_chr('>')))),
				A2(
					$elm$parser$Parser$ignorer,
					$hecrj$html_parser$Html$Parser$many(
						$elm$parser$Parser$backtrackable(
							$hecrj$html_parser$Html$Parser$cyclic$node())),
					$hecrj$html_parser$Html$Parser$closingTag(name)));
		},
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Tuple$pair),
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$eq(
							_Utils_chr('<')))),
				A2(
					$elm$parser$Parser$ignorer,
					$hecrj$html_parser$Html$Parser$tagName,
					$elm$parser$Parser$chompWhile($hecrj$html_parser$Html$Parser$isSpaceCharacter))),
			$hecrj$html_parser$Html$Parser$tagAttributes));
}
try {
	var $hecrj$html_parser$Html$Parser$node = $hecrj$html_parser$Html$Parser$cyclic$node();
	$hecrj$html_parser$Html$Parser$cyclic$node = function () {
		return $hecrj$html_parser$Html$Parser$node;
	};
	var $hecrj$html_parser$Html$Parser$element = $hecrj$html_parser$Html$Parser$cyclic$element();
	$hecrj$html_parser$Html$Parser$cyclic$element = function () {
		return $hecrj$html_parser$Html$Parser$element;
	};
} catch ($) {
	throw 'Some top-level definitions from `Html.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    node\n  │     ↓\n  │    element\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $brandly$elm_dot_lang$DoubleQuoteString$isUninteresting = function (_char) {
	return (!_Utils_eq(
		_char,
		_Utils_chr('\\'))) && (!_Utils_eq(
		_char,
		_Utils_chr('\"')));
};
var $brandly$elm_dot_lang$DoubleQuoteString$addHex = F2(
	function (_char, total) {
		var code = $elm$core$Char$toCode(_char);
		return ((48 <= code) && (code <= 57)) ? ((16 * total) + (code - 48)) : (((65 <= code) && (code <= 70)) ? ((16 * total) + ((10 + code) - 65)) : ((16 * total) + ((10 + code) - 97)));
	});
var $brandly$elm_dot_lang$DoubleQuoteString$codeToChar = function (str) {
	var length = $elm$core$String$length(str);
	var code = A3($elm$core$String$foldl, $brandly$elm_dot_lang$DoubleQuoteString$addHex, 0, str);
	return ((4 <= length) && (length <= 6)) ? $elm$parser$Parser$problem('code point must have between 4 and 6 digits') : (((0 <= code) && (code <= 1114111)) ? $elm$parser$Parser$succeed(
		$elm$core$Char$fromCode(code)) : $elm$parser$Parser$problem('code point must be between 0 and 0x10FFFF'));
};
var $brandly$elm_dot_lang$DoubleQuoteString$unicode = A2(
	$elm$parser$Parser$andThen,
	$brandly$elm_dot_lang$DoubleQuoteString$codeToChar,
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompWhile($elm$core$Char$isHexDigit)));
var $brandly$elm_dot_lang$DoubleQuoteString$stringHelp = function (revChunks) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						function (chunk) {
							return $elm$parser$Parser$Loop(
								A2($elm$core$List$cons, chunk, revChunks));
						}),
					$elm$parser$Parser$token('\\')),
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$map,
							function (_v0) {
								return '\n';
							},
							$elm$parser$Parser$token('n')),
							A2(
							$elm$parser$Parser$map,
							function (_v1) {
								return '\t';
							},
							$elm$parser$Parser$token('t')),
							A2(
							$elm$parser$Parser$map,
							function (_v2) {
								return '\u000D';
							},
							$elm$parser$Parser$token('r')),
							A2(
							$elm$parser$Parser$map,
							function (_v3) {
								return '\"';
							},
							$elm$parser$Parser$token('\"')),
							A2(
							$elm$parser$Parser$map,
							function (_v4) {
								return '\\';
							},
							$elm$parser$Parser$token('\\')),
							A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$succeed($elm$core$String$fromChar),
								$elm$parser$Parser$token('u{')),
							A2(
								$elm$parser$Parser$ignorer,
								$brandly$elm_dot_lang$DoubleQuoteString$unicode,
								$elm$parser$Parser$token('}')))
						]))),
				A2(
				$elm$parser$Parser$map,
				function (_v5) {
					return $elm$parser$Parser$Done(
						A2(
							$elm$core$String$join,
							'',
							$elm$core$List$reverse(revChunks)));
				},
				$elm$parser$Parser$token('\"')),
				A2(
				$elm$parser$Parser$map,
				function (chunk) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, chunk, revChunks));
				},
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$chompWhile($brandly$elm_dot_lang$DoubleQuoteString$isUninteresting)))
			]));
};
var $brandly$elm_dot_lang$DoubleQuoteString$string = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$token('\"')),
	A2($elm$parser$Parser$loop, _List_Nil, $brandly$elm_dot_lang$DoubleQuoteString$stringHelp));
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$parser$Parser$ExpectingVariable = {$: 'ExpectingVariable'};
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {col: col, context: context, indent: indent, offset: offset, row: row, src: src};
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$variable = function (i) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
			if (_Utils_eq(firstOffset, -1)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
			} else {
				var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
				var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
				return A2($elm$core$Set$member, name, i.reserved) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
			}
		});
};
var $elm$parser$Parser$variable = function (i) {
	return $elm$parser$Parser$Advanced$variable(
		{expecting: $elm$parser$Parser$ExpectingVariable, inner: i.inner, reserved: i.reserved, start: i.start});
};
var $brandly$elm_dot_lang$DotLang$unquotedVariable = $elm$parser$Parser$variable(
	{
		inner: function (c) {
			return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
				c,
				_Utils_chr('_'));
		},
		reserved: $elm$core$Set$fromList(_List_Nil),
		start: function (c) {
			return $elm$core$Char$isAlpha(c) || _Utils_eq(
				c,
				_Utils_chr('_'));
		}
	});
var $brandly$elm_dot_lang$DotLang$id = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			$brandly$elm_dot_lang$DotLang$ID,
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[$brandly$elm_dot_lang$DoubleQuoteString$string, $brandly$elm_dot_lang$DotLang$unquotedVariable]))),
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($brandly$elm_dot_lang$DotLang$HtmlID),
				$elm$parser$Parser$symbol('<')),
			A2(
				$elm$parser$Parser$ignorer,
				$hecrj$html_parser$Html$Parser$node,
				$elm$parser$Parser$symbol('>'))),
			A2(
			$elm$parser$Parser$map,
			$brandly$elm_dot_lang$DotLang$NumeralID,
			A2(
				$elm$parser$Parser$andThen,
				function (isNegative) {
					return A2(
						$elm$parser$Parser$keeper,
						$elm$parser$Parser$succeed(
							isNegative ? $elm$core$Basics$mul(-1) : $elm$core$Basics$identity),
						$elm$parser$Parser$float);
				},
				$brandly$elm_dot_lang$DotLang$negative))
		]));
var $brandly$elm_dot_lang$DotLang$maybeParse = function (parser) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2($elm$parser$Parser$map, $elm$core$Maybe$Just, parser),
				$elm$parser$Parser$succeed($elm$core$Maybe$Nothing)
			]));
};
var $elm$parser$Parser$NotNestable = {$: 'NotNestable'};
var $elm$parser$Parser$Advanced$chompUntilEndOr = function (str) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = A5(_Parser_findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v0.a;
			var newRow = _v0.b;
			var newCol = _v0.c;
			var adjustedOffset = (newOffset < 0) ? $elm$core$String$length(s.src) : newOffset;
			return A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, adjustedOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: adjustedOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$lineComment = function (start) {
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$token(start),
		$elm$parser$Parser$Advanced$chompUntilEndOr('\n'));
};
var $elm$parser$Parser$lineComment = function (str) {
	return $elm$parser$Parser$Advanced$lineComment(
		$elm$parser$Parser$toToken(str));
};
var $elm$parser$Parser$Advanced$isChar = function (_char) {
	return true;
};
var $elm$parser$Parser$Advanced$revAlways = F2(
	function (_v0, b) {
		return b;
	});
var $elm$parser$Parser$Advanced$skip = F2(
	function (iParser, kParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$parser$Parser$Advanced$revAlways, iParser, kParser);
	});
var $elm$parser$Parser$Advanced$nestableHelp = F5(
	function (isNotRelevant, open, close, expectingClose, nestLevel) {
		return A2(
			$elm$parser$Parser$Advanced$skip,
			$elm$parser$Parser$Advanced$chompWhile(isNotRelevant),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						(nestLevel === 1) ? close : A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v0) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel - 1);
						},
						close),
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v1) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel + 1);
						},
						open),
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v2) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel);
						},
						A2($elm$parser$Parser$Advanced$chompIf, $elm$parser$Parser$Advanced$isChar, expectingClose))
					])));
	});
var $elm$parser$Parser$Advanced$nestableComment = F2(
	function (open, close) {
		var oStr = open.a;
		var oX = open.b;
		var cStr = close.a;
		var cX = close.b;
		var _v0 = $elm$core$String$uncons(oStr);
		if (_v0.$ === 'Nothing') {
			return $elm$parser$Parser$Advanced$problem(oX);
		} else {
			var _v1 = _v0.a;
			var openChar = _v1.a;
			var _v2 = $elm$core$String$uncons(cStr);
			if (_v2.$ === 'Nothing') {
				return $elm$parser$Parser$Advanced$problem(cX);
			} else {
				var _v3 = _v2.a;
				var closeChar = _v3.a;
				var isNotRelevant = function (_char) {
					return (!_Utils_eq(_char, openChar)) && (!_Utils_eq(_char, closeChar));
				};
				var chompOpen = $elm$parser$Parser$Advanced$token(open);
				return A2(
					$elm$parser$Parser$Advanced$ignorer,
					chompOpen,
					A5(
						$elm$parser$Parser$Advanced$nestableHelp,
						isNotRelevant,
						chompOpen,
						$elm$parser$Parser$Advanced$token(close),
						cX,
						1));
			}
		}
	});
var $elm$parser$Parser$Advanced$multiComment = F3(
	function (open, close, nestable) {
		if (nestable.$ === 'NotNestable') {
			return A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$token(open),
				$elm$parser$Parser$Advanced$chompUntil(close));
		} else {
			return A2($elm$parser$Parser$Advanced$nestableComment, open, close);
		}
	});
var $elm$parser$Parser$Advanced$Nestable = {$: 'Nestable'};
var $elm$parser$Parser$Advanced$NotNestable = {$: 'NotNestable'};
var $elm$parser$Parser$toAdvancedNestable = function (nestable) {
	if (nestable.$ === 'NotNestable') {
		return $elm$parser$Parser$Advanced$NotNestable;
	} else {
		return $elm$parser$Parser$Advanced$Nestable;
	}
};
var $elm$parser$Parser$multiComment = F3(
	function (open, close, nestable) {
		return A3(
			$elm$parser$Parser$Advanced$multiComment,
			$elm$parser$Parser$toToken(open),
			$elm$parser$Parser$toToken(close),
			$elm$parser$Parser$toAdvancedNestable(nestable));
	});
var $brandly$elm_dot_lang$DotLang$comment = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$lineComment('//'),
			A3($elm$parser$Parser$multiComment, '/*', '*/', $elm$parser$Parser$NotNestable),
			$elm$parser$Parser$lineComment('#')
		]));
var $brandly$elm_dot_lang$DotLang$repeat = function (parser) {
	var help = function (revStmts) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						function (stmt) {
							return $elm$parser$Parser$Loop(
								A2($elm$core$List$cons, stmt, revStmts));
						}),
					parser),
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return $elm$parser$Parser$Done(
							$elm$core$List$reverse(revStmts));
					},
					$elm$parser$Parser$succeed(_Utils_Tuple0))
				]));
	};
	return A2($elm$parser$Parser$loop, _List_Nil, help);
};
var $brandly$elm_dot_lang$DotLang$spacing = function () {
	var isSpace = function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || (_Utils_eq(
			c,
			_Utils_chr('\n')) || (_Utils_eq(
			c,
			_Utils_chr('\u000D')) || _Utils_eq(
			c,
			_Utils_chr('\t'))));
	};
	return A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed(_Utils_Tuple0),
		$brandly$elm_dot_lang$DotLang$repeat(
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(_Utils_Tuple0),
							$elm$parser$Parser$chompIf(isSpace)),
						$elm$parser$Parser$chompWhile(isSpace)),
						$brandly$elm_dot_lang$DotLang$comment
					]))));
}();
var $brandly$elm_dot_lang$DotLang$Attr = F2(
	function (a, b) {
		return {$: 'Attr', a: a, b: b};
	});
var $brandly$elm_dot_lang$DotLang$EdgeNode = function (a) {
	return {$: 'EdgeNode', a: a};
};
var $brandly$elm_dot_lang$DotLang$EdgeStmtNode = F4(
	function (a, b, c, d) {
		return {$: 'EdgeStmtNode', a: a, b: b, c: c, d: d};
	});
var $brandly$elm_dot_lang$DotLang$EdgeStmtSubgraph = F4(
	function (a, b, c, d) {
		return {$: 'EdgeStmtSubgraph', a: a, b: b, c: c, d: d};
	});
var $brandly$elm_dot_lang$DotLang$EdgeSubgraph = function (a) {
	return {$: 'EdgeSubgraph', a: a};
};
var $brandly$elm_dot_lang$DotLang$LooseAttr = function (a) {
	return {$: 'LooseAttr', a: a};
};
var $brandly$elm_dot_lang$DotLang$NodeId = F2(
	function (a, b) {
		return {$: 'NodeId', a: a, b: b};
	});
var $brandly$elm_dot_lang$DotLang$NodeStmt = F2(
	function (a, b) {
		return {$: 'NodeStmt', a: a, b: b};
	});
var $brandly$elm_dot_lang$DotLang$Subgraph = F2(
	function (a, b) {
		return {$: 'Subgraph', a: a, b: b};
	});
var $brandly$elm_dot_lang$DotLang$SubgraphStmt = function (a) {
	return {$: 'SubgraphStmt', a: a};
};
var $brandly$elm_dot_lang$DotLang$attr = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($brandly$elm_dot_lang$DotLang$Attr),
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2($elm$parser$Parser$ignorer, $brandly$elm_dot_lang$DotLang$id, $brandly$elm_dot_lang$DotLang$spacing),
				$elm$parser$Parser$symbol('=')),
			$brandly$elm_dot_lang$DotLang$spacing)),
	$brandly$elm_dot_lang$DotLang$id);
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = thunk(_Utils_Tuple0);
			var parse = _v0.a;
			return parse(s);
		});
};
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $brandly$elm_dot_lang$DotLang$parseWithDefault = F2(
	function (parser, _default) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					parser,
					$elm$parser$Parser$succeed(_default)
				]));
	});
function $brandly$elm_dot_lang$DotLang$cyclic$attrList() {
	var help = function (revStmts) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						function (stmt) {
							return $elm$parser$Parser$Loop(
								A2($elm$core$List$cons, stmt, revStmts));
						}),
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							A2($elm$parser$Parser$ignorer, $brandly$elm_dot_lang$DotLang$attr, $brandly$elm_dot_lang$DotLang$spacing),
							$elm$parser$Parser$oneOf(
								_List_fromArray(
									[
										$elm$parser$Parser$symbol(';'),
										$elm$parser$Parser$symbol(','),
										$elm$parser$Parser$succeed(_Utils_Tuple0)
									]))),
						$brandly$elm_dot_lang$DotLang$spacing)),
					A2(
					$elm$parser$Parser$map,
					function (_v2) {
						return $elm$parser$Parser$Done(
							$elm$core$List$reverse(revStmts));
					},
					$elm$parser$Parser$succeed(_Utils_Tuple0))
				]));
	};
	return A2(
		$elm$parser$Parser$map,
		function (_v0) {
			var a = _v0.a;
			var b = _v0.b;
			return $elm$core$List$concat(
				_List_fromArray(
					[a, b]));
		},
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed($elm$core$Tuple$pair),
						$elm$parser$Parser$symbol('[')),
					$brandly$elm_dot_lang$DotLang$spacing),
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						A2($elm$parser$Parser$loop, _List_Nil, help),
						$brandly$elm_dot_lang$DotLang$spacing),
					$elm$parser$Parser$symbol(']'))),
			$elm$parser$Parser$lazy(
				function (_v1) {
					return A2(
						$brandly$elm_dot_lang$DotLang$parseWithDefault,
						$brandly$elm_dot_lang$DotLang$cyclic$attrList(),
						_List_Nil);
				})));
}
try {
	var $brandly$elm_dot_lang$DotLang$attrList = $brandly$elm_dot_lang$DotLang$cyclic$attrList();
	$brandly$elm_dot_lang$DotLang$cyclic$attrList = function () {
		return $brandly$elm_dot_lang$DotLang$attrList;
	};
} catch ($) {
	throw 'Some top-level definitions from `DotLang` are causing infinite recursion:\n\n  ┌─────┐\n  │    attrList\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $brandly$elm_dot_lang$DotLang$AttrStmt = F2(
	function (a, b) {
		return {$: 'AttrStmt', a: a, b: b};
	});
var $brandly$elm_dot_lang$DotLang$AttrEdge = {$: 'AttrEdge'};
var $brandly$elm_dot_lang$DotLang$AttrGraph = {$: 'AttrGraph'};
var $brandly$elm_dot_lang$DotLang$AttrNode = {$: 'AttrNode'};
var $brandly$elm_dot_lang$DotLang$attrStmtType = $brandly$elm_dot_lang$DotLang$symbolToType(
	_List_fromArray(
		[
			_Utils_Tuple2('graph', $brandly$elm_dot_lang$DotLang$AttrGraph),
			_Utils_Tuple2('node', $brandly$elm_dot_lang$DotLang$AttrNode),
			_Utils_Tuple2('edge', $brandly$elm_dot_lang$DotLang$AttrEdge)
		]));
var $brandly$elm_dot_lang$DotLang$attrStmt = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($brandly$elm_dot_lang$DotLang$AttrStmt),
		A2($elm$parser$Parser$ignorer, $brandly$elm_dot_lang$DotLang$attrStmtType, $brandly$elm_dot_lang$DotLang$spacing)),
	$brandly$elm_dot_lang$DotLang$attrList);
var $brandly$elm_dot_lang$DotLang$edgeOp = $brandly$elm_dot_lang$DotLang$symbolToType(
	_List_fromArray(
		[
			_Utils_Tuple2('--', $brandly$elm_dot_lang$DotLang$Graph),
			_Utils_Tuple2('->', $brandly$elm_dot_lang$DotLang$Digraph)
		]));
var $brandly$elm_dot_lang$DotLang$PortId = F2(
	function (a, b) {
		return {$: 'PortId', a: a, b: b};
	});
var $brandly$elm_dot_lang$DotLang$PortPt = function (a) {
	return {$: 'PortPt', a: a};
};
var $brandly$elm_dot_lang$DotLang$UND = {$: 'UND'};
var $brandly$elm_dot_lang$DotLang$C = {$: 'C'};
var $brandly$elm_dot_lang$DotLang$E = {$: 'E'};
var $brandly$elm_dot_lang$DotLang$N = {$: 'N'};
var $brandly$elm_dot_lang$DotLang$NE = {$: 'NE'};
var $brandly$elm_dot_lang$DotLang$NW = {$: 'NW'};
var $brandly$elm_dot_lang$DotLang$S = {$: 'S'};
var $brandly$elm_dot_lang$DotLang$SE = {$: 'SE'};
var $brandly$elm_dot_lang$DotLang$SW = {$: 'SW'};
var $brandly$elm_dot_lang$DotLang$W = {$: 'W'};
var $brandly$elm_dot_lang$DotLang$compassPtMapping = _List_fromArray(
	[
		_Utils_Tuple2('ne', $brandly$elm_dot_lang$DotLang$NE),
		_Utils_Tuple2('nw', $brandly$elm_dot_lang$DotLang$NW),
		_Utils_Tuple2('se', $brandly$elm_dot_lang$DotLang$SE),
		_Utils_Tuple2('sw', $brandly$elm_dot_lang$DotLang$SW),
		_Utils_Tuple2('n', $brandly$elm_dot_lang$DotLang$N),
		_Utils_Tuple2('e', $brandly$elm_dot_lang$DotLang$E),
		_Utils_Tuple2('s', $brandly$elm_dot_lang$DotLang$S),
		_Utils_Tuple2('w', $brandly$elm_dot_lang$DotLang$W),
		_Utils_Tuple2('c', $brandly$elm_dot_lang$DotLang$C),
		_Utils_Tuple2('_', $brandly$elm_dot_lang$DotLang$UND)
	]);
var $brandly$elm_dot_lang$DotLang$compassPts = $elm$core$Set$fromList(
	A2($elm$core$List$map, $elm$core$Tuple$first, $brandly$elm_dot_lang$DotLang$compassPtMapping));
var $brandly$elm_dot_lang$DotLang$isCompassPt = function (str) {
	return A2(
		$elm$core$Set$member,
		$elm$core$String$toLower(str),
		$brandly$elm_dot_lang$DotLang$compassPts);
};
var $brandly$elm_dot_lang$DotLang$compassPt = $brandly$elm_dot_lang$DotLang$symbolToType($brandly$elm_dot_lang$DotLang$compassPtMapping);
var $brandly$elm_dot_lang$DotLang$portIdSuffix = $brandly$elm_dot_lang$DotLang$maybeParse(
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$symbol(':')),
			$brandly$elm_dot_lang$DotLang$spacing),
		$brandly$elm_dot_lang$DotLang$compassPt));
var $brandly$elm_dot_lang$DotLang$port_ = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$symbol(':')),
		$brandly$elm_dot_lang$DotLang$spacing),
	$elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (_var) {
					return $brandly$elm_dot_lang$DotLang$isCompassPt(_var) ? $elm$parser$Parser$succeed(
						$brandly$elm_dot_lang$DotLang$PortPt(
							A2(
								$elm$core$Maybe$withDefault,
								$brandly$elm_dot_lang$DotLang$UND,
								$elm$core$List$head(
									A2(
										$elm$core$List$filterMap,
										function (_v0) {
											var v = _v0.a;
											var compass = _v0.b;
											return _Utils_eq(v, _var) ? $elm$core$Maybe$Just(compass) : $elm$core$Maybe$Nothing;
										},
										$brandly$elm_dot_lang$DotLang$compassPtMapping))))) : A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(
								$brandly$elm_dot_lang$DotLang$PortId(
									$brandly$elm_dot_lang$DotLang$ID(_var))),
							$brandly$elm_dot_lang$DotLang$spacing),
						$brandly$elm_dot_lang$DotLang$portIdSuffix);
				},
				$brandly$elm_dot_lang$DotLang$unquotedVariable),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($brandly$elm_dot_lang$DotLang$PortId),
					A2($elm$parser$Parser$ignorer, $brandly$elm_dot_lang$DotLang$id, $brandly$elm_dot_lang$DotLang$spacing)),
				$brandly$elm_dot_lang$DotLang$portIdSuffix)
			])));
var $brandly$elm_dot_lang$DotLang$nodeId = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($brandly$elm_dot_lang$DotLang$NodeId),
		A2($elm$parser$Parser$ignorer, $brandly$elm_dot_lang$DotLang$id, $brandly$elm_dot_lang$DotLang$spacing)),
	$brandly$elm_dot_lang$DotLang$maybeParse($brandly$elm_dot_lang$DotLang$port_));
var $brandly$elm_dot_lang$DotLang$showEdgeType = function (type_) {
	if (type_.$ === 'Graph') {
		return 'graph';
	} else {
		return 'digraph';
	}
};
var $brandly$elm_dot_lang$DotLang$edgeRHS = function (type_) {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				A2(
					$elm$parser$Parser$andThen,
					function (op) {
						return _Utils_eq(op, type_) ? $elm$parser$Parser$succeed(op) : $elm$parser$Parser$problem(
							A2(
								$elm$core$String$join,
								'',
								_List_fromArray(
									[
										'Expected a ',
										$brandly$elm_dot_lang$DotLang$showEdgeType(type_),
										', but this edge is for a ',
										$brandly$elm_dot_lang$DotLang$showEdgeType(op),
										'.'
									])));
					},
					$brandly$elm_dot_lang$DotLang$edgeOp)),
			$brandly$elm_dot_lang$DotLang$spacing),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($brandly$elm_dot_lang$DotLang$EdgeSubgraph),
					$brandly$elm_dot_lang$DotLang$subgraph(type_)),
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($brandly$elm_dot_lang$DotLang$EdgeNode),
					$brandly$elm_dot_lang$DotLang$nodeId)
				])));
};
var $brandly$elm_dot_lang$DotLang$repeatingRhs = function (type_) {
	var help = function (revStmts) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						function (stmt) {
							return $elm$parser$Parser$Loop(
								A2($elm$core$List$cons, stmt, revStmts));
						}),
					A2(
						$elm$parser$Parser$ignorer,
						$brandly$elm_dot_lang$DotLang$edgeRHS(type_),
						$brandly$elm_dot_lang$DotLang$spacing)),
					A2(
					$elm$parser$Parser$map,
					function (_v2) {
						return $elm$parser$Parser$Done(
							$elm$core$List$reverse(revStmts));
					},
					$elm$parser$Parser$succeed(_Utils_Tuple0))
				]));
	};
	return A2($elm$parser$Parser$loop, _List_Nil, help);
};
var $brandly$elm_dot_lang$DotLang$statement = function (type_) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$brandly$elm_dot_lang$DotLang$attrStmt,
				A2(
				$elm$parser$Parser$andThen,
				function (sg) {
					return $elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$keeper,
								A2(
									$elm$parser$Parser$keeper,
									A2(
										$elm$parser$Parser$keeper,
										$elm$parser$Parser$succeed(
											$brandly$elm_dot_lang$DotLang$EdgeStmtSubgraph(sg)),
										A2(
											$elm$parser$Parser$ignorer,
											$brandly$elm_dot_lang$DotLang$edgeRHS(type_),
											$brandly$elm_dot_lang$DotLang$spacing)),
									A2(
										$elm$parser$Parser$ignorer,
										$brandly$elm_dot_lang$DotLang$repeatingRhs(type_),
										$brandly$elm_dot_lang$DotLang$spacing)),
								A2($brandly$elm_dot_lang$DotLang$parseWithDefault, $brandly$elm_dot_lang$DotLang$attrList, _List_Nil)),
								$elm$parser$Parser$succeed(
								$brandly$elm_dot_lang$DotLang$SubgraphStmt(sg))
							]));
				},
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					A2(
						$elm$parser$Parser$ignorer,
						$brandly$elm_dot_lang$DotLang$subgraph(type_),
						$brandly$elm_dot_lang$DotLang$spacing))),
				A2(
				$elm$parser$Parser$andThen,
				function (_v1) {
					var id_ = _v1.a;
					var maybePort = _v1.b;
					var node = A2(
						$elm$parser$Parser$keeper,
						$elm$parser$Parser$succeed(
							$brandly$elm_dot_lang$DotLang$NodeStmt(
								A2($brandly$elm_dot_lang$DotLang$NodeId, id_, maybePort))),
						A2($brandly$elm_dot_lang$DotLang$parseWithDefault, $brandly$elm_dot_lang$DotLang$attrList, _List_Nil));
					var loose = A2(
						$elm$parser$Parser$map,
						$brandly$elm_dot_lang$DotLang$LooseAttr,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$ignorer,
								A2(
									$elm$parser$Parser$ignorer,
									$elm$parser$Parser$succeed(
										$brandly$elm_dot_lang$DotLang$Attr(id_)),
									$elm$parser$Parser$symbol('=')),
								$brandly$elm_dot_lang$DotLang$spacing),
							$brandly$elm_dot_lang$DotLang$id));
					var edge = A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$keeper,
								$elm$parser$Parser$succeed(
									$brandly$elm_dot_lang$DotLang$EdgeStmtNode(
										A2($brandly$elm_dot_lang$DotLang$NodeId, id_, maybePort))),
								A2(
									$elm$parser$Parser$ignorer,
									$brandly$elm_dot_lang$DotLang$edgeRHS(type_),
									$brandly$elm_dot_lang$DotLang$spacing)),
							A2(
								$elm$parser$Parser$ignorer,
								$brandly$elm_dot_lang$DotLang$repeatingRhs(type_),
								$brandly$elm_dot_lang$DotLang$spacing)),
						A2($brandly$elm_dot_lang$DotLang$parseWithDefault, $brandly$elm_dot_lang$DotLang$attrList, _List_Nil));
					return _Utils_eq(maybePort, $elm$core$Maybe$Nothing) ? $elm$parser$Parser$oneOf(
						_List_fromArray(
							[loose, edge, node])) : $elm$parser$Parser$oneOf(
						_List_fromArray(
							[edge, node]));
				},
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						$elm$parser$Parser$succeed($elm$core$Tuple$pair),
						A2($elm$parser$Parser$ignorer, $brandly$elm_dot_lang$DotLang$id, $brandly$elm_dot_lang$DotLang$spacing)),
					A2(
						$elm$parser$Parser$ignorer,
						$brandly$elm_dot_lang$DotLang$maybeParse($brandly$elm_dot_lang$DotLang$port_),
						$brandly$elm_dot_lang$DotLang$spacing)))
			]));
};
var $brandly$elm_dot_lang$DotLang$stmtList = function (type_) {
	var help = function (revStmts) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						function (stmt) {
							return $elm$parser$Parser$Loop(
								A2($elm$core$List$cons, stmt, revStmts));
						}),
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							A2(
								$elm$parser$Parser$ignorer,
								$brandly$elm_dot_lang$DotLang$statement(type_),
								$brandly$elm_dot_lang$DotLang$spacing),
							$elm$parser$Parser$oneOf(
								_List_fromArray(
									[
										$elm$parser$Parser$symbol(';'),
										$elm$parser$Parser$succeed(_Utils_Tuple0)
									]))),
						$brandly$elm_dot_lang$DotLang$spacing)),
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return $elm$parser$Parser$Done(
							$elm$core$List$reverse(revStmts));
					},
					$elm$parser$Parser$succeed(_Utils_Tuple0))
				]));
	};
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$symbol('{')),
			$brandly$elm_dot_lang$DotLang$spacing),
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2($elm$parser$Parser$loop, _List_Nil, help),
				$brandly$elm_dot_lang$DotLang$spacing),
			$elm$parser$Parser$symbol('}')));
};
var $brandly$elm_dot_lang$DotLang$subgraph = function (type_) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed($brandly$elm_dot_lang$DotLang$Subgraph),
							$elm$parser$Parser$symbol('subgraph')),
						$brandly$elm_dot_lang$DotLang$spacing),
					A2(
						$elm$parser$Parser$ignorer,
						$brandly$elm_dot_lang$DotLang$maybeParse($brandly$elm_dot_lang$DotLang$id),
						$brandly$elm_dot_lang$DotLang$spacing)),
				$brandly$elm_dot_lang$DotLang$stmtList(type_)),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						$brandly$elm_dot_lang$DotLang$Subgraph($elm$core$Maybe$Nothing)),
					$brandly$elm_dot_lang$DotLang$spacing),
				$brandly$elm_dot_lang$DotLang$stmtList(type_))
			]));
};
var $brandly$elm_dot_lang$DotLang$dot = A2(
	$elm$parser$Parser$andThen,
	function (type_) {
		return A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						$brandly$elm_dot_lang$DotLang$Dot(type_)),
					$brandly$elm_dot_lang$DotLang$spacing),
				A2(
					$elm$parser$Parser$ignorer,
					$brandly$elm_dot_lang$DotLang$maybeParse($brandly$elm_dot_lang$DotLang$id),
					$brandly$elm_dot_lang$DotLang$spacing)),
			$brandly$elm_dot_lang$DotLang$stmtList(type_));
	},
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$brandly$elm_dot_lang$DotLang$spacing),
				$brandly$elm_dot_lang$DotLang$maybeParse(
					$elm$parser$Parser$symbol('strict'))),
			$brandly$elm_dot_lang$DotLang$spacing),
		$brandly$elm_dot_lang$DotLang$edgeType));
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (_v0.$ === 'Ok') {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $brandly$elm_dot_lang$DotLang$fromString = $elm$parser$Parser$run($brandly$elm_dot_lang$DotLang$dot);
var $author$project$DotUtil$getLabelID = function (attrs) {
	getLabelID:
	while (true) {
		if (!attrs.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var y = attrs.a;
			var ys = attrs.b;
			if ((y.a.$ === 'ID') && (y.a.a === 'label')) {
				var match = y.b;
				return $elm$core$Maybe$Just(match);
			} else {
				var $temp$attrs = ys;
				attrs = $temp$attrs;
				continue getLabelID;
			}
		}
	}
};
var $author$project$DotUtil$getLabelsHelper = F2(
	function (rs, stmts) {
		getLabelsHelper:
		while (true) {
			if (!stmts.b) {
				return rs;
			} else {
				var x = stmts.a;
				var xs = stmts.b;
				if (x.$ === 'NodeStmt') {
					var _v2 = x.a;
					var id = _v2.a;
					var y = x.b;
					var _v3 = $author$project$DotUtil$getLabelID(y);
					if (_v3.$ === 'Nothing') {
						var $temp$rs = rs,
							$temp$stmts = xs;
						rs = $temp$rs;
						stmts = $temp$stmts;
						continue getLabelsHelper;
					} else {
						var m = _v3.a;
						var $temp$rs = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(id, m),
							rs),
							$temp$stmts = xs;
						rs = $temp$rs;
						stmts = $temp$stmts;
						continue getLabelsHelper;
					}
				} else {
					var $temp$rs = rs,
						$temp$stmts = xs;
					rs = $temp$rs;
					stmts = $temp$stmts;
					continue getLabelsHelper;
				}
			}
		}
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $hecrj$html_parser$Html$Parser$commentToString = function (comment_) {
	return '<!--' + (comment_ + '-->');
};
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $hecrj$html_parser$Html$Parser$elementToString = F3(
	function (name, attributes, children) {
		var attributeToString = function (_v2) {
			var attr = _v2.a;
			var value = _v2.b;
			return attr + ('=\"' + (value + '\"'));
		};
		var maybeAttributes = function () {
			if (!attributes.b) {
				return '';
			} else {
				return ' ' + A2(
					$elm$core$String$join,
					' ',
					A2($elm$core$List$map, attributeToString, attributes));
			}
		}();
		return $hecrj$html_parser$Html$Parser$isVoidElement(name) ? $elm$core$String$concat(
			_List_fromArray(
				['<', name, maybeAttributes, '>'])) : $elm$core$String$concat(
			_List_fromArray(
				[
					'<',
					name,
					maybeAttributes,
					'>',
					A2(
					$elm$core$String$join,
					'',
					A2($elm$core$List$map, $hecrj$html_parser$Html$Parser$nodeToString, children)),
					'</',
					name,
					'>'
				]));
	});
var $hecrj$html_parser$Html$Parser$nodeToString = function (node_) {
	switch (node_.$) {
		case 'Text':
			var text_ = node_.a;
			return text_;
		case 'Element':
			var name = node_.a;
			var attributes = node_.b;
			var children = node_.c;
			return A3($hecrj$html_parser$Html$Parser$elementToString, name, attributes, children);
		default:
			var comment_ = node_.a;
			return $hecrj$html_parser$Html$Parser$commentToString(comment_);
	}
};
var $author$project$DotUtil$showId = function (dotID) {
	switch (dotID.$) {
		case 'ID':
			var str = dotID.a;
			return str;
		case 'HtmlID':
			var node = dotID.a;
			return $hecrj$html_parser$Html$Parser$nodeToString(node);
		default:
			var numid = dotID.a;
			return $elm$core$String$fromFloat(numid);
	}
};
var $author$project$DotUtil$idTupleToStrings = function (input) {
	if (!input.b) {
		return _List_Nil;
	} else {
		var _v1 = input.a;
		var idA = _v1.a;
		var idB = _v1.b;
		var rest = input.b;
		return A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				$author$project$DotUtil$showId(idA),
				$author$project$DotUtil$showId(idB)),
			$author$project$DotUtil$idTupleToStrings(rest));
	}
};
var $author$project$DotUtil$getLabels = function (str) {
	var _v0 = $brandly$elm_dot_lang$DotLang$fromString(str);
	if ((_v0.$ === 'Ok') && (_v0.a.a.$ === 'Digraph')) {
		var _v1 = _v0.a;
		var _v2 = _v1.a;
		var x = _v1.c;
		return $author$project$DotUtil$idTupleToStrings(
			A2($author$project$DotUtil$getLabelsHelper, _List_Nil, x));
	} else {
		return _List_Nil;
	}
};
var $author$project$DotUtil$isRef = function (attrs) {
	isRef:
	while (true) {
		if (!attrs.b) {
			return false;
		} else {
			var y = attrs.a;
			var ys = attrs.b;
			if ((((y.a.$ === 'ID') && (y.a.a === 'shape')) && (y.b.$ === 'ID')) && (y.b.a === 'ellipse')) {
				return true;
			} else {
				var $temp$attrs = ys;
				attrs = $temp$attrs;
				continue isRef;
			}
		}
	}
};
var $author$project$DotUtil$listRefs = F2(
	function (rs, stmts) {
		listRefs:
		while (true) {
			if (!stmts.b) {
				return rs;
			} else {
				var x = stmts.a;
				var xs = stmts.b;
				if (x.$ === 'NodeStmt') {
					var _v2 = x.a;
					var y = x.b;
					if ($author$project$DotUtil$isRef(y)) {
						var _v3 = $author$project$DotUtil$getLabelID(y);
						if (_v3.$ === 'Nothing') {
							var $temp$rs = rs,
								$temp$stmts = xs;
							rs = $temp$rs;
							stmts = $temp$stmts;
							continue listRefs;
						} else {
							var m = _v3.a;
							var $temp$rs = A2($elm$core$List$cons, m, rs),
								$temp$stmts = xs;
							rs = $temp$rs;
							stmts = $temp$stmts;
							continue listRefs;
						}
					} else {
						var $temp$rs = rs,
							$temp$stmts = xs;
						rs = $temp$rs;
						stmts = $temp$stmts;
						continue listRefs;
					}
				} else {
					var $temp$rs = rs,
						$temp$stmts = xs;
					rs = $temp$rs;
					stmts = $temp$stmts;
					continue listRefs;
				}
			}
		}
	});
var $author$project$DotUtil$findRefNodes = function (str) {
	var _v0 = $brandly$elm_dot_lang$DotLang$fromString(str);
	if ((_v0.$ === 'Ok') && (_v0.a.a.$ === 'Digraph')) {
		var _v1 = _v0.a;
		var _v2 = _v1.a;
		var x = _v1.c;
		return A2($author$project$DotUtil$listRefs, _List_Nil, x);
	} else {
		return _List_Nil;
	}
};
var $author$project$DotUtil$getRefList = function (str) {
	return A2(
		$elm$core$List$map,
		$author$project$DotUtil$showId,
		$author$project$DotUtil$findRefNodes(str));
};
var $author$project$Main$GotSvg = function (a) {
	return {$: 'GotSvg', a: a};
};
var $elm$http$Http$expectString = function (toMsg) {
	return A2(
		$elm$http$Http$expectStringResponse,
		toMsg,
		$elm$http$Http$resolve($elm$core$Result$Ok));
};
var $author$project$Main$krokiURL = 'https://kroki.io/graphviz/svg';
var $author$project$Main$getSvg = function (model) {
	return $elm$http$Http$post(
		{
			body: $elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'diagram_source',
							$elm$json$Json$Encode$string(
								function ($) {
									return $.shortDotString;
								}(model))),
							_Utils_Tuple2(
							'layout',
							$elm$json$Json$Encode$string('dot'))
						]))),
			expect: $elm$http$Http$expectString($author$project$Main$GotSvg),
			url: $author$project$Main$krokiURL
		});
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$CardState = F2(
	function (visibility, height) {
		return {height: height, visibility: visibility};
	});
var $rundis$elm_bootstrap$Bootstrap$Accordion$initialStateCardOpen = function (id) {
	return $rundis$elm_bootstrap$Bootstrap$Accordion$State(
		$elm$core$Dict$fromList(
			_List_fromArray(
				[
					_Utils_Tuple2(
					id,
					A2($rundis$elm_bootstrap$Bootstrap$Accordion$CardState, $rundis$elm_bootstrap$Bootstrap$Accordion$Shown, $elm$core$Maybe$Nothing))
				])));
};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$listKeys = $billstclair$elm_localstorage$PortFunnel$InternalTypes$ListKeys($elm$core$Maybe$Nothing);
var $billstclair$elm_port_funnel$PortFunnel$FunnelSpec = F4(
	function (accessors, moduleDesc, commander, handler) {
		return {accessors: accessors, commander: commander, handler: handler, moduleDesc: moduleDesc};
	});
var $author$project$PortFunnels$LocalStorageFunnel = function (a) {
	return {$: 'LocalStorageFunnel', a: a};
};
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$commander = F2(
	function (_v0, _v1) {
		return $elm$core$Platform$Cmd$none;
	});
var $billstclair$elm_port_funnel$PortFunnel$StateAccessors = F2(
	function (get, set) {
		return {get: get, set: set};
	});
var $author$project$PortFunnels$localStorageAccessors = A2(
	$billstclair$elm_port_funnel$PortFunnel$StateAccessors,
	function ($) {
		return $.storage;
	},
	F2(
		function (substate, state) {
			return _Utils_update(
				state,
				{storage: substate});
		}));
var $author$project$PortFunnels$handlerToFunnel = function (handler) {
	var localStorageHandler = handler.a;
	return _Utils_Tuple2(
		$billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName,
		$author$project$PortFunnels$LocalStorageFunnel(
			A4($billstclair$elm_port_funnel$PortFunnel$FunnelSpec, $author$project$PortFunnels$localStorageAccessors, $billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleDesc, $billstclair$elm_localstorage$PortFunnel$LocalStorage$commander, localStorageHandler)));
};
var $author$project$PortFunnels$makeFunnelDict = F2(
	function (handlers, portGetter) {
		return _Utils_Tuple2(
			$elm$core$Dict$fromList(
				A2($elm$core$List$map, $author$project$PortFunnels$handlerToFunnel, handlers)),
			portGetter);
	});
var $billstclair$elm_port_funnel$PortFunnel$process = F4(
	function (accessors, _v0, genericMessage, state) {
		var moduleDesc = _v0.a;
		var _v1 = moduleDesc.decoder(genericMessage);
		if (_v1.$ === 'Err') {
			var err = _v1.a;
			return $elm$core$Result$Err(err);
		} else {
			var message = _v1.a;
			var substate = accessors.get(state);
			var _v2 = A2(moduleDesc.process, message, substate);
			var substate2 = _v2.a;
			var response = _v2.b;
			return $elm$core$Result$Ok(
				_Utils_Tuple2(
					A2(accessors.set, substate2, state),
					response));
		}
	});
var $Janiczek$cmd_extra$Cmd$Extra$withCmds = F2(
	function (cmds, model) {
		return _Utils_Tuple2(
			model,
			$elm$core$Platform$Cmd$batch(cmds));
	});
var $billstclair$elm_port_funnel$PortFunnel$appProcess = F5(
	function (cmdPort, genericMessage, funnel, state, model) {
		var _v0 = A4($billstclair$elm_port_funnel$PortFunnel$process, funnel.accessors, funnel.moduleDesc, genericMessage, state);
		if (_v0.$ === 'Err') {
			var error = _v0.a;
			return $elm$core$Result$Err(error);
		} else {
			var _v1 = _v0.a;
			var state2 = _v1.a;
			var response = _v1.b;
			var gmToCmdPort = function (gm) {
				return cmdPort(
					$billstclair$elm_port_funnel$PortFunnel$encodeGenericMessage(gm));
			};
			var cmd = A2(funnel.commander, gmToCmdPort, response);
			var _v2 = A3(funnel.handler, response, state2, model);
			var model2 = _v2.a;
			var cmd2 = _v2.b;
			return $elm$core$Result$Ok(
				A2(
					$Janiczek$cmd_extra$Cmd$Extra$withCmds,
					_List_fromArray(
						[cmd, cmd2]),
					model2));
		}
	});
var $author$project$PortFunnels$appTrampoline = F5(
	function (portGetter, genericMessage, funnel, state, model) {
		var appFunnel = funnel.a;
		return A5(
			$billstclair$elm_port_funnel$PortFunnel$appProcess,
			A2(portGetter, $billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName, model),
			genericMessage,
			appFunnel,
			state,
			model);
	});
var $billstclair$elm_port_funnel$PortFunnel$processValue = F5(
	function (funnels, appTrampoline, value, state, model) {
		var _v0 = $billstclair$elm_port_funnel$PortFunnel$decodeGenericMessage(value);
		if (_v0.$ === 'Err') {
			var error = _v0.a;
			return $elm$core$Result$Err(error);
		} else {
			var genericMessage = _v0.a;
			var moduleName = genericMessage.moduleName;
			var _v1 = A2($elm$core$Dict$get, moduleName, funnels);
			if (_v1.$ === 'Just') {
				var funnel = _v1.a;
				var _v2 = A4(appTrampoline, genericMessage, funnel, state, model);
				if (_v2.$ === 'Err') {
					var error = _v2.a;
					return $elm$core$Result$Err(error);
				} else {
					var _v3 = _v2.a;
					var model2 = _v3.a;
					var cmd = _v3.b;
					return $elm$core$Result$Ok(
						_Utils_Tuple2(model2, cmd));
				}
			} else {
				return $elm$core$Result$Err('Unknown moduleName: ' + moduleName);
			}
		}
	});
var $author$project$PortFunnels$processValue = F4(
	function (_v0, value, state, model) {
		var funnelDict = _v0.a;
		var portGetter = _v0.b;
		return A5(
			$billstclair$elm_port_funnel$PortFunnel$processValue,
			funnelDict,
			$author$project$PortFunnels$appTrampoline(portGetter),
			value,
			state,
			model);
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$put = $billstclair$elm_localstorage$PortFunnel$InternalTypes$Put;
var $elm_community$list_extra$List$Extra$remove = F2(
	function (x, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var y = xs.a;
			var ys = xs.b;
			return _Utils_eq(x, y) ? ys : A2(
				$elm$core$List$cons,
				y,
				A2($elm_community$list_extra$List$Extra$remove, x, ys));
		}
	});
var $elm_community$list_extra$List$Extra$removeAt = F2(
	function (index, l) {
		if (index < 0) {
			return l;
		} else {
			var _v0 = A2($elm$core$List$drop, index, l);
			if (!_v0.b) {
				return l;
			} else {
				var rest = _v0.b;
				return _Utils_ap(
					A2($elm$core$List$take, index, l),
					rest);
			}
		}
	});
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Main$filterToJSON = function (input) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'actionIndex',
				$elm$json$Json$Encode$int(input.actionIndex)),
				_Utils_Tuple2(
				'enabled',
				$elm$json$Json$Encode$bool(input.enabled)),
				_Utils_Tuple2(
				'selectIndex',
				$elm$json$Json$Encode$int(input.selectIndex)),
				_Utils_Tuple2(
				'param',
				$elm$json$Json$Encode$string(input.param)),
				_Utils_Tuple2(
				'id',
				$elm$json$Json$Encode$int(input.id))
			]));
};
var $author$project$Main$savedGraphToJSON = function (input) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'program',
				$elm$json$Json$Encode$string(input.program)),
				_Utils_Tuple2(
				'filters',
				A2($elm$json$Json$Encode$list, $author$project$Main$filterToJSON, input.filters))
			]));
};
var $elm_explorations$linear_algebra$Math$Vector2$scale = _MJS_v2scale;
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$addPrefix = F2(
	function (prefix, key) {
		return (prefix === '') ? key : (prefix + ('.' + key));
	});
var $billstclair$elm_port_funnel$PortFunnel$messageToValue = F2(
	function (_v0, message) {
		var moduleDesc = _v0.a;
		return $billstclair$elm_port_funnel$PortFunnel$encodeGenericMessage(
			moduleDesc.encoder(message));
	});
var $billstclair$elm_port_funnel$PortFunnel$sendMessage = F3(
	function (moduleDesc, cmdPort, message) {
		return cmdPort(
			A2($billstclair$elm_port_funnel$PortFunnel$messageToValue, moduleDesc, message));
	});
var $billstclair$elm_localstorage$PortFunnel$LocalStorage$send = F3(
	function (wrapper, message, _v0) {
		var state = _v0.a;
		var prefix = state.prefix;
		var mess = function () {
			switch (message.$) {
				case 'Get':
					var label = message.a;
					var key = message.b;
					return A2(
						$billstclair$elm_localstorage$PortFunnel$InternalTypes$Get,
						label,
						A2($billstclair$elm_localstorage$PortFunnel$LocalStorage$addPrefix, prefix, key));
				case 'Put':
					var key = message.a;
					var value = message.b;
					return A2(
						$billstclair$elm_localstorage$PortFunnel$InternalTypes$Put,
						A2($billstclair$elm_localstorage$PortFunnel$LocalStorage$addPrefix, prefix, key),
						value);
				case 'ListKeys':
					var label = message.a;
					var pref = message.b;
					return A2(
						$billstclair$elm_localstorage$PortFunnel$InternalTypes$ListKeys,
						label,
						A2($billstclair$elm_localstorage$PortFunnel$LocalStorage$addPrefix, prefix, pref));
				case 'Clear':
					var pref = message.a;
					return $billstclair$elm_localstorage$PortFunnel$InternalTypes$Clear(
						A2($billstclair$elm_localstorage$PortFunnel$LocalStorage$addPrefix, prefix, pref));
				default:
					return message;
			}
		}();
		return A3($billstclair$elm_port_funnel$PortFunnel$sendMessage, $billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleDesc, wrapper, mess);
	});
var $author$project$Main$send = F2(
	function (message, model) {
		return A3(
			$billstclair$elm_localstorage$PortFunnel$LocalStorage$send,
			A2($author$project$Main$getCmdPort, $billstclair$elm_localstorage$PortFunnel$LocalStorage$moduleName, model),
			message,
			model.funnelState.storage);
	});
var $author$project$DotUtil$nodeMapMatch = F2(
	function (id, nodeMap) {
		nodeMapMatch:
		while (true) {
			if (!nodeMap.b) {
				return '';
			} else {
				var _v1 = nodeMap.a;
				var node = _v1.a;
				var label = _v1.b;
				var rest = nodeMap.b;
				if (_Utils_eq(
					$author$project$DotUtil$showId(id),
					node)) {
					return label;
				} else {
					var $temp$id = id,
						$temp$nodeMap = rest;
					id = $temp$id;
					nodeMap = $temp$nodeMap;
					continue nodeMapMatch;
				}
			}
		}
	});
var $author$project$DotUtil$replaceAttr = F3(
	function (attrs, attrMatch, newValue) {
		if (!attrs.b) {
			return _List_Nil;
		} else {
			var _v1 = attrs.a;
			var atType = _v1.a;
			var atVal = _v1.b;
			var rest = attrs.b;
			return _Utils_eq(
				$author$project$DotUtil$showId(atType),
				attrMatch) ? A2(
				$elm$core$List$cons,
				A2(
					$brandly$elm_dot_lang$DotLang$Attr,
					atType,
					$brandly$elm_dot_lang$DotLang$ID(newValue)),
				rest) : A2(
				$elm$core$List$cons,
				A2($brandly$elm_dot_lang$DotLang$Attr, atType, atVal),
				A3($author$project$DotUtil$replaceAttr, rest, attrMatch, newValue));
		}
	});
var $author$project$Ellipsis$lastLoc = F2(
	function (token, input) {
		var _v0 = A2($elm$core$String$indexes, token, input);
		if (!_v0.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var inds = _v0;
			return $elm$core$List$head(
				$elm$core$List$reverse(inds));
		}
	});
var $author$project$Ellipsis$getLastTokenHelper = F3(
	function (input, tokens, state) {
		getLastTokenHelper:
		while (true) {
			if (!tokens.b) {
				if (state.b && state.b.b) {
					var _v2 = state.a;
					var a = _v2.a;
					var astr = _v2.b;
					var _v3 = state.b;
					var _v4 = _v3.a;
					var b = _v4.a;
					var bstr = _v4.b;
					var rest = _v3.b;
					if (_Utils_cmp(a, b) > 0) {
						var $temp$input = input,
							$temp$tokens = tokens,
							$temp$state = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(a, astr),
							rest);
						input = $temp$input;
						tokens = $temp$tokens;
						state = $temp$state;
						continue getLastTokenHelper;
					} else {
						var $temp$input = input,
							$temp$tokens = tokens,
							$temp$state = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(b, bstr),
							rest);
						input = $temp$input;
						tokens = $temp$tokens;
						state = $temp$state;
						continue getLastTokenHelper;
					}
				} else {
					var _v5 = $elm$core$List$head(state);
					if (_v5.$ === 'Nothing') {
						return _Utils_Tuple2(
							$elm$core$String$length(input),
							'');
					} else {
						var res = _v5.a;
						return res;
					}
				}
			} else {
				var t = tokens.a;
				var ts = tokens.b;
				var _v6 = A2($author$project$Ellipsis$lastLoc, t, input);
				if (_v6.$ === 'Just') {
					var i = _v6.a;
					var $temp$input = input,
						$temp$tokens = ts,
						$temp$state = A2(
						$elm$core$List$cons,
						_Utils_Tuple2(i, t),
						state);
					input = $temp$input;
					tokens = $temp$tokens;
					state = $temp$state;
					continue getLastTokenHelper;
				} else {
					var $temp$input = input,
						$temp$tokens = ts,
						$temp$state = state;
					input = $temp$input;
					tokens = $temp$tokens;
					state = $temp$state;
					continue getLastTokenHelper;
				}
			}
		}
	});
var $author$project$Ellipsis$getLastToken = F2(
	function (input, tokens) {
		return A3($author$project$Ellipsis$getLastTokenHelper, input, tokens, _List_Nil);
	});
var $author$project$Ellipsis$shorten = F3(
	function (input, budget, tokens) {
		if (_Utils_cmp(
			$elm$core$String$length(input),
			budget) < 0) {
			return input;
		} else {
			var lastToken = A2($author$project$Ellipsis$getLastToken, input, tokens);
			var cutIndex = lastToken.a;
			var cutAmount = ($elm$core$String$length(input) - budget) + 3;
			var firstCut = A2($elm$core$Basics$max, cutIndex - cutAmount, 0);
			return A3($elm$core$String$slice, 0, firstCut, input) + (' …  ' + A2($elm$core$String$dropLeft, cutIndex, input));
		}
	});
var $author$project$DotUtil$shortenLabelsHelper = F4(
	function (stmts, nodeMap, maxLength, tokens) {
		if (!stmts.b) {
			return _List_Nil;
		} else {
			var x = stmts.a;
			var xs = stmts.b;
			if (x.$ === 'NodeStmt') {
				var _v2 = x.a;
				var id = _v2.a;
				var p = _v2.b;
				var y = x.b;
				var newLabelStr = A3(
					$author$project$Ellipsis$shorten,
					A2($author$project$DotUtil$nodeMapMatch, id, nodeMap),
					maxLength,
					tokens);
				var newAttrList = A3($author$project$DotUtil$replaceAttr, y, 'label', newLabelStr);
				var newStmt = A2(
					$brandly$elm_dot_lang$DotLang$NodeStmt,
					A2($brandly$elm_dot_lang$DotLang$NodeId, id, p),
					newAttrList);
				return A2(
					$elm$core$List$cons,
					newStmt,
					A4($author$project$DotUtil$shortenLabelsHelper, xs, nodeMap, maxLength, tokens));
			} else {
				return A2(
					$elm$core$List$cons,
					x,
					A4($author$project$DotUtil$shortenLabelsHelper, xs, nodeMap, maxLength, tokens));
			}
		}
	});
var $brandly$elm_dot_lang$DotLang$Indent = function (a) {
	return {$: 'Indent', a: a};
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $brandly$elm_dot_lang$DotLang$filterEmpty = $elm$core$List$filter(
	A2(
		$elm$core$Basics$composeR,
		$elm$core$String$length,
		$elm$core$Basics$lt(0)));
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $brandly$elm_dot_lang$DotLang$beginsWithADigit = function (string) {
	var _v0 = $elm$core$String$uncons(string);
	if (_v0.$ === 'Just') {
		var _v1 = _v0.a;
		var c = _v1.a;
		return $elm$core$Char$isDigit(c);
	} else {
		return false;
	}
};
var $elm$core$String$any = _String_any;
var $brandly$elm_dot_lang$DotLang$asciiOctalFrom200To377 = $elm$core$Set$fromList(
	A2(
		$elm$core$List$map,
		$elm$core$Char$fromCode,
		A2($elm$core$List$range, 128, 255)));
var $brandly$elm_dot_lang$DotLang$isInAllowList = function (_char) {
	return A2(
		$elm$core$List$any,
		$elm$core$Basics$identity,
		_List_fromArray(
			[
				$elm$core$Char$isLower(_char),
				$elm$core$Char$isUpper(_char),
				_Utils_eq(
				_Utils_chr('_'),
				_char),
				$elm$core$Char$isDigit(_char),
				A2($elm$core$Set$member, _char, $brandly$elm_dot_lang$DotLang$asciiOctalFrom200To377)
			]));
};
var $brandly$elm_dot_lang$DotLang$hasACharacterNotInWhiteList = $elm$core$String$any(
	A2($elm$core$Basics$composeR, $brandly$elm_dot_lang$DotLang$isInAllowList, $elm$core$Basics$not));
var $brandly$elm_dot_lang$DotLang$isKeyword = function (str) {
	return A2(
		$elm$core$List$member,
		$elm$core$String$toLower(str),
		_List_fromArray(
			['node', 'edge', 'graph', 'digraph', 'subgraph', 'strict']));
};
var $brandly$elm_dot_lang$DotLang$shouldBeQuotedDefault = function (s) {
	return $elm$core$String$isEmpty(s) || ($brandly$elm_dot_lang$DotLang$beginsWithADigit(s) || ($brandly$elm_dot_lang$DotLang$hasACharacterNotInWhiteList(s) || $brandly$elm_dot_lang$DotLang$isKeyword(s)));
};
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $brandly$elm_dot_lang$DotLang$showIdWithQuotes = F2(
	function (shouldBeQuoted, id_) {
		switch (id_.$) {
			case 'ID':
				var str = id_.a;
				if (shouldBeQuoted(str)) {
					var escaped = A3(
						$elm$core$String$replace,
						'\"',
						'\\\"',
						A3($elm$core$String$replace, '\\', '\\\\', str));
					return '\"' + (escaped + '\"');
				} else {
					return str;
				}
			case 'HtmlID':
				var node = id_.a;
				return A2(
					$elm$core$String$join,
					'',
					_List_fromArray(
						[
							'<',
							$hecrj$html_parser$Html$Parser$nodeToString(node),
							'>'
						]));
			default:
				var _float = id_.a;
				return $elm$core$String$fromFloat(_float);
		}
	});
var $brandly$elm_dot_lang$DotLang$showId = $brandly$elm_dot_lang$DotLang$showIdWithQuotes($brandly$elm_dot_lang$DotLang$shouldBeQuotedDefault);
var $brandly$elm_dot_lang$DotLang$showAttr = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	return A2(
		$elm$core$String$join,
		'=',
		_List_fromArray(
			[
				$brandly$elm_dot_lang$DotLang$showId(a),
				$brandly$elm_dot_lang$DotLang$showId(b)
			]));
};
var $brandly$elm_dot_lang$DotLang$showAttrStmtType = function (type_) {
	switch (type_.$) {
		case 'AttrGraph':
			return 'graph';
		case 'AttrNode':
			return 'node';
		default:
			return 'edge';
	}
};
var $brandly$elm_dot_lang$DotLang$showAttrs = F2(
	function (_default, attrs) {
		return $elm$core$List$isEmpty(attrs) ? _default : ('[' + (A2(
			$elm$core$String$join,
			',',
			A2($elm$core$List$map, $brandly$elm_dot_lang$DotLang$showAttr, attrs)) + ']'));
	});
var $brandly$elm_dot_lang$DotLang$showCompassPt = function (compassPt_) {
	switch (compassPt_.$) {
		case 'N':
			return 'n';
		case 'NE':
			return 'ne';
		case 'E':
			return 'e';
		case 'SE':
			return 'se';
		case 'S':
			return 's';
		case 'SW':
			return 'sw';
		case 'W':
			return 'w';
		case 'NW':
			return 'nw';
		case 'C':
			return 'c';
		default:
			return '_';
	}
};
var $brandly$elm_dot_lang$DotLang$showPort = function (port__) {
	if (port__.$ === 'PortId') {
		var id__ = port__.a;
		var maybeCompassPt = port__.b;
		var shouldBeQuoted = function (str) {
			return $brandly$elm_dot_lang$DotLang$shouldBeQuotedDefault(str) || $brandly$elm_dot_lang$DotLang$isCompassPt(str);
		};
		return _Utils_ap(
			A2($brandly$elm_dot_lang$DotLang$showIdWithQuotes, shouldBeQuoted, id__),
			A2(
				$elm$core$Maybe$withDefault,
				'',
				A2(
					$elm$core$Maybe$map,
					A2(
						$elm$core$Basics$composeR,
						$brandly$elm_dot_lang$DotLang$showCompassPt,
						$elm$core$String$cons(
							_Utils_chr(':'))),
					maybeCompassPt)));
	} else {
		var compassPt_ = port__.a;
		return $brandly$elm_dot_lang$DotLang$showCompassPt(compassPt_);
	}
};
var $brandly$elm_dot_lang$DotLang$showNodeId = function (_v0) {
	var id_ = _v0.a;
	var maybePort = _v0.b;
	return _Utils_ap(
		$brandly$elm_dot_lang$DotLang$showId(id_),
		A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeR,
					$brandly$elm_dot_lang$DotLang$showPort,
					$elm$core$String$cons(
						_Utils_chr(':'))),
				maybePort)));
};
var $brandly$elm_dot_lang$DotLang$toStringWithConfig = F2(
	function (config, _v0) {
		var type_ = _v0.a;
		var maybeId = _v0.b;
		var stmts = _v0.c;
		var separator = function () {
			if (config.$ === 'OneLine') {
				return function (_v6) {
					return ' ';
				};
			} else {
				var count = config.a;
				var indent = A2($elm$core$String$repeat, count, ' ');
				return function (depth) {
					return A2(
						$elm$core$String$cons,
						_Utils_chr('\n'),
						A2($elm$core$String$repeat, depth, indent));
				};
			}
		}();
		var id_ = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeR,
					$brandly$elm_dot_lang$DotLang$showId,
					function (str) {
						return str + ' ';
					}),
				maybeId));
		var edgeStr = function () {
			if (type_.$ === 'Graph') {
				return '--';
			} else {
				return '->';
			}
		}();
		var showRHS = F2(
			function (depth, rhs) {
				return A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							edgeStr,
							function () {
							if (rhs.$ === 'EdgeNode') {
								var nodeId_ = rhs.a;
								return $brandly$elm_dot_lang$DotLang$showNodeId(nodeId_);
							} else {
								var subgraph_ = rhs.a;
								return A2(showSubgraph, depth, subgraph_);
							}
						}()
						]));
			});
		var showSubgraph = F2(
			function (depth, _v2) {
				var maybeId_ = _v2.a;
				var stmts_ = _v2.b;
				return A2(
					$elm$core$Basics$composeR,
					$brandly$elm_dot_lang$DotLang$filterEmpty,
					$elm$core$String$join(' '))(
					_List_fromArray(
						[
							'subgraph',
							A2(
							$elm$core$Maybe$withDefault,
							'',
							A2($elm$core$Maybe$map, $brandly$elm_dot_lang$DotLang$showId, maybeId_)),
							A2(showStmts, depth + 1, stmts_)
						]));
			});
		var showStmts = F2(
			function (depth, stmts_) {
				return $elm$core$List$isEmpty(stmts_) ? '{}' : (A2(
					$elm$core$String$join,
					separator(depth),
					A2(
						$elm$core$List$cons,
						'{',
						A2(
							$elm$core$List$map,
							showStmt(depth),
							stmts_))) + (separator(depth - 1) + '}'));
			});
		var showStmt = F2(
			function (depth, stmt) {
				switch (stmt.$) {
					case 'NodeStmt':
						var nodeId_ = stmt.a;
						var attrs = stmt.b;
						return A2(
							$elm$core$Basics$composeR,
							$brandly$elm_dot_lang$DotLang$filterEmpty,
							$elm$core$String$join(''))(
							_List_fromArray(
								[
									$brandly$elm_dot_lang$DotLang$showNodeId(nodeId_),
									A2($brandly$elm_dot_lang$DotLang$showAttrs, '', attrs)
								]));
					case 'EdgeStmtNode':
						var nodeId_ = stmt.a;
						var rhs = stmt.b;
						var moreRhs = stmt.c;
						var attrs = stmt.d;
						return _Utils_ap(
							A2(
								$elm$core$Basics$composeR,
								$brandly$elm_dot_lang$DotLang$filterEmpty,
								$elm$core$String$join(' '))(
								_List_fromArray(
									[
										$brandly$elm_dot_lang$DotLang$showNodeId(nodeId_),
										A2(showRHS, depth, rhs),
										A2(
										$elm$core$String$join,
										'',
										A2(
											$elm$core$List$map,
											showRHS(depth),
											moreRhs))
									])),
							A2($brandly$elm_dot_lang$DotLang$showAttrs, '', attrs));
					case 'EdgeStmtSubgraph':
						var subgraph_ = stmt.a;
						var rhs = stmt.b;
						var moreRhs = stmt.c;
						var attrs = stmt.d;
						return A2(
							$elm$core$Basics$composeR,
							$brandly$elm_dot_lang$DotLang$filterEmpty,
							$elm$core$String$join(' '))(
							_List_fromArray(
								[
									A2(showSubgraph, depth, subgraph_),
									A2(showRHS, depth, rhs),
									A2(
									$elm$core$String$join,
									'',
									A2(
										$elm$core$List$map,
										showRHS(depth),
										moreRhs)),
									A2($brandly$elm_dot_lang$DotLang$showAttrs, '', attrs)
								]));
					case 'AttrStmt':
						var type__ = stmt.a;
						var attrs = stmt.b;
						return A2(
							$elm$core$Basics$composeR,
							$brandly$elm_dot_lang$DotLang$filterEmpty,
							$elm$core$String$join(' '))(
							_List_fromArray(
								[
									$brandly$elm_dot_lang$DotLang$showAttrStmtType(type__),
									A2($brandly$elm_dot_lang$DotLang$showAttrs, '[]', attrs)
								]));
					case 'LooseAttr':
						var attr_ = stmt.a;
						return $brandly$elm_dot_lang$DotLang$showAttr(attr_);
					default:
						var subgraph_ = stmt.a;
						return A2(showSubgraph, depth, subgraph_);
				}
			});
		return $brandly$elm_dot_lang$DotLang$showEdgeType(type_) + (' ' + (id_ + A2(showStmts, 1, stmts)));
	});
var $brandly$elm_dot_lang$DotLang$toString = $brandly$elm_dot_lang$DotLang$toStringWithConfig(
	$brandly$elm_dot_lang$DotLang$Indent(4));
var $author$project$DotUtil$shortenLabels = F4(
	function (input, nodeMap, maxLength, tokens) {
		var _v0 = $brandly$elm_dot_lang$DotLang$fromString(input);
		if ((_v0.$ === 'Ok') && (_v0.a.a.$ === 'Digraph')) {
			var _v1 = _v0.a;
			var _v2 = _v1.a;
			var id = _v1.b;
			var x = _v1.c;
			return $brandly$elm_dot_lang$DotLang$toString(
				A3(
					$brandly$elm_dot_lang$DotLang$Dot,
					$brandly$elm_dot_lang$DotLang$Digraph,
					id,
					A4($author$project$DotUtil$shortenLabelsHelper, x, nodeMap, maxLength, tokens)));
		} else {
			return input;
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$Shown = {$: 'Shown'};
var $rundis$elm_bootstrap$Bootstrap$Alert$shown = $rundis$elm_bootstrap$Bootstrap$Alert$Shown;
var $author$project$SvgUtil$stringFindAndReplace = F2(
	function (source, list) {
		stringFindAndReplace:
		while (true) {
			if (!list.b) {
				return source;
			} else {
				var _v1 = list.a;
				var match = _v1.a;
				var replacement = _v1.b;
				var xs = list.b;
				var $temp$source = A3($elm$core$String$replace, match, replacement, source),
					$temp$list = xs;
				source = $temp$source;
				list = $temp$list;
				continue stringFindAndReplace;
			}
		}
	});
var $author$project$SvgUtil$svgReplace = _List_fromArray(
	[
		_Utils_Tuple2('&quot;', '\"'),
		_Utils_Tuple2('&#45;', '-'),
		_Utils_Tuple2('&#32;', ' '),
		_Utils_Tuple2('&#160;', ' '),
		_Utils_Tuple2('&gt;', '>')
	]);
var $elm_community$list_extra$List$Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return $elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2($elm$core$List$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2($elm$core$List$cons, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2($elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$unique = function (list) {
	return A4($elm_community$list_extra$List$Extra$uniqueHelp, $elm$core$Basics$identity, _List_Nil, list, _List_Nil);
};
var $zaboco$elm_draggable$Cmd$Extra$message = function (x) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$identity,
		$elm$core$Task$succeed(x));
};
var $zaboco$elm_draggable$Cmd$Extra$optionalMessage = function (msgMaybe) {
	return A2(
		$elm$core$Maybe$withDefault,
		$elm$core$Platform$Cmd$none,
		A2($elm$core$Maybe$map, $zaboco$elm_draggable$Cmd$Extra$message, msgMaybe));
};
var $zaboco$elm_draggable$Internal$Dragging = function (a) {
	return {$: 'Dragging', a: a};
};
var $zaboco$elm_draggable$Internal$DraggingTentative = F2(
	function (a, b) {
		return {$: 'DraggingTentative', a: a, b: b};
	});
var $zaboco$elm_draggable$Internal$distanceTo = F2(
	function (end, start) {
		return _Utils_Tuple2(end.x - start.x, end.y - start.y);
	});
var $zaboco$elm_draggable$Internal$updateAndEmit = F3(
	function (config, msg, drag) {
		var _v0 = _Utils_Tuple2(drag, msg);
		_v0$5:
		while (true) {
			switch (_v0.a.$) {
				case 'NotDragging':
					if (_v0.b.$ === 'StartDragging') {
						var _v1 = _v0.a;
						var _v2 = _v0.b;
						var key = _v2.a;
						var initialPosition = _v2.b;
						return _Utils_Tuple2(
							A2($zaboco$elm_draggable$Internal$DraggingTentative, key, initialPosition),
							config.onMouseDown(key));
					} else {
						break _v0$5;
					}
				case 'DraggingTentative':
					switch (_v0.b.$) {
						case 'DragAt':
							var _v3 = _v0.a;
							var key = _v3.a;
							var oldPosition = _v3.b;
							return _Utils_Tuple2(
								$zaboco$elm_draggable$Internal$Dragging(oldPosition),
								config.onDragStart(key));
						case 'StopDragging':
							var _v4 = _v0.a;
							var key = _v4.a;
							var _v5 = _v0.b;
							return _Utils_Tuple2(
								$zaboco$elm_draggable$Internal$NotDragging,
								config.onClick(key));
						default:
							break _v0$5;
					}
				default:
					switch (_v0.b.$) {
						case 'DragAt':
							var oldPosition = _v0.a.a;
							var newPosition = _v0.b.a;
							return _Utils_Tuple2(
								$zaboco$elm_draggable$Internal$Dragging(newPosition),
								config.onDragBy(
									A2($zaboco$elm_draggable$Internal$distanceTo, newPosition, oldPosition)));
						case 'StopDragging':
							var _v6 = _v0.b;
							return _Utils_Tuple2($zaboco$elm_draggable$Internal$NotDragging, config.onDragEnd);
						default:
							break _v0$5;
					}
			}
		}
		return _Utils_Tuple2(drag, $elm$core$Maybe$Nothing);
	});
var $zaboco$elm_draggable$Draggable$updateDraggable = F3(
	function (_v0, _v1, _v2) {
		var config = _v0.a;
		var msg = _v1.a;
		var drag = _v2.a;
		var _v3 = A3($zaboco$elm_draggable$Internal$updateAndEmit, config, msg, drag);
		var newDrag = _v3.a;
		var newMsgMaybe = _v3.b;
		return _Utils_Tuple2(
			$zaboco$elm_draggable$Draggable$State(newDrag),
			$zaboco$elm_draggable$Cmd$Extra$optionalMessage(newMsgMaybe));
	});
var $zaboco$elm_draggable$Draggable$update = F3(
	function (config, msg, model) {
		var _v0 = A3($zaboco$elm_draggable$Draggable$updateDraggable, config, msg, model.drag);
		var dragState = _v0.a;
		var dragCmd = _v0.b;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{drag: dragState}),
			dragCmd);
	});
var $elm_community$list_extra$List$Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			$elm$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var $Janiczek$cmd_extra$Cmd$Extra$withCmd = F2(
	function (cmd, model) {
		return _Utils_Tuple2(model, cmd);
	});
var $Janiczek$cmd_extra$Cmd$Extra$withNoCmd = function (model) {
	return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
};
var $author$project$Main$storageHandler = F3(
	function (response, state, mdl) {
		var model = $author$project$Main$doIsLoaded(
			_Utils_update(
				mdl,
				{funnelState: state}));
		switch (response.$) {
			case 'GetResponse':
				var label = response.a.label;
				var key = response.a.key;
				var value = response.a.value;
				if (value.$ === 'Nothing') {
					return A2(
						$author$project$Main$update,
						$author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown),
						_Utils_update(
							model,
							{error: 'Empty result', errorType: $author$project$Main$AError}));
				} else {
					var v = value.a;
					return _Utils_Tuple2(
						A2(
							$author$project$Main$loadSavedGraphToModel,
							model,
							$author$project$Main$decodeSavedGraphs(v)),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									$author$project$Main$run($author$project$Main$Run),
									$author$project$Main$run($author$project$Main$CloseFilterAcc),
									$author$project$Main$run(
									$author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown))
								])));
				}
			case 'ListKeysResponse':
				var label = response.a.label;
				var keys = response.a.keys;
				return A2(
					$author$project$Main$update,
					$author$project$Main$RunShare,
					_Utils_update(
						model,
						{savedGraphKeys: keys}));
			default:
				return A2($author$project$Main$update, $author$project$Main$ListGraphKeys, model);
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 'Clear':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{items: _List_Nil, program: '', svgString: ''}),
						$elm$core$Platform$Cmd$none);
				case 'LoadEx':
					var name = msg.a;
					var _v1 = A2($elm$core$Dict$get, name, model.initData.examples);
					if (_v1.$ === 'Just') {
						var n = _v1.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{error: 'Example Loaded', errorType: $author$project$Main$ASuccess}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										$author$project$Main$run(
										$author$project$Main$SaveProg(n)),
										$author$project$Main$run(
										$author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown))
									])));
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{error: 'Example Not Loaded', errorType: $author$project$Main$AWarning}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										$author$project$Main$run(
										$author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown))
									])));
					}
				case 'SaveProg':
					var prog = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{program: prog}),
						$author$project$Main$run($author$project$Main$Run));
				case 'SaveFilt':
					var filt = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{filter: filt}),
						$author$project$Main$run($author$project$Main$Run));
				case 'Run':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{spinnerOn: true}),
						$author$project$Main$getDotString(
							_Utils_update(
								model,
								{spinnerOn: true})));
				case 'GetInit':
					return _Utils_Tuple2(
						model,
						$author$project$Main$getInitData(model));
				case 'GotInit':
					if (msg.a.$ === 'Ok') {
						var data = msg.a.a;
						var $temp$msg = $author$project$Main$ListGraphKeys,
							$temp$model = _Utils_update(
							model,
							{filters: data.filters, initData: data});
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						var httpError = msg.a.a;
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				case 'GotDot':
					if (msg.a.$ === 'Ok') {
						var _v2 = msg.a.a;
						var dot = _v2.a;
						var error = _v2.b;
						if (error === '') {
							var newRefNodes = $elm$core$List$reverse(
								$elm_community$list_extra$List$Extra$unique(
									$author$project$DotUtil$getRefList(dot)));
							var newNodeLabels = $elm$core$List$reverse(
								$author$project$DotUtil$getLabels(dot));
							var maxLabelLength = 50;
							var matchTokens = _List_fromArray(
								['=', '⇒', 'of', 'in', ';']);
							var shortenedDot = A4($author$project$DotUtil$shortenLabels, dot, newNodeLabels, maxLabelLength, matchTokens);
							var newModel = _Utils_update(
								model,
								{allNodeLabels: newNodeLabels, dotString: dot, refNodes: newRefNodes, shortDotString: shortenedDot});
							return _Utils_Tuple2(
								newModel,
								$author$project$Main$getSvg(newModel));
						} else {
							var err = error;
							var $temp$msg = $author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown),
								$temp$model = _Utils_update(
								model,
								{error: err, errorType: $author$project$Main$AError});
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						}
					} else {
						var httpError = msg.a.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									dotString: $author$project$Main$buildErrorMessage(httpError)
								}),
							$elm$core$Platform$Cmd$none);
					}
				case 'GotSvg':
					if (msg.a.$ === 'Ok') {
						var svg = msg.a.a;
						var $temp$msg = $author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$closed),
							$temp$model = _Utils_update(
							model,
							{
								spinnerOn: false,
								svgString: A2($author$project$SvgUtil$stringFindAndReplace, svg, $author$project$SvgUtil$svgReplace)
							});
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						var httpError = msg.a.a;
						var $temp$msg = $author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown),
							$temp$model = _Utils_update(
							model,
							{
								error: $author$project$Main$buildErrorMessage(httpError),
								errorType: $author$project$Main$AError
							});
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					}
				case 'ManualDot':
					var dot = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{dotString: dot}),
						$author$project$Main$getSvg(
							_Utils_update(
								model,
								{dotString: dot})));
				case 'ManualSvg':
					var svg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								svgString: A2($author$project$SvgUtil$stringFindAndReplace, svg, $author$project$SvgUtil$svgReplace)
							}),
						$elm$core$Platform$Cmd$none);
				case 'OnDragBy':
					var rawDelta = msg.a;
					var delta = A2($elm_explorations$linear_algebra$Math$Vector2$scale, (-1) / model.zoom, rawDelta);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								center: A2($elm_explorations$linear_algebra$Math$Vector2$add, delta, model.center)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Zoom':
					var factor = msg.a;
					var newZoom = A3($elm$core$Basics$clamp, 0.5, 5, (factor * 0.002) + model.zoom);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{zoom: newZoom}),
						$elm$core$Platform$Cmd$none);
				case 'DragMsg':
					var dragMsg = msg.a;
					return A3($zaboco$elm_draggable$Draggable$update, $author$project$Main$dragConfig, dragMsg, model);
				case 'DndMsg':
					var message = msg.a;
					var _v4 = A3($author$project$Main$system.update, message, model.dnd, model.items);
					var dnd = _v4.a;
					var items = _v4.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{dnd: dnd, items: items}),
						$author$project$Main$system.commands(dnd));
				case 'ToggleCheck':
					var target = msg.a;
					var newFilters = A3(
						$elm_community$list_extra$List$Extra$updateIf,
						function (filt) {
							return _Utils_eq(filt.id, target);
						},
						function (filt) {
							return _Utils_update(
								filt,
								{enabled: !filt.enabled});
						},
						model.items);
					var $temp$msg = $author$project$Main$Run,
						$temp$model = _Utils_update(
						model,
						{items: newFilters});
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'SetFilter':
					var target = msg.a;
					var index = msg.b;
					var newFilters = A3(
						$elm_community$list_extra$List$Extra$updateIf,
						function (filt) {
							return _Utils_eq(filt.id, target);
						},
						function (filt) {
							return _Utils_update(
								filt,
								{selectIndex: index});
						},
						model.items);
					var $temp$msg = $author$project$Main$Run,
						$temp$model = _Utils_update(
						model,
						{items: newFilters});
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'UpdateFilterParam':
					var target = msg.a;
					var newParam = msg.b;
					var newFilters = A3(
						$elm_community$list_extra$List$Extra$updateIf,
						function (filt) {
							return _Utils_eq(filt.id, target);
						},
						function (filt) {
							return _Utils_update(
								filt,
								{param: newParam});
						},
						model.items);
					var $temp$msg = $author$project$Main$Run,
						$temp$model = _Utils_update(
						model,
						{items: newFilters});
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'SetAction':
					var target = msg.a;
					var index = msg.b;
					var newFilters = A3(
						$elm_community$list_extra$List$Extra$updateIf,
						function (filt) {
							return _Utils_eq(filt.id, target);
						},
						function (filt) {
							return _Utils_update(
								filt,
								{actionIndex: index});
						},
						model.items);
					var $temp$msg = $author$project$Main$Run,
						$temp$model = _Utils_update(
						model,
						{items: newFilters});
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'AddFilter':
					var newFilters = _Utils_ap(
						model.items,
						_List_fromArray(
							[
								{actionIndex: 0, enabled: false, id: model.filtIdCounter, param: '', selectIndex: 0}
							]));
					var cmds = $elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								$author$project$Main$run($author$project$Main$Run),
								$author$project$Main$run($author$project$Main$CloseFilterAcc)
							]));
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{filtIdCounter: model.filtIdCounter + 1, items: newFilters}),
						cmds);
				case 'RemoveFilter':
					var target = msg.a;
					var targetIndex = A2(
						$elm_community$list_extra$List$Extra$findIndex,
						function (filt) {
							return _Utils_eq(filt.id, target);
						},
						model.items);
					var newFilters = function () {
						if (targetIndex.$ === 'Just') {
							var index = targetIndex.a;
							return A2($elm_community$list_extra$List$Extra$removeAt, index, model.items);
						} else {
							return model.items;
						}
					}();
					var cmds = $elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								$author$project$Main$run($author$project$Main$Run),
								$author$project$Main$run($author$project$Main$CloseFilterAcc)
							]));
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{items: newFilters}),
						cmds);
				case 'AlertMsg':
					var vis = msg.a;
					if (model.dirty) {
						var $temp$msg = $author$project$Main$ListGraphKeys,
							$temp$model = _Utils_update(
							model,
							{dirty: false, errorVis: vis});
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{errorVis: vis}),
							$elm$core$Platform$Cmd$none);
					}
				case 'LoadSavedGraph':
					var name = msg.a;
					var upModel = _Utils_update(
						model,
						{error: 'Program Loaded', errorType: $author$project$Main$ASuccess, saveName: name});
					var cmds = $elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A2(
								$author$project$Main$send,
								$billstclair$elm_localstorage$PortFunnel$LocalStorage$get(name),
								upModel),
								$author$project$Main$run(
								$author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown))
							]));
					return _Utils_Tuple2(upModel, cmds);
				case 'SaveGraph':
					if (A2($elm$core$List$member, model.saveName, model.savedGraphKeys)) {
						var $temp$msg = $author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown),
							$temp$model = _Utils_update(
							model,
							{error: 'Please enter a unique name to save your program', errorType: $author$project$Main$AWarning});
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						var _v6 = model.saveName;
						if (_v6 === '') {
							var $temp$msg = $author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown),
								$temp$model = _Utils_update(
								model,
								{error: 'Please enter a name to save your program', errorType: $author$project$Main$AWarning});
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						} else {
							var name = _v6;
							var newModel = _Utils_update(
								model,
								{
									dirty: true,
									error: 'Saved as ' + name,
									errorType: $author$project$Main$ASuccess,
									saveName: '',
									savedGraphKeys: A2($elm$core$List$cons, name, model.savedGraphKeys),
									selectedSaveGraph: 0
								});
							var cmds = $elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										$author$project$Main$run(
										$author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown)),
										A2(
										$author$project$Main$send,
										A2(
											$billstclair$elm_localstorage$PortFunnel$LocalStorage$put,
											name,
											$elm$core$Maybe$Just(
												$author$project$Main$savedGraphToJSON(
													$author$project$Main$getCurrentGraph(model)))),
										newModel)
									]));
							return _Utils_Tuple2(newModel, cmds);
						}
					}
				case 'Process':
					var value = msg.a;
					var _v7 = A4(
						$author$project$PortFunnels$processValue,
						$author$project$Main$cyclic$funnelDict(),
						value,
						model.funnelState,
						model);
					if (_v7.$ === 'Err') {
						var error = _v7.a;
						var $temp$msg = $author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown),
							$temp$model = _Utils_update(
							model,
							{error: error, errorType: $author$project$Main$AError});
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						var res = _v7.a;
						return res;
					}
				case 'ListGraphKeys':
					return A2(
						$Janiczek$cmd_extra$Cmd$Extra$withCmd,
						A2(
							$author$project$Main$send,
							$billstclair$elm_localstorage$PortFunnel$LocalStorage$listKeys(''),
							model),
						_Utils_update(
							model,
							{savedGraphKeys: _List_Nil}));
				case 'UpdateName':
					var value = msg.a;
					return $Janiczek$cmd_extra$Cmd$Extra$withNoCmd(
						_Utils_update(
							model,
							{saveName: value}));
				case 'DeleteSavedGraph':
					var name = msg.a;
					var updatedKeys = A2($elm_community$list_extra$List$Extra$remove, name, model.savedGraphKeys);
					var upModel = _Utils_update(
						model,
						{error: 'Program ' + (name + ' deleted.'), errorType: $author$project$Main$AWarning, savedGraphKeys: updatedKeys});
					var cmds = $elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A2(
								$author$project$Main$send,
								A2($billstclair$elm_localstorage$PortFunnel$LocalStorage$put, name, $elm$core$Maybe$Nothing),
								upModel),
								$author$project$Main$run(
								$author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown))
							]));
					return _Utils_Tuple2(upModel, cmds);
				case 'RunShare':
					var _v8 = model.share;
					if (_v8 === '') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(
							model,
							$author$project$Main$getDotString(model));
					}
				case 'NodeClicked':
					var _v9 = msg.a;
					var nodeStr = _v9.a;
					var x = _v9.b;
					var y = _v9.c;
					if (A2($elm$core$String$startsWith, 'node', nodeStr)) {
						var _v10 = $elm$core$String$toInt(
							A2($elm$core$String$dropLeft, 4, nodeStr));
						if (_v10.$ === 'Nothing') {
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										nodeContext: A4($author$project$Main$ContextMenu, 0, 0, 0, false)
									}),
								$elm$core$Platform$Cmd$none);
						} else {
							var node = _v10.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										nodeContext: A4($author$project$Main$ContextMenu, node, x, y, true)
									}),
								$elm$core$Platform$Cmd$none);
						}
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									nodeContext: A4($author$project$Main$ContextMenu, 0, 0, 0, false)
								}),
							$elm$core$Platform$Cmd$none);
					}
				case 'CBCopy':
					var str = msg.a;
					return _Utils_Tuple2(
						model,
						$author$project$Main$clipboardCopy(str));
				case 'CBRes':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{error: 'Link copied to Clipboard', errorType: $author$project$Main$AInfo}),
						$author$project$Main$run(
							$author$project$Main$AlertMsg($rundis$elm_bootstrap$Bootstrap$Alert$shown)));
				case 'ResizeView':
					var w = msg.a;
					var h = msg.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{height: h - $author$project$Main$navBarHeight, width: w}),
						$elm$core$Platform$Cmd$none);
				case 'NavbarMsg':
					var state = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{navbarState: state}),
						$elm$core$Platform$Cmd$none);
				case 'PopoverMsg':
					var state = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{cbPopover: state}),
						$elm$core$Platform$Cmd$none);
				case 'AccMsg':
					var state = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{accState: state}),
						$elm$core$Platform$Cmd$none);
				case 'CloseFilterAcc':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{accState: $rundis$elm_bootstrap$Bootstrap$Accordion$initialState}),
						$author$project$Main$run($author$project$Main$OpenFilterAcc));
				case 'OpenFilterAcc':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								accState: $rundis$elm_bootstrap$Bootstrap$Accordion$initialStateCardOpen('filtCard')
							}),
						$elm$core$Platform$Cmd$none);
				default:
					var state = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{ddState: state}),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
function $author$project$Main$cyclic$funnelDict() {
	return A2(
		$author$project$PortFunnels$makeFunnelDict,
		_List_fromArray(
			[
				$author$project$PortFunnels$LocalStorageHandler($author$project$Main$storageHandler)
			]),
		$author$project$Main$getCmdPort);
}
try {
	var $author$project$Main$funnelDict = $author$project$Main$cyclic$funnelDict();
	$author$project$Main$cyclic$funnelDict = function () {
		return $author$project$Main$funnelDict;
	};
} catch ($) {
	throw 'Some top-level definitions from `Main` are causing infinite recursion:\n\n  ┌─────┐\n  │    funnelDict\n  │     ↓\n  │    storageHandler\n  │     ↓\n  │    update\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$Main$AddFilter = {$: 'AddFilter'};
var $author$project$Main$CBCopy = function (a) {
	return {$: 'CBCopy', a: a};
};
var $author$project$Main$DeleteSavedGraph = function (a) {
	return {$: 'DeleteSavedGraph', a: a};
};
var $author$project$Main$LoadEx = function (a) {
	return {$: 'LoadEx', a: a};
};
var $author$project$Main$LoadSavedGraph = function (a) {
	return {$: 'LoadSavedGraph', a: a};
};
var $author$project$Main$NodeClicked = function (a) {
	return {$: 'NodeClicked', a: a};
};
var $author$project$Main$SaveGraph = {$: 'SaveGraph'};
var $author$project$Main$UpdateName = function (a) {
	return {$: 'UpdateName', a: a};
};
var $author$project$Main$Zoom = function (a) {
	return {$: 'Zoom', a: a};
};
var $Garados007$elm_svg_parser$SvgParser$SvgElement = function (a) {
	return {$: 'SvgElement', a: a};
};
var $author$project$SvgUtil$getChildsLength = function (nodes) {
	getChildsLength:
	while (true) {
		if (!nodes.b) {
			return 0;
		} else {
			var node = nodes.a;
			var rest = nodes.b;
			if (node.$ === 'SvgText') {
				var str = node.a;
				return $elm$core$String$length(str);
			} else {
				var $temp$nodes = rest;
				nodes = $temp$nodes;
				continue getChildsLength;
			}
		}
	}
};
var $author$project$SvgUtil$findTextLength = function (nodes) {
	findTextLength:
	while (true) {
		if (!nodes.b) {
			return 0;
		} else {
			var node = nodes.a;
			var rest = nodes.b;
			if (node.$ === 'SvgElement') {
				var elem = node.a;
				if (elem.name === 'text') {
					return $author$project$SvgUtil$getChildsLength(elem.children);
				} else {
					var $temp$nodes = rest;
					nodes = $temp$nodes;
					continue findTextLength;
				}
			} else {
				var $temp$nodes = rest;
				nodes = $temp$nodes;
				continue findTextLength;
			}
		}
	}
};
var $author$project$SvgUtil$getTextAttrsFromList = function (nodes) {
	getTextAttrsFromList:
	while (true) {
		if (!nodes.b) {
			return _List_Nil;
		} else {
			var node = nodes.a;
			var rest = nodes.b;
			if (node.$ === 'SvgElement') {
				var elem = node.a;
				if (elem.name === 'text') {
					return elem.attributes;
				} else {
					var $temp$nodes = rest;
					nodes = $temp$nodes;
					continue getTextAttrsFromList;
				}
			} else {
				var $temp$nodes = rest;
				nodes = $temp$nodes;
				continue getTextAttrsFromList;
			}
		}
	}
};
var $Garados007$elm_svg_parser$SvgParser$SvgText = function (a) {
	return {$: 'SvgText', a: a};
};
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $myrho$elm_round$Round$addSign = F2(
	function (signed, str) {
		var isNotZero = A2(
			$elm$core$List$any,
			function (c) {
				return (!_Utils_eq(
					c,
					_Utils_chr('0'))) && (!_Utils_eq(
					c,
					_Utils_chr('.')));
			},
			$elm$core$String$toList(str));
		return _Utils_ap(
			(signed && isNotZero) ? '-' : '',
			str);
	});
var $myrho$elm_round$Round$increaseNum = function (_v0) {
	var head = _v0.a;
	var tail = _v0.b;
	if (_Utils_eq(
		head,
		_Utils_chr('9'))) {
		var _v1 = $elm$core$String$uncons(tail);
		if (_v1.$ === 'Nothing') {
			return '01';
		} else {
			var headtail = _v1.a;
			return A2(
				$elm$core$String$cons,
				_Utils_chr('0'),
				$myrho$elm_round$Round$increaseNum(headtail));
		}
	} else {
		var c = $elm$core$Char$toCode(head);
		return ((c >= 48) && (c < 57)) ? A2(
			$elm$core$String$cons,
			$elm$core$Char$fromCode(c + 1),
			tail) : '0';
	}
};
var $elm$core$Basics$isInfinite = _Basics_isInfinite;
var $elm$core$Basics$isNaN = _Basics_isNaN;
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $elm$core$String$reverse = _String_reverse;
var $myrho$elm_round$Round$splitComma = function (str) {
	var _v0 = A2($elm$core$String$split, '.', str);
	if (_v0.b) {
		if (_v0.b.b) {
			var before = _v0.a;
			var _v1 = _v0.b;
			var after = _v1.a;
			return _Utils_Tuple2(before, after);
		} else {
			var before = _v0.a;
			return _Utils_Tuple2(before, '0');
		}
	} else {
		return _Utils_Tuple2('0', '0');
	}
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $myrho$elm_round$Round$toDecimal = function (fl) {
	var _v0 = A2(
		$elm$core$String$split,
		'e',
		$elm$core$String$fromFloat(
			$elm$core$Basics$abs(fl)));
	if (_v0.b) {
		if (_v0.b.b) {
			var num = _v0.a;
			var _v1 = _v0.b;
			var exp = _v1.a;
			var e = A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(
					A2($elm$core$String$startsWith, '+', exp) ? A2($elm$core$String$dropLeft, 1, exp) : exp));
			var _v2 = $myrho$elm_round$Round$splitComma(num);
			var before = _v2.a;
			var after = _v2.b;
			var total = _Utils_ap(before, after);
			var zeroed = (e < 0) ? A2(
				$elm$core$Maybe$withDefault,
				'0',
				A2(
					$elm$core$Maybe$map,
					function (_v3) {
						var a = _v3.a;
						var b = _v3.b;
						return a + ('.' + b);
					},
					A2(
						$elm$core$Maybe$map,
						$elm$core$Tuple$mapFirst($elm$core$String$fromChar),
						$elm$core$String$uncons(
							_Utils_ap(
								A2(
									$elm$core$String$repeat,
									$elm$core$Basics$abs(e),
									'0'),
								total))))) : A3(
				$elm$core$String$padRight,
				e + 1,
				_Utils_chr('0'),
				total);
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				zeroed);
		} else {
			var num = _v0.a;
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				num);
		}
	} else {
		return '';
	}
};
var $myrho$elm_round$Round$roundFun = F3(
	function (functor, s, fl) {
		if ($elm$core$Basics$isInfinite(fl) || $elm$core$Basics$isNaN(fl)) {
			return $elm$core$String$fromFloat(fl);
		} else {
			var signed = fl < 0;
			var _v0 = $myrho$elm_round$Round$splitComma(
				$myrho$elm_round$Round$toDecimal(
					$elm$core$Basics$abs(fl)));
			var before = _v0.a;
			var after = _v0.b;
			var r = $elm$core$String$length(before) + s;
			var normalized = _Utils_ap(
				A2($elm$core$String$repeat, (-r) + 1, '0'),
				A3(
					$elm$core$String$padRight,
					r,
					_Utils_chr('0'),
					_Utils_ap(before, after)));
			var totalLen = $elm$core$String$length(normalized);
			var roundDigitIndex = A2($elm$core$Basics$max, 1, r);
			var increase = A2(
				functor,
				signed,
				A3($elm$core$String$slice, roundDigitIndex, totalLen, normalized));
			var remains = A3($elm$core$String$slice, 0, roundDigitIndex, normalized);
			var num = increase ? $elm$core$String$reverse(
				A2(
					$elm$core$Maybe$withDefault,
					'1',
					A2(
						$elm$core$Maybe$map,
						$myrho$elm_round$Round$increaseNum,
						$elm$core$String$uncons(
							$elm$core$String$reverse(remains))))) : remains;
			var numLen = $elm$core$String$length(num);
			var numZeroed = (num === '0') ? num : ((s <= 0) ? _Utils_ap(
				num,
				A2(
					$elm$core$String$repeat,
					$elm$core$Basics$abs(s),
					'0')) : ((_Utils_cmp(
				s,
				$elm$core$String$length(after)) < 0) ? (A3($elm$core$String$slice, 0, numLen - s, num) + ('.' + A3($elm$core$String$slice, numLen - s, numLen, num))) : _Utils_ap(
				before + '.',
				A3(
					$elm$core$String$padRight,
					s,
					_Utils_chr('0'),
					after))));
			return A2($myrho$elm_round$Round$addSign, signed, numZeroed);
		}
	});
var $myrho$elm_round$Round$round = $myrho$elm_round$Round$roundFun(
	F2(
		function (signed, str) {
			var _v0 = $elm$core$String$uncons(str);
			if (_v0.$ === 'Nothing') {
				return false;
			} else {
				if ('5' === _v0.a.a.valueOf()) {
					if (_v0.a.b === '') {
						var _v1 = _v0.a;
						return !signed;
					} else {
						var _v2 = _v0.a;
						return true;
					}
				} else {
					var _v3 = _v0.a;
					var _int = _v3.a;
					return function (i) {
						return ((i > 53) && signed) || ((i >= 53) && (!signed));
					}(
						$elm$core$Char$toCode(_int));
				}
			}
		}));
var $author$project$SvgUtil$refLabel = F3(
	function (attrs, siblingLength, str) {
		var dxStr = A2($myrho$elm_round$Round$round, 2, siblingLength / 3) + 'em';
		return $Garados007$elm_svg_parser$SvgParser$SvgElement(
			{
				attributes: _Utils_ap(
					attrs,
					_List_fromArray(
						[
							_Utils_Tuple2('fill', 'blue'),
							_Utils_Tuple2('font-family', 'Times,serif'),
							_Utils_Tuple2('dx', dxStr),
							_Utils_Tuple2('dy', '-.5em'),
							_Utils_Tuple2('text-anchor', 'start')
						])),
				children: _List_fromArray(
					[
						$Garados007$elm_svg_parser$SvgParser$SvgText(str)
					]),
				name: 'text'
			});
	});
var $author$project$SvgUtil$addRefLabel = F2(
	function (node, label) {
		if (node.$ === 'SvgElement') {
			var elem = node.a;
			var textLength = $author$project$SvgUtil$findTextLength(elem.children);
			var childTextAttrs = $author$project$SvgUtil$getTextAttrsFromList(elem.children);
			return A3($author$project$SvgUtil$refLabel, childTextAttrs, textLength, label);
		} else {
			return node;
		}
	});
var $author$project$SvgUtil$nodeTextFromNodeList = function (nodes) {
	nodeTextFromNodeList:
	while (true) {
		if (nodes.b) {
			if (nodes.a.$ === 'SvgText') {
				var str = nodes.a.a;
				var rest = nodes.b;
				return _Utils_ap(
					str,
					$author$project$SvgUtil$nodeTextFromNodeList(rest));
			} else {
				var rest = nodes.b;
				var $temp$nodes = rest;
				nodes = $temp$nodes;
				continue nodeTextFromNodeList;
			}
		} else {
			return '';
		}
	}
};
var $author$project$SvgUtil$getNodeTitle = function (nodes) {
	getNodeTitle:
	while (true) {
		if (!nodes.b) {
			return '';
		} else {
			var node = nodes.a;
			var rest = nodes.b;
			if (node.$ === 'SvgElement') {
				var elem = node.a;
				if (elem.name === 'title') {
					return $author$project$SvgUtil$nodeTextFromNodeList(elem.children);
				} else {
					var $temp$nodes = rest;
					nodes = $temp$nodes;
					continue getNodeTitle;
				}
			} else {
				var $temp$nodes = rest;
				nodes = $temp$nodes;
				continue getNodeTitle;
			}
		}
	}
};
var $author$project$SvgUtil$svgNodeListHasTitle = function (nodes) {
	svgNodeListHasTitle:
	while (true) {
		if (!nodes.b) {
			return false;
		} else {
			var n = nodes.a;
			var ns = nodes.b;
			if (n.$ === 'SvgElement') {
				var elem = n.a;
				if (elem.name === 'title') {
					return true;
				} else {
					var $temp$nodes = ns;
					nodes = $temp$nodes;
					continue svgNodeListHasTitle;
				}
			} else {
				var $temp$nodes = ns;
				nodes = $temp$nodes;
				continue svgNodeListHasTitle;
			}
		}
	}
};
var $author$project$SvgUtil$addRefdNodes = F2(
	function (listRef, node) {
		switch (node.$) {
			case 'SvgComment':
				return node;
			case 'SvgText':
				return node;
			default:
				var elem = node.a;
				if ($author$project$SvgUtil$svgNodeListHasTitle(elem.children)) {
					var nodeTitle = $author$project$SvgUtil$getNodeTitle(elem.children);
					return A2($elm$core$List$member, nodeTitle, listRef) ? $Garados007$elm_svg_parser$SvgParser$SvgElement(
						_Utils_update(
							elem,
							{
								children: A2(
									$elm$core$List$cons,
									A2($author$project$SvgUtil$addRefLabel, node, nodeTitle),
									elem.children)
							})) : $Garados007$elm_svg_parser$SvgParser$SvgElement(
						_Utils_update(
							elem,
							{
								children: A2(
									$elm$core$List$map,
									$author$project$SvgUtil$addRefdNodes(listRef),
									elem.children)
							}));
				} else {
					return $Garados007$elm_svg_parser$SvgParser$SvgElement(
						_Utils_update(
							elem,
							{
								children: A2(
									$elm$core$List$map,
									$author$project$SvgUtil$addRefdNodes(listRef),
									elem.children)
							}));
				}
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Danger = {$: 'Danger'};
var $rundis$elm_bootstrap$Bootstrap$Alert$Config = function (a) {
	return {$: 'Config', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Alert$role = F2(
	function (role_, _v0) {
		var configRec = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Alert$Config(
			_Utils_update(
				configRec,
				{role: role_}));
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$danger = function (conf) {
	return A2($rundis$elm_bootstrap$Bootstrap$Alert$role, $rundis$elm_bootstrap$Bootstrap$Internal$Role$Danger, conf);
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Info = {$: 'Info'};
var $rundis$elm_bootstrap$Bootstrap$Alert$info = function (conf) {
	return A2($rundis$elm_bootstrap$Bootstrap$Alert$role, $rundis$elm_bootstrap$Bootstrap$Internal$Role$Info, conf);
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Success = {$: 'Success'};
var $rundis$elm_bootstrap$Bootstrap$Alert$success = function (conf) {
	return A2($rundis$elm_bootstrap$Bootstrap$Alert$role, $rundis$elm_bootstrap$Bootstrap$Internal$Role$Success, conf);
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Warning = {$: 'Warning'};
var $rundis$elm_bootstrap$Bootstrap$Alert$warning = function (conf) {
	return A2($rundis$elm_bootstrap$Bootstrap$Alert$role, $rundis$elm_bootstrap$Bootstrap$Internal$Role$Warning, conf);
};
var $author$project$Main$alertColor = function (a) {
	switch (a.$) {
		case 'ASuccess':
			return $rundis$elm_bootstrap$Bootstrap$Alert$success;
		case 'AInfo':
			return $rundis$elm_bootstrap$Bootstrap$Alert$info;
		case 'AWarning':
			return $rundis$elm_bootstrap$Bootstrap$Alert$warning;
		default:
			return $rundis$elm_bootstrap$Bootstrap$Alert$danger;
	}
};
var $author$project$Main$alertTitle = function (a) {
	switch (a.$) {
		case 'ASuccess':
			return 'Success';
		case 'AInfo':
			return 'Success';
		case 'AWarning':
			return 'Warning';
		default:
			return 'Error';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Attrs = function (a) {
	return {$: 'Attrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Internal$Button$Attrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$Attrs = function (a) {
	return {$: 'Attrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Form$Input$Attrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Spinner$Attrs = function (a) {
	return {$: 'Attrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Spinner$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Spinner$Attrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$CardBlock = function (a) {
	return {$: 'CardBlock', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyBlockModifier = F2(
	function (option, options) {
		switch (option.$) {
			case 'AlignedBlock':
				var align = option.a;
				return _Utils_update(
					options,
					{
						aligned: $elm$core$Maybe$Just(align)
					});
			case 'BlockColoring':
				var role = option.a;
				return _Utils_update(
					options,
					{
						coloring: $elm$core$Maybe$Just(role)
					});
			case 'BlockTextColoring':
				var color = option.a;
				return _Utils_update(
					options,
					{
						textColoring: $elm$core$Maybe$Just(color)
					});
			default:
				var attrs = option.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
		}
	});
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultBlockOptions = {aligned: $elm$core$Maybe$Nothing, attributes: _List_Nil, coloring: $elm$core$Maybe$Nothing, textColoring: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption = function (size) {
	switch (size.$) {
		case 'XS':
			return $elm$core$Maybe$Nothing;
		case 'SM':
			return $elm$core$Maybe$Just('sm');
		case 'MD':
			return $elm$core$Maybe$Just('md');
		case 'LG':
			return $elm$core$Maybe$Just('lg');
		default:
			return $elm$core$Maybe$Just('xl');
	}
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignDirOption = function (dir) {
	switch (dir.$) {
		case 'Center':
			return 'center';
		case 'Left':
			return 'left';
		default:
			return 'right';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass = function (_v0) {
	var dir = _v0.dir;
	var size = _v0.size;
	return $elm$html$Html$Attributes$class(
		'text' + (A2(
			$elm$core$Maybe$withDefault,
			'-',
			A2(
				$elm$core$Maybe$map,
				function (s) {
					return '-' + (s + '-');
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(size))) + $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignDirOption(dir)));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass = F2(
	function (prefix, role) {
		return $elm$html$Html$Attributes$class(
			prefix + ('-' + function () {
				switch (role.$) {
					case 'Primary':
						return 'primary';
					case 'Secondary':
						return 'secondary';
					case 'Success':
						return 'success';
					case 'Info':
						return 'info';
					case 'Warning':
						return 'warning';
					case 'Danger':
						return 'danger';
					case 'Light':
						return 'light';
					default:
						return 'dark';
				}
			}()));
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass = function (color) {
	if (color.$ === 'White') {
		return $elm$html$Html$Attributes$class('text-white');
	} else {
		var role = color.a;
		return A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'text', role);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$blockAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyBlockModifier, $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultBlockOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('card-body')
			]),
		_Utils_ap(
			function () {
				var _v0 = options.aligned;
				if (_v0.$ === 'Just') {
					var align = _v0.a;
					return _List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(align)
						]);
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.coloring;
					if (_v1.$ === 'Just') {
						var role = _v1.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg', role)
							]);
					} else {
						return _List_Nil;
					}
				}(),
				_Utils_ap(
					function () {
						var _v2 = options.textColoring;
						if (_v2.$ === 'Just') {
							var color = _v2.a;
							return _List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass(color)
								]);
						} else {
							return _List_Nil;
						}
					}(),
					options.attributes))));
};
var $elm$html$Html$div = _VirtualDom_node('div');
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$block = F2(
	function (options, items) {
		return $rundis$elm_bootstrap$Bootstrap$Card$Internal$CardBlock(
			A2(
				$elm$html$Html$div,
				$rundis$elm_bootstrap$Bootstrap$Card$Internal$blockAttributes(options),
				A2(
					$elm$core$List$map,
					function (_v0) {
						var e = _v0.a;
						return e;
					},
					items)));
	});
var $rundis$elm_bootstrap$Bootstrap$Accordion$block = $rundis$elm_bootstrap$Bootstrap$Card$Internal$block;
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Block = {$: 'Block'};
var $rundis$elm_bootstrap$Bootstrap$Button$block = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Block;
var $rundis$elm_bootstrap$Bootstrap$Navbar$Brand = function (a) {
	return {$: 'Brand', a: a};
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $rundis$elm_bootstrap$Bootstrap$Navbar$Config = function (a) {
	return {$: 'Config', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$updateConfig = F2(
	function (mapper, _v0) {
		var conf = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Navbar$Config(
			mapper(conf));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$brand = F3(
	function (attributes, children, config_) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$updateConfig,
			function (conf) {
				return _Utils_update(
					conf,
					{
						brand: $elm$core$Maybe$Just(
							$rundis$elm_bootstrap$Bootstrap$Navbar$Brand(
								A2(
									$elm$html$Html$a,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('navbar-brand')
											]),
										attributes),
									children)))
					});
			},
			config_);
	});
var $elm$html$Html$button = _VirtualDom_node('button');
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$applyModifier = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'Size':
				var size = modifier.a;
				return _Utils_update(
					options,
					{
						size: $elm$core$Maybe$Just(size)
					});
			case 'Coloring':
				var coloring = modifier.a;
				return _Utils_update(
					options,
					{
						coloring: $elm$core$Maybe$Just(coloring)
					});
			case 'Block':
				return _Utils_update(
					options,
					{block: true});
			case 'Disabled':
				var val = modifier.a;
				return _Utils_update(
					options,
					{disabled: val});
			default:
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
		}
	});
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$defaultOptions = {attributes: _List_Nil, block: false, coloring: $elm$core$Maybe$Nothing, disabled: false, size: $elm$core$Maybe$Nothing};
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass = function (role) {
	switch (role.$) {
		case 'Primary':
			return 'primary';
		case 'Secondary':
			return 'secondary';
		case 'Success':
			return 'success';
		case 'Info':
			return 'info';
		case 'Warning':
			return 'warning';
		case 'Danger':
			return 'danger';
		case 'Dark':
			return 'dark';
		case 'Light':
			return 'light';
		default:
			return 'link';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Internal$Button$applyModifier, $rundis$elm_bootstrap$Bootstrap$Internal$Button$defaultOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('btn', true),
						_Utils_Tuple2('btn-block', options.block),
						_Utils_Tuple2('disabled', options.disabled)
					])),
				$elm$html$Html$Attributes$disabled(options.disabled)
			]),
		_Utils_ap(
			function () {
				var _v0 = A2($elm$core$Maybe$andThen, $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption, options.size);
				if (_v0.$ === 'Just') {
					var s = _v0.a;
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$class('btn-' + s)
						]);
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.coloring;
					if (_v1.$ === 'Just') {
						if (_v1.a.$ === 'Roled') {
							var role = _v1.a.a;
							return _List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'btn-' + $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass(role))
								]);
						} else {
							var role = _v1.a.a;
							return _List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'btn-outline-' + $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass(role))
								]);
						}
					} else {
						return _List_Nil;
					}
				}(),
				options.attributes)));
};
var $rundis$elm_bootstrap$Bootstrap$Button$button = F2(
	function (options, children) {
		return A2(
			$elm$html$Html$button,
			$rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes(options),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Accordion$Card = function (a) {
	return {$: 'Card', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$card = function (rec) {
	return $rundis$elm_bootstrap$Bootstrap$Accordion$Card(
		{blocks: rec.blocks, header: rec.header, id: rec.id, options: rec.options});
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$Config = function (a) {
	return {$: 'Config', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$cards = F2(
	function (cards_, _v0) {
		var configRec = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Accordion$Config(
			_Utils_update(
				configRec,
				{cards: cards_}));
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$children = F2(
	function (children_, _v0) {
		var configRec = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Alert$Config(
			_Utils_update(
				configRec,
				{children: children_}));
	});
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $author$project$SvgUtil$cleanFront = function (str) {
	return '<svg' + A3(
		$elm$core$List$foldr,
		$elm$core$Basics$append,
		'',
		A2(
			$elm$core$List$drop,
			1,
			A2($elm$core$String$split, '<svg', str)));
};
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $TSFoster$elm_tuple_extra$Tuple3$join = F3(
	function (a, b, c) {
		return _Utils_Tuple3(a, b, c);
	});
var $elm$svg$Svg$Events$on = $elm$html$Html$Events$on;
var $author$project$Main$clickHandler = function (msg) {
	var targetId = A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['target', 'parentNode', 'id']),
		$elm$json$Json$Decode$string);
	var mouseY = A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['clientY']),
		$elm$json$Json$Decode$int);
	var mouseX = A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['clientX']),
		$elm$json$Json$Decode$int);
	return A2(
		$elm$svg$Svg$Events$on,
		'click',
		A2(
			$elm$json$Json$Decode$map,
			msg,
			A4($elm$json$Json$Decode$map3, $TSFoster$elm_tuple_extra$Tuple3$join, targetId, mouseX, mouseY)));
};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$SM = {$: 'SM'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$updateOptions = F2(
	function (mapper, _v0) {
		var conf = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Navbar$Config(
			_Utils_update(
				conf,
				{
					options: mapper(conf.options)
				}));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$toggleAt = F2(
	function (size, conf) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$updateOptions,
			function (opt) {
				return _Utils_update(
					opt,
					{toggleAt: size});
			},
			conf);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$collapseSmall = $rundis$elm_bootstrap$Bootstrap$Navbar$toggleAt($rundis$elm_bootstrap$Bootstrap$General$Internal$SM);
var $elm$html$Html$Attributes$cols = function (n) {
	return A2(
		_VirtualDom_attribute,
		'cols',
		$elm$core$String$fromInt(n));
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$config = function (toMsg) {
	return $rundis$elm_bootstrap$Bootstrap$Accordion$Config(
		{cards: _List_Nil, onlyOneOpen: false, toMsg: toMsg, withAnimation: false});
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Secondary = {$: 'Secondary'};
var $rundis$elm_bootstrap$Bootstrap$Alert$config = $rundis$elm_bootstrap$Bootstrap$Alert$Config(
	{attributes: _List_Nil, children: _List_Nil, dismissable: $elm$core$Maybe$Nothing, role: $rundis$elm_bootstrap$Bootstrap$Internal$Role$Secondary, visibility: $rundis$elm_bootstrap$Bootstrap$Alert$Shown, withAnimation: false});
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Light = {$: 'Light'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$Light = {$: 'Light'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$Roled = function (a) {
	return {$: 'Roled', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$XS = {$: 'XS'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$config = function (toMsg) {
	return $rundis$elm_bootstrap$Bootstrap$Navbar$Config(
		{
			brand: $elm$core$Maybe$Nothing,
			customItems: _List_Nil,
			items: _List_Nil,
			options: {
				attributes: _List_Nil,
				fix: $elm$core$Maybe$Nothing,
				isContainer: false,
				scheme: $elm$core$Maybe$Just(
					{
						bgColor: $rundis$elm_bootstrap$Bootstrap$Navbar$Roled($rundis$elm_bootstrap$Bootstrap$Internal$Role$Light),
						modifier: $rundis$elm_bootstrap$Bootstrap$Navbar$Light
					}),
				toggleAt: $rundis$elm_bootstrap$Bootstrap$General$Internal$XS
			},
			toMsg: toMsg,
			withAnimation: false
		});
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$BlockItem = function (a) {
	return {$: 'BlockItem', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Block$custom = function (element) {
	return $rundis$elm_bootstrap$Bootstrap$Card$Internal$BlockItem(element);
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$customItems = F2(
	function (items_, config_) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$updateConfig,
			function (conf) {
				return _Utils_update(
					conf,
					{customItems: items_});
			},
			config_);
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$dismissableWithAnimation = F2(
	function (dismissMsg, _v0) {
		var configRec = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Alert$Config(
			_Utils_update(
				configRec,
				{
					dismissable: $elm$core$Maybe$Just(dismissMsg),
					withAnimation: true
				}));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$Dropdown = function (a) {
	return {$: 'Dropdown', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$NavDropdown = function (a) {
	return {$: 'NavDropdown', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$dropdown = function (conf) {
	return $rundis$elm_bootstrap$Bootstrap$Navbar$NavDropdown(
		$rundis$elm_bootstrap$Bootstrap$Navbar$Dropdown(conf));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$DropdownItem = function (a) {
	return {$: 'DropdownItem', a: a};
};
var $elm$html$Html$h6 = _VirtualDom_node('h6');
var $rundis$elm_bootstrap$Bootstrap$Navbar$dropdownHeader = function (children) {
	return $rundis$elm_bootstrap$Bootstrap$Navbar$DropdownItem(
		A2(
			$elm$html$Html$h6,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('dropdown-header')
				]),
			children));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem = F2(
	function (attributes, children) {
		return $rundis$elm_bootstrap$Bootstrap$Navbar$DropdownItem(
			A2(
				$elm$html$Html$a,
				_Utils_ap(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('dropdown-item')
						]),
					attributes),
				children));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$DropdownToggle = function (a) {
	return {$: 'DropdownToggle', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$dropdownToggle = F2(
	function (attributes, children) {
		return $rundis$elm_bootstrap$Bootstrap$Navbar$DropdownToggle(
			{attributes: attributes, children: children});
	});
var $truqu$elm_base64$Base64$Encode$intToBase64 = function (i) {
	switch (i) {
		case 0:
			return 'A';
		case 1:
			return 'B';
		case 2:
			return 'C';
		case 3:
			return 'D';
		case 4:
			return 'E';
		case 5:
			return 'F';
		case 6:
			return 'G';
		case 7:
			return 'H';
		case 8:
			return 'I';
		case 9:
			return 'J';
		case 10:
			return 'K';
		case 11:
			return 'L';
		case 12:
			return 'M';
		case 13:
			return 'N';
		case 14:
			return 'O';
		case 15:
			return 'P';
		case 16:
			return 'Q';
		case 17:
			return 'R';
		case 18:
			return 'S';
		case 19:
			return 'T';
		case 20:
			return 'U';
		case 21:
			return 'V';
		case 22:
			return 'W';
		case 23:
			return 'X';
		case 24:
			return 'Y';
		case 25:
			return 'Z';
		case 26:
			return 'a';
		case 27:
			return 'b';
		case 28:
			return 'c';
		case 29:
			return 'd';
		case 30:
			return 'e';
		case 31:
			return 'f';
		case 32:
			return 'g';
		case 33:
			return 'h';
		case 34:
			return 'i';
		case 35:
			return 'j';
		case 36:
			return 'k';
		case 37:
			return 'l';
		case 38:
			return 'm';
		case 39:
			return 'n';
		case 40:
			return 'o';
		case 41:
			return 'p';
		case 42:
			return 'q';
		case 43:
			return 'r';
		case 44:
			return 's';
		case 45:
			return 't';
		case 46:
			return 'u';
		case 47:
			return 'v';
		case 48:
			return 'w';
		case 49:
			return 'x';
		case 50:
			return 'y';
		case 51:
			return 'z';
		case 52:
			return '0';
		case 53:
			return '1';
		case 54:
			return '2';
		case 55:
			return '3';
		case 56:
			return '4';
		case 57:
			return '5';
		case 58:
			return '6';
		case 59:
			return '7';
		case 60:
			return '8';
		case 61:
			return '9';
		case 62:
			return '+';
		default:
			return '/';
	}
};
var $truqu$elm_base64$Base64$Encode$toBase64 = function (_int) {
	return _Utils_ap(
		$truqu$elm_base64$Base64$Encode$intToBase64(63 & (_int >>> 18)),
		_Utils_ap(
			$truqu$elm_base64$Base64$Encode$intToBase64(63 & (_int >>> 12)),
			_Utils_ap(
				$truqu$elm_base64$Base64$Encode$intToBase64(63 & (_int >>> 6)),
				$truqu$elm_base64$Base64$Encode$intToBase64(63 & (_int >>> 0)))));
};
var $truqu$elm_base64$Base64$Encode$add = F2(
	function (_char, _v0) {
		var res = _v0.a;
		var count = _v0.b;
		var acc = _v0.c;
		var current = (acc << 8) | _char;
		if (count === 2) {
			return _Utils_Tuple3(
				_Utils_ap(
					res,
					$truqu$elm_base64$Base64$Encode$toBase64(current)),
				0,
				0);
		} else {
			return _Utils_Tuple3(res, count + 1, current);
		}
	});
var $truqu$elm_base64$Base64$Encode$chomp = F2(
	function (char_, acc) {
		var _char = $elm$core$Char$toCode(char_);
		return (_char < 128) ? A2($truqu$elm_base64$Base64$Encode$add, _char, acc) : ((_char < 2048) ? A2(
			$truqu$elm_base64$Base64$Encode$add,
			128 | (63 & _char),
			A2($truqu$elm_base64$Base64$Encode$add, 192 | (_char >>> 6), acc)) : (((_char < 55296) || ((_char >= 57344) && (_char <= 65535))) ? A2(
			$truqu$elm_base64$Base64$Encode$add,
			128 | (63 & _char),
			A2(
				$truqu$elm_base64$Base64$Encode$add,
				128 | (63 & (_char >>> 6)),
				A2($truqu$elm_base64$Base64$Encode$add, 224 | (_char >>> 12), acc))) : A2(
			$truqu$elm_base64$Base64$Encode$add,
			128 | (63 & _char),
			A2(
				$truqu$elm_base64$Base64$Encode$add,
				128 | (63 & (_char >>> 6)),
				A2(
					$truqu$elm_base64$Base64$Encode$add,
					128 | (63 & (_char >>> 12)),
					A2($truqu$elm_base64$Base64$Encode$add, 240 | (_char >>> 18), acc))))));
	});
var $truqu$elm_base64$Base64$Encode$initial = _Utils_Tuple3('', 0, 0);
var $truqu$elm_base64$Base64$Encode$wrapUp = function (_v0) {
	var res = _v0.a;
	var cnt = _v0.b;
	var acc = _v0.c;
	switch (cnt) {
		case 1:
			return res + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & (acc >>> 2)) + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & (acc << 4)) + '=='));
		case 2:
			return res + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & (acc >>> 10)) + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & (acc >>> 4)) + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & (acc << 2)) + '=')));
		default:
			return res;
	}
};
var $truqu$elm_base64$Base64$Encode$encode = function (input) {
	return $truqu$elm_base64$Base64$Encode$wrapUp(
		A3($elm$core$String$foldl, $truqu$elm_base64$Base64$Encode$chomp, $truqu$elm_base64$Base64$Encode$initial, input));
};
var $truqu$elm_base64$Base64$encode = $truqu$elm_base64$Base64$Encode$encode;
var $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Roled = function (a) {
	return {$: 'Roled', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$ListGroup$danger = $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Roled($rundis$elm_bootstrap$Bootstrap$Internal$Role$Danger);
var $author$project$Main$RemoveFilter = function (a) {
	return {$: 'RemoveFilter', a: a};
};
var $author$project$Main$SetAction = F2(
	function (a, b) {
		return {$: 'SetAction', a: a, b: b};
	});
var $author$project$Main$SetFilter = F2(
	function (a, b) {
		return {$: 'SetFilter', a: a, b: b};
	});
var $author$project$Main$ToggleCheck = function (a) {
	return {$: 'ToggleCheck', a: a};
};
var $author$project$Main$UpdateFilterParam = F2(
	function (a, b) {
		return {$: 'UpdateFilterParam', a: a, b: b};
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColAttrs = function (a) {
	return {$: 'ColAttrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColAttrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Column = function (a) {
	return {$: 'Column', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$col = F2(
	function (options, children) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Column(
			{children: children, options: options});
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$container = F2(
	function (attributes, children) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('container')
					]),
				attributes),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring = function (a) {
	return {$: 'Coloring', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Danger = {$: 'Danger'};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled = function (a) {
	return {$: 'Roled', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$danger = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled($rundis$elm_bootstrap$Bootstrap$Internal$Button$Danger));
var $elm$html$Html$option = _VirtualDom_node('option');
var $elm$html$Html$Attributes$selected = $elm$html$Html$Attributes$boolProperty('selected');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$Main$filterOption = F3(
	function (filts, selInd, index) {
		var sel = $elm$html$Html$Attributes$selected(
			_Utils_eq(index, selInd));
		var filt = A2($elm_community$list_extra$List$Extra$getAt, index, filts);
		if (filt.$ === 'Just') {
			var _v1 = filt.a;
			var filtText = _v1.a;
			return A2(
				$elm$html$Html$option,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$value(
						$elm$core$String$fromInt(index)),
						sel
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(filtText)
					]));
		} else {
			return A2(
				$elm$html$Html$option,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$value('-1')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Invalid filter index')
					]));
		}
	});
var $elm$html$Html$Attributes$hidden = $elm$html$Html$Attributes$boolProperty('hidden');
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$html$Html$input = _VirtualDom_node('input');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$m1 = $elm$html$Html$Attributes$class('m-1');
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col4 = {$: 'Col4'};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$MD = {$: 'MD'};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColWidth = function (a) {
	return {$: 'ColWidth', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width = F2(
	function (screenSize, columnCount) {
		return {columnCount: columnCount, screenSize: screenSize};
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$width = F2(
	function (size, count) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColWidth(
			A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width, size, count));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$md4 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, $rundis$elm_bootstrap$Bootstrap$General$Internal$MD, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col4);
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col5 = {$: 'Col5'};
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$md5 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, $rundis$elm_bootstrap$Bootstrap$General$Internal$MD, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col5);
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColAuto = {$: 'ColAuto'};
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$mdAuto = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, $rundis$elm_bootstrap$Bootstrap$General$Internal$MD, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColAuto);
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml1 = $elm$html$Html$Attributes$class('ml-1');
var $rundis$elm_bootstrap$Bootstrap$Button$onClick = function (message) {
	return $rundis$elm_bootstrap$Bootstrap$Button$attrs(
		_List_fromArray(
			[
				A2(
				$elm$html$Html$Events$preventDefaultOn,
				'click',
				$elm$json$Json$Decode$succeed(
					_Utils_Tuple2(message, true)))
			]));
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Outlined = function (a) {
	return {$: 'Outlined', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$outlineDanger = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Outlined($rundis$elm_bootstrap$Bootstrap$Internal$Button$Danger));
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Light = {$: 'Light'};
var $rundis$elm_bootstrap$Bootstrap$Button$outlineLight = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Outlined($rundis$elm_bootstrap$Bootstrap$Internal$Button$Light));
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Success = {$: 'Success'};
var $rundis$elm_bootstrap$Bootstrap$Button$outlineSuccess = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Outlined($rundis$elm_bootstrap$Bootstrap$Internal$Button$Success));
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col = {$: 'Col'};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColAlign = F2(
	function (align_, options) {
		var _v0 = align_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						alignXs: $elm$core$Maybe$Just(align_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						alignSm: $elm$core$Maybe$Just(align_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						alignMd: $elm$core$Maybe$Just(align_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						alignLg: $elm$core$Maybe$Just(align_)
					});
			default:
				return _Utils_update(
					options,
					{
						alignXl: $elm$core$Maybe$Just(align_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOffset = F2(
	function (offset_, options) {
		var _v0 = offset_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						offsetXs: $elm$core$Maybe$Just(offset_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						offsetSm: $elm$core$Maybe$Just(offset_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						offsetMd: $elm$core$Maybe$Just(offset_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						offsetLg: $elm$core$Maybe$Just(offset_)
					});
			default:
				return _Utils_update(
					options,
					{
						offsetXl: $elm$core$Maybe$Just(offset_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOrder = F2(
	function (order_, options) {
		var _v0 = order_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						orderXs: $elm$core$Maybe$Just(order_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						orderSm: $elm$core$Maybe$Just(order_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						orderMd: $elm$core$Maybe$Just(order_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						orderLg: $elm$core$Maybe$Just(order_)
					});
			default:
				return _Utils_update(
					options,
					{
						orderXl: $elm$core$Maybe$Just(order_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPull = F2(
	function (pull_, options) {
		var _v0 = pull_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						pullXs: $elm$core$Maybe$Just(pull_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						pullSm: $elm$core$Maybe$Just(pull_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						pullMd: $elm$core$Maybe$Just(pull_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						pullLg: $elm$core$Maybe$Just(pull_)
					});
			default:
				return _Utils_update(
					options,
					{
						pullXl: $elm$core$Maybe$Just(pull_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPush = F2(
	function (push_, options) {
		var _v0 = push_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						pushXs: $elm$core$Maybe$Just(push_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						pushSm: $elm$core$Maybe$Just(push_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						pushMd: $elm$core$Maybe$Just(push_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						pushLg: $elm$core$Maybe$Just(push_)
					});
			default:
				return _Utils_update(
					options,
					{
						pushXl: $elm$core$Maybe$Just(push_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColWidth = F2(
	function (width_, options) {
		var _v0 = width_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						widthXs: $elm$core$Maybe$Just(width_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						widthSm: $elm$core$Maybe$Just(width_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						widthMd: $elm$core$Maybe$Just(width_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						widthLg: $elm$core$Maybe$Just(width_)
					});
			default:
				return _Utils_update(
					options,
					{
						widthXl: $elm$core$Maybe$Just(width_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOption = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'ColAttrs':
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
			case 'ColWidth':
				var width_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColWidth, width_, options);
			case 'ColOffset':
				var offset_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOffset, offset_, options);
			case 'ColPull':
				var pull_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPull, pull_, options);
			case 'ColPush':
				var push_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPush, push_, options);
			case 'ColOrder':
				var order_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOrder, order_, options);
			case 'ColAlign':
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColAlign, align, options);
			default:
				var align = modifier.a;
				return _Utils_update(
					options,
					{
						textAlign: $elm$core$Maybe$Just(align)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$columnCountOption = function (size) {
	switch (size.$) {
		case 'Col':
			return $elm$core$Maybe$Nothing;
		case 'Col1':
			return $elm$core$Maybe$Just('1');
		case 'Col2':
			return $elm$core$Maybe$Just('2');
		case 'Col3':
			return $elm$core$Maybe$Just('3');
		case 'Col4':
			return $elm$core$Maybe$Just('4');
		case 'Col5':
			return $elm$core$Maybe$Just('5');
		case 'Col6':
			return $elm$core$Maybe$Just('6');
		case 'Col7':
			return $elm$core$Maybe$Just('7');
		case 'Col8':
			return $elm$core$Maybe$Just('8');
		case 'Col9':
			return $elm$core$Maybe$Just('9');
		case 'Col10':
			return $elm$core$Maybe$Just('10');
		case 'Col11':
			return $elm$core$Maybe$Just('11');
		case 'Col12':
			return $elm$core$Maybe$Just('12');
		default:
			return $elm$core$Maybe$Just('auto');
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthClass = function (_v0) {
	var screenSize = _v0.screenSize;
	var columnCount = _v0.columnCount;
	return $elm$html$Html$Attributes$class(
		'col' + (A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return '-' + v;
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))) + A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return '-' + v;
				},
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$columnCountOption(columnCount)))));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthsToAttributes = function (widths) {
	var width_ = function (w) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthClass, w);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, width_, widths));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultColOptions = {alignLg: $elm$core$Maybe$Nothing, alignMd: $elm$core$Maybe$Nothing, alignSm: $elm$core$Maybe$Nothing, alignXl: $elm$core$Maybe$Nothing, alignXs: $elm$core$Maybe$Nothing, attributes: _List_Nil, offsetLg: $elm$core$Maybe$Nothing, offsetMd: $elm$core$Maybe$Nothing, offsetSm: $elm$core$Maybe$Nothing, offsetXl: $elm$core$Maybe$Nothing, offsetXs: $elm$core$Maybe$Nothing, orderLg: $elm$core$Maybe$Nothing, orderMd: $elm$core$Maybe$Nothing, orderSm: $elm$core$Maybe$Nothing, orderXl: $elm$core$Maybe$Nothing, orderXs: $elm$core$Maybe$Nothing, pullLg: $elm$core$Maybe$Nothing, pullMd: $elm$core$Maybe$Nothing, pullSm: $elm$core$Maybe$Nothing, pullXl: $elm$core$Maybe$Nothing, pullXs: $elm$core$Maybe$Nothing, pushLg: $elm$core$Maybe$Nothing, pushMd: $elm$core$Maybe$Nothing, pushSm: $elm$core$Maybe$Nothing, pushXl: $elm$core$Maybe$Nothing, pushXs: $elm$core$Maybe$Nothing, textAlign: $elm$core$Maybe$Nothing, widthLg: $elm$core$Maybe$Nothing, widthMd: $elm$core$Maybe$Nothing, widthSm: $elm$core$Maybe$Nothing, widthXl: $elm$core$Maybe$Nothing, widthXs: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetCountOption = function (size) {
	switch (size.$) {
		case 'Offset0':
			return '0';
		case 'Offset1':
			return '1';
		case 'Offset2':
			return '2';
		case 'Offset3':
			return '3';
		case 'Offset4':
			return '4';
		case 'Offset5':
			return '5';
		case 'Offset6':
			return '6';
		case 'Offset7':
			return '7';
		case 'Offset8':
			return '8';
		case 'Offset9':
			return '9';
		case 'Offset10':
			return '10';
		default:
			return '11';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString = function (screenSize) {
	var _v0 = $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize);
	if (_v0.$ === 'Just') {
		var s = _v0.a;
		return '-' + (s + '-');
	} else {
		return '-';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetClass = function (_v0) {
	var screenSize = _v0.screenSize;
	var offsetCount = _v0.offsetCount;
	return $elm$html$Html$Attributes$class(
		'offset' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetCountOption(offsetCount)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetsToAttributes = function (offsets) {
	var offset_ = function (m) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetClass, m);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, offset_, offsets));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderColOption = function (size) {
	switch (size.$) {
		case 'OrderFirst':
			return 'first';
		case 'Order1':
			return '1';
		case 'Order2':
			return '2';
		case 'Order3':
			return '3';
		case 'Order4':
			return '4';
		case 'Order5':
			return '5';
		case 'Order6':
			return '6';
		case 'Order7':
			return '7';
		case 'Order8':
			return '8';
		case 'Order9':
			return '9';
		case 'Order10':
			return '10';
		case 'Order11':
			return '11';
		case 'Order12':
			return '12';
		default:
			return 'last';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderToAttributes = function (orders) {
	var order_ = function (m) {
		if (m.$ === 'Just') {
			var screenSize = m.a.screenSize;
			var moveCount = m.a.moveCount;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'order' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderColOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, order_, orders));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption = function (size) {
	switch (size.$) {
		case 'Move0':
			return '0';
		case 'Move1':
			return '1';
		case 'Move2':
			return '2';
		case 'Move3':
			return '3';
		case 'Move4':
			return '4';
		case 'Move5':
			return '5';
		case 'Move6':
			return '6';
		case 'Move7':
			return '7';
		case 'Move8':
			return '8';
		case 'Move9':
			return '9';
		case 'Move10':
			return '10';
		case 'Move11':
			return '11';
		default:
			return '12';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$pullsToAttributes = function (pulls) {
	var pull_ = function (m) {
		if (m.$ === 'Just') {
			var screenSize = m.a.screenSize;
			var moveCount = m.a.moveCount;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'pull' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, pull_, pulls));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$pushesToAttributes = function (pushes) {
	var push_ = function (m) {
		if (m.$ === 'Just') {
			var screenSize = m.a.screenSize;
			var moveCount = m.a.moveCount;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'push' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, push_, pushes));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$verticalAlignOption = function (align) {
	switch (align.$) {
		case 'Top':
			return 'start';
		case 'Middle':
			return 'center';
		default:
			return 'end';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignClass = F2(
	function (prefix, _v0) {
		var align = _v0.align;
		var screenSize = _v0.screenSize;
		return $elm$html$Html$Attributes$class(
			_Utils_ap(
				prefix,
				_Utils_ap(
					A2(
						$elm$core$Maybe$withDefault,
						'',
						A2(
							$elm$core$Maybe$map,
							function (v) {
								return v + '-';
							},
							$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))),
					$rundis$elm_bootstrap$Bootstrap$Grid$Internal$verticalAlignOption(align))));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes = F2(
	function (prefix, aligns) {
		var align = function (a) {
			return A2(
				$elm$core$Maybe$map,
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignClass(prefix),
				a);
		};
		return A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			A2($elm$core$List$map, align, aligns));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOption, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultColOptions, modifiers);
	var shouldAddDefaultXs = !$elm$core$List$length(
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[options.widthXs, options.widthSm, options.widthMd, options.widthLg, options.widthXl])));
	return _Utils_ap(
		$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthsToAttributes(
			_List_fromArray(
				[
					shouldAddDefaultXs ? $elm$core$Maybe$Just(
					A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width, $rundis$elm_bootstrap$Bootstrap$General$Internal$XS, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col)) : options.widthXs,
					options.widthSm,
					options.widthMd,
					options.widthLg,
					options.widthXl
				])),
		_Utils_ap(
			$rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetsToAttributes(
				_List_fromArray(
					[options.offsetXs, options.offsetSm, options.offsetMd, options.offsetLg, options.offsetXl])),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$pullsToAttributes(
					_List_fromArray(
						[options.pullXs, options.pullSm, options.pullMd, options.pullLg, options.pullXl])),
				_Utils_ap(
					$rundis$elm_bootstrap$Bootstrap$Grid$Internal$pushesToAttributes(
						_List_fromArray(
							[options.pushXs, options.pushSm, options.pushMd, options.pushLg, options.pushXl])),
					_Utils_ap(
						$rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderToAttributes(
							_List_fromArray(
								[options.orderXs, options.orderSm, options.orderMd, options.orderLg, options.orderXl])),
						_Utils_ap(
							A2(
								$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes,
								'align-self-',
								_List_fromArray(
									[options.alignXs, options.alignSm, options.alignMd, options.alignLg, options.alignXl])),
							_Utils_ap(
								function () {
									var _v0 = options.textAlign;
									if (_v0.$ === 'Just') {
										var a = _v0.a;
										return _List_fromArray(
											[
												$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(a)
											]);
									} else {
										return _List_Nil;
									}
								}(),
								options.attributes)))))));
};
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $rundis$elm_bootstrap$Bootstrap$Grid$renderCol = function (column) {
	switch (column.$) {
		case 'Column':
			var options = column.a.options;
			var children = column.a.children;
			return A2(
				$elm$html$Html$div,
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes(options),
				children);
		case 'ColBreak':
			var e = column.a;
			return e;
		default:
			var options = column.a.options;
			var children = column.a.children;
			return A3(
				$elm$html$Html$Keyed$node,
				'div',
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes(options),
				children);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowHAlign = F2(
	function (align, options) {
		var _v0 = align.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						hAlignXs: $elm$core$Maybe$Just(align)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						hAlignSm: $elm$core$Maybe$Just(align)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						hAlignMd: $elm$core$Maybe$Just(align)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						hAlignLg: $elm$core$Maybe$Just(align)
					});
			default:
				return _Utils_update(
					options,
					{
						hAlignXl: $elm$core$Maybe$Just(align)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowVAlign = F2(
	function (align_, options) {
		var _v0 = align_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						vAlignXs: $elm$core$Maybe$Just(align_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						vAlignSm: $elm$core$Maybe$Just(align_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						vAlignMd: $elm$core$Maybe$Just(align_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						vAlignLg: $elm$core$Maybe$Just(align_)
					});
			default:
				return _Utils_update(
					options,
					{
						vAlignXl: $elm$core$Maybe$Just(align_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowOption = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'RowAttrs':
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
			case 'RowVAlign':
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowVAlign, align, options);
			default:
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowHAlign, align, options);
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultRowOptions = {attributes: _List_Nil, hAlignLg: $elm$core$Maybe$Nothing, hAlignMd: $elm$core$Maybe$Nothing, hAlignSm: $elm$core$Maybe$Nothing, hAlignXl: $elm$core$Maybe$Nothing, hAlignXs: $elm$core$Maybe$Nothing, vAlignLg: $elm$core$Maybe$Nothing, vAlignMd: $elm$core$Maybe$Nothing, vAlignSm: $elm$core$Maybe$Nothing, vAlignXl: $elm$core$Maybe$Nothing, vAlignXs: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$horizontalAlignOption = function (align) {
	switch (align.$) {
		case 'Left':
			return 'start';
		case 'Center':
			return 'center';
		case 'Right':
			return 'end';
		case 'Around':
			return 'around';
		default:
			return 'between';
	}
};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$hAlignClass = function (_v0) {
	var align = _v0.align;
	var screenSize = _v0.screenSize;
	return $elm$html$Html$Attributes$class(
		'justify-content-' + (A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return v + '-';
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))) + $rundis$elm_bootstrap$Bootstrap$General$Internal$horizontalAlignOption(align)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$hAlignsToAttributes = function (aligns) {
	var align = function (a) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$General$Internal$hAlignClass, a);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, align, aligns));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowOption, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultRowOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('row')
			]),
		_Utils_ap(
			A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes,
				'align-items-',
				_List_fromArray(
					[options.vAlignXs, options.vAlignSm, options.vAlignMd, options.vAlignLg, options.vAlignXl])),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$hAlignsToAttributes(
					_List_fromArray(
						[options.hAlignXs, options.hAlignSm, options.hAlignMd, options.hAlignLg, options.hAlignXl])),
				options.attributes)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$row = F2(
	function (options, cols) {
		return A2(
			$elm$html$Html$div,
			$rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowAttributes(options),
			A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Grid$renderCol, cols));
	});
var $elm$html$Html$select = _VirtualDom_node('select');
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Size = function (a) {
	return {$: 'Size', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$small = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Size($rundis$elm_bootstrap$Bootstrap$General$Internal$SM);
var $rundis$elm_bootstrap$Bootstrap$Button$success = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled($rundis$elm_bootstrap$Bootstrap$Internal$Button$Success));
var $elm_community$html_extra$Html$Events$Extra$customDecoder = F2(
	function (d, f) {
		var resultDecoder = function (x) {
			if (x.$ === 'Ok') {
				var a = x.a;
				return $elm$json$Json$Decode$succeed(a);
			} else {
				var e = x.a;
				return $elm$json$Json$Decode$fail(e);
			}
		};
		return A2(
			$elm$json$Json$Decode$andThen,
			resultDecoder,
			A2($elm$json$Json$Decode$map, f, d));
	});
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (maybe.$ === 'Just') {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $elm_community$html_extra$Html$Events$Extra$maybeStringToResult = $elm$core$Result$fromMaybe('could not convert string');
var $elm_community$html_extra$Html$Events$Extra$targetValueIntParse = A2(
	$elm_community$html_extra$Html$Events$Extra$customDecoder,
	$elm$html$Html$Events$targetValue,
	A2($elm$core$Basics$composeR, $elm$core$String$toInt, $elm_community$html_extra$Html$Events$Extra$maybeStringToResult));
var $author$project$Main$filterView = F4(
	function (model, item, idStr, event) {
		var showParam = A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2('', false),
			A2($elm_community$list_extra$List$Extra$getAt, item.selectIndex, model.initData.filters)).b;
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$container,
			_List_Nil,
			A2(
				$elm$core$List$cons,
				A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Grid$Col$mdAuto,
									$rundis$elm_bootstrap$Bootstrap$Grid$Col$attrs(_List_Nil)
								]),
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Button$button,
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Button$outlineLight,
											$rundis$elm_bootstrap$Bootstrap$Button$small,
											$rundis$elm_bootstrap$Bootstrap$Button$attrs(
											_Utils_ap(
												_List_fromArray(
													[
														$elm$html$Html$Attributes$id(idStr),
														$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$m1,
														A2($elm$html$Html$Attributes$style, 'cursor', 'grab')
													]),
												event))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('\u2630')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Button$button,
									_List_fromArray(
										[
											item.enabled ? $rundis$elm_bootstrap$Bootstrap$Button$outlineSuccess : $rundis$elm_bootstrap$Bootstrap$Button$outlineDanger,
											$rundis$elm_bootstrap$Bootstrap$Button$onClick(
											$author$project$Main$ToggleCheck(item.id)),
											$rundis$elm_bootstrap$Bootstrap$Button$small,
											$rundis$elm_bootstrap$Bootstrap$Button$attrs(
											_List_fromArray(
												[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$m1]))
										]),
									_List_fromArray(
										[
											item.enabled ? $elm$html$Html$text('On') : $elm$html$Html$text('Off')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Button$button,
									_List_fromArray(
										[
											(item.actionIndex === 1) ? $rundis$elm_bootstrap$Bootstrap$Button$success : $rundis$elm_bootstrap$Bootstrap$Button$danger,
											$rundis$elm_bootstrap$Bootstrap$Button$onClick(
											A2(
												$author$project$Main$SetAction,
												item.id,
												(item.actionIndex === 1) ? 0 : 1)),
											$rundis$elm_bootstrap$Bootstrap$Button$small,
											$rundis$elm_bootstrap$Bootstrap$Button$attrs(
											_List_fromArray(
												[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$m1]))
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$div,
											(item.actionIndex === 1) ? _List_Nil : _List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'text-decoration', 'line-through')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('Propagate')
												]))
										]))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md5]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$select,
									_List_fromArray(
										[
											A2(
											$elm$html$Html$Events$on,
											'change',
											A2(
												$elm$json$Json$Decode$map,
												$author$project$Main$SetFilter(item.id),
												$elm_community$html_extra$Html$Events$Extra$targetValueIntParse)),
											A2($elm$html$Html$Attributes$style, 'height', '35px'),
											A2($elm$html$Html$Attributes$style, 'width', '210px')
										]),
									A2(
										$elm$core$List$map,
										A2($author$project$Main$filterOption, model.initData.filters, item.selectIndex),
										A2(
											$elm$core$List$range,
											0,
											(-1) + $elm$core$List$length(model.initData.filters))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$mdAuto]),
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Button$button,
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Button$outlineDanger,
											$rundis$elm_bootstrap$Bootstrap$Button$small,
											$rundis$elm_bootstrap$Bootstrap$Button$onClick(
											$author$project$Main$RemoveFilter(item.id)),
											$rundis$elm_bootstrap$Bootstrap$Button$attrs(
											_List_fromArray(
												[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml1]))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Delete')
										]))
								]))
						])),
				(!showParam) ? _List_Nil : _List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Grid$row,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Grid$col,
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
								_List_Nil),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Grid$col,
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Grid$Col$mdAuto]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$input,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$hidden(!showParam),
												A2($elm$html$Html$Attributes$style, 'margin-left', '35px'),
												$elm$html$Html$Attributes$placeholder('Filter parameter'),
												$elm$html$Html$Attributes$value(item.param),
												$elm$html$Html$Events$onInput(
												$author$project$Main$UpdateFilterParam(item.id))
											]),
										_List_Nil)
									]))
							]))
					])));
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Item = function (a) {
	return {$: 'Item', a: a};
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $rundis$elm_bootstrap$Bootstrap$ListGroup$li = F2(
	function (options, children) {
		return $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Item(
			{children: children, itemFn: $elm$html$Html$li, options: options});
	});
var $rundis$elm_bootstrap$Bootstrap$ListGroup$success = $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Roled($rundis$elm_bootstrap$Bootstrap$Internal$Role$Success);
var $author$project$Main$filterCardBlock = F3(
	function (model, index, item) {
		var liColor = item.enabled ? $rundis$elm_bootstrap$Bootstrap$ListGroup$success : $rundis$elm_bootstrap$Bootstrap$ListGroup$danger;
		var itemId = 'id-filt' + $elm$core$String$fromInt(item.id);
		var dropEvent = A2($author$project$Main$system.dropEvents, index, itemId);
		var dragEvent = A2($author$project$Main$system.dragEvents, index, itemId);
		var dnd = model.dnd;
		var _v0 = $author$project$Main$system.info(dnd);
		if (_v0.$ === 'Just') {
			var dragIndex = _v0.a.dragIndex;
			return (!_Utils_eq(dragIndex, index)) ? A2(
				$rundis$elm_bootstrap$Bootstrap$ListGroup$li,
				_List_fromArray(
					[liColor]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$id(itemId),
							dropEvent),
						_List_fromArray(
							[
								A4($author$project$Main$filterView, model, item, '', _List_Nil)
							]))
					])) : A2(
				$rundis$elm_bootstrap$Bootstrap$ListGroup$li,
				_List_fromArray(
					[liColor]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$id(itemId)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										A4($author$project$Main$filterView, model, item, '', _List_Nil)
									]))
							]))
					]));
		} else {
			return A2(
				$rundis$elm_bootstrap$Bootstrap$ListGroup$li,
				_List_fromArray(
					[liColor]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$id(itemId)
							]),
						_List_fromArray(
							[
								A4($author$project$Main$filterView, model, item, '', dragEvent)
							]))
					]));
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$CustomItem = function (a) {
	return {$: 'CustomItem', a: a};
};
var $elm$html$Html$form = _VirtualDom_node('form');
var $rundis$elm_bootstrap$Bootstrap$Navbar$formItem = F2(
	function (attributes, children) {
		return $rundis$elm_bootstrap$Bootstrap$Navbar$CustomItem(
			A2(
				$elm$html$Html$form,
				A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$class('form-inline'),
					attributes),
				children));
	});
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm_explorations$linear_algebra$Math$Vector2$getX = _MJS_v2getX;
var $elm_explorations$linear_algebra$Math$Vector2$getY = _MJS_v2getY;
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $rundis$elm_bootstrap$Bootstrap$Alert$headingPrivate = F3(
	function (elemFn, attributes, children_) {
		return A2(
			elemFn,
			A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$class('alert-header'),
				attributes),
			children_);
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$h4 = F2(
	function (attributes, children_) {
		return A3($rundis$elm_bootstrap$Bootstrap$Alert$headingPrivate, $elm$html$Html$h4, attributes, children_);
	});
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $author$project$Main$handleZoom = function (onZoom) {
	var zoomDecoder = A2(
		$elm$json$Json$Decode$map,
		onZoom,
		A2($elm$json$Json$Decode$field, 'deltaY', $elm$json$Json$Decode$float));
	var alwaysPreventDefaultAndStopPropagation = function (msg) {
		return {message: msg, preventDefault: true, stopPropagation: true};
	};
	return A2(
		$elm$html$Html$Events$custom,
		'wheel',
		A2($elm$json$Json$Decode$map, alwaysPreventDefaultAndStopPropagation, zoomDecoder));
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$Header = function (a) {
	return {$: 'Header', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$headerPrivate = F3(
	function (elemFn, attributes, toggle_) {
		return $rundis$elm_bootstrap$Bootstrap$Accordion$Header(
			{attributes: attributes, childrenPostToggle: _List_Nil, childrenPreToggle: _List_Nil, elemFn: elemFn, toggle: toggle_});
	});
var $rundis$elm_bootstrap$Bootstrap$Accordion$header = $rundis$elm_bootstrap$Bootstrap$Accordion$headerPrivate($elm$html$Html$div);
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var $rundis$elm_bootstrap$Bootstrap$Navbar$Dark = {$: 'Dark'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$scheme = F3(
	function (modifier, bgColor, conf) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$updateOptions,
			function (opt) {
				return _Utils_update(
					opt,
					{
						scheme: $elm$core$Maybe$Just(
							{bgColor: bgColor, modifier: modifier})
					});
			},
			conf);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$info = A2(
	$rundis$elm_bootstrap$Bootstrap$Navbar$scheme,
	$rundis$elm_bootstrap$Bootstrap$Navbar$Dark,
	$rundis$elm_bootstrap$Bootstrap$Navbar$Roled($rundis$elm_bootstrap$Bootstrap$Internal$Role$Info));
var $rundis$elm_bootstrap$Bootstrap$Navbar$Item = function (a) {
	return {$: 'Item', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$itemLink = F2(
	function (attributes, children) {
		return $rundis$elm_bootstrap$Bootstrap$Navbar$Item(
			{attributes: attributes, children: children});
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$items = F2(
	function (items_, config_) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$updateConfig,
			function (conf) {
				return _Utils_update(
					conf,
					{items: items_});
			},
			config_);
	});
var $rundis$elm_bootstrap$Bootstrap$General$Internal$LG = {$: 'LG'};
var $rundis$elm_bootstrap$Bootstrap$Button$large = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Size($rundis$elm_bootstrap$Bootstrap$General$Internal$LG);
var $rundis$elm_bootstrap$Bootstrap$Spinner$Large = {$: 'Large'};
var $rundis$elm_bootstrap$Bootstrap$Spinner$Size = function (a) {
	return {$: 'Size', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Spinner$large = $rundis$elm_bootstrap$Bootstrap$Spinner$Size($rundis$elm_bootstrap$Bootstrap$Spinner$Large);
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$ListGroup = function (a) {
	return {$: 'ListGroup', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$applyModifier = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'Roled':
				var role = modifier.a;
				return _Utils_update(
					options,
					{
						role: $elm$core$Maybe$Just(role)
					});
			case 'Action':
				return _Utils_update(
					options,
					{action: true});
			case 'Disabled':
				return _Utils_update(
					options,
					{disabled: true});
			case 'Active':
				return _Utils_update(
					options,
					{active: true});
			default:
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$defaultOptions = {action: false, active: false, attributes: _List_Nil, disabled: false, role: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$itemAttributes = function (options) {
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('list-group-item', true),
						_Utils_Tuple2('disabled', options.disabled),
						_Utils_Tuple2('active', options.active),
						_Utils_Tuple2('list-group-item-action', options.action)
					]))
			]),
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$disabled(options.disabled)
				]),
			_Utils_ap(
				A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						$elm$core$Maybe$map,
						function (r) {
							return _List_fromArray(
								[
									A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'list-group-item', r)
								]);
						},
						options.role)),
				options.attributes)));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$renderItem = function (_v0) {
	var itemFn = _v0.a.itemFn;
	var options = _v0.a.options;
	var children = _v0.a.children;
	return A2(
		itemFn,
		$rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$itemAttributes(
			A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$applyModifier, $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$defaultOptions, options)),
		children);
};
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$listGroup = function (items) {
	return $rundis$elm_bootstrap$Bootstrap$Card$Internal$ListGroup(
		A2(
			$elm$html$Html$ul,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('list-group list-group-flush')
				]),
			A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$renderItem, items)));
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$listGroup = $rundis$elm_bootstrap$Bootstrap$Card$Internal$listGroup;
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml2Sm = $elm$html$Html$Attributes$class('ml-sm-2');
var $author$project$SvgUtil$changeTitleNodeText = F2(
	function (str, node) {
		if (node.$ === 'SvgElement') {
			var elem = node.a;
			return (elem.name === 'title') ? $Garados007$elm_svg_parser$SvgParser$SvgElement(
				_Utils_update(
					elem,
					{
						children: _List_fromArray(
							[
								$Garados007$elm_svg_parser$SvgParser$SvgText(str)
							])
					})) : node;
		} else {
			return node;
		}
	});
var $author$project$SvgUtil$newTitleFromMap = F2(
	function (replaceMap, nodeId) {
		var _v0 = A2(
			$elm$core$List$filter,
			function (_v1) {
				var b = _v1.a;
				var c = _v1.b;
				return _Utils_eq(nodeId, b);
			},
			replaceMap);
		if (!_v0.b) {
			return nodeId;
		} else {
			var match = _v0.a;
			var empty = _v0.b;
			return match.b;
		}
	});
var $author$project$SvgUtil$modTitle = F2(
	function (replaceMap, node) {
		switch (node.$) {
			case 'SvgComment':
				return node;
			case 'SvgText':
				return node;
			default:
				var elem = node.a;
				if ($author$project$SvgUtil$svgNodeListHasTitle(elem.children)) {
					var nodeId = $author$project$SvgUtil$getNodeTitle(elem.children);
					var newTitle = A2($author$project$SvgUtil$newTitleFromMap, replaceMap, nodeId);
					var newChildren = A2(
						$elm$core$List$map,
						$author$project$SvgUtil$changeTitleNodeText(newTitle),
						elem.children);
					return $Garados007$elm_svg_parser$SvgParser$SvgElement(
						_Utils_update(
							elem,
							{
								children: A2(
									$elm$core$List$map,
									$author$project$SvgUtil$modTitle(replaceMap),
									newChildren)
							}));
				} else {
					return $Garados007$elm_svg_parser$SvgParser$SvgElement(
						_Utils_update(
							elem,
							{
								children: A2(
									$elm$core$List$map,
									$author$project$SvgUtil$modTitle(replaceMap),
									elem.children)
							}));
				}
		}
	});
var $zaboco$elm_draggable$Draggable$alwaysPreventDefaultAndStopPropagation = function (msg) {
	return {message: msg, preventDefault: true, stopPropagation: true};
};
var $zaboco$elm_draggable$Internal$StartDragging = F2(
	function (a, b) {
		return {$: 'StartDragging', a: a, b: b};
	});
var $zaboco$elm_draggable$Draggable$baseDecoder = function (key) {
	return A2(
		$elm$json$Json$Decode$map,
		A2(
			$elm$core$Basics$composeL,
			$zaboco$elm_draggable$Draggable$Msg,
			$zaboco$elm_draggable$Internal$StartDragging(key)),
		$zaboco$elm_draggable$Draggable$positionDecoder);
};
var $zaboco$elm_draggable$Draggable$whenLeftMouseButtonPressed = function (decoder) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (button) {
			if (!button) {
				return decoder;
			} else {
				return $elm$json$Json$Decode$fail('Event is only relevant when the main mouse button was pressed.');
			}
		},
		A2($elm$json$Json$Decode$field, 'button', $elm$json$Json$Decode$int));
};
var $zaboco$elm_draggable$Draggable$mouseTrigger = F2(
	function (key, envelope) {
		return A2(
			$elm$html$Html$Events$custom,
			'mousedown',
			A2(
				$elm$json$Json$Decode$map,
				A2($elm$core$Basics$composeL, $zaboco$elm_draggable$Draggable$alwaysPreventDefaultAndStopPropagation, envelope),
				$zaboco$elm_draggable$Draggable$whenLeftMouseButtonPressed(
					$zaboco$elm_draggable$Draggable$baseDecoder(key))));
	});
var $author$project$Main$num = F2(
	function (attr, value) {
		return attr(
			$elm$core$String$fromFloat(value));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$onlyOneOpen = function (_v0) {
	var configRec = _v0.a;
	return $rundis$elm_bootstrap$Bootstrap$Accordion$Config(
		_Utils_update(
			configRec,
			{onlyOneOpen: true}));
};
var $elm$html$Html$Attributes$rows = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rows',
		$elm$core$String$fromInt(n));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Active = {$: 'Active'};
var $rundis$elm_bootstrap$Bootstrap$ListGroup$active = $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Active;
var $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Attrs = function (a) {
	return {$: 'Attrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$ListGroup$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Attrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Action = {$: 'Action'};
var $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$CustomItem = function (a) {
	return {$: 'CustomItem', a: a};
};
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $rundis$elm_bootstrap$Bootstrap$ListGroup$button = F2(
	function (options, children) {
		return $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$CustomItem(
			{
				children: children,
				itemFn: $elm$html$Html$button,
				options: A2(
					$elm$core$List$cons,
					$rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Action,
					_Utils_ap(
						options,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Attrs(
								_List_fromArray(
									[
										$elm$html$Html$Attributes$type_('button')
									]))
							])))
			});
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$renderCustomItem = function (_v0) {
	var itemFn = _v0.a.itemFn;
	var options = _v0.a.options;
	var children = _v0.a.children;
	return A2(
		itemFn,
		$rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$itemAttributes(
			A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$applyModifier, $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$defaultOptions, options)),
		children);
};
var $rundis$elm_bootstrap$Bootstrap$ListGroup$custom = function (items) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('list-group')
			]),
		A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$renderCustomItem, items));
};
var $author$project$Main$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var $author$project$Main$showContext = function (mdl) {
	var ddState = function ($) {
		return $.ddState;
	}(mdl);
	return mdl.nodeContext.show ? A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
				A2(
				$elm$html$Html$Attributes$style,
				'left',
				A3(
					$author$project$Main$flip,
					$elm$core$Basics$append,
					'px',
					$elm$core$String$fromInt(mdl.nodeContext.mouseX))),
				A2(
				$elm$html$Html$Attributes$style,
				'top',
				A3(
					$author$project$Main$flip,
					$elm$core$Basics$append,
					'px',
					$elm$core$String$fromInt(mdl.nodeContext.mouseY))),
				A2($elm$html$Html$Attributes$style, 'border', '1px solid black')
			]),
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$ListGroup$custom(
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$ListGroup$button,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$ListGroup$active]),
						_List_fromArray(
							[
								$elm$html$Html$text('Global')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$ListGroup$button,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$ListGroup$attrs(
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(
										$author$project$Main$NodeClicked(
											_Utils_Tuple3('', 0, 0)))
									]))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Placeholder 1')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$ListGroup$button,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$ListGroup$attrs(
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(
										$author$project$Main$NodeClicked(
											_Utils_Tuple3('', 0, 0)))
									]))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Placeholder 2')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$ListGroup$button,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$ListGroup$active]),
						_List_fromArray(
							[
								$elm$html$Html$text('Local')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$ListGroup$button,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$ListGroup$attrs(
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(
										$author$project$Main$NodeClicked(
											_Utils_Tuple3('', 0, 0)))
									]))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Placeholder 3')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$ListGroup$button,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$ListGroup$attrs(
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(
										$author$project$Main$NodeClicked(
											_Utils_Tuple3('', 0, 0)))
									]))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Placeholder 4')
							]))
					]))
			])) : A2($elm$html$Html$div, _List_Nil, _List_Nil);
};
var $rundis$elm_bootstrap$Bootstrap$Spinner$applyModifier = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'Kind':
				var spinnerKind = modifier.a;
				return _Utils_update(
					options,
					{kind: spinnerKind});
			case 'Size':
				var spinnerSize = modifier.a;
				return _Utils_update(
					options,
					{size: spinnerSize});
			case 'Color':
				var color_ = modifier.a;
				return _Utils_update(
					options,
					{
						color: $elm$core$Maybe$Just(color_)
					});
			default:
				var list = modifier.a;
				return _Utils_update(
					options,
					{attributes: list});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Spinner$Border = {$: 'Border'};
var $rundis$elm_bootstrap$Bootstrap$Spinner$Normal = {$: 'Normal'};
var $rundis$elm_bootstrap$Bootstrap$Spinner$defaultOptions = {attributes: _List_Nil, color: $elm$core$Maybe$Nothing, kind: $rundis$elm_bootstrap$Bootstrap$Spinner$Border, size: $rundis$elm_bootstrap$Bootstrap$Spinner$Normal};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $rundis$elm_bootstrap$Bootstrap$Spinner$kindClassName = function (kind_) {
	if (kind_.$ === 'Border') {
		return 'spinner-border';
	} else {
		return 'spinner-grow';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Spinner$kindClass = A2($elm$core$Basics$composeL, $elm$html$Html$Attributes$class, $rundis$elm_bootstrap$Bootstrap$Spinner$kindClassName);
var $rundis$elm_bootstrap$Bootstrap$Spinner$sizeAttributes = F2(
	function (size_, kind_) {
		switch (size_.$) {
			case 'Normal':
				return $elm$core$Maybe$Nothing;
			case 'Small':
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							$rundis$elm_bootstrap$Bootstrap$Spinner$kindClassName(kind_) + '-sm')
						]));
			default:
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', '3rem'),
							A2($elm$html$Html$Attributes$style, 'height', '3rem')
						]));
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Spinner$toAttributes = function (options) {
	return _Utils_ap(
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$core$Maybe$Just(
					$rundis$elm_bootstrap$Bootstrap$Spinner$kindClass(options.kind)),
					A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass, options.color)
				])),
		_Utils_ap(
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($rundis$elm_bootstrap$Bootstrap$Spinner$sizeAttributes, options.size, options.kind)),
			_Utils_ap(
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$attribute, 'role', 'status')
					]),
				options.attributes)));
};
var $rundis$elm_bootstrap$Bootstrap$Spinner$spinner = F2(
	function (options, children) {
		var opts = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Spinner$applyModifier, $rundis$elm_bootstrap$Bootstrap$Spinner$defaultOptions, options);
		return A2(
			$elm$html$Html$div,
			$rundis$elm_bootstrap$Bootstrap$Spinner$toAttributes(opts),
			children);
	});
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $elm$svg$Svg$node = $elm$virtual_dom$VirtualDom$nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $Garados007$elm_svg_parser$SvgParser$toAttribute = function (_v0) {
	var name = _v0.a;
	var value = _v0.b;
	return A2($elm$virtual_dom$VirtualDom$attribute, name, value);
};
var $Garados007$elm_svg_parser$SvgParser$elementToSvg = function (element) {
	return A3(
		$elm$svg$Svg$node,
		element.name,
		A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$toAttribute, element.attributes),
		A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$nodeToSvg, element.children));
};
var $Garados007$elm_svg_parser$SvgParser$nodeToSvg = function (svgNode) {
	switch (svgNode.$) {
		case 'SvgElement':
			var element = svgNode.a;
			return $Garados007$elm_svg_parser$SvgParser$elementToSvg(element);
		case 'SvgText':
			var content = svgNode.a;
			return $elm$svg$Svg$text(content);
		default:
			var content = svgNode.a;
			return $elm$svg$Svg$text('');
	}
};
var $andre_dietrich$parser_combinators$Combine$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $andre_dietrich$parser_combinators$Combine$app = function (_v0) {
	var inner = _v0.a;
	return inner;
};
var $andre_dietrich$parser_combinators$Combine$andThen = F2(
	function (f, p) {
		return $andre_dietrich$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
					if (_v0.c.$ === 'Ok') {
						var rstate = _v0.a;
						var rstream = _v0.b;
						var res = _v0.c.a;
						return A3(
							$andre_dietrich$parser_combinators$Combine$app,
							f(res),
							rstate,
							rstream);
					} else {
						var estate = _v0.a;
						var estream = _v0.b;
						var ms = _v0.c.a;
						return _Utils_Tuple3(
							estate,
							estream,
							$elm$core$Result$Err(ms));
					}
				}));
	});
var $pilatch$flip$Flip$flip = F3(
	function (_function, argB, argA) {
		return A2(_function, argA, argB);
	});
var $andre_dietrich$parser_combinators$Combine$bimap = F3(
	function (fok, ferr, p) {
		return $andre_dietrich$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
					if (_v0.c.$ === 'Ok') {
						var rstate = _v0.a;
						var rstream = _v0.b;
						var res = _v0.c.a;
						return _Utils_Tuple3(
							rstate,
							rstream,
							$elm$core$Result$Ok(
								fok(res)));
					} else {
						var estate = _v0.a;
						var estream = _v0.b;
						var ms = _v0.c.a;
						return _Utils_Tuple3(
							estate,
							estream,
							$elm$core$Result$Err(
								ferr(ms)));
					}
				}));
	});
var $andre_dietrich$parser_combinators$Combine$map = F2(
	function (f, p) {
		return A3($andre_dietrich$parser_combinators$Combine$bimap, f, $elm$core$Basics$identity, p);
	});
var $andre_dietrich$parser_combinators$Combine$andMap = F2(
	function (rp, lp) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$andThen,
			A2($pilatch$flip$Flip$flip, $andre_dietrich$parser_combinators$Combine$map, rp),
			lp);
	});
var $Garados007$elm_svg_parser$SvgParser$flip = F3(
	function (func, b, a) {
		return A2(func, a, b);
	});
var $Garados007$elm_svg_parser$SvgParser$andMapRight = F2(
	function (lp, rp) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$andMap,
			rp,
			A2(
				$andre_dietrich$parser_combinators$Combine$map,
				$Garados007$elm_svg_parser$SvgParser$flip($elm$core$Basics$always),
				lp));
	});
var $Garados007$elm_svg_parser$SvgParser$andMapLeft = F2(
	function (lp, rp) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$andMap,
			rp,
			A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Basics$always, lp));
	});
var $andre_dietrich$parser_combinators$Combine$emptyErr = $andre_dietrich$parser_combinators$Combine$Parser(
	F2(
		function (state, stream) {
			return _Utils_Tuple3(
				state,
				stream,
				$elm$core$Result$Err(_List_Nil));
		}));
var $andre_dietrich$parser_combinators$Combine$or = F2(
	function (lp, rp) {
		return $andre_dietrich$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, lp, state, stream);
					if (_v0.c.$ === 'Ok') {
						var res = _v0;
						return res;
					} else {
						var lms = _v0.c.a;
						var _v1 = A3($andre_dietrich$parser_combinators$Combine$app, rp, state, stream);
						if (_v1.c.$ === 'Ok') {
							var res = _v1;
							return res;
						} else {
							var rms = _v1.c.a;
							return _Utils_Tuple3(
								state,
								stream,
								$elm$core$Result$Err(
									_Utils_ap(lms, rms)));
						}
					}
				}));
	});
var $andre_dietrich$parser_combinators$Combine$choice = function (xs) {
	return A3($elm$core$List$foldr, $andre_dietrich$parser_combinators$Combine$or, $andre_dietrich$parser_combinators$Combine$emptyErr, xs);
};
var $Garados007$elm_svg_parser$SvgParser$SvgComment = function (a) {
	return {$: 'SvgComment', a: a};
};
var $andre_dietrich$parser_combinators$Combine$mapError = $andre_dietrich$parser_combinators$Combine$bimap($elm$core$Basics$identity);
var $andre_dietrich$parser_combinators$Combine$onerror = F2(
	function (m, p) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$mapError,
			$elm$core$Basics$always(
				_List_fromArray(
					[m])),
			p);
	});
var $andre_dietrich$parser_combinators$Combine$primitive = $andre_dietrich$parser_combinators$Combine$Parser;
var $andre_dietrich$parser_combinators$Combine$Char$satisfy = function (pred) {
	return $andre_dietrich$parser_combinators$Combine$primitive(
		F2(
			function (state, stream) {
				var message = 'could not satisfy predicate';
				var _v0 = $elm$core$String$uncons(stream.input);
				if (_v0.$ === 'Just') {
					var _v1 = _v0.a;
					var h = _v1.a;
					var rest = _v1.b;
					return pred(h) ? _Utils_Tuple3(
						state,
						_Utils_update(
							stream,
							{input: rest, position: stream.position + 1}),
						$elm$core$Result$Ok(h)) : _Utils_Tuple3(
						state,
						stream,
						$elm$core$Result$Err(
							_List_fromArray(
								[message])));
				} else {
					return _Utils_Tuple3(
						state,
						stream,
						$elm$core$Result$Err(
							_List_fromArray(
								[message])));
				}
			}));
};
var $andre_dietrich$parser_combinators$Combine$Char$anyChar = A2(
	$andre_dietrich$parser_combinators$Combine$onerror,
	'expected any character',
	$andre_dietrich$parser_combinators$Combine$Char$satisfy(
		$elm$core$Basics$always(true)));
var $elm$core$String$fromList = _String_fromList;
var $andre_dietrich$parser_combinators$Combine$succeed = function (res) {
	return $andre_dietrich$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return _Utils_Tuple3(
					state,
					stream,
					$elm$core$Result$Ok(res));
			}));
};
var $andre_dietrich$parser_combinators$Combine$lazy = function (t) {
	return A2(
		$andre_dietrich$parser_combinators$Combine$andThen,
		t,
		$andre_dietrich$parser_combinators$Combine$succeed(_Utils_Tuple0));
};
var $andre_dietrich$parser_combinators$Combine$manyTill = F2(
	function (p, end_) {
		var accumulate = F3(
			function (acc, state, stream) {
				accumulate:
				while (true) {
					var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, end_, state, stream);
					if (_v0.c.$ === 'Ok') {
						var rstate = _v0.a;
						var rstream = _v0.b;
						return _Utils_Tuple3(
							rstate,
							rstream,
							$elm$core$Result$Ok(
								$elm$core$List$reverse(acc)));
					} else {
						var estate = _v0.a;
						var estream = _v0.b;
						var ms = _v0.c.a;
						var _v1 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
						if (_v1.c.$ === 'Ok') {
							var rstate = _v1.a;
							var rstream = _v1.b;
							var res = _v1.c.a;
							var $temp$acc = A2($elm$core$List$cons, res, acc),
								$temp$state = rstate,
								$temp$stream = rstream;
							acc = $temp$acc;
							state = $temp$state;
							stream = $temp$stream;
							continue accumulate;
						} else {
							return _Utils_Tuple3(
								estate,
								estream,
								$elm$core$Result$Err(ms));
						}
					}
				}
			});
		return $andre_dietrich$parser_combinators$Combine$Parser(
			accumulate(_List_Nil));
	});
var $andre_dietrich$parser_combinators$Combine$string = function (s) {
	return $andre_dietrich$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				if (A2($elm$core$String$startsWith, s, stream.input)) {
					var len = $elm$core$String$length(s);
					var pos = stream.position + len;
					var rem = A2($elm$core$String$dropLeft, len, stream.input);
					return _Utils_Tuple3(
						state,
						_Utils_update(
							stream,
							{input: rem, position: pos}),
						$elm$core$Result$Ok(s));
				} else {
					return _Utils_Tuple3(
						state,
						stream,
						$elm$core$Result$Err(
							_List_fromArray(
								['expected \"' + (s + '\"')])));
				}
			}));
};
var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
var $andre_dietrich$parser_combinators$Combine$regexer = F5(
	function (input, output, pat, state, stream) {
		var pattern = A2($elm$core$String$startsWith, '^', pat) ? pat : ('^' + pat);
		var _v0 = A3(
			$elm$regex$Regex$findAtMost,
			1,
			A2(
				$elm$core$Maybe$withDefault,
				$elm$regex$Regex$never,
				input(pattern)),
			stream.input);
		if (_v0.b && (!_v0.b.b)) {
			var match = _v0.a;
			var len = $elm$core$String$length(match.match);
			var pos = stream.position + len;
			var rem = A2($elm$core$String$dropLeft, len, stream.input);
			return _Utils_Tuple3(
				state,
				_Utils_update(
					stream,
					{input: rem, position: pos}),
				$elm$core$Result$Ok(
					output(match)));
		} else {
			return _Utils_Tuple3(
				state,
				stream,
				$elm$core$Result$Err(
					_List_fromArray(
						['expected input matching Regexp /' + (pattern + '/')])));
		}
	});
var $andre_dietrich$parser_combinators$Combine$regex = A2(
	$elm$core$Basics$composeR,
	A2(
		$andre_dietrich$parser_combinators$Combine$regexer,
		$elm$regex$Regex$fromString,
		function ($) {
			return $.match;
		}),
	$andre_dietrich$parser_combinators$Combine$Parser);
var $andre_dietrich$parser_combinators$Combine$whitespace = A2(
	$andre_dietrich$parser_combinators$Combine$onerror,
	'optional whitespace',
	$andre_dietrich$parser_combinators$Combine$regex('\\s*'));
var $Garados007$elm_svg_parser$SvgParser$commentParser = $andre_dietrich$parser_combinators$Combine$lazy(
	function (_v0) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$map,
			A2($elm$core$Basics$composeL, $Garados007$elm_svg_parser$SvgParser$SvgComment, $elm$core$String$fromList),
			A2(
				$Garados007$elm_svg_parser$SvgParser$andMapRight,
				A2(
					$Garados007$elm_svg_parser$SvgParser$andMapRight,
					$andre_dietrich$parser_combinators$Combine$whitespace,
					$andre_dietrich$parser_combinators$Combine$string('<!--')),
				A2(
					$andre_dietrich$parser_combinators$Combine$manyTill,
					$andre_dietrich$parser_combinators$Combine$Char$anyChar,
					$andre_dietrich$parser_combinators$Combine$string('-->'))));
	});
var $andre_dietrich$parser_combinators$Combine$many = function (p) {
	var accumulate = F3(
		function (acc, state, stream) {
			accumulate:
			while (true) {
				var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
				if (_v0.c.$ === 'Ok') {
					var rstate = _v0.a;
					var rstream = _v0.b;
					var res = _v0.c.a;
					if (_Utils_eq(stream, rstream)) {
						return _Utils_Tuple3(
							rstate,
							rstream,
							$elm$core$List$reverse(acc));
					} else {
						var $temp$acc = A2($elm$core$List$cons, res, acc),
							$temp$state = rstate,
							$temp$stream = rstream;
						acc = $temp$acc;
						state = $temp$state;
						stream = $temp$stream;
						continue accumulate;
					}
				} else {
					return _Utils_Tuple3(
						state,
						stream,
						$elm$core$List$reverse(acc));
				}
			}
		});
	return $andre_dietrich$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _v1 = A3(accumulate, _List_Nil, state, stream);
				var rstate = _v1.a;
				var rstream = _v1.b;
				var res = _v1.c;
				return _Utils_Tuple3(
					rstate,
					rstream,
					$elm$core$Result$Ok(res));
			}));
};
var $Garados007$elm_svg_parser$SvgParser$Element = F3(
	function (name, attributes, children) {
		return {attributes: attributes, children: children, name: name};
	});
var $andre_dietrich$parser_combinators$Combine$optional = F2(
	function (res, p) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$or,
			p,
			$andre_dietrich$parser_combinators$Combine$succeed(res));
	});
var $Garados007$elm_svg_parser$SvgParser$attributeParser = A2(
	$andre_dietrich$parser_combinators$Combine$andMap,
	A2(
		$andre_dietrich$parser_combinators$Combine$optional,
		'',
		A2(
			$Garados007$elm_svg_parser$SvgParser$andMapLeft,
			A2(
				$Garados007$elm_svg_parser$SvgParser$andMapRight,
				$andre_dietrich$parser_combinators$Combine$string('=\"'),
				$andre_dietrich$parser_combinators$Combine$regex('[^\"]*')),
			$andre_dietrich$parser_combinators$Combine$string('\"'))),
	A2(
		$andre_dietrich$parser_combinators$Combine$map,
		$elm$core$Tuple$pair,
		$andre_dietrich$parser_combinators$Combine$regex('[^=>/]+')));
var $andre_dietrich$parser_combinators$Combine$keep = F2(
	function (p1, p2) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$andMap,
			p1,
			A2(
				$andre_dietrich$parser_combinators$Combine$map,
				$pilatch$flip$Flip$flip($elm$core$Basics$always),
				p2));
	});
var $andre_dietrich$parser_combinators$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$andMap,
			$andre_dietrich$parser_combinators$Combine$many(
				A2($andre_dietrich$parser_combinators$Combine$keep, p, sep)),
			A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$List$cons, p));
	});
var $andre_dietrich$parser_combinators$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$or,
			A2($andre_dietrich$parser_combinators$Combine$sepBy1, sep, p),
			$andre_dietrich$parser_combinators$Combine$succeed(_List_Nil));
	});
var $Garados007$elm_svg_parser$SvgParser$openingParser = A3(
	$Garados007$elm_svg_parser$SvgParser$flip,
	$andre_dietrich$parser_combinators$Combine$andMap,
	A2(
		$andre_dietrich$parser_combinators$Combine$andMap,
		$andre_dietrich$parser_combinators$Combine$regex('[^/>\\s]+'),
		A2(
			$andre_dietrich$parser_combinators$Combine$map,
			F3(
				function (_v0, tagName, attributes) {
					return A3($Garados007$elm_svg_parser$SvgParser$Element, tagName, attributes, _List_Nil);
				}),
			$andre_dietrich$parser_combinators$Combine$string('<'))),
	A2(
		$Garados007$elm_svg_parser$SvgParser$andMapLeft,
		A2(
			$Garados007$elm_svg_parser$SvgParser$andMapRight,
			$andre_dietrich$parser_combinators$Combine$whitespace,
			A2($andre_dietrich$parser_combinators$Combine$sepBy, $andre_dietrich$parser_combinators$Combine$whitespace, $Garados007$elm_svg_parser$SvgParser$attributeParser)),
		$andre_dietrich$parser_combinators$Combine$whitespace));
var $Garados007$elm_svg_parser$SvgParser$textParser = $andre_dietrich$parser_combinators$Combine$lazy(
	function (_v0) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$map,
			$Garados007$elm_svg_parser$SvgParser$SvgText,
			A2(
				$Garados007$elm_svg_parser$SvgParser$andMapRight,
				$andre_dietrich$parser_combinators$Combine$whitespace,
				$andre_dietrich$parser_combinators$Combine$regex('[^<]+')));
	});
var $Garados007$elm_svg_parser$SvgParser$closingOrChildrenParser = function (element) {
	var childrenParser = A2(
		$andre_dietrich$parser_combinators$Combine$map,
		function (children) {
			return _Utils_update(
				element,
				{children: children});
		},
		A2(
			$Garados007$elm_svg_parser$SvgParser$andMapLeft,
			A2(
				$Garados007$elm_svg_parser$SvgParser$andMapLeft,
				A2(
					$Garados007$elm_svg_parser$SvgParser$andMapRight,
					A2(
						$Garados007$elm_svg_parser$SvgParser$andMapRight,
						$andre_dietrich$parser_combinators$Combine$whitespace,
						$andre_dietrich$parser_combinators$Combine$string('>')),
					$andre_dietrich$parser_combinators$Combine$many(
						$Garados007$elm_svg_parser$SvgParser$cyclic$nodeParser())),
				$andre_dietrich$parser_combinators$Combine$whitespace),
			$andre_dietrich$parser_combinators$Combine$string('</' + (element.name + '>'))));
	return $andre_dietrich$parser_combinators$Combine$lazy(
		function (_v2) {
			return $andre_dietrich$parser_combinators$Combine$choice(
				_List_fromArray(
					[
						A2(
						$Garados007$elm_svg_parser$SvgParser$andMapRight,
						A2(
							$Garados007$elm_svg_parser$SvgParser$andMapRight,
							$andre_dietrich$parser_combinators$Combine$whitespace,
							$andre_dietrich$parser_combinators$Combine$string('/>')),
						$andre_dietrich$parser_combinators$Combine$succeed(element)),
						childrenParser
					]));
		});
};
function $Garados007$elm_svg_parser$SvgParser$cyclic$elementParser() {
	return $andre_dietrich$parser_combinators$Combine$lazy(
		function (_v1) {
			return A2(
				$andre_dietrich$parser_combinators$Combine$map,
				$Garados007$elm_svg_parser$SvgParser$SvgElement,
				A2(
					$andre_dietrich$parser_combinators$Combine$andThen,
					$Garados007$elm_svg_parser$SvgParser$closingOrChildrenParser,
					A2(
						$andre_dietrich$parser_combinators$Combine$andMap,
						$Garados007$elm_svg_parser$SvgParser$openingParser,
						A2(
							$andre_dietrich$parser_combinators$Combine$map,
							$Garados007$elm_svg_parser$SvgParser$flip($elm$core$Basics$always),
							$andre_dietrich$parser_combinators$Combine$whitespace))));
		});
}
function $Garados007$elm_svg_parser$SvgParser$cyclic$nodeParser() {
	return $andre_dietrich$parser_combinators$Combine$lazy(
		function (_v0) {
			return $andre_dietrich$parser_combinators$Combine$choice(
				_List_fromArray(
					[
						$Garados007$elm_svg_parser$SvgParser$textParser,
						$Garados007$elm_svg_parser$SvgParser$commentParser,
						$Garados007$elm_svg_parser$SvgParser$cyclic$elementParser()
					]));
		});
}
try {
	var $Garados007$elm_svg_parser$SvgParser$elementParser = $Garados007$elm_svg_parser$SvgParser$cyclic$elementParser();
	$Garados007$elm_svg_parser$SvgParser$cyclic$elementParser = function () {
		return $Garados007$elm_svg_parser$SvgParser$elementParser;
	};
	var $Garados007$elm_svg_parser$SvgParser$nodeParser = $Garados007$elm_svg_parser$SvgParser$cyclic$nodeParser();
	$Garados007$elm_svg_parser$SvgParser$cyclic$nodeParser = function () {
		return $Garados007$elm_svg_parser$SvgParser$nodeParser;
	};
} catch ($) {
	throw 'Some top-level definitions from `SvgParser` are causing infinite recursion:\n\n  ┌─────┐\n  │    closingOrChildrenParser\n  │     ↓\n  │    elementParser\n  │     ↓\n  │    nodeParser\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $andre_dietrich$parser_combinators$Combine$InputStream = F3(
	function (data, input, position) {
		return {data: data, input: input, position: position};
	});
var $andre_dietrich$parser_combinators$Combine$initStream = function (s) {
	return A3($andre_dietrich$parser_combinators$Combine$InputStream, s, s, 0);
};
var $andre_dietrich$parser_combinators$Combine$runParser = F3(
	function (p, st, s) {
		var _v0 = A3(
			$andre_dietrich$parser_combinators$Combine$app,
			p,
			st,
			$andre_dietrich$parser_combinators$Combine$initStream(s));
		if (_v0.c.$ === 'Ok') {
			var state = _v0.a;
			var stream = _v0.b;
			var res = _v0.c.a;
			return $elm$core$Result$Ok(
				_Utils_Tuple3(state, stream, res));
		} else {
			var state = _v0.a;
			var stream = _v0.b;
			var ms = _v0.c.a;
			return $elm$core$Result$Err(
				_Utils_Tuple3(state, stream, ms));
		}
	});
var $Garados007$elm_svg_parser$SvgParser$xmlDeclarationParser = A2(
	$andre_dietrich$parser_combinators$Combine$map,
	$elm$core$String$fromList,
	A2(
		$Garados007$elm_svg_parser$SvgParser$andMapRight,
		A2(
			$Garados007$elm_svg_parser$SvgParser$andMapRight,
			$andre_dietrich$parser_combinators$Combine$whitespace,
			$andre_dietrich$parser_combinators$Combine$string('<?xml')),
		A2(
			$andre_dietrich$parser_combinators$Combine$manyTill,
			$andre_dietrich$parser_combinators$Combine$Char$anyChar,
			$andre_dietrich$parser_combinators$Combine$string('?>'))));
var $Garados007$elm_svg_parser$SvgParser$parseToNode = function (input) {
	var _v0 = A3(
		$andre_dietrich$parser_combinators$Combine$runParser,
		A2(
			$Garados007$elm_svg_parser$SvgParser$andMapRight,
			A2($andre_dietrich$parser_combinators$Combine$optional, '', $Garados007$elm_svg_parser$SvgParser$xmlDeclarationParser),
			$Garados007$elm_svg_parser$SvgParser$nodeParser),
		_List_Nil,
		input);
	if (_v0.$ === 'Ok') {
		var _v1 = _v0.a;
		var svgNode = _v1.c;
		return $elm$core$Result$Ok(svgNode);
	} else {
		var _v2 = _v0.a;
		var stream = _v2.b;
		var errors = _v2.c;
		return $elm$core$Result$Err(
			A2($elm$core$String$join, ' or ', errors));
	}
};
var $author$project$SvgUtil$svgNodeToSvgMod = F2(
	function (mod, input) {
		var toHtml = function (svgNode) {
			var _v0 = mod(svgNode);
			if (_v0.$ === 'SvgElement') {
				var element = _v0.a;
				return (element.name === 'svg') ? $elm$core$Result$Ok(
					_Utils_Tuple2(
						A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$toAttribute, element.attributes),
						A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$nodeToSvg, element.children))) : $elm$core$Result$Err('Top element is not svg');
			} else {
				return $elm$core$Result$Err('Top element is not svg');
			}
		};
		return A2(
			$elm$core$Result$andThen,
			toHtml,
			$Garados007$elm_svg_parser$SvgParser$parseToNode(input));
	});
var $elm$html$Html$p = _VirtualDom_node('p');
var $rundis$elm_bootstrap$Bootstrap$Card$Block$text = F2(
	function (attributes, children) {
		return $rundis$elm_bootstrap$Bootstrap$Card$Internal$BlockItem(
			A2(
				$elm$html$Html$p,
				_Utils_ap(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('card-text')
						]),
					attributes),
				children));
	});
var $rundis$elm_bootstrap$Bootstrap$Form$Input$Text = {$: 'Text'};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$Input = function (a) {
	return {$: 'Input', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$Type = function (a) {
	return {$: 'Type', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$create = F2(
	function (tipe, options) {
		return $rundis$elm_bootstrap$Bootstrap$Form$Input$Input(
			{
				options: A2(
					$elm$core$List$cons,
					$rundis$elm_bootstrap$Bootstrap$Form$Input$Type(tipe),
					options)
			});
	});
var $rundis$elm_bootstrap$Bootstrap$Form$Input$applyModifier = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'Size':
				var size_ = modifier.a;
				return _Utils_update(
					options,
					{
						size: $elm$core$Maybe$Just(size_)
					});
			case 'Id':
				var id_ = modifier.a;
				return _Utils_update(
					options,
					{
						id: $elm$core$Maybe$Just(id_)
					});
			case 'Type':
				var tipe = modifier.a;
				return _Utils_update(
					options,
					{tipe: tipe});
			case 'Disabled':
				var val = modifier.a;
				return _Utils_update(
					options,
					{disabled: val});
			case 'Value':
				var value_ = modifier.a;
				return _Utils_update(
					options,
					{
						value: $elm$core$Maybe$Just(value_)
					});
			case 'Placeholder':
				var value_ = modifier.a;
				return _Utils_update(
					options,
					{
						placeholder: $elm$core$Maybe$Just(value_)
					});
			case 'OnInput':
				var onInput_ = modifier.a;
				return _Utils_update(
					options,
					{
						onInput: $elm$core$Maybe$Just(onInput_)
					});
			case 'Validation':
				var validation_ = modifier.a;
				return _Utils_update(
					options,
					{
						validation: $elm$core$Maybe$Just(validation_)
					});
			case 'Readonly':
				var val = modifier.a;
				return _Utils_update(
					options,
					{readonly: val});
			case 'PlainText':
				var val = modifier.a;
				return _Utils_update(
					options,
					{plainText: val});
			default:
				var attrs_ = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Form$Input$defaultOptions = {attributes: _List_Nil, disabled: false, id: $elm$core$Maybe$Nothing, onInput: $elm$core$Maybe$Nothing, placeholder: $elm$core$Maybe$Nothing, plainText: false, readonly: false, size: $elm$core$Maybe$Nothing, tipe: $rundis$elm_bootstrap$Bootstrap$Form$Input$Text, validation: $elm$core$Maybe$Nothing, value: $elm$core$Maybe$Nothing};
var $elm$html$Html$Attributes$readonly = $elm$html$Html$Attributes$boolProperty('readOnly');
var $rundis$elm_bootstrap$Bootstrap$Form$Input$sizeAttribute = function (size) {
	return A2(
		$elm$core$Maybe$map,
		function (s) {
			return $elm$html$Html$Attributes$class('form-control-' + s);
		},
		$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(size));
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$typeAttribute = function (inputType) {
	return $elm$html$Html$Attributes$type_(
		function () {
			switch (inputType.$) {
				case 'Text':
					return 'text';
				case 'Password':
					return 'password';
				case 'DatetimeLocal':
					return 'datetime-local';
				case 'Date':
					return 'date';
				case 'Month':
					return 'month';
				case 'Time':
					return 'time';
				case 'Week':
					return 'week';
				case 'Number':
					return 'number';
				case 'Email':
					return 'email';
				case 'Url':
					return 'url';
				case 'Search':
					return 'search';
				case 'Tel':
					return 'tel';
				default:
					return 'color';
			}
		}());
};
var $rundis$elm_bootstrap$Bootstrap$Form$FormInternal$validationToString = function (validation) {
	if (validation.$ === 'Success') {
		return 'is-valid';
	} else {
		return 'is-invalid';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$validationAttribute = function (validation) {
	return $elm$html$Html$Attributes$class(
		$rundis$elm_bootstrap$Bootstrap$Form$FormInternal$validationToString(validation));
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$toAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Form$Input$applyModifier, $rundis$elm_bootstrap$Bootstrap$Form$Input$defaultOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class(
				options.plainText ? 'form-control-plaintext' : 'form-control'),
				$elm$html$Html$Attributes$disabled(options.disabled),
				$elm$html$Html$Attributes$readonly(options.readonly || options.plainText),
				$rundis$elm_bootstrap$Bootstrap$Form$Input$typeAttribute(options.tipe)
			]),
		_Utils_ap(
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2($elm$core$Maybe$map, $elm$html$Html$Attributes$id, options.id),
						A2($elm$core$Maybe$andThen, $rundis$elm_bootstrap$Bootstrap$Form$Input$sizeAttribute, options.size),
						A2($elm$core$Maybe$map, $elm$html$Html$Attributes$value, options.value),
						A2($elm$core$Maybe$map, $elm$html$Html$Attributes$placeholder, options.placeholder),
						A2($elm$core$Maybe$map, $elm$html$Html$Events$onInput, options.onInput),
						A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Form$Input$validationAttribute, options.validation)
					])),
			options.attributes));
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$view = function (_v0) {
	var options = _v0.a.options;
	return A2(
		$elm$html$Html$input,
		$rundis$elm_bootstrap$Bootstrap$Form$Input$toAttributes(options),
		_List_Nil);
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$input = F2(
	function (tipe, options) {
		return $rundis$elm_bootstrap$Bootstrap$Form$Input$view(
			A2($rundis$elm_bootstrap$Bootstrap$Form$Input$create, tipe, options));
	});
var $rundis$elm_bootstrap$Bootstrap$Form$Input$text = $rundis$elm_bootstrap$Bootstrap$Form$Input$input($rundis$elm_bootstrap$Bootstrap$Form$Input$Text);
var $elm$html$Html$textarea = _VirtualDom_node('textarea');
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 'Nothing') {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 'Nothing') {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.protocol;
		if (_v0.$ === 'Http') {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.fragment,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.query,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.port_,
					_Utils_ap(http, url.host)),
				url.path)));
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$Toggle = function (a) {
	return {$: 'Toggle', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$toggle = F2(
	function (attributes, children) {
		return $rundis$elm_bootstrap$Bootstrap$Accordion$Toggle(
			{attributes: attributes, children: children});
	});
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyModifier = F2(
	function (option, options) {
		switch (option.$) {
			case 'Aligned':
				var align = option.a;
				return _Utils_update(
					options,
					{
						aligned: $elm$core$Maybe$Just(align)
					});
			case 'Coloring':
				var coloring = option.a;
				return _Utils_update(
					options,
					{
						coloring: $elm$core$Maybe$Just(coloring)
					});
			case 'TextColoring':
				var coloring = option.a;
				return _Utils_update(
					options,
					{
						textColoring: $elm$core$Maybe$Just(coloring)
					});
			default:
				var attrs = option.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultOptions = {aligned: $elm$core$Maybe$Nothing, attributes: _List_Nil, coloring: $elm$core$Maybe$Nothing, textColoring: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$cardAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyModifier, $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('card')
			]),
		_Utils_ap(
			function () {
				var _v0 = options.coloring;
				if (_v0.$ === 'Just') {
					if (_v0.a.$ === 'Roled') {
						var role = _v0.a.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg', role)
							]);
					} else {
						var role = _v0.a.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'border', role)
							]);
					}
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.textColoring;
					if (_v1.$ === 'Just') {
						var color = _v1.a;
						return _List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass(color)
							]);
					} else {
						return _List_Nil;
					}
				}(),
				_Utils_ap(
					function () {
						var _v2 = options.aligned;
						if (_v2.$ === 'Just') {
							var align = _v2.a;
							return _List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(align)
								]);
						} else {
							return _List_Nil;
						}
					}(),
					options.attributes))));
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$getOrInitCardState = F2(
	function (id, _v0) {
		var cardStates = _v0.a;
		return A2(
			$elm$core$Maybe$withDefault,
			{height: $elm$core$Maybe$Nothing, visibility: $rundis$elm_bootstrap$Bootstrap$Accordion$Hidden},
			A2($elm$core$Dict$get, id, cardStates));
	});
var $rundis$elm_bootstrap$Bootstrap$Accordion$transitionStyle = F2(
	function (withAnimation_, height) {
		return _Utils_ap(
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'relative'),
					A2($elm$html$Html$Attributes$style, 'height', height),
					A2($elm$html$Html$Attributes$style, 'overflow', 'hidden')
				]),
			withAnimation_ ? _List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, '-webkit-transition-timing-function', 'ease'),
					A2($elm$html$Html$Attributes$style, '-o-transition-timing-function', 'ease'),
					A2($elm$html$Html$Attributes$style, 'transition-timing-function', 'ease'),
					A2($elm$html$Html$Attributes$style, '-webkit-transition-duration', '0.35s'),
					A2($elm$html$Html$Attributes$style, '-o-transition-duration', '0.35s'),
					A2($elm$html$Html$Attributes$style, 'transition-duration', '0.35s'),
					A2($elm$html$Html$Attributes$style, '-webkit-transition-property', 'height'),
					A2($elm$html$Html$Attributes$style, '-o-transition-property', 'height'),
					A2($elm$html$Html$Attributes$style, 'transition-property', 'height')
				]) : _List_Nil);
	});
var $rundis$elm_bootstrap$Bootstrap$Accordion$animationAttributes = F3(
	function (state, configRec, _v0) {
		var id = _v0.a.id;
		var styles = $rundis$elm_bootstrap$Bootstrap$Accordion$transitionStyle(configRec.withAnimation);
		var cardState = A2($rundis$elm_bootstrap$Bootstrap$Accordion$getOrInitCardState, id, state);
		var pixelHeight = A2(
			$elm$core$Maybe$withDefault,
			'0',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return $elm$core$String$fromFloat(v) + 'px';
				},
				cardState.height));
		var _v1 = cardState.visibility;
		switch (_v1.$) {
			case 'Hidden':
				return styles('0px');
			case 'StartDown':
				return styles('0px');
			case 'StartUp':
				return styles(pixelHeight);
			default:
				var _v2 = cardState.height;
				if (_v2.$ === 'Just') {
					var x = _v2.a;
					return styles(pixelHeight);
				} else {
					return styles('100%');
				}
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$renderBlocks = function (blocks) {
	return A2(
		$elm$core$List$map,
		function (block_) {
			if (block_.$ === 'CardBlock') {
				var e = block_.a;
				return e;
			} else {
				var e = block_.a;
				return e;
			}
		},
		blocks);
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$renderCardBlock = F3(
	function (state, configRec, card_) {
		var id = card_.a.id;
		var blocks = card_.a.blocks;
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id(id)
					]),
				A3($rundis$elm_bootstrap$Bootstrap$Accordion$animationAttributes, state, configRec, card_)),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_Nil,
					$rundis$elm_bootstrap$Bootstrap$Card$Internal$renderBlocks(blocks))
				]));
	});
var $rundis$elm_bootstrap$Bootstrap$Accordion$visibilityTransition = F2(
	function (withAnimation_, visibility) {
		var _v0 = _Utils_Tuple2(withAnimation_, visibility);
		if (_v0.a) {
			switch (_v0.b.$) {
				case 'Hidden':
					var _v1 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Accordion$StartDown;
				case 'StartDown':
					var _v2 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Accordion$Shown;
				case 'Shown':
					var _v3 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Accordion$StartUp;
				default:
					var _v4 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Accordion$Hidden;
			}
		} else {
			switch (_v0.b.$) {
				case 'Hidden':
					var _v5 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Accordion$Shown;
				case 'Shown':
					var _v6 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Accordion$Hidden;
				default:
					return $rundis$elm_bootstrap$Bootstrap$Accordion$Shown;
			}
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Accordion$clickHandler = F4(
	function (state, configRec, decoder, _v0) {
		var cardStates = state.a;
		var id = _v0.a.id;
		var currentCardState = A2(
			$elm$core$Maybe$withDefault,
			{height: $elm$core$Maybe$Nothing, visibility: $rundis$elm_bootstrap$Bootstrap$Accordion$Hidden},
			A2($elm$core$Dict$get, id, cardStates));
		var initStates = A3($elm$core$Dict$insert, id, currentCardState, cardStates);
		var updOthersHidden = function (h) {
			return $rundis$elm_bootstrap$Bootstrap$Accordion$State(
				A2(
					$elm$core$Dict$map,
					F2(
						function (i, c) {
							return _Utils_eq(i, id) ? {
								height: $elm$core$Maybe$Just(h),
								visibility: A2($rundis$elm_bootstrap$Bootstrap$Accordion$visibilityTransition, configRec.withAnimation, c.visibility)
							} : ((_Utils_eq(c.visibility, $rundis$elm_bootstrap$Bootstrap$Accordion$Shown) && (configRec.withAnimation && configRec.onlyOneOpen)) ? _Utils_update(
								c,
								{visibility: $rundis$elm_bootstrap$Bootstrap$Accordion$StartUp}) : ((_Utils_eq(c.visibility, $rundis$elm_bootstrap$Bootstrap$Accordion$Shown) && ((!configRec.withAnimation) && configRec.onlyOneOpen)) ? _Utils_update(
								c,
								{visibility: $rundis$elm_bootstrap$Bootstrap$Accordion$Hidden}) : c));
						}),
					initStates));
		};
		return A2(
			$elm$json$Json$Decode$andThen,
			function (v) {
				return $elm$json$Json$Decode$succeed(
					{
						message: configRec.toMsg(
							updOthersHidden(v)),
						preventDefault: true,
						stopPropagation: true
					});
			},
			decoder);
	});
var $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$childNode = function (idx) {
	return $elm$json$Json$Decode$at(
		_List_fromArray(
			[
				'childNodes',
				$elm$core$String$fromInt(idx)
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$nextSibling = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'nextSibling', decoder);
};
var $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$offsetHeight = A2($elm$json$Json$Decode$field, 'offsetHeight', $elm$json$Json$Decode$float);
var $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$parentElement = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'parentElement', decoder);
};
var $rundis$elm_bootstrap$Bootstrap$Accordion$heightDecoder = A2(
	$elm$json$Json$Decode$field,
	'currentTarget',
	$rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$parentElement(
		$rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$nextSibling(
			A2($rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$childNode, 0, $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$offsetHeight))));
var $rundis$elm_bootstrap$Bootstrap$Accordion$renderToggle = F3(
	function (state, configRec, card_) {
		var cardRec = card_.a;
		var _v0 = cardRec.header;
		var headerRec = _v0.a;
		var _v1 = headerRec.toggle;
		var attributes = _v1.a.attributes;
		var children = _v1.a.children;
		return A2(
			$elm$html$Html$button,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('btn btn-link'),
						A2(
						$elm$html$Html$Events$custom,
						'click',
						A4($rundis$elm_bootstrap$Bootstrap$Accordion$clickHandler, state, configRec, $rundis$elm_bootstrap$Bootstrap$Accordion$heightDecoder, card_))
					]),
				attributes),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Accordion$renderCardHeader = F3(
	function (state, configRec, card_) {
		var cardRec = card_.a;
		var _v0 = cardRec.header;
		var headerRec = _v0.a;
		return A2(
			headerRec.elemFn,
			_Utils_ap(
				headerRec.attributes,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('card-header')
					])),
			_Utils_ap(
				headerRec.childrenPreToggle,
				_Utils_ap(
					_List_fromArray(
						[
							A3($rundis$elm_bootstrap$Bootstrap$Accordion$renderToggle, state, configRec, card_)
						]),
					headerRec.childrenPostToggle)));
	});
var $rundis$elm_bootstrap$Bootstrap$Accordion$renderCard = F3(
	function (state, configRec, card_) {
		var options = card_.a.options;
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Card$Internal$cardAttributes(options),
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('card')
					])),
			_List_fromArray(
				[
					A3($rundis$elm_bootstrap$Bootstrap$Accordion$renderCardHeader, state, configRec, card_),
					A3($rundis$elm_bootstrap$Bootstrap$Accordion$renderCardBlock, state, configRec, card_)
				]));
	});
var $rundis$elm_bootstrap$Bootstrap$Accordion$view = F2(
	function (state, _v0) {
		var configRec = _v0.a;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('accordion')
				]),
			A2(
				$elm$core$List$map,
				A2($rundis$elm_bootstrap$Bootstrap$Accordion$renderCard, state, configRec),
				configRec.cards));
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$StartClose = {$: 'StartClose'};
var $rundis$elm_bootstrap$Bootstrap$Alert$clickHandler = F2(
	function (visibility, configRec) {
		var handleClick = F2(
			function (viz, toMsg) {
				return $elm$html$Html$Events$onClick(
					toMsg(viz));
			});
		var _v0 = configRec.dismissable;
		if (_v0.$ === 'Just') {
			var dismissMsg = _v0.a;
			return _List_fromArray(
				[
					configRec.withAnimation ? A2(handleClick, $rundis$elm_bootstrap$Bootstrap$Alert$StartClose, dismissMsg) : A2(handleClick, $rundis$elm_bootstrap$Bootstrap$Alert$Closed, dismissMsg)
				]);
		} else {
			return _List_Nil;
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$injectButton = F2(
	function (btn, children_) {
		if (children_.b) {
			var head = children_.a;
			var tail = children_.b;
			return A2(
				$elm$core$List$cons,
				head,
				A2($elm$core$List$cons, btn, tail));
		} else {
			return _List_fromArray(
				[btn]);
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$isDismissable = function (configRec) {
	var _v0 = configRec.dismissable;
	if (_v0.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $rundis$elm_bootstrap$Bootstrap$Alert$maybeAddDismissButton = F3(
	function (visibilty, configRec, children_) {
		return $rundis$elm_bootstrap$Bootstrap$Alert$isDismissable(configRec) ? A2(
			$rundis$elm_bootstrap$Bootstrap$Alert$injectButton,
			A2(
				$elm$html$Html$button,
				_Utils_ap(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('button'),
							$elm$html$Html$Attributes$class('close'),
							A2($elm$html$Html$Attributes$attribute, 'aria-label', 'close')
						]),
					A2($rundis$elm_bootstrap$Bootstrap$Alert$clickHandler, visibilty, configRec)),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$attribute, 'aria-hidden', 'true')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('×')
							]))
					])),
			children_) : children_;
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$viewAttributes = F2(
	function (visibility, configRec) {
		var visibiltyAttributes = _Utils_eq(visibility, $rundis$elm_bootstrap$Bootstrap$Alert$Closed) ? _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'display', 'none')
			]) : _List_Nil;
		var animationAttributes = function () {
			if (configRec.withAnimation) {
				var _v0 = configRec.dismissable;
				if (_v0.$ === 'Just') {
					var dismissMsg = _v0.a;
					return _List_fromArray(
						[
							A2(
							$elm$html$Html$Events$on,
							'transitionend',
							$elm$json$Json$Decode$succeed(
								dismissMsg($rundis$elm_bootstrap$Bootstrap$Alert$Closed)))
						]);
				} else {
					return _List_Nil;
				}
			} else {
				return _List_Nil;
			}
		}();
		var alertAttributes = _List_fromArray(
			[
				A2($elm$html$Html$Attributes$attribute, 'role', 'alert'),
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('alert', true),
						_Utils_Tuple2(
						'alert-dismissible',
						$rundis$elm_bootstrap$Bootstrap$Alert$isDismissable(configRec)),
						_Utils_Tuple2('fade', configRec.withAnimation),
						_Utils_Tuple2(
						'show',
						_Utils_eq(visibility, $rundis$elm_bootstrap$Bootstrap$Alert$Shown))
					])),
				A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'alert', configRec.role)
			]);
		return $elm$core$List$concat(
			_List_fromArray(
				[configRec.attributes, alertAttributes, visibiltyAttributes, animationAttributes]));
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$view = F2(
	function (visibility, _v0) {
		var configRec = _v0.a;
		return A2(
			$elm$html$Html$div,
			A2($rundis$elm_bootstrap$Bootstrap$Alert$viewAttributes, visibility, configRec),
			A3($rundis$elm_bootstrap$Bootstrap$Alert$maybeAddDismissButton, visibility, configRec, configRec.children));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$maybeBrand = function (brand_) {
	if (brand_.$ === 'Just') {
		var b = brand_.a.a;
		return _List_fromArray(
			[b]);
	} else {
		return _List_Nil;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$sizeToComparable = function (size) {
	switch (size.$) {
		case 'XS':
			return 1;
		case 'SM':
			return 2;
		case 'MD':
			return 3;
		case 'LG':
			return 4;
		default:
			return 5;
	}
};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$XL = {$: 'XL'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$toScreenSize = function (windowWidth) {
	return (windowWidth <= 576) ? $rundis$elm_bootstrap$Bootstrap$General$Internal$XS : ((windowWidth <= 768) ? $rundis$elm_bootstrap$Bootstrap$General$Internal$SM : ((windowWidth <= 992) ? $rundis$elm_bootstrap$Bootstrap$General$Internal$MD : ((windowWidth <= 1200) ? $rundis$elm_bootstrap$Bootstrap$General$Internal$LG : $rundis$elm_bootstrap$Bootstrap$General$Internal$XL)));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$shouldHideMenu = F2(
	function (_v0, _v1) {
		var windowWidth = _v0.a.windowWidth;
		var options = _v1.options;
		var winMedia = function () {
			if (windowWidth.$ === 'Just') {
				var s = windowWidth.a;
				return $rundis$elm_bootstrap$Bootstrap$Navbar$toScreenSize(s);
			} else {
				return $rundis$elm_bootstrap$Bootstrap$General$Internal$XS;
			}
		}();
		return _Utils_cmp(
			$rundis$elm_bootstrap$Bootstrap$Navbar$sizeToComparable(winMedia),
			$rundis$elm_bootstrap$Bootstrap$Navbar$sizeToComparable(options.toggleAt)) > 0;
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$Shown = {$: 'Shown'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$StartDown = {$: 'StartDown'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$StartUp = {$: 'StartUp'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$visibilityTransition = F2(
	function (withAnimation_, visibility) {
		var _v0 = _Utils_Tuple2(withAnimation_, visibility);
		if (_v0.a) {
			switch (_v0.b.$) {
				case 'Hidden':
					var _v1 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Navbar$StartDown;
				case 'StartDown':
					var _v2 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingDown;
				case 'AnimatingDown':
					var _v3 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Navbar$Shown;
				case 'Shown':
					var _v4 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Navbar$StartUp;
				case 'StartUp':
					var _v5 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingUp;
				default:
					var _v6 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Navbar$Hidden;
			}
		} else {
			switch (_v0.b.$) {
				case 'Hidden':
					var _v7 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Navbar$Shown;
				case 'Shown':
					var _v8 = _v0.b;
					return $rundis$elm_bootstrap$Bootstrap$Navbar$Hidden;
				default:
					return $rundis$elm_bootstrap$Bootstrap$Navbar$Hidden;
			}
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$transitionHandler = F2(
	function (state, configRec) {
		return $elm$json$Json$Decode$succeed(
			configRec.toMsg(
				A2(
					$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
					function (s) {
						return _Utils_update(
							s,
							{
								visibility: A2($rundis$elm_bootstrap$Bootstrap$Navbar$visibilityTransition, configRec.withAnimation, s.visibility)
							});
					},
					state)));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$transitionStyle = function (maybeHeight) {
	var pixelHeight = A2(
		$elm$core$Maybe$withDefault,
		'0',
		A2(
			$elm$core$Maybe$map,
			function (v) {
				return $elm$core$String$fromFloat(v) + 'px';
			},
			maybeHeight));
	return _List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'position', 'relative'),
			A2($elm$html$Html$Attributes$style, 'height', pixelHeight),
			A2($elm$html$Html$Attributes$style, 'width', '100%'),
			A2($elm$html$Html$Attributes$style, 'overflow', 'hidden'),
			A2($elm$html$Html$Attributes$style, '-webkit-transition-timing-function', 'ease'),
			A2($elm$html$Html$Attributes$style, '-o-transition-timing-function', 'ease'),
			A2($elm$html$Html$Attributes$style, 'transition-timing-function', 'ease'),
			A2($elm$html$Html$Attributes$style, '-webkit-transition-duration', '0.35s'),
			A2($elm$html$Html$Attributes$style, '-o-transition-duration', '0.35s'),
			A2($elm$html$Html$Attributes$style, 'transition-duration', '0.35s'),
			A2($elm$html$Html$Attributes$style, '-webkit-transition-property', 'height'),
			A2($elm$html$Html$Attributes$style, '-o-transition-property', 'height'),
			A2($elm$html$Html$Attributes$style, 'transition-property', 'height')
		]);
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$menuAttributes = F2(
	function (state, configRec) {
		var visibility = state.a.visibility;
		var height = state.a.height;
		var defaults = _List_fromArray(
			[
				$elm$html$Html$Attributes$class('collapse navbar-collapse')
			]);
		switch (visibility.$) {
			case 'Hidden':
				if (height.$ === 'Nothing') {
					return ((!configRec.withAnimation) || A2($rundis$elm_bootstrap$Bootstrap$Navbar$shouldHideMenu, state, configRec)) ? defaults : _List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'display', 'block'),
							A2($elm$html$Html$Attributes$style, 'height', '0'),
							A2($elm$html$Html$Attributes$style, 'overflow', 'hidden'),
							A2($elm$html$Html$Attributes$style, 'width', '100%')
						]);
				} else {
					return defaults;
				}
			case 'StartDown':
				return $rundis$elm_bootstrap$Bootstrap$Navbar$transitionStyle($elm$core$Maybe$Nothing);
			case 'AnimatingDown':
				return _Utils_ap(
					$rundis$elm_bootstrap$Bootstrap$Navbar$transitionStyle(height),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$Events$on,
							'transitionend',
							A2($rundis$elm_bootstrap$Bootstrap$Navbar$transitionHandler, state, configRec))
						]));
			case 'AnimatingUp':
				return _Utils_ap(
					$rundis$elm_bootstrap$Bootstrap$Navbar$transitionStyle($elm$core$Maybe$Nothing),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$Events$on,
							'transitionend',
							A2($rundis$elm_bootstrap$Bootstrap$Navbar$transitionHandler, state, configRec))
						]));
			case 'StartUp':
				return $rundis$elm_bootstrap$Bootstrap$Navbar$transitionStyle(height);
			default:
				return _Utils_ap(
					defaults,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('show')
						]));
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$menuWrapperAttributes = F2(
	function (state, confRec) {
		var visibility = state.a.visibility;
		var height = state.a.height;
		var styleBlock = _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'display', 'block'),
				A2($elm$html$Html$Attributes$style, 'width', '100%')
			]);
		var display = function () {
			if (height.$ === 'Nothing') {
				return ((!confRec.withAnimation) || A2($rundis$elm_bootstrap$Bootstrap$Navbar$shouldHideMenu, state, confRec)) ? 'flex' : 'block';
			} else {
				return 'flex';
			}
		}();
		switch (visibility.$) {
			case 'Hidden':
				return _List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', display),
						A2($elm$html$Html$Attributes$style, 'width', '100%')
					]);
			case 'StartDown':
				return styleBlock;
			case 'AnimatingDown':
				return styleBlock;
			case 'AnimatingUp':
				return styleBlock;
			case 'StartUp':
				return styleBlock;
			default:
				return ((!confRec.withAnimation) || A2($rundis$elm_bootstrap$Bootstrap$Navbar$shouldHideMenu, state, confRec)) ? _List_fromArray(
					[
						$elm$html$Html$Attributes$class('collapse navbar-collapse show')
					]) : _List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'block')
					]);
		}
	});
var $elm$html$Html$nav = _VirtualDom_node('nav');
var $rundis$elm_bootstrap$Bootstrap$Navbar$expandOption = function (size) {
	var toClass = function (sz) {
		return $elm$html$Html$Attributes$class(
			'navbar-expand' + A2(
				$elm$core$Maybe$withDefault,
				'',
				A2(
					$elm$core$Maybe$map,
					function (s) {
						return '-' + s;
					},
					$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(sz))));
	};
	switch (size.$) {
		case 'XS':
			return _List_fromArray(
				[
					toClass($rundis$elm_bootstrap$Bootstrap$General$Internal$SM)
				]);
		case 'SM':
			return _List_fromArray(
				[
					toClass($rundis$elm_bootstrap$Bootstrap$General$Internal$MD)
				]);
		case 'MD':
			return _List_fromArray(
				[
					toClass($rundis$elm_bootstrap$Bootstrap$General$Internal$LG)
				]);
		case 'LG':
			return _List_fromArray(
				[
					toClass($rundis$elm_bootstrap$Bootstrap$General$Internal$XL)
				]);
		default:
			return _List_Nil;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$fixOption = function (fix) {
	if (fix.$ === 'Top') {
		return 'fixed-top';
	} else {
		return 'fixed-bottom';
	}
};
var $avh4$elm_color$Color$toCssString = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var roundTo = function (x) {
		return $elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return $elm$core$Basics$round(x * 10000) / 100;
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				$elm$core$String$fromFloat(
				pct(r)),
				'%,',
				$elm$core$String$fromFloat(
				pct(g)),
				'%,',
				$elm$core$String$fromFloat(
				pct(b)),
				'%,',
				$elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$backgroundColorOption = function (bgClass) {
	switch (bgClass.$) {
		case 'Roled':
			var role = bgClass.a;
			return A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg', role);
		case 'Custom':
			var color = bgClass.a;
			return A2(
				$elm$html$Html$Attributes$style,
				'background-color',
				$avh4$elm_color$Color$toCssString(color));
		default:
			var classString = bgClass.a;
			return $elm$html$Html$Attributes$class(classString);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$linkModifierClass = function (modifier) {
	return $elm$html$Html$Attributes$class(
		function () {
			if (modifier.$ === 'Dark') {
				return 'navbar-dark';
			} else {
				return 'navbar-light';
			}
		}());
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$schemeAttributes = function (_v0) {
	var modifier = _v0.modifier;
	var bgColor = _v0.bgColor;
	return _List_fromArray(
		[
			$rundis$elm_bootstrap$Bootstrap$Navbar$linkModifierClass(modifier),
			$rundis$elm_bootstrap$Bootstrap$Navbar$backgroundColorOption(bgColor)
		]);
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$navbarAttributes = function (options) {
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('navbar', true),
						_Utils_Tuple2('container', options.isContainer)
					]))
			]),
		_Utils_ap(
			$rundis$elm_bootstrap$Bootstrap$Navbar$expandOption(options.toggleAt),
			_Utils_ap(
				function () {
					var _v0 = options.scheme;
					if (_v0.$ === 'Just') {
						var scheme_ = _v0.a;
						return $rundis$elm_bootstrap$Bootstrap$Navbar$schemeAttributes(scheme_);
					} else {
						return _List_Nil;
					}
				}(),
				_Utils_ap(
					function () {
						var _v1 = options.fix;
						if (_v1.$ === 'Just') {
							var fix = _v1.a;
							return _List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									$rundis$elm_bootstrap$Bootstrap$Navbar$fixOption(fix))
								]);
						} else {
							return _List_Nil;
						}
					}(),
					options.attributes))));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$renderCustom = function (items_) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var item = _v0.a;
			return item;
		},
		items_);
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$getOrInitDropdownStatus = F2(
	function (id, _v0) {
		var dropdowns = _v0.a.dropdowns;
		return A2(
			$elm$core$Maybe$withDefault,
			$rundis$elm_bootstrap$Bootstrap$Navbar$Closed,
			A2($elm$core$Dict$get, id, dropdowns));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$toggleOpen = F3(
	function (state, id, _v0) {
		var toMsg = _v0.toMsg;
		var currStatus = A2($rundis$elm_bootstrap$Bootstrap$Navbar$getOrInitDropdownStatus, id, state);
		var newStatus = function () {
			switch (currStatus.$) {
				case 'Open':
					return $rundis$elm_bootstrap$Bootstrap$Navbar$Closed;
				case 'ListenClicks':
					return $rundis$elm_bootstrap$Bootstrap$Navbar$Closed;
				default:
					return $rundis$elm_bootstrap$Bootstrap$Navbar$Open;
			}
		}();
		return toMsg(
			A2(
				$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
				function (s) {
					return _Utils_update(
						s,
						{
							dropdowns: A3($elm$core$Dict$insert, id, newStatus, s.dropdowns)
						});
				},
				state));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$renderDropdownToggle = F4(
	function (state, id, configRec, _v0) {
		var attributes = _v0.a.attributes;
		var children = _v0.a.children;
		return A2(
			$elm$html$Html$a,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('nav-link dropdown-toggle'),
						$elm$html$Html$Attributes$href('#'),
						A2(
						$elm$html$Html$Events$custom,
						'click',
						$elm$json$Json$Decode$succeed(
							{
								message: A3($rundis$elm_bootstrap$Bootstrap$Navbar$toggleOpen, state, id, configRec),
								preventDefault: true,
								stopPropagation: false
							}))
					]),
				attributes),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$renderDropdown = F3(
	function (state, configRec, _v0) {
		var ddRec = _v0.a;
		var needsDropup = A2(
			$elm$core$Maybe$withDefault,
			false,
			A2(
				$elm$core$Maybe$map,
				function (fix) {
					if (fix.$ === 'Bottom') {
						return true;
					} else {
						return false;
					}
				},
				configRec.options.fix));
		var isShown = !_Utils_eq(
			A2($rundis$elm_bootstrap$Bootstrap$Navbar$getOrInitDropdownStatus, ddRec.id, state),
			$rundis$elm_bootstrap$Bootstrap$Navbar$Closed);
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('nav-item', true),
							_Utils_Tuple2('dropdown', true),
							_Utils_Tuple2('shown', isShown),
							_Utils_Tuple2('dropup', needsDropup)
						]))
				]),
			_List_fromArray(
				[
					A4($rundis$elm_bootstrap$Bootstrap$Navbar$renderDropdownToggle, state, ddRec.id, configRec, ddRec.toggle),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('dropdown-menu', true),
									_Utils_Tuple2('show', isShown)
								]))
						]),
					A2(
						$elm$core$List$map,
						function (_v1) {
							var item = _v1.a;
							return item;
						},
						ddRec.items))
				]));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$renderItemLink = function (_v0) {
	var attributes = _v0.attributes;
	var children = _v0.children;
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('nav-item')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$a,
				_Utils_ap(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('nav-link')
						]),
					attributes),
				children)
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$renderNav = F3(
	function (state, configRec, navItems) {
		return A2(
			$elm$html$Html$ul,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('navbar-nav mr-auto')
				]),
			A2(
				$elm$core$List$map,
				function (item) {
					if (item.$ === 'Item') {
						var item_ = item.a;
						return $rundis$elm_bootstrap$Bootstrap$Navbar$renderItemLink(item_);
					} else {
						var dropdown_ = item.a;
						return A3($rundis$elm_bootstrap$Bootstrap$Navbar$renderDropdown, state, configRec, dropdown_);
					}
				},
				navItems));
	});
var $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$target = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'target', decoder);
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$heightDecoder = function () {
	var tagDecoder = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (tag, val) {
				return _Utils_Tuple2(tag, val);
			}),
		A2($elm$json$Json$Decode$field, 'tagName', $elm$json$Json$Decode$string),
		$elm$json$Json$Decode$value);
	var resToDec = function (res) {
		if (res.$ === 'Ok') {
			var v = res.a;
			return $elm$json$Json$Decode$succeed(v);
		} else {
			var err = res.a;
			return $elm$json$Json$Decode$fail(
				$elm$json$Json$Decode$errorToString(err));
		}
	};
	var fromNavDec = $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['childNodes', '2', 'childNodes', '0', 'offsetHeight']),
				$elm$json$Json$Decode$float),
				A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['childNodes', '1', 'childNodes', '0', 'offsetHeight']),
				$elm$json$Json$Decode$float)
			]));
	var fromButtonDec = $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$parentElement(fromNavDec);
	return A2(
		$elm$json$Json$Decode$andThen,
		function (_v0) {
			var tag = _v0.a;
			var val = _v0.b;
			switch (tag) {
				case 'NAV':
					return resToDec(
						A2($elm$json$Json$Decode$decodeValue, fromNavDec, val));
				case 'BUTTON':
					return resToDec(
						A2($elm$json$Json$Decode$decodeValue, fromButtonDec, val));
				default:
					return $elm$json$Json$Decode$succeed(0);
			}
		},
		$rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$target(
			$rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$parentElement(tagDecoder)));
}();
var $rundis$elm_bootstrap$Bootstrap$Navbar$toggleHandler = F2(
	function (state, configRec) {
		var height = state.a.height;
		var updState = function (h) {
			return A2(
				$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
				function (s) {
					return _Utils_update(
						s,
						{
							height: $elm$core$Maybe$Just(h),
							visibility: A2($rundis$elm_bootstrap$Bootstrap$Navbar$visibilityTransition, configRec.withAnimation, s.visibility)
						});
				},
				state);
		};
		return A2(
			$elm$html$Html$Events$on,
			'click',
			A2(
				$elm$json$Json$Decode$andThen,
				function (v) {
					return $elm$json$Json$Decode$succeed(
						configRec.toMsg(
							(v > 0) ? updState(v) : updState(
								A2($elm$core$Maybe$withDefault, 0, height))));
				},
				$rundis$elm_bootstrap$Bootstrap$Navbar$heightDecoder));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$view = F2(
	function (state, conf) {
		var configRec = conf.a;
		return A2(
			$elm$html$Html$nav,
			$rundis$elm_bootstrap$Bootstrap$Navbar$navbarAttributes(configRec.options),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Navbar$maybeBrand(configRec.brand),
				_Utils_ap(
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'navbar-toggler' + A2(
										$elm$core$Maybe$withDefault,
										'',
										A2(
											$elm$core$Maybe$map,
											function (_v0) {
												return ' navbar-toggler-right';
											},
											configRec.brand))),
									$elm$html$Html$Attributes$type_('button'),
									A2($rundis$elm_bootstrap$Bootstrap$Navbar$toggleHandler, state, configRec)
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('navbar-toggler-icon')
										]),
									_List_Nil)
								]))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							A2($rundis$elm_bootstrap$Bootstrap$Navbar$menuAttributes, state, configRec),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									A2($rundis$elm_bootstrap$Bootstrap$Navbar$menuWrapperAttributes, state, configRec),
									_Utils_ap(
										_List_fromArray(
											[
												A3($rundis$elm_bootstrap$Bootstrap$Navbar$renderNav, state, configRec, configRec.items)
											]),
										$rundis$elm_bootstrap$Bootstrap$Navbar$renderCustom(configRec.customItems)))
								]))
						]))));
	});
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $rundis$elm_bootstrap$Bootstrap$Accordion$withAnimation = function (_v0) {
	var configRec = _v0.a;
	return $rundis$elm_bootstrap$Bootstrap$Accordion$Config(
		_Utils_update(
			configRec,
			{withAnimation: true}));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$withAnimation = function (config_) {
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Navbar$updateConfig,
		function (conf) {
			return _Utils_update(
				conf,
				{withAnimation: true});
		},
		config_);
};
var $author$project$Main$view = function (model) {
	var zooming = 'scale(' + ($elm$core$String$fromFloat(model.zoom) + ')');
	var shareB64 = $truqu$elm_base64$Base64$encode(
		A2(
			$elm$json$Json$Encode$encode,
			0,
			$author$project$Main$savedGraphToJSON(
				$author$project$Main$getCurrentGraph(model))));
	var baseUrl = function () {
		var _v6 = model.url;
		if (_v6.$ === 'Nothing') {
			return '';
		} else {
			var a = _v6.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$elm$core$List$head(
					A2(
						$elm$core$String$split,
						'?',
						$elm$url$Url$toString(a))));
		}
	}();
	var shareUrl = baseUrl + ('?' + shareB64);
	var _v0 = _Utils_Tuple2((model.size.width / model.zoom) / 2, (model.size.height / model.zoom) / 2);
	var halfWidth = _v0.a;
	var halfHeight = _v0.b;
	var _v1 = _Utils_Tuple2(
		$elm_explorations$linear_algebra$Math$Vector2$getX(model.center),
		$elm_explorations$linear_algebra$Math$Vector2$getY(model.center));
	var cx = _v1.a;
	var cy = _v1.b;
	var _v2 = _Utils_Tuple2(cy - halfHeight, cx - halfWidth);
	var top = _v2.a;
	var left = _v2.b;
	var panning = 'translate(' + ($elm$core$String$fromFloat(-left) + (', ' + ($elm$core$String$fromFloat(-top) + ')')));
	var makeSvg = function (modelIn) {
		if (modelIn.svgString === '') {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$Attributes$style,
						'width',
						$elm$core$String$fromInt(modelIn.width) + 'px'),
						A2(
						$elm$html$Html$Attributes$style,
						'height',
						$elm$core$String$fromInt(modelIn.height) + 'px'),
						A2($elm$html$Html$Attributes$style, 'display', 'flex'),
						A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
						A2($elm$html$Html$Attributes$style, 'justify-content', 'center')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Input a program to begin')
					]));
		} else {
			var _v4 = A2(
				$author$project$SvgUtil$svgNodeToSvgMod,
				A2(
					$elm$core$Basics$composeR,
					$author$project$SvgUtil$addRefdNodes(model.refNodes),
					$author$project$SvgUtil$modTitle(model.allNodeLabels)),
				$author$project$SvgUtil$cleanFront(modelIn.svgString));
			if (_v4.$ === 'Err') {
				var msg = _v4.a;
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$Attributes$style,
							'width',
							$elm$core$String$fromInt(modelIn.width) + 'px'),
							A2(
							$elm$html$Html$Attributes$style,
							'height',
							$elm$core$String$fromInt(modelIn.height) + 'px'),
							A2($elm$html$Html$Attributes$style, 'display', 'flex'),
							A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
							A2($elm$html$Html$Attributes$style, 'justify-content', 'center')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(msg)
						]));
			} else {
				var _v5 = _v4.a;
				var svgs = _v5.b;
				return A2(
					$elm$svg$Svg$svg,
					_List_fromArray(
						[
							A2($author$project$Main$num, $elm$svg$Svg$Attributes$width, modelIn.width),
							A2($author$project$Main$num, $elm$svg$Svg$Attributes$height, modelIn.height),
							$author$project$Main$handleZoom($author$project$Main$Zoom),
							A2($zaboco$elm_draggable$Draggable$mouseTrigger, _Utils_Tuple0, $author$project$Main$DragMsg),
							$author$project$Main$clickHandler($author$project$Main$NodeClicked),
							A2($elm$html$Html$Attributes$style, 'cursor', 'pointer')
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$g,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$transform(zooming + (' ' + panning)),
									$elm$svg$Svg$Attributes$id('graph0'),
									$elm$svg$Svg$Attributes$class('graph')
								]),
							svgs)
						]));
			}
		}
	};
	var _v3 = _Utils_Tuple2(cy + halfHeight, cx + halfWidth);
	return {
		body: _List_fromArray(
			[
				A2(
				$rundis$elm_bootstrap$Bootstrap$Navbar$view,
				model.navbarState,
				A2(
					$rundis$elm_bootstrap$Bootstrap$Navbar$customItems,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Navbar$formItem,
							_List_Nil,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Form$Input$text(
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Form$Input$attrs(
											_List_fromArray(
												[
													$elm$html$Html$Attributes$placeholder('Enter a Name to Save'),
													$elm$html$Html$Events$onInput($author$project$Main$UpdateName),
													$elm$html$Html$Attributes$value(model.saveName)
												]))
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Button$button,
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Button$success,
											$rundis$elm_bootstrap$Bootstrap$Button$onClick($author$project$Main$SaveGraph),
											$rundis$elm_bootstrap$Bootstrap$Button$attrs(
											_List_fromArray(
												[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml2Sm]))
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Save Program')
										]))
								]))
						]),
					A2(
						$rundis$elm_bootstrap$Bootstrap$Navbar$items,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdown(
								{
									id: 'loadDD',
									items: A2(
										$elm$core$List$cons,
										$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownHeader(
											_List_fromArray(
												[
													$elm$html$Html$text('Saved Programs')
												])),
										_Utils_ap(
											A2(
												$elm$core$List$map,
												function (s) {
													return A2(
														$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
														_List_fromArray(
															[
																$elm$html$Html$Events$onClick(
																$author$project$Main$LoadSavedGraph(s))
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(s)
															]));
												},
												model.savedGraphKeys),
											A2(
												$elm$core$List$cons,
												$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownHeader(
													_List_fromArray(
														[
															$elm$html$Html$text('Example Programs')
														])),
												A2(
													$elm$core$List$map,
													function (s) {
														return A2(
															$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
															_List_fromArray(
																[
																	$elm$html$Html$Events$onClick(
																	$author$project$Main$LoadEx(s))
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text(s)
																]));
													},
													$elm$core$Dict$keys(model.initData.examples))))),
									toggle: A2(
										$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownToggle,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Load')
											]))
								}),
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdown(
								{
									id: 'DeleteDD',
									items: A2(
										$elm$core$List$cons,
										$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownHeader(
											_List_fromArray(
												[
													$elm$html$Html$text('Saved Programs')
												])),
										A2(
											$elm$core$List$map,
											function (s) {
												return A2(
													$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
													_List_fromArray(
														[
															$elm$html$Html$Events$onClick(
															$author$project$Main$DeleteSavedGraph(s))
														]),
													_List_fromArray(
														[
															$elm$html$Html$text(s)
														]));
											},
											model.savedGraphKeys)),
									toggle: A2(
										$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownToggle,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Delete')
											]))
								}),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$itemLink,
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(
										$author$project$Main$CBCopy(shareUrl)),
										A2($elm$html$Html$Attributes$style, 'cursor', 'pointer')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Share')
									]))
							]),
						$rundis$elm_bootstrap$Bootstrap$Navbar$info(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Navbar$brand,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('/index.html'),
										A2($elm$html$Html$Attributes$style, 'cursor', 'pointer')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Tracr.app')
									]),
								$rundis$elm_bootstrap$Bootstrap$Navbar$collapseSmall(
									$rundis$elm_bootstrap$Bootstrap$Navbar$withAnimation(
										$rundis$elm_bootstrap$Bootstrap$Navbar$config($author$project$Main$NavbarMsg)))))))),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'vertical-align', 'top'),
						A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
						A2($elm$html$Html$Attributes$style, 'right', '0%'),
						A2($elm$html$Html$Attributes$style, 'bottom', '0%'),
						A2($elm$html$Html$Attributes$style, 'width', '550px'),
						A2($elm$html$Html$Attributes$style, 'z-index', '3')
					]),
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Accordion$view,
						model.accState,
						A2(
							$rundis$elm_bootstrap$Bootstrap$Accordion$cards,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Accordion$card(
									{
										blocks: _List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Accordion$block,
												_List_Nil,
												_List_fromArray(
													[
														$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
														A2(
															$elm$html$Html$textarea,
															_List_fromArray(
																[
																	$elm$html$Html$Events$onInput($author$project$Main$SaveProg),
																	$elm$html$Html$Attributes$value(model.program),
																	$elm$html$Html$Attributes$rows(4),
																	$elm$html$Html$Attributes$cols(40)
																]),
															_List_Nil))
													]))
											]),
										header: A2(
											$rundis$elm_bootstrap$Bootstrap$Accordion$header,
											_List_Nil,
											A2(
												$rundis$elm_bootstrap$Bootstrap$Accordion$toggle,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Program')
													]))),
										id: 'progCard',
										options: _List_Nil
									}),
									$rundis$elm_bootstrap$Bootstrap$Accordion$card(
									{
										blocks: _List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Accordion$block,
												_List_Nil,
												_List_fromArray(
													[
														A2(
														$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$rundis$elm_bootstrap$Bootstrap$Button$button,
																_List_fromArray(
																	[
																		$rundis$elm_bootstrap$Bootstrap$Button$success,
																		$rundis$elm_bootstrap$Bootstrap$Button$block,
																		$rundis$elm_bootstrap$Bootstrap$Button$large,
																		$rundis$elm_bootstrap$Bootstrap$Button$attrs(
																		_List_fromArray(
																			[
																				$elm$html$Html$Events$onClick($author$project$Main$AddFilter),
																				A2($elm$html$Html$Attributes$style, 'cursor', 'pointer')
																			]))
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('Add New Filter (+)')
																	]))
															]))
													])),
												$rundis$elm_bootstrap$Bootstrap$Accordion$listGroup(
												A2(
													$elm$core$List$indexedMap,
													$author$project$Main$filterCardBlock(model),
													model.items))
											]),
										header: A2(
											$rundis$elm_bootstrap$Bootstrap$Accordion$header,
											_List_Nil,
											A2(
												$rundis$elm_bootstrap$Bootstrap$Accordion$toggle,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Filters')
													]))),
										id: 'filtCard',
										options: _List_Nil
									})
								]),
							$rundis$elm_bootstrap$Bootstrap$Accordion$onlyOneOpen(
								$rundis$elm_bootstrap$Bootstrap$Accordion$withAnimation(
									$rundis$elm_bootstrap$Bootstrap$Accordion$config($author$project$Main$AccMsg)))))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'vertical-align', 'bottom'),
						A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
						A2($elm$html$Html$Attributes$style, 'right', '0%'),
						A2($elm$html$Html$Attributes$style, 'top', '56px'),
						A2($elm$html$Html$Attributes$style, 'width', '400px'),
						A2($elm$html$Html$Attributes$style, 'z-index', '3')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'width', '400px')
							]),
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Alert$view,
								model.errorVis,
								A2(
									$rundis$elm_bootstrap$Bootstrap$Alert$children,
									_List_fromArray(
										[
											A2(
											$rundis$elm_bootstrap$Bootstrap$Alert$h4,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text(
													$author$project$Main$alertTitle(model.errorType))
												])),
											$elm$html$Html$text(model.error)
										]),
									A2(
										$rundis$elm_bootstrap$Bootstrap$Alert$dismissableWithAnimation,
										$author$project$Main$AlertMsg,
										A2($author$project$Main$alertColor, model.errorType, $rundis$elm_bootstrap$Bootstrap$Alert$config))))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'border-style', 'none'),
						A2(
						$elm$html$Html$Attributes$style,
						'opacity',
						model.spinnerOn ? '0.6' : '1.0')
					]),
				_List_fromArray(
					[
						makeSvg(model)
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
						A2($elm$html$Html$Attributes$style, 'left', '0%'),
						A2($elm$html$Html$Attributes$style, 'bottom', '0%'),
						A2(
						$elm$html$Html$Attributes$style,
						'width',
						$elm$core$String$fromInt(model.width) + 'px'),
						A2(
						$elm$html$Html$Attributes$style,
						'height',
						$elm$core$String$fromInt(model.height) + 'px'),
						A2(
						$elm$html$Html$Attributes$style,
						'display',
						model.spinnerOn ? 'flex' : 'none'),
						A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
						A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
						A2($elm$html$Html$Attributes$style, 'z-index', '2'),
						A2($elm$html$Html$Attributes$style, 'background-color', 'lightgrey'),
						A2($elm$html$Html$Attributes$style, 'opacity', '0.5')
					]),
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Spinner$spinner,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Spinner$large,
								$rundis$elm_bootstrap$Bootstrap$Spinner$attrs(
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'width', '12rem'),
										A2($elm$html$Html$Attributes$style, 'height', '12rem'),
										A2($elm$html$Html$Attributes$style, 'color', 'black'),
										A2($elm$html$Html$Attributes$style, 'border-width', '1rem')
									]))
							]),
						_List_Nil)
					])),
				$author$project$Main$showContext(model)
			]),
		title: 'Tracr.app'
	};
};
var $author$project$Main$main = $elm$browser$Browser$document(
	{init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (url) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (height) {
							return $elm$json$Json$Decode$succeed(
								{height: height, url: url, width: width});
						},
						A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$int));
				},
				A2($elm$json$Json$Decode$field, 'url', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$int)))(0)}});}(this));