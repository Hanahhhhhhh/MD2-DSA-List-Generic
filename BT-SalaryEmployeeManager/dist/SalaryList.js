"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryList = void 0;
const EmployeeSalary_1 = require("./EmployeeSalary");
class SalaryList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // Them mot node moi vao dau
    addNewDataAtFirst(month, money) {
        this.head = new EmployeeSalary_1.EmployeeSalary(month, money, this.head);
        if (!this.tail)
            this.tail = this.head;
    }
    // Them mot node moi vao cuoi
    addNewDataAtLast(month, money) {
        if (!this.head) {
            this.addNewDataAtFirst(month, money);
        }
        else {
            let currentData = new EmployeeSalary_1.EmployeeSalary(month, money, null);
            // @ts-ignore
            this.tail.next = currentData;
            this.tail = currentData;
        }
    }
    // Hien thi danh sach node
    showListData() {
        let currentData = this.head;
        let result = [];
        while (currentData) {
            result.push([currentData.month, currentData.money]);
            console.log([currentData.month, currentData.money]);
            currentData = currentData.next;
        }
        // console.log(result)
        // @ts-ignore
        return result;
    }
    // Tinh tong luong cua nhan vien
    totalEmployeeWave() {
        let currentData = this.head;
        let totalSalary = 0;
        while (currentData !== null) {
            totalSalary += currentData.money;
            currentData = currentData.next;
        }
        console.log(totalSalary);
        return totalSalary;
    }
    // Tim thang co luong cao nhat
    maxWave() {
        let currentData = this.head;
        let maxSalary = 0;
        let result;
        while (currentData !== null) {
            if (maxSalary < currentData.money) {
                maxSalary = currentData.money;
                result = [currentData.month, currentData.money];
            }
            currentData = currentData.next;
        }
        console.log(result);
        // @ts-ignore
        return result;
    }
}
exports.SalaryList = SalaryList;
