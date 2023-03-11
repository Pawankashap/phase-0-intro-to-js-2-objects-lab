// Write your solution in this file!
const employee={name:"Pawan Kumar",streetAddress:"Union City, California, USA"}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value; //Why are we using bracket notation here?
    return newObj;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key] = value; //Why are we using bracket notation here?
    return obj;
}
 
function deleteFromEmployeeByKey (obj,key,value) {
    const newObj= { ...obj}
    delete newObj[key]
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj,key) {
    delete obj[key]
    return obj;
}