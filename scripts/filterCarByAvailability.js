function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result=[];
  // Tulis code-mu disini
  const panjang=cars.length;

  for (let x = 0; x < panjang; x++) {
    if (cars[x].available === true) {
        result.push(cars[x]);
    }
}
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
