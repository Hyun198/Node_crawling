function getSelectedValue () {
    //오픈 마감 마감2
    const radioGroup = document.getElementsByName('part_time');
    let Part;
    for (const radio of radioGroup) {
        if (radio.checked) {
            Part = radio.value;
            break;
        }
    }

    //영화시간
    Time = document.getElementById('time').value;

    //근무시간
    const radioGroup2 = document.getElementsByName('work_time');
    let Work;
    for (const work of radioGroup2) {
        if (work.checked) {
            Work = work.value;
            break;
        }
    }

    
    //23:10
    let hour, minu;
    let start_hour, start_min;
    let end_hour, end_min;
    hour = Time.slice(0,2);
    minu = Time.slice(3);

    Work_hour = Work.slice(0,1);
    Work_minu = Work.slice(2);
/*     console.log(Type_hour);
    console.log(Type_minu); */
    Work_hour = Number(Work_hour);
    Work_minu = Number(Work_minu);
    
    //형 변환
    hour = Number(hour);
    minu = Number(minu);

    

    if (Part == 'open') {
        console.log('오픈');
        if (minu < 30) {
            start_hour = hour- 1;
            start_min = minu - 30;
        } else {
            start_hour = hour;
            start_min = minu - 30;
        }

        end_hour = start_hour + Work_hour;
        end_min = start_min + Work_minu+30;
        
        

        if (start_min < 0) {
            start_min = Math.abs(start_min);
        } 
        if (start_min == 0) {
            document.getElementById('myLabel').innerHTML = "출근시간 : " + start_hour + "시" + "00분";
            document.getElementById('output').innerHTML = '퇴근시간 : ' + end_hour + "시" + end_min + "분"; 
        }
        else {
            document.getElementById('myLabel').innerHTML = "출근시간 : " + start_hour + "시" + start_min + "분";
            document.getElementById('output').innerHTML = '퇴근시간 : ' + end_hour + "시" + end_min + "분"; 
        }

        
        
    } else if (Part == 'close') {
        console.log('마감1');
        
        //본영화시간 먼저 계산
        if (minu > 60) {
            hour += 1;
            minu -= 60;
        } else {
            minu = minu + 10;
            if (minu >= 60) {
                hour += 1;
                minu = minu - 60;
            }
        }
        console.log("영화 시작 시간 : " + hour + "시" + minu + "분")
        
/*         end_hour = start_hour + Type_hour;
        end_min = start_min + Type_minu+30;
        */

        if (minu < 30) {
            minu += 30;
            start_hour = hour - Work_hour - 1;
            start_min = minu - Work_minu;
            

            end_hour = start_hour + Work_hour;
            end_min = start_min+ Work_minu;

            if (start_min == 0) {
                document.getElementById('myLabel').innerHTML = "출근시간 : " + start_hour + "시" + "00분";
                document.getElementById('output').innerHTML = '퇴근시간 : ' + end_hour + "시" + end_min + "분"; 
            } else {
                document.getElementById('myLabel').innerHTML = "출근 시간 : " + start_hour + "시" + start_min + "분";
                document.getElementById('output').innerHTML = '퇴근시간 : ' + end_hour + "시" + end_min + "분"; 
            }
        } else {
            start_min = minu -  Work_minu;
            start_hour = hour - Work_hour;

            end_hour = start_hour + Work_hour;
            end_min = start_min+  Work_minu;

            if (start_min == 0) {
                document.getElementById('myLabel').innerHTML = "출근시간 : " + start_hour + "시" + "00분";
                document.getElementById('output').innerHTML = '퇴근시간 : ' + end_hour + "시" + end_min + "분"; 
            } else {
                document.getElementById('myLabel').innerHTML = "출근 시간 : " + start_hour + "시" + start_min + "분";
                document.getElementById('output').innerHTML = '퇴근시간 : ' + end_hour + "시" + end_min + "분"; 
            }
            
        }
        
        
    } else if (Part == 'close2') {
        console.log('마감2');
        //hour, minu 는 입력받은 영화 시간 
        if (minu >= 30) {
            start_hour = hour - Work_hour;
            start_min = minu - Work_minu;
           
        } else{
            start_hour = hour - Work_hour-1;
            start_min = (minu+60) - Work_minu;
            
        }

        start_min = Math.abs(start_min);
        if (start_min >= 60) {
            start_min = start_min - 60;
        }
        document.getElementById('myLabel').innerHTML = "출근 시간 : " + start_hour + "시" + start_min + "분";

        end_hour = start_hour + Work_hour; 
        end_min = start_min + Work_minu + 30;
        
        if (end_min >= 60) {
            end_hour += 1;
            end_min = end_min - 60;
        }
        
        document.getElementById('output').innerHTML = '퇴근시간 : ' + end_hour + "시" + end_min + "분"; 
    }


}


