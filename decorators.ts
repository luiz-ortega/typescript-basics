// @Component
// @Selector
// @useState('asda')

// Factory
function logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} - ${target}`);
  };
}

@logger("awesome")
class Foo {}

// Class decorator -> anotar versão da API

function setAPIVersion(apiversion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiversion;
    };
  };
}
@setAPIVersion("2.0.0")
class API {}

console.log(new API());

// Property decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(
          `Erro você não pode criar ${key} com tamanho menor que ${length}`
        );
      } else {
        val = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  @minLength(5)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie("Inte");
console.log(movie.title);

// Method decorator
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
    };

    return descriptor;
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }
  // espera um tempo e roda o método
  @delay(1000)
  greet() {
    console.log(`Hello! ${this.greeting}`);
  }
}

const pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();

// Parameter decorator
// Acessor decorator
