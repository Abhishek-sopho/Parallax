function funcparallax() {
	var divback=document.getElementById("divcont");
	var divtext=document.getElementById("divcontents1");
	var divtext2=document.getElementById("divcontents2");
	var divleft=document.getElementById("divleft1");
	var divright=document.getElementById("divright1");
	var divleftslide2=document.getElementById("divleft2");
	var divrightslide2=document.getElementById("divright2");
	
	var x=window.pageYOffset; /* Getting Scroll Position */
	divback.style.top=-(x*0.3)+"px"; /* this one slows down the speed of backround */
	divtext.style.top=(-(x*1.5)+500)+"px"; /* this speeds the first text division */
	divleft.style.left=(-(x*0.65)+25)+"%";
	divright.style.left=((x*0.65)+51)+"%";
	divleftslide2.style.left=((x*0.05)-20)+"%";
	divrightslide2.style.right=((x*0.05)-20)+"%";
	
	/* The if block changes the opacity of the first text division based on the scroll position */
	if((-(x*2)+500)<200){
		divtext.style.opacity="0";
	}
	else {
	if((-(x*2)+500)<300){
		divtext.style.opacity="0.5";
	}
	else {
		divtext.style.opacity="1";
	}
	}
	
	divtext2.style.top=((x*0.4)+500)+"px"; /* This positions the text division 2 */
	
	/* The if block changes the opacity of the second text division based on the scroll position */
	if(x>400){
		divtext2.style.opacity="1";
	}
	else {
	if(x>200 & x<400){
		divtext2.style.opacity="0.5";
	}
	else {
		divtext2.style.opacity="0";
	}
	}
}