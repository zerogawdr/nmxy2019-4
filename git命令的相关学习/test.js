/*
构造函数


let a={}是对象字面量的表达形式 是一个简写  真正应该是 let a=new Object

每new Object 就等于创建了一个新对象 就算对象里的属性方法都一样 也是不相等的是独立的

object的本质是function /

let b=new Function('a',b','a'+'b')
console.log(b(1,2))  //输出3 

new Function 和new Object 都是在创建对象 由此可以证明对象的本职是function
但是 new function创建的是一个函数对象

funcion Fn(){

}
这就是一个函数对象 是同过new Function创建出来的 注：构造函数一般首字母大写 便于区分

let c=new Fn()  同过函数对象创建出来的c是一个普通对象 普通对象没有prototyoe属性 只有函数对象有，
函数对象Fn的prototype是一个对象{}(也叫原型) 对象{}里的constructer就是函数对象本身

c普通对象的__proto__(隐式原型)指向函数对象Fn的prototype对象{}(也叫原型)

所有的对象都包含一个属性，__proto__ 他指向创建该对对象的构造函数的原型！！
所有的对象都包含一个属性，__proto__ 他指向创建该对对象的构造函数的原型！！
所有的对象都包含一个属性，__proto__ 他指向创建该对对象的构造函数的原型！！
 */

//小练习分析
function Name() { //这里创建了一个函数对象
    //为Name添加name方法
    this.name = function () {
        console.log("killua")
    }
}
//创建Firstname实例
function Firstname() { //又创建了一个函数对象
    //为Name添加firstname方法
    this.firstname = function () {
        console.log("L")
    }
}
//将Name的原型对象指向Firstname
Name.prototype = new Firstname(); //这里将函数对象Name的prototye指向了 函数对象Firstname
//通过Name实例化一个对象he
var he = new Name(); //这里创建了一各普通对象he
console.log(he);
he.name(); //"killua" //这里he本身没有name()这个属性 就向他的隐式原型__proto__上去找 他的隐式原型是函数对象Name的prototype
he.firstname(); //"L"