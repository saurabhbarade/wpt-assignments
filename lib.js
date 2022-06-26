// a. Write a function that returns previous number. Call that function and ensure you 
// print the result in the console. Do it in nodejs

function f(x)
{
return x=x-1;
}
console.log('nodejs working '+f(3));

exports.f2=function(x)
{
return x=x-1;
}