function School(kor, eng) {
  this.kor = kor;
  this.eng = eng;

  this.sum = function () {
    return this.kor + this.eng;
  };

  this.avg = function () {
    return Math.round(this.sum(kor, eng) / 2);
  };
}

function HighSchool(kor, eng) {
  School.apply(this, [kor, eng]);

  this.grade = function () {
    if (this.avg() >= 90) return "A";
    if (this.avg() >= 80) return "B";
    if (this.avg() >= 70) return "C";
    if (this.avg() >= 60) return "D";
    else return "F";
  };
}

HighSchool.prototype = School.prototype;

let school1 = new School(100, 85);
console.log("school sum", school1.sum());
console.log("school sum", school1.avg());

let high1 = new HighSchool(100, 85);
console.log("highschool sum", high1.sum());
console.log("highschool sum", high1.avg());
console.log("highschool grade", high1.grade());

console.dir(school1);
console.dir(high1);
