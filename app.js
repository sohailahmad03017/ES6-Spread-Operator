var obj = {
    child : {
        grandChild : {
            name: "Sohail Ahmad"
        }
    }
}
//Getting grandChild object using spread operator
let newObj = {...(obj.child.grandChild)}


let arr = [2, [2, ["Sohail Ahmad"]]]
//Getting grandChild array using spread operator
let newArr = [...arr[1][1]];
