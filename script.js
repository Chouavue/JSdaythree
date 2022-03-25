//SCOPE

// function outer(){
//     var a= {Car:"Toyota Camry"};
//     var b= {Color:"blue"};
//     console.log(a,b);

//     function inner(a,b){ 
//     var a= {Car:"Honda"};
//     var b= {Color:"white"};
//     console.log(a,b);
//     }

//     inner(a,b);{
//     var b= {Color:"pink"};
//     console.log(a,b);    
// }


// }
// outer();


// RECUSION ACTIVITY

function recursive (a,b){
    if (b === 0) return 1;
    let value = (a *= recursive(a,b-1))
    console.log(value)
    return value

}

console.log(recursive(2,5))