let originalObject={
    name:"pradip",
    age:30,
    adress:{
        city:"new york",
        country:"USA"
    }
};

let shallowClone=Object.assign({}, originalObject);
shallowClone.name="prathamesh";
shallowClone.adress.city="Shrigonda";
shallowClone.adress.country="India";

console.log(originalObject);
console.log(shallowClone);

//---------- deep Object Cloning ------------
let originalObject1={
    name:"Pradip",
    age:23,
    adress:{
        city:"new york",
        country: "usa"
    }
};

let deepClone=JSON.parse(JSON.stringify(originalObject1));
deepClone.name="Atharv";
deepClone.adress.city="A.nagar";
console.log(originalObject1);
console.log(deepClone);