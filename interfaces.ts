// conjunto de dados para descrever objetos

interface IGame {
  title: string;
  description: string;
  readonly genre: string;
  platform: string[];
  getSimilars?: (title: string) => void;
}

const gta: IGame = {
  title: "Gta V",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PC", "PS4"],
  getSimilars: (title: string) => {
    console.log(
      `Similar games to ${title}: Gta Vice City, Mafia, Gta San Andreas.`
    );
  },
};

console.log(gta.genre);
// gta.genre = "Adventure";

if (gta.getSimilars) {
  gta.getSimilars(gta.title);
}

interface DLC extends IGame {
  orignalGame: IGame;
  newContent: string[];
}

const sharkCashCards: DLC = {
  title: "Gta - Shark Cash Cards",
  description: "New cards for GTA V",
  genre: "Action",
  platform: ["PC", "PS4"],
  orignalGame: gta,
  newContent: ["New credit card items", "New charcters"],
};

class CreateGame implements IGame {
  title: string;
  description: string;
  genre: string;
  platform: string[];

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
    this.platform = ["PC"];
  }
}
