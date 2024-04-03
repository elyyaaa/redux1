// 1 Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.
// +---------------+-------------+
function howManyDays(month){
    switch (month){
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;
        default:
             return 31;

    }

}

console.log(howManyDays())

//2 Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.
const addProperty = (obj,name,value)=>{
    if(name in obj){
        console.error(`свойсто '${name}' уже существует`)
    }else{
        obj[name]=[value]
    }
};
const dorama = {
    name:"Queen of Tears",
    release: 2024,
}
addProperty(dorama,"genre", "Drama, Comedy, Melodrama")
console.log(dorama)
addProperty(dorama,"name","exo")