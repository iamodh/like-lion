let obj = {
  _num: 10,
  get num() {
    return this._num;
  },
  set num(value) {
    console.log("값 변경을 시도합니다.");
    this._num = value;
  },
};

obj.num = 20;
console.log(obj.num);
