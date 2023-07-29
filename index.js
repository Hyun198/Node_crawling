/* document.getElementById("myButton").onclick = function () {
    let username;
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById('myLabel').innerHTML = "hello " + username;
} */


//이건 1을 추가 함
//age += 1;
//숫자로
//age = Number(age);


//processing
/* document.getElementById("myButton").onclick = function () { 
    Time=document.getElementById("myTime").value;
    if (Time == "open")
        
        console.log(Time);
    else
        console.log("other");
}
 */

document.getElementById("myButton").onclick = function() {
    Part = document.getElementById('type').value;
    Time = document.getElementById('time').value;
    //23:10
    let hour;
    let Minute;
    hour = Time.slice(0,2);
    minu = Time.slice(3);
    hour = Number(hour);
    minu = Number(minu);

    if (Part == '오픈') {
        if (minu < 30) {
            hour -= 1;
            minu -= 30;
        } else {
            minu -= 30;
        }
        
        if (minu < 0) {
            minu = Math.abs(minu)
        }
    }
    console.log("출근시간: "+hour+"시"+minu+"분");


}


