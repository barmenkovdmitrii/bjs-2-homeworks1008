function solveEquation(a, b, c) {
    let arr;
    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if ( discriminant == 0){
        arr = [-b / 2 * a];
    }

    if (discriminant > 0){
        arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
    }

    return arr; // array
}

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let d = b**2-4*a*c;
  if (d < 0) {

  }
 else if (d > 0) {

  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
