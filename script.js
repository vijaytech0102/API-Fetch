const fetchApi=async()=>{
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    let result= await response.json();
    var html="<table>";
    for (var i=0; i<result.length; i++){
        console.log(result[i])
        var img=result[i].image
        var symbol=result[i].symbol.toUpperCase();
        
        html+="<tr>";
        html+="<td>";
        html+=`<img src=${img} width= "50">`;
        html+="</td>";
        html+="<td>" + result[i].name+"</td>";
        html+="<td>" + symbol+"</td>";
        html+="<td>"+'$'+result[i].current_price + "</td>";
        
        html+="<td>"+'$'+result[i].total_volume + "</td>";
        if(result[i].market_cap_change_percentage_24h<0){
            html+="<td class='red'>"+result[i].market_cap_change_percentage_24h+"%"+"</td>";
        }
        else{
            html+="<td class='green'>"+result[i].market_cap_change_percentage_24h+"%"+"</td>";
        }
        html+="<td>"+"Mkt Cap:"+'$'+result[i].market_cap + "</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("box").innerHTML=html;
}
fetchApi()
