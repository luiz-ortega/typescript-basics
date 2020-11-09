type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// Readonly
const todo: Readonly<Todo> = {
  title: "Assistir Dark de novo",
  description: "Relembrar os detalhes",
  completed: false,
};

console.log(todo);

// todo.completed = true;
// console.log(todo);

// Partial -> deixa todas as propriedades opcionais.
function updatedTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo2: Todo = updatedTodo(todo, { completed: true });

// Pick -> Pega do Todo apenas as propriedades descritas
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
  title: "Fechar Ghost of Tsushima",
  completed: false,
};

// Omit
type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview = {
  title: "Fechar Ghost of Tsushima",
  completed: false,
};
