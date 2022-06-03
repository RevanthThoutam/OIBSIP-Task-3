const convertTem = () => {
    const valueTem = document.getElementById('temp').value;
    const selectedTemp = document.getElementById('diffTemp');
    const Tem = diffTemp.options[selectedTemp.selectedIndex].value;
    
    const ceToFa = (celsius) =>{
        let f = Math.round((celsius * 9/5) + 32);
        return f;
    }
    const faToCe = (farenheit) => {
      let c = Math.round((farenheit - 32) + 5/9);
      return c;
    }

    let output;
    if(Tem == 'celsius') {
        output = ceToFa(valueTem);
        document.getElementById('resultBox').innerHTML = output+" ℉";
    }

    else{
        output = faToCe(valueTem);
        document.getElementById('resultBox').innerHTML = output+" ℃";

    }
}