function countDown(num){

  let timer =  setInterval(function(){
       if(num<=0){
           clearInterval;
           console.log('Done!');
       }else{
           console.log(num);
       }
       num --;
   },    1000);
}

countDown(4);



function randomGame(){

    let counter = 0;
    let counting  = setInterval(function(){
       
        let num = Math.random();
        counter++;
        if(num>.75){
            clearInterval(counting);
            console.log(num);
        }
   },1000)}


randomGame();
