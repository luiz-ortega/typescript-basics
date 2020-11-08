// Type alias -> evita repetição de tipagens e provém melhor estruturação.
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a nem as ${user}`);
}

type Platform = "Windows" | "Linux" | "Mac Os";

function renderPlatform(platform: Platform) {
  return platform;
}
renderPlatform("ios");

logDetails(123, "sapato");
logDetails("123", "sapato");

logInfo(123, "John");
logInfo("123", "John");
