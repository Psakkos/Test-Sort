const Sort=require('./Sort.js');

function main(){
  let biglist=[];
    for(let x=0; x<100000; x++){
      biglist[x]=Math.random();
    }
    let list1= Sort.insertion(biglist);
    let list2= Sort.selection(biglist);
}
main();
