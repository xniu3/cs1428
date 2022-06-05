function a() {
    console.log('A');
  }
  //alerts 'A', returns undefined
  
  function b() {
    console.log('B');
    return a;
  }
  //alerts 'B', returns function a
  
  function c() {
    console.log('C');
    return a();
  }
  //alerts 'C', alerts 'A', returns undefined
  newa = new a();
  console.log(typeof(newa));
  console.log("Function 'a' returns " + newa());
  console.log("Function 'b' returns " + newa());
  console.log("Function 'c' returns " + newa());