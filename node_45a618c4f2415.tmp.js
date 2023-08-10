for (i = 0; i < 5; i++) {
  if (i == 2) {
    // se i é igual a 2
    break; // pare imediatamente
  }
  console.log(i, "exemplo 1");
}

// ------------------------------------

for (i = 0; i < 5; i++) {
  if (i == 2) {
    // se i é igual a 2
    continue; // encerre a iteração atual
  }
  console.log(i, "exemplo 2");
}

// ------------------------------------

i = 0; // declaração do valor de início

while (i < 5) {
  // condição de parada
  console.log(i, "exemplo 3"); // imprime os dados na tela
  i++; // incrementação: +1
}

i = 0; // declaração do valor de início

while (i < 5) {
  // condição de parada
  console.log(i); // imprime os dados na tela

  if (i == 100) {
    break;
  }
}
