class Person {
    static num = 0
    constructor(fName, Lname, age) {
        this.fName = fName
        this.Lname = Lname
        this.age = age
        Person.count()
    }

    static count() {
        this.num += 1
        
    }
    static display() {
        return this.num
    }
}

class Employee extends Person {
    static num = 0
    constructor(fName,Lname,age,depart, desig, salary) {
        super(fName,Lname,age)
        this.depart = depart
        this.desig = desig
        this.salary = salary
        Employee.count()
    }
    static count() {
        this.num += 1
    }
    static display() {
        return this.num
    }
}

class Student  extends Person {
    static num = 0
    constructor(fName, Lname, age, regno, class1, CGPA, course) {
        super(fName, Lname, age)
        this.regno = regno
        this.class1 = class1
        this.CGPA = CGPA
        this.course = course
        Student.count()
    }
    static count() {
        this.num += 1
    }

    static display() {
        return this.num
    }
}

class Staff  extends Employee {
    static num = 0
    constructor(fName, Lname, age, depart, desig, salary, task) {
        super(fName, Lname, age, depart, desig, salary)
        this.task = task
        Staff.count()
    }
    static count() {
        this.num += 1
    }
    static display() {
        return this.num
    }
}

class Teacher extends Employee {
    static num = 0
    constructor(fName, Lname, age, depart, desig, salary, experience, qualification, course) {
        super(fName, Lname, age, depart, desig, salary)
        this.experience = experience
        this.qualification = qualification
        this.course = course 
        Teacher.count()
        
    
    }
    static count() {
        this.num += 1

    }
    static display() {
        return this.num
    }
}

var st1 = new Student('Asjad', 'Alam', 21, 'SP19-BCS-016', 'BCS-6A', 3.35, 'M.A.D')
var st2 = new Student('Aoun','Mustafa',21, 'SP19-BCS-015', 'BCS-6A', 3.45, 'Data mining')
console.log(st1)
console.log(st2)
console.log(Student.display())
var t1 = new Teacher('Zaheer','Hussain', 28, 'CS', 'Professer', 150000, '10 years', 'MSCS', 'M.A.D')
var t2 = new Teacher('Majid','Iqbal', 40, 'CS', 'HOD', 350000, '20 years', 'PHD', 'ICT')
console.log(t1)
console.log(t2)
console.log(Teacher.display())
var s1 = new Staff('Kamran','Khan', 30, 'AB','Clerk', 50000,'billing')
var s2 = new Staff('Kareem','Ahmed', 34, 'CS', 'Conductor', 30000, 'bus maintenance')
console.log(s1)
console.log(s2)
console.log(Staff.display())