var input = `3
2 1
1 2
2 2
1 2
3 20
1 2 3`;


function arrayShift(ele, l, s) {
    var res = '';
    s = s % l;
for(var i=0;i<l;i++){
res+=ele[(l+i-s)%l]+' ';
}
console.log(res);  
}

  var newInput = input.split(/[\r\n]+/);
  var length = Number(newInput[0]);
  for(var i=1;i<=length;i++){
    var val= newInput[2*i-1].split(" ").map(Number);
    var len=val[0];
    var shift=val[1];
  var data = newInput[2*i].split(" ").map(Number);
    arrayShift(data,len,shift);
  }

