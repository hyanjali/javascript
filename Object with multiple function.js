let calculator={
    a:10,
    b:5,
    add:function(){
        return this.a+this.b;

    },
    subtract: function(){
        return this.a-this.b;

    },
    multiply:function(){
        return this.a*this.b;

    }
};
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());