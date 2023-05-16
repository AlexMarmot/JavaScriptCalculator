function termRangeFunction() {
	let num=document.getElementById('tTermRange'); 
	document.getElementById('tTerm').value=num.value;			
  }
function termFunction() {
	let num=document.getElementById('tTerm'); 
	document.getElementById('tTermRange').value=num.value;			
  }
function DepositRangeFunction() {
	let num=document.getElementById('pDepositRange'); 
	document.getElementById('pDeposit').value=num.value;
  }
function DepositFunction() {
	let num=document.getElementById('pDeposit'); 
	document.getElementById('pDepositRange').value=num.value;
  }
function RateRangeFunction() {
	let num=document.getElementById('iRateRange'); 
	document.getElementById('iRate').value=num.value;			
  }
function RateFunction() {
	let num=document.getElementById('iRate'); 
	document.getElementById('iRateRange').value=num.value;			
  }

			
	function calcOfPercent(){
		let s_percent = 0;
		const k = 365;
		let tTermRange = document.getElementById("tTermRange");
		let pDepositRange = document.getElementById("pDepositRange");
		let iRateRange = document.getElementById("iRateRange");
		let sumByMonth = 0;
		let n =parseInt(pDepositRange.value);
		let t = parseInt(tTermRange.value);

		if(document.getElementsByName("typeOfCount")[0].checked){
			s_percent = ((pDepositRange.value*iRateRange.value*tTermRange.value)/k)/100;
			document.getElementById("result").innerText = "Проценты по вкладу: "+s_percent.toFixed(3);
			document.getElementById("allSum").innerText = "Итоговая сумма: "+(s_percent+Number(document.getElementById('pDepositRange').value)).toFixed(3);
		}
		else{
			while(t>=30){
				sumByMonth = (n*((iRateRange.value)/100))/12;
				s_percent = (s_percent+sumByMonth);
				n = (n+sumByMonth);
				t=(t-30);
				if (t<30){
					s_percent = (s_percent+(sumByMonth*t/30));
				}
				
			}
			
			document.getElementById("result").innerText = "Проценты по вкладу: "+s_percent.toFixed(3);
			document.getElementById("allSum").innerText = "Итоговая сумма: "+(s_percent+Number(document.getElementById('pDepositRange').value)).toFixed(3);
		}
		
	}
					
