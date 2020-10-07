
export function Add(numbers: string,): number{

  var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

  for (let c of specialChars) {
    numbers = numbers.replace(new RegExp("\\" + c, "gi"), ",");
  }

  var b = numbers.split(',').map(function(item) {
    return parseInt(item, 10);
  }).reduce(function(a,b){
    return a+b
  });

  return b;
}
