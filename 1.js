var card_tool=document.querySelectorAll('.card_details');
var card_content=document.querySelectorAll('.card_side2 h1');
var modal_popup=document.querySelector('.modal_popup');
var content1=document.querySelector('.thongtin1 h1');
var content2=document.querySelector('.thongtin1 span');
let suffledContent;
var ele, index=false;
var dem=0;
for (var i = 0; i < card_tool.length; i++) {
	card_tool[i].addEventListener('click', startGame);
}
function startGame(e){
	var data1, data2;
	if(index==false){
		if(ele==undefined){
			ele=this;
			ele.classList.add('active');
			index=false;
		}
		else if(ele==this){
			index=false;
			ele.classList.add('active');
		}
		else{
			index=true;
			this.classList.add('active');
			data1=parseInt(ele.dataset.correct);
			data2=parseInt(this.dataset.correct);
			if(data1!=data2){
				setTimeout(()=>{
					this.classList.remove('active');
					ele.classList.remove('active');
				},1000);
			}
			else{
				dem++;
				this.classList.add('active');
				ele.classList.add('active');
				this.disabled = true;
				ele.disabled = true;
			}
		}
	}
	else{
		ele=this;
		ele.classList.add('active');
		index=false;
	}
	if(dem==5){
		content1.innerHTML="You win!";
		setTimeout(()=>{
			modal_popup.classList.add('active2');
		},1000)
		dem=0;
	}
}
document.body.onload=function(){
	shuffledContent= contents.sort(()=>Math.random()-0.5);
	for (var i = 0; i < card_content.length; i++) {
		card_content[i].innerText=shuffledContent[i].text;
		card_tool[i].dataset.correct=shuffledContent[i].status;
	}
}
var contents=[
	{text: "Distribute",status: 1},{text: "Give out",status: 1},{text: "Downtown",status: 2},
	{text: "City centre",status: 2},{text: "Road",status: 3},{text: "Track",status: 3},
	{text: "Arrive",status: 4},{text: "Reach",status: 4},{text: "Effective",status: 5},
	{text: "Efficient",status: 5}
]