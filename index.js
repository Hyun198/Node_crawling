/* document.getElementById("myButton").onclick = function () {
    let username;
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById('myLabel').innerHTML = "hello " + username;
} */


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
    let minu;
    let start_hour;
    let start_min;
    let end_hour;
    let end_min;
    hour = Time.slice(0,2);
    minu = Time.slice(3);
    //형 변환
    hour = Number(hour);
    minu = Number(minu);

    console.log(hour);
    console.log(minu);

    if (Part == '오픈') {
        if (minu < 30) {
            start_hour = hour- 1;
            start_min = minu - 30;
        } else {
            start_hour = hour;
            start_min = minu - 30;
        }
        end_hour = start_hour + 7;
        end_min = start_min + 30;
        if (start_min < 0) {
            start_min = Math.abs(start_min);
        } 
        if (start_min == 0) {
            document.getElementById('myLabel').innerHTML = "출근시간 : " + start_hour + "시" + "00분";
        }
        else {
            document.getElementById('myLabel').innerHTML = "출근시간 : " + start_hour + "시" + start_min + "분";
        }

        
        
    } else if (Part == '마감') {
        //본영화시간 먼저 계산
        if (minu > 60) {
            hour += 1;
            minu -= 60;
        } else {
            minu = minu + 10;
            if (minu == 60) {
                hour += 1;
                minu = minu - 60;
            }
        }
        console.log("영화 시작 시간 : " + hour + "시" + minu + "분")

        if (minu < 30) {
            start_min = minu + 30;
            start_hour = hour - 8;

            if (start_min == 0) {
                document.getElementById('myLabel').innerHTML = "출근시간 : " + start_hour + "시" + "00분";
            } else {
                document.getElementById('myLabel').innerHTML = "출근 시간 : " + start_hour + "시" + start_min + "분";
            }
        } else {
            start_min = minu - 30;
            start_hour = hour - 7;

            if (start_min == 0) {
                document.getElementById('myLabel').innerHTML = "출근시간 : " + start_hour + "시" + "00분";
            } else {
                document.getElementById('myLabel').innerHTML = "출근 시간 : " +start_hour + "시" + start_min + "분";
            }
            
        }
        
        
    } else if (Part == '마감2') {
        start_hour = hour - 7;
        start_min = minu;
        document.getElementById('myLabel').innerHTML = "출근 시간 : " +start_hour + "시" + start_min + "분";
    }


}


