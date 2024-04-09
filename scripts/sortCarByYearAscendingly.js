function sortCarByYearAscendingly(cars) {
  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Gunakan Array.sort() dengan fungsi pembanding
  panjang=result.length;

  for (let z = 0; z < panjang-1; z++) {
    for (let x = 0; x < panjang - z-1; x++) {
        if (result[x].year > result[x + 1].year) {
            const nilai = result[x];
            result[x]= result[x + 1];
            result[x + 1]= nilai;
        }
    }
}

  // Kembalikan array hasil sorting
  return result;
}