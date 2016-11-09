var n = Number(prompt('ВВЕДІТЬ n'));
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
 document.write( fib(n) );
//document.getElementById( fib (n) ).innerHTML=' ( fib (n) ) = ' + fib (n);
