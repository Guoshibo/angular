"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var Course = /** @class */ (function () {
    function Course(id, courseName, images, task, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
    }
    return Course;
}());
var Study = /** @class */ (function () {
    function Study(id, courseName, images, task, person, info, src) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
        this.info = info;
        this.src = src;
    }
    return Study;
}());
var Community = /** @class */ (function () {
    function Community(id, img, title, images, info, author, time, read, commit) {
        this.id = id;
        this.img = img;
        this.title = title;
        this.images = images;
        this.info = info;
        this.author = author;
        this.time = time;
        this.read = read;
        this.commit = commit;
    }
    return Community;
}());
var Join = /** @class */ (function () {
    function Join(courseName, images, task, person, score) {
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
        this.score = score;
    }
    return Join;
}());
var join = [
    new Join("混合应用开发", "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 3, 91, 0),
    new Join("HTML5与CSS3前端开发", "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130", 5, 91, 0),
    new Join("JavaScript进阶", "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130", 23, 95, 231.6),
];
var community = [
    new Community(1, 'http://usercontent.edu2act.cn/media/userheader/18-04-28/MHsG2fvR989uTfkLRZxDCY.jpeg?imageView2/1/w/256/h/256', '链栈的表示及基本操作的实现', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/1020/ySftMWD6MCnGSFbdqZia4U.png', '写了一点链栈的基本操作，第一次发文，如发现错误之处请大家及时指正。// 补充：链栈的基本操作 #include <stdio.h> #include <stdlib.h> typedef int ElemTyp', '2-马增来', '2018-10-21 17:26', 31, 0),
    new Community(2, 'http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256', 'js数组', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/1020/vsBhNsaAn8Zqd5RSPEVmVM.jpg', '声明：数组声明的三种方式：1. var arr = new Array（）；(声明一个空数组对象) arr[0]="abc";2. var arr = new Array（5）；（声明数组并初始化长度，注意数组的', '7-李建涛', '2018-10-21 11:27', 19, 0),
    new Community(3, 'http://www.edu2act.net/static/img/m.png', 'WEB开发（二）—— 函数', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg', '（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。', '刘秀梅', '2018-10-11 15:10', 1345, 4),
    new Community(4, 'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256', '类定义关键字详解', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg', 'JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来', '3-张馨元', '2018-10-09 19:21', 78, 0),
    new Community(5, 'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256', ' 一个java文件中可包含多个main方法', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg', '一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方', '3-张馨元', '2018-10-09 19:17', 59, 2),
    new Community(6, 'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256', '数据结构——线性表的经典应用', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg', '1. 一元多项式的表示和相加 在数学上，一个一元多项式(P_{n}(x))可升序写成：(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n)它由n+1个系数唯一', '杨伟彬', '2018-10-08 14:28', 61, 0),
    new Community(7, 'http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256', '栈和队列之间的相互转化', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg', '队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元', '7-李建涛', '2018-10-01 12:51', 65, 2),
    new Community(8, 'http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256', 'JavaScript event（事件对象）', 'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg', '在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相', '刘孟祎', '2018-09-28 09:40', 261, 2)
];
var study = [
    new Study(1, 'Github 开源之旅视频课程第一季：启程', 'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190', 14, 3740, '完成本课程之后，能够达到以下目标：- 实名注册 Github 账户 - 能够在 Github 上搜索资料等', 'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Study(2, '前端工程师第一步:用HTML、CSS构建网站', "http://usercontent.edu2act.cn/media/cs/15-10-26/RHhb7u98iKdWXnAi6UPedD.jpg?imageView2/1/w/320/h/190", 23, 8076, '前端工程师第一步:用HTML、CSS构建网站', "http://usercontent.edu2act.cn/media/cs/15-08-17/Z8ttfeRDQxAYqX7SYGYYuP.mp4")
];
var courses = [
    new Course(1, "混合应用开发", "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 2, 91),
    new Course(2, "HTML5与CSS3前端开发", "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130", 4, 91),
    new Course(3, "JavaScript进阶", "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130", 23, 95),
    new Course(4, "web开发一", "http://usercontent.edu2act.cn/media/team/17-02-19/qmBjHNrNtZtCN9Gaz8FNvc.png?imageView2/1/w/230/h/130", 20, 101),
    new Course(5, "web开发二", "http://usercontent.edu2act.cn/media/team/17-09-11/kUUiGsFVtgGKKwBNamUSkG.png?imageView2/1/w/230/h/130", 13, 99),
    new Course(6, "2016级数据结构", "http://usercontent.edu2act.cn/media/team/17-09-15/ywftcr7DiN6JwRPEgUxPwB.jpg?imageView2/1/w/230/h/130", 13, 99),
    new Course(7, "操作系统", "http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130", 13, 99),
    new Course(8, "2016级数据库原理", "http://usercontent.edu2act.cn/media/team/18-02-26/QMXWNRHDsraTaVofSiRCbF.png?imageView2/1/w/230/h/130", 13, 99)
];
app.get('/api/course', function (req, res) {
    res.json(courses);
}); //google中输入localhost:8000/api/course
app.get('/api/community', function (req, res) {
    res.json(community);
});
app.get('/api/course/:id', function (req, res) {
    // req.params 表示请求的是那个id 在下列的res进行判断
    res.json(courses.find(function (ele) { return ele.id == req.params.id; }));
});
app.get('/api/join', function (req, res) {
    res.json(study);
});
app.get('/api/courses', function (req, res) {
    res.json(join);
});
app.listen(8000);
