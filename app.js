greet = (name) => {
  return "Hello" + " " + name;
};
console.log(greet("Ali"));

function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(3));

sumAll = (...indefinite) => {
  let sum = 0;
  for (let i of indefinite) {
    sum += i;
  }
  return sum;
};
console.log(sumAll(2, 4, 6, 8));

function func1(first) {
  first = "f1";
  return first + " say hello";
}

function func2(second) {
  second = "f2";
  return second + " say hello";
}

function func3(third) {
  third = "f3";
  return third + " say hello";
}

serieFunc = () => {
  return func1() + " " + func2() + " " + func3() + " ";
};

console.log(serieFunc());
