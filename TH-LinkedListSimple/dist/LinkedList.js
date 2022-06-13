"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Node_1 = require("./Node");
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirstNode(data) {
        let node = new Node_1.Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }
    insertLastNode(data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            let node = new Node_1.Node(data);
            // @ts-ignore
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }
    getSize() {
        return this.size;
    }
    readList() {
        let listData = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    }
}
exports.LinkedList = LinkedList;
