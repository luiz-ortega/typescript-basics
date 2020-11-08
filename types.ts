//bollean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: number[];
items = [1, 2, 3, 4, "foo"];
//     Generic
let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string];
title = [1, "foo", 3];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}

// any (não é legal)
let coisa: any;
coisa = [1];

// void (vazio) -> funções que não retornam nada
function logger(): void {
  console.log("foo");
}

// null | undefined
type Bla = string | undefined;

// never -> nunca retorna
function error(): never {
  throw new Error("error");
}

// object
let cart: object;
cart = {
  key: "fi",
};
