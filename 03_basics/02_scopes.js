
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);// a will not be printed it will given reference error
//console.log(b);// b will not be printed it will given reference error
//console.log(c);// 30

function one (){
    const username = "varun"
    function two () {
        const age = 24
        //console.log(username);
    }
    //console.log(age);
    two()
}
one()


if (true) {
    const username1 ="varun"
    if (username1 === "varun") {
        const website = "youtube"
        //console.log(username1+website);
    }
   // console.log(website);
}
//console.log(username1);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



//addTwo(5)
const addTwo = function(num){
    return num + 2
}





