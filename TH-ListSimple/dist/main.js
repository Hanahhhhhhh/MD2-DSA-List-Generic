"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayList_1 = require("./ArrayList");
let arrayList = new ArrayList_1.ArrayList();
arrayList.add({ title: 'Lap trinh JS' });
arrayList.add({ title: 'Lap trinh PHP' });
arrayList.add({ title: 'Lap trinh Java' });
console.log(arrayList.container);
