const todo = {
    id: "aansassfsdfs",
    text: "Pay the bills",
    completed: false,
    name: "mohsen",
};

const {
    text: todoText,
    completed,
    details: otherDetails = "No details provided",
    ...others
} = todo;

console.log(todoText);
console.log(completed);
console.log(otherDetails);
console.log(others);
