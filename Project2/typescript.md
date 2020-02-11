## Typescript常用知识点回顾

### 作用
为变量，函数，类等语法声明类型，方便进行静态检测，弥补JS弱类型语法的劣势

### 常用功能

#### 类型注释
```ts
let a:number = 100; // 规定a只能是一个number类型数据
let b:number|string = '';   // 规定b是一个number或string的类型

function func(a: numer, b: string, c?: boolean):any []{
    return [a, b, c];
}   // 限定函数的参数类型，参数数量和返回值类型
```

#### 接口
为了满足业务需求实现一些自定义的数据类型
```ts
interface PropType{
    chinaList: Array<{
        total: number,
        suspect: number,
        heal: number,
        dead: number
    }>
}
```

#### 类
控制属性的访问权限，引入了三个关键字
- public 公开的，内部函数和实例都可以访问
- private 私有的，内部函数可以访问，实例访问不了
- protected 受保护的，内部函数和子类的函数均可访问


#### 泛型
泛型可以理解为一个变量，当调用这个函数或者类的时候指定变量的类型  
变量的类型可以是基础数据类型，引用数据类型，类，接口，类型别名
```ts
// 最基础的泛型就是数组
let arr1: number[] = [1,2,3,4,5];
let arr2: Array<{
    num: number,
    price: number
}> = [{num:100, price: 50}]


function identity<T>(arg: T): T {
    return arg;
}
// 调用
identity<number>(100);
类型推断=> identity(200);
```

#### 命名空间
防止变量或类型的全局污染，配合模块引入命名空间的概念，访问内部属性一律先访问命名空间
```ts
declare namespace wz_1704B{
    export class A;
    export class B;
    export class C;
}
```