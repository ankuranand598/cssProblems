function diagonalSum(ele,val){
var sum =0;
  var sum2 =0;
  for(var i=0;i<val;i++){
  //sum += ele[i][i];
    console.log(ele[i][i])
  }
  var temp=0;
  for(var j=val-1;j>=0;j--){
 
   //console.log(ele[temp][j]);
  
    temp++;
  }
  //console.log(sum);
}

function  convert2d(ele,val){

 var arr1=[];
  for(var i=0;i<ele.length;i+=val){
    var arr=[];
  for(var j=i;j<i+val;j++){
 
      arr.push(ele[j]);
    
  }
   arr1.push(arr);
    //arr=[];
  }
  
  //diagonalSum(arr1,val);
    console.log(arr1);
}

function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var length = Number(newInput[0]);
  for(var i=1;i<=length;i++){
    var len=Number(newInput[2*i-1]);
  var data = newInput[2*i].split(" ").map(Number);
    convert2d(data,len);
                            }
}

if (process.env.USERNAME === "ankur") {
  runProgram(`3
1
1
2
1 2 3 4
3
1 2 3 4 5 6 7 8 9`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}