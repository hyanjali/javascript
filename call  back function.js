function greet(name,callback){
    console.log("hello"+name);
    callback();

}

function message(){
    console.log("Welcome to java!");
}
greet ("anajli",message);