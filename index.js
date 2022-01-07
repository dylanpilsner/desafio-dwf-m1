const pelis = require("./pelis.js");

function parseObject(argv) {
  const resultado = {};
  argv.forEach(function (item, ind) {
    if (item.startsWith("--")) {
      const sinGuiones = item.slice(2);
      resultado[sinGuiones] = argv[ind + 1];
    }
  });
  return resultado;
}

function main() {
  const onlyArguments = process.argv.slice(2);
  const exeCommands = parseObject(onlyArguments);
  const listaDePelis = pelis.searchByCriteria(exeCommands);
  console.log(listaDePelis);
}

main();
