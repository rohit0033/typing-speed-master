const setofWords = [
    "My name is rohit sharma and this is bullshit",
    "guys stop thinking you have to write very quickly",
    "if you have written that much means you are great",
    "i hope you enjoyed it thank you"];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('myWords');
const btn = document.getElementById('btn');
let startTime,endTime;

const playGame= () => {
    let randomNumber = Math.floor(Math.random()*setofWords.length);// math.random only show the decimal like 0.2245,0.577 so we are 
    //using floor we get their floor value 0.256*7 =2.3443 we 2 
    msg.innerText = setofWords[randomNumber];
    let date =  new Date();
    startTime= date.getTime();
    btn.innerText =  "Done Baby";
}

const endPlay=() =>{
    let date =  new Date();
    endTime= date.getTime();
    let totalTime =((endTime-startTime)/1000);
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime)*60);

    let finalMsg = "You typed total at "+speed+" words per minute";

    finalMsg += compare(msg.innerText,totalStr);
    msg.innerText =finalMsg;

}
const compare = (str1,str2) => {
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let cnt =0;

    words1.forEach(function(item,index){
        if(item ==words2[index]){
            cnt++;
        }
    })
    let errorWords = (words1.length-cnt);
    return(cnt + " correct out of "+ words1.length+" words and toal number of errors are "+errorWords + ".");
}



// const compare=(str1,str2)=>{
// 	let word1=str1.split(" ");
// 	let word2=str2.split(" ");
// 	let count=0;
// 	for(i=0;i<word1.length;i++)
// 		{
// 			for(n=0;n<word2.length;n++)
// 			{
// 				if(word1[i]==word2[n])
// 				  {
// 				  	count++;
// 				  }
// 			}
// 		}
// 		let wrong=word1.length-count;
// 	return(count+" Out Of "+word1.length+" and total wrong words are "+wrong);
// } 

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response)
    return response;
}

btn.addEventListener('click',function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false; //means type area is active
        playGame()
    }
    else if(this.innerText == "Done Baby"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }

})
