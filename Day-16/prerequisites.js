//obj destructuring
let object = {
    name: "Alex",
    age: 20,
    hobbies: ["chess", "learning languages", "video games", "reading books", "sketching and painting"],
    nationality: "Indian",
    profession: "Student"
};

console.log(object);

const {name, age} = object;

console.log(name);

//spread and rest operator.
const languages = ['Java', 'C++', 'Python', 'Javascript', 'C#'];

const newLanguages = [...languages, 'R', 'C'];

// console.log(newLanguages);

const [first, second, ...rest] = ['Hindi', 'English', 'Russian', 'Japanese', 'French'];
console.log(rest);

// map -> iterate through each individual items in an array.
newLanguages.map(lang => {
    console.log(lang);
});

// slice -> not modify original array vs splice -> modifies the original array

const vegetables = ['potato', 'tomato', 'onion', 'carrot', 'peas', 'cabbage'];
console.log(vegetables.slice(1,4)); //gives the sub arr between i- 1 to 4(not included).
console.log(vegetables);
console.log(vegetables.splice(1,4)); //same as slice but also remove these values form original array (include the last index also).
console.log(vegetables);
