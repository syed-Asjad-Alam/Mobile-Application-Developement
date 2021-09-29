class Employee{
    constructor(ename, depart) {
        this.ename = ename || ''
        this.depart = depart || 'general'
    }

    get _ename() {
        return this.ename
    }
    get _depart() {
        return this.depart
    }

    setename(en) {
        this.ename = en
    }

    setdepart(dp) {
        this.depart = dp
    }

}

class Manager extends Employee {
    constructor(ename, depart, reports) {
        super(ename, depart)
        this.reports = reports || []
    }
    get _reports() {
        return this.reports
    }

    setreports(rp) {
        this.reports = rp
    }


}

class Workerbee extends Employee{
    constructor(ename, depart, projects) {
        super(ename, depart)
        this.projects = projects || []
    }

    get _projects() {
        return this.projects
    }
    setprojects(pj) {
        this.projects= pj
    }

}

class SalesPerson extends Workerbee{
    constructor(ename, depart, projects, qouta) {
        super(ename, depart, projects)
        this.qouta = qouta || 100
        this.depart = "Sales"
    }

    get _qouta() {
        return this.qouta
    }

    setquota(qt) {
        this.qouta = qt
    }

}
class Engineer extends Workerbee {
    constructor(ename, depart, projects, machine) {
        super(ename, depart, projects)
        this.machine = machine || []
        this.depart = "Engineering"
    }
    get _machine() {
        return this.machine
    }

    setmachine(mc) {
        this.machine = mc
    }

}

var e1 = new Employee()
console.log(e1)
e1.setename('asjad')
console.log(e1)

var en1 = new Engineer()
console.log(en1)