function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  panjang=result.length;

  for (let z = 0; z < panjang-1; z++) {
    for (let x = 0; x < panjang - z-1; x++) {
        if (result[x].year < result[x + 1].year) {
            const nilai = result[x];
            result[x]= result[x + 1];
            result[x + 1]= nilai;
        }
    }
}
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
