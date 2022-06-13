"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSalary = void 0;
class EmployeeSalary {
    constructor(month, money, next) {
        this.month = month;
        this.money = money;
        this.next = next;
    }
    readData() {
        return [this.month, this.money];
    }
}
exports.EmployeeSalary = EmployeeSalary;
