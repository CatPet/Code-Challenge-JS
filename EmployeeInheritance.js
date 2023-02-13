function Employee(title) {
    this.title = title;
}

Employee.prototype.getTitle = function () {
    return this.title;
}

Employee.prototype.setTitle = function (title) {
    this.title = title;
}

function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
}

Object.setPrototypeOf(Engineer.prototype, Employee.prototype);

Engineer.prototype.getIsManager = function () {
    return this.isManager;
}

Engineer.prototype.setIsManager = function (isManager) {
    this.isManager = isManager
}