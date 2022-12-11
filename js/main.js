let user ="user";
        window.onload=function(){

        // create 20 picture div and add it to the page
        for(let i =0;i<20;i++){
        let childDiv =document.createElement("div");
        let signalDiv =document.createElement("div");
        let picDiv =document.createElement("div");
        childDiv.className="child";
        signalDiv.className="signal";
        picDiv.className="pic";
        let imgCreate =document.createElement("img");
        imgCreate.src = `img/${newArr[i]}.jpg`;
        let textSign = document.createTextNode("!");
        picDiv.appendChild(imgCreate);
        signalDiv.appendChild(textSign);
        childDiv.appendChild(signalDiv);
        childDiv.appendChild(picDiv);
        document.querySelector(".parent").appendChild(childDiv);
        }

        // set user name
        setTimeout(function(){
            let user = prompt("Your Name");
            if(user != null){
        document.querySelector(".top .name").innerHTML=`Your Name : ${user}`;
            }
    },0)
        }
        let child = document.querySelector(".child");
        let signal = document.querySelector(".signal");
        let pic = document.querySelector(".pic");
        let imgs = document.querySelectorAll(".pic img");

        // put random pictures
        let arr=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
        let newArr =[];
        for(let i =0;i<20;){
            let num = Math.random()*10 + 1;
            if(arr.includes(Math.floor(num))){
                let slice =`${arr.splice(arr.indexOf(Math.floor(num)),1)}`;
                newArr.push(slice);
                i++;
            }else{
                continue;
            }
        }
        let countFailedTry =0;
            window.addEventListener("click",function(e){

                // calc the open images
                if(document.querySelectorAll(".open").length != 0){
            let arrOfOpenImg = document.querySelectorAll(".open");
        }

        // open the picture
            if(e.target.className == "signal"){
             e.target.style.cssText ="transform: rotateY(180deg);z-index: -1;";
             e.target.classList.add("open");
            }
                if(document.querySelectorAll(".open").length == 2){
                    let arrOfOpenImg = document.querySelectorAll(".open");
                    
                    // count the failed tries
                    if(arrOfOpenImg[0].nextElementSibling.firstElementChild.src != arrOfOpenImg[1].nextElementSibling.firstElementChild.src){
                    countFailedTry++;
                    document.querySelector(".top .failedTry").innerHTML=`Failed Try : ${countFailedTry}`;
                    }
                    arrOfOpenImg.forEach((e)=>{

                        // add class done for same pictures
                        if(arrOfOpenImg[0].nextElementSibling.firstElementChild.src == arrOfOpenImg[1].nextElementSibling.firstElementChild.src){
                            e.classList.add("done");
                        }else{

                            // close the diffirint pictures
                            setTimeout(function(){
                            e.style.cssText ="transform: rotateY(0deg);z-index: 1;";
                            },500)
                        }

                        // remove class open after two pictures
                        e.classList.remove("open");
                    })
                }

                // you won
                if(document.querySelectorAll(".done").length == 20){
                    let winDiv = document.createElement("div");
                    winDiv.className = "win";
                    let textWin = document.createTextNode("You Won");
                    winDiv.appendChild(textWin);
                    let countSpan =document.createElement("span");
                    countSpan.className ="count";
                    let counter = document.createTextNode(`Failed Try :${countFailedTry}`);
                    countSpan.appendChild(counter);
                    winDiv.appendChild(countSpan);
                    document.body.appendChild(winDiv);
                    console.log("done");
                }
            })
