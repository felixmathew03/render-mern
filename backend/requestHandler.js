import Todo from "./models/Todo.js";

export async function getTodos(req, res) {
  const todos = await Todo.find();
  res.json(todos);
}

export async function addTodo(req, res)  {
  const todo = await Todo.create({
    title: req.body.title
  });
  res.json(todo);
}
