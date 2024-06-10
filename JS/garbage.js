function a(){
    var c=0;
    var z=10;
    return function b()
    {
        console.log(c);
    }
}
// a();
var y=a();
y();
