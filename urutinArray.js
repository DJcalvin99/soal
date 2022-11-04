// nomer 1: pangurutan array 

const arr = [12,9,30,'A','M',99,82,'J','N','B'];
// lakukan pengurutan 
arr_urut = arr.sort();

// ambil array angka
var arrA = arr_urut.splice(0,5);
// simpan array huruf ke array baru
var arrH = arr_urut;

// gabung array yang telah dipisahkan dengan array berisikan huruf duluan 
arr_terurut = arrH + ',' + arrA;

// check array nya 
console.log(arr_terurut);




