/// <reference types="../@types/jquery" />
///////////////////open nav////////////////////
$(".openNav").on("click",function () {
    // console.log("hui");
    $(".menue").animate({width:"250px"},50)
    $(".content").animate({marginLeft:"250px"},50)

    
})
//////////////////////////close nav/////////////////
$(".closebtn").on("click",function () {
    $(".menue").animate({width:"0"},50)
    $(".content").animate({marginLeft:"0"},50)
    
})
///////////////////////////////slidedowm/////////////
let h3=$(".toggle")

//////////////////////////////first method
// let  divs=$(".inner")
// $(h3).eq(0).on("click",function () {
//     $(divs).eq(0).slideToggle(1000)
    
// })
// $(h3).eq(1).on("click",function () {
//     $(divs).eq(1).slideToggle(1000)
    
// })
// $(h3).eq(2).on("click",function () {
//     $(divs).eq(2).slideToggle(1000)
    
// })
// $(h3).eq(3).on("click",function () {
//     $(divs).eq(3).slideToggle(1000)
    
// })
///////////////////second method
$(h3).on("click",function () {
    $(this).next().slideToggle(1000)
    $(".inner").not($(this).next()).slideUp(1000)
    
})
////////////////////////////////////////////texrarea counting char////////////////
let maxcount=100;
let count=$("#chars")
let textarea=$("textarea")
textarea.on("keydown",function (e) {
    if(maxcount==0&e.key!="Backspace"||maxcount==100&e.key=="Backspace"){
        e.preventDefault();
        if(maxcount==0&e.key!="Backspace"){
            count.html("your available character finished")
         }
        
        return
    }
  
    if(e.key=="Backspace"){
        maxcount=maxcount+1;
        count.html(maxcount)

    }else{
        maxcount=maxcount-1;
        count.html(maxcount)
    }
    
})
//////////////////////////counting section//////////////////////
function makeTimer() {

		
		var endTime = new Date("10 october 2021 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#day").html(days );
			$("#hour").html(hours );
			$("#munite").html(minutes);
			$("#second").html(seconds );		

	}

	setInterval(function() { makeTimer(); }, 1000);

    //////////////////smooth of moveing  navbar for section//////////////////////////////
    $(".ancor").on("click",function (e) {

        let ahref=e.target.getAttribute("href")
        let sectionoffset=$(ahref).offset().top
        $("html,body").animate({scrollTop:sectionoffset},2000)
        
    })


    /////////////////////////////loading screen/////////////////
    $(function () {
        $(".loader").fadeOut(1000,function () {
            $(".loading").slideUp(1000,function () {
                $("body").css("overflow","visible")
                $("html,body").animate({screenTop:0},500)
                $(".loading").remove()
            })
      
            
        })
        
    })
  

