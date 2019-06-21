function exchangeMoney(){
    let a = document.getElementById("Amount").value;
    let b = document.getElementById("From currency").value;
    let c = document.getElementById("To currency").value;
    let money;
    if(b==="VND"){
        if(c==="USD")money = a/23000+"  USD"
    }
    if(b==="USD"){
        if(c==="VND")money = a*23000+ " VND"
    }
    document.getElementById('result').innerText = "Result: " + money;

}