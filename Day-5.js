const person = {
  name: "mohan",
  birthYear: 1995,
  friend: ["shakti", "gopi"],

  //   // function expression calAge

  //   // first type
  calAge: function (birthYear) {
    return 2022 - birthYear;
  },
};

// print function

console.log(person.calAge(1995)); // dotMethod
console.log(person["calAge"](1993)); // bracketMethod

// second type
// used this
// avoid repeat

const person = {
  name: "mohan",
  birthYear: 1995,
  friend: ["shakti", "gopi"],

  // function expression calAge

  // second type

  calAge: function () {
    return this.birthYear;
  },
};

console.log(person.calAge());
console.log(person["calAge"]());

// third type
// used this

const person = {
  name: "mohan",
  birthYear: 1995,
  friend: ["shakti", "gopi"],

  // function expression calAge

  // second type

  calAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};
console.log(person.calAge());
console.log(person.age);
console.log(person.age);

// i am ripan , 27 year old and have a driver license

const me = {
  name: "ripan",
  birthYear: 1995,
  hasDriverLicense: true,
  calAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  summary: function () {
    return `i am ${this.name}, ${this.age}year old and have ${
      this.hasDriverLicense ? "a" : "no"
    } driver license `;
  },
};

console.log(me.calAge());
console.log(me.age);

console.log(me.summary());

// questions solving
// bmi = mass / height ** 2
// mass in kg and height in meter
// testData
// mark:weight:78kg ,height:1.69m
// john:weight:92kh , height:1.95
// calcBmi
// fullName
// mass
// height

const mark = {
  name: "mark",
  mass: 78,
  height: 1.69,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(mark.calBMI());

const john = {
  name: "john",
  mass: 92,
  height: 1.95,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(john.calBMI());

// comparison

console.log(mark.bmi, john.bmi);

// if else condition
// output : john,s bmi (23.5) is higher than mark (34.5)

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.name} bmi ${mark.bmi.toFixed(2)} is higher  than  ${
      john.name
    } ${john.bmi.toFixed(2)}`
  );
}

function employee(name) {
  return {
    name: name,
    work: function () {
      console.log("the employee name is " + name);
    },
  };
}

const person = employee("raj");
person.work();
