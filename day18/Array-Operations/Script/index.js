let arr = [];

let allButton = document.querySelectorAll('button');

Array.from(allButton).forEach((Button) =>{
    Button.addEventListener(('click'),(e =>{
        if(e.target.innerText == 'Pop'){
            arr.pop();
            
        } else if (e.target.innerText == 'Push'){
            arr.push('"'+document.querySelector('input').value+'"');
            document.querySelector('input').value = '';

        } else if (e.target.innerText == 'Shift'){
            arr.shift();

        } else if (e.target.innerText == 'Unshift'){
            arr.unshift('"'+document.querySelector('input').value+'"');
            document.querySelector('input').value = '';

        }
        document.querySelector('span').innerText = arr;
        console.log(e.target.innerText);
    }))
});
