/* ***** TASK 1 ****** */

function Person() {
    this.fName = ''
    this.LName = ''
    this.age = null


}

function Employee() {
    Person.call(this)
    this.depart = ''
    this.desig = ''
    this.salary = null
}

function Student() {
    Person.call(this)
    this.regno = ''
    this.class1 = ''
    this.CGPA =  null
    this.course = ''
}

function Staff() {
    Employee.call(this)
    this.task = ''
}

function Teacher() {
    Employee.call(this)
    this.experice = ''
    this.qualification = ''
    this.course = ''
}

var st1 = new Student()
st1.fName = 'Asjad'
st1.LName = 'Alam'
st1.age = 21
st1.regno = 'Sp19-Bcs-016'
st1.class1 = 'BCS-6A'
st1.CGPA = 3.35
st1.course = 'M.A.D'
console.log(st1)

var st2 = new Student()
st2.fName = 'Aoun'
st2.LName = 'Mustafa'
st2.age = 21
st2.regno = 'Sp19-Bcs-015'
st2.class1 = 'BCS-6A'
st2.CGPA = 3.45
st2.course = 'Data mining'
console.log(st2)

var T1 = new Teacher()
T1.fName = 'Zaheer'
T1.LName = 'Hussain'
T1.age = 28
T1.depart = 'CS'
T1.desig = 'Professer'
T1.salary = 150000
T1.experice = '10 years'
T1.qualification = 'MSCS'
T1.course = 'M.A.D'

console.log(T1)

var T2 = new Teacher()
T2.fName = 'Majid'
T2.LName = 'Iqbal'
T2.age = 40
T2.depart = 'CS'
T2.desig = 'HOD'
T2.salary = 300000
T2.experice = '20 years'
T2.qualification = 'PHD'
T2.course = 'ICT'

console.log(T2)

var s1 = new Staff()
s1.fName = 'Kamran'
s1.LName = 'Khan'
s1.age = 30
s1.depart = 'CS'
s1.desig = 'clerk'
s1.salary = 50000
s1.task =  'billing'

console.log(s1)

var s2 = new Staff()
s2.fName = 'hasan'
s2.LName = 'Janjua'
s2.age = 40
s2.depart = 'AB'
s2.desig = 'Consultant'
s2.salary = 60000
s2.task =  'issuing'

console.log(s2)


