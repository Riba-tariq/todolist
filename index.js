import inquirer from 'inquirer';
let todo = ["riba", "tariq"];
async function creattodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "what you add in todo",
            name: "select",
            choices: ["add", "update", "view", "delete"]
        });
        if (ans.select == "add") {
            let addtodo = await inquirer.prompt({
                type: "input",
                message: " add item in todo",
                name: "add"
            });
            todos.push(addtodo.add);
            console.log(todos);
        }
        if (ans.select == "update") {
            let updatetodo = await inquirer.prompt({
                type: "list",
                message: "select item for update",
                choices: todos.map(item => item),
                name: "todo",
            });
            let addtodo = await inquirer.prompt({
                type: "input",
                message: " add item .",
                name: "todo",
            });
            let newtodo = todos.filter(val => val !== updatetodo.todo);
            todos = [...newtodo, addtodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log(todos);
        }
        if (ans.select == "delete") {
            let deletetodo = await inquirer.prompt({
                type: "list",
                message: "select item for delete",
                choices: todos.map(item => item),
                name: "todo",
            });
            let newtodo = todos.filter(val => val !== deletetodo.todo);
            todos = [...newtodo];
            console.log(todos);
        }
    } while (true);
}
creattodo(todo);
