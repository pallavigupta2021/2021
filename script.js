
const api_url = 'https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2';/*API Url*/
const api_url2 = 'https://dev.onebanc.ai/assignment.asmx/GetTransactionSummary?userId=1&transactionId=2';


async function getUPIData()
{
  /*fetching data from APi */

const response =await fetch(api_url);

const response2 =await fetch(api_url2);

const data=await response.json();

const data2=await response2.json();

//console.log(data.transactions.length)
const len = data.transactions.length;// for this data length  is 5
const div = document.getElementById('mainDiv');   // main div geting from ID 

let transactionBox = '';
console.log(data)
let pdate='';
let dateval='';
for(let i=0;i< len ;i++)
{
console.log(data.transactions[i].type)
let timestp='............................................';


let dirval='';
let btnval='';
let btn2val='';
let rclass='';
let rclass1='';
let tranval='';
let tranvalimp='';
let tranvalimgrr='';
let tranvalimr='';
let tranvalimgyr='';

if(data.transactions[i].direction==1 && data.transactions[i].type==1)
{
tranval='block';
tranvalimgp="block";
tranvalimgr="none";
tranvalimgrr="none";
tranvalimgyr="none";
}
else if(data.transactions[i].direction==2 && data.transactions[i].type==1)

{
tranval='block';
tranvalimgp="none";
tranvalimgr="block";
tranvalimgrr="none";
tranvalimgyr="none";

}
else if(data.transactions[i].direction==2 && data.transactions[i].type==2)
{
tranval='none';
tranvalimgr="none";
tranvalimgp="none";
tranvalimgrr="none";
tranvalimgyr="block";
}
else if(data.transactions[i].direction==1 && data.transactions[i].type==2)
{

  tranval='none';
  tranvalimgp="none";
  tranvalimgr="none";
  tranvalimgrr="none";
  tranvalimgyr="block";

}


if(data.transactions[i].direction==1 && data.transactions[i].type==1 )

{dirval='right';
btnval='none';
btn2val='none';
rclass='tdater';
}
else if(data.transactions[i].direction==2 && data.transactions[i].type==1 )
{
dirval='left';
btnval='none';
rclass='tdatel';
btn2val='none';
}
else if(data.transactions[i].direction==2 && data.transactions[i].type==2 )

{dirval='left';
btnval='none';
rclass='tdatel';
btn2val='block';

}
else if(data.transactions[i].direction==1 && data.transactions[i].type==2 )
{

  dirval='right';
  btnval='block';
  rclass='tdater';
  btn2val='none';
}



let Lsdate= data.transactions[i].startDate;
var splitdate=Lsdate.split("T");

//let timeval2=data.transactions[1].startDate;
//var cdate=timeval2.split("T");
let tmep;
if(splitdate[0]==pdate)
{
dateval='';
temp='';
}
else
{
dateval=splitdate[0];
pdate=splitdate[0];
temp='...............................';
}

  transactionBox = transactionBox +`<div class="timestamp">  
  
   <div class="tran" id="tran" style="float:${dirval}"> 
  

  
   <span class="amt"><img src="rsimg.png" alt="succcess" width="15">${data.transactions[i].amount}</span>
   <div class="donepymnt"> 
   <span style="display:${tranvalimgp}"> <img src="donepick.png" alt="succcess" width="12" height="9"> You Paid </span>
     <span style="display:${tranvalimgr}"> <img src="donepick.png" alt="succcess" width="12" height="9"> You Received </span>
     <span style="display:${tranvalimgyr}"> <img src="donepick.png" alt="succcess" width="12" height="9"> You Requested </span>
     <span style="display:${tranvalimgrr}"> <img src="donepick.png" alt="succcess" width="12" height="9"> Request Received </span>
     </div>
     <div class="btn_set">
   <input type="button" style="display:${btnval}" value="Cancel">
   <input type="button" style="display:${btn2val}" value="PAY">
   <input type="button" style="display:${btn2val}" value="Decline">
   </div>
   


 <div class="${rclass1}">   <span class="tdate1"> ${temp} ${dateval} ${temp}</span></div> 
  

 <span class="trnid" style="display:${tranval}">Transection ID<br>
 ${data2.transaction.id}</span>
 <div class="${rclass}">   <span class="tdate">${data.transactions[i].startDate}</span></div>
 
 <div class="forwordbtn">
 <img src="forwordbtn.png" width="35"   onClick=alert("Transaction Details")>
</div>
  
  </div></div>`}


let head=` <div class="grid-container">
   
		<div class="grid-child hdiv2">
		J
		</div>
		
		<div class="grid-child hdiv3">
		<P style="margin-left: -100px;">Jhon Due   +91 76722345</P>
		
</div>

	
  </div>`
  
div.innerHTML = transactionBox+   head


}

getUPIData();




