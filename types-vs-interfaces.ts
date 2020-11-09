// type Alias
// mais simples e mais recomendado na maioria das vezes.

// Apenas uma declaração por escopo
type JqueryT = { a: string };
// type JqueryT = {b: string};

// intercace

// são mais extensiveis
// Pode ter múltiplas declarações. Une interfaces que possuem o mesmo nome.
// Indicado para padrões objetos/classes
interface Jquery {
  a: string;
}

interface Jquery {
  b: string;
}

const $: Jquery = {
  a: "bla",
  b: "foo",
};
