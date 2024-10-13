class SuperClass {
  constructor(
    public id: string,
    public age: number,
    protected address: string
  ) {}
  email: "a@a.com";
  private phone = "1111";
  protected url: "http://google.com";
  some() {
    console.log(this.id, this.age, this.address);
  }
}

let superObj = new SuperClass("kim", 10, "seoul");
superObj.some();
