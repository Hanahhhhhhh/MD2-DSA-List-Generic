import {ArrayList} from "./ArrayList";

interface Post {
    title: string;
}
let arrayList = new ArrayList<Post>();
arrayList.add({title: 'Lap trinh JS'});
arrayList.add({title: 'Lap trinh PHP'});
arrayList.add({title:'Lap trinh Java'});
console.log(arrayList.container)