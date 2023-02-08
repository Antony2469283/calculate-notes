const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');
const recover = document.getElementById('recover');
const win = document.getElementById('win');
const excellent = document.getElementById('excellent');


calculate.addEventListener('click',datas);


function datas() {
    let Note1 = Number(note1.value)
    let Note2 = Number(note2.value)
    if(note1.value.length == 0 || note2.value.length == 0){
        result.textContent = "!Algún Campo Esta Vació¡"
        recover.textContent = "";
        win.textContent = "";
        excellent.textContent = "";
    }else if(Note1 < 0 || Note1 > 5 || Note2 < 0 || Note2 > 5){
        result.textContent = "Los datos tienen que ser entre 0 y 5"
        recover.textContent = "";
    }else{
        let operationData = ((Note1+Note2)/2);
        result.textContent = operationData
        
        let porcentData1 = ((Note1*30)/100)
        let porcentData2 = ((Note2*30)/100)
        
        let porcentRecover = porcentData1+porcentData2;
        let scoreRecover = 2.1 - porcentRecover;
        let finalScore = (scoreRecover / 0.40).toFixed(3);
        recover.textContent = finalScore;

        let porcentWin = porcentData1+porcentData2;
        let Win = 3.5 - porcentWin;
        let finalEarnings = (Win / 0.40).toFixed(3);
        win.textContent = finalEarnings

        let porcentWinHonors = porcentData1+porcentData2;
        let scoreWinHonors = 4.6 - porcentWinHonors;
        let finalScoreWinHonors = (scoreWinHonors / 0.40).toFixed(3);
        excellent.textContent = finalScoreWinHonors

    }

}