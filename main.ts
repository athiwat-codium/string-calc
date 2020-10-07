
export function Add(numbers: string,): number{

    /*
    Add support for different delemiters via regular expression
     */

    var b = numbers.split(',').map(function(item) {
        return parseInt(item, 10);
    }).reduce(function(a,b){
        return a+b
    });

    return b;
}
