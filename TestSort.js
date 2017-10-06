const Sort=require('./Sort.js');

function main(){
  let biglist=[];
    for(let x=0; x<1000000000; x++){
      biglist[x]=Math.random();
    }
    //let list1= Sort.insertion(biglist);
    //let list2= Sort.selection(biglist);
    let list3= Sort.merge(biglist);
}
main();
