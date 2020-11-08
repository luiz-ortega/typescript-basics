"use strict";
//bollean (true / false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff0;
// array (type[])
var items;
items = [1, 2, 3, 4];
//     Generic
var values;
values = [1, 2, 3];
// tuple
var title;
// title = [1, "foo", 3];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (não é legal)
var coisa;
coisa = [1];
// void (vazio) -> funções que não retornam nada
function logger() {
    console.log("foo");
}
// never -> nunca retorna
function error() {
    throw new Error("error");
}
// object
var cart;
cart = {
    key: "fi",
};
//type inference -> evita tipagem de forma redundante.
var message2 = "mensagem definida";
message2 = "1";
// não necessita tipar com (e: MouseEvent)
window.addEventListener("click", function (e) {
    console.log(e.target);
});
