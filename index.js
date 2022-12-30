var Home = document.querySelector(".first-home");
var letMeInputBtn = document.querySelector("#letMeInput");
var Choose = document.querySelector(".Choose-option");
var Team6 = document.querySelector("#input-lev");
//var Team6Btn      = document.querySelector("#input-lev");
var InputLev = document.querySelector(".input-lev");
var InfoCollectBtn = document.querySelector("#InfoCollect");
var Inputs = document.querySelectorAll(".input-names");
var Team33 = document.querySelector(".Team33");
var Team33D = document.querySelectorAll(".Team33>div");



//document.querySelector("#letMeInput").addEventListener("click",()=>{alert("(:")})
letMeInputBtn.addEventListener("click", () => {
    Choose.style.display = "block";
    letMeInputBtn.style.display = "none";
})

Choose.addEventListener("click", () => {
    Choose.style.display = "none";
    InputLev.style.display = "block";
})


function RandomArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}







var ErrorMsg = true;
var FetchStatue = false;
var LastArr = [];
var count = 0;
var Valid = true;
InfoCollectBtn.addEventListener("click", () => {
    Inputs.forEach(e => {
        Keys = e.value.trim();
        if (e.value.trim() == "" || e.value.trim() == undefined) {
            ErrorMsg = "Fill All Fields \n Spaces Not Allowed (:";
        } else {
            ErrorMsg = "Congratulations";
            FetchStatue = true;
            LastArr.push(Keys);

        }
    });
    if (ErrorMsg != true) {
        alert(ErrorMsg);
    }
    if (FetchStatue == true) {
        
        LastArr.forEach(h =>{
            if (h == "" || h == undefined){
                Valid = false;
                console.log(Valid);
            }
        })
        if (Valid == true) {
            console.log(LastArr);
            OurResult = RandomArr(LastArr);
            console.log(OurResult);
            InputLev.style.display = "None";
            Team33D.forEach(d => {
                d.innerHTML = OurResult[count]
                count++
            });
            Team33.style.display = "flex";
        }else{
            
        }

    }
    console.log(Inputs[0].value);
})


