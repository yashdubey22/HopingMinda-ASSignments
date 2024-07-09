let str = "";
let allButton = document.querySelectorAll('button');
let res = ""
Array.from(allButton).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            res = eval(str);
            document.getElementById('inp').value = res;
        } else if(e.target.innerHTML == 'x'){
            str += '*' ;
            document.getElementById('inp').value += 'X';
        } else if(e.target.innerHTML == 'DEL'){
            str = str.slice(0,-1);
            document.getElementById('inp').value = str;
        } else if(e.target.innerHTML == 'RESET'){
            str = '';
            document.getElementById('inp').value = str;
        } else {
            str = str + e.target.innerHTML;
            document.getElementById('inp').value = str;
            console.log(e.target.innerHTML);
        }
        
    })
})
