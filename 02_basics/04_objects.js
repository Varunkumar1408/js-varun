//const tinder = new Object() // singleton onject
const tindeUser = {}
tindeUser.id = "123@123"
tindeUser.name = "varun"
tindeUser.IsLoggedIn = false
//console.log(tindeUser);

const User = {
    email: "var@google.com",
    fullname: {
        userName: {
            firstName: "varun",
            LastName: "kumar",

        }
    }
}
//console.log(User.fullname.userName.LastName);

const s1 = {1: "a",2: "b"}
const s2 = {3: "c",4: "d"}

//const s3 = {s1,s2}
//const s3 = Object.assign({},s1,s2)
const s3 = {...s1,...s2}
//console.log(s3);

const MyHomes = {
    ownername: "rohan",
    houseRent: "40000",
    location:  "neredmet"
}
//console.log(MyHomes.location);

//const {location} = MyHomes
//console.loglocation();

const {location:loc} = MyHomes //writing like this is known as object de-structure
console.log(loc);

///// JSON API /////

// {
//     "name": "abhishek"
//     "courseName": "kdg"
//     "price": "free"
// }