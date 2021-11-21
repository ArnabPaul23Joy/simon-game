var colorsID=['green','red','yellow','blue']
var rNumber=0
var pattternnn=[]
// console.log(pattternnn) 
var game_state=0
var cur_index=0
// var audio= new Audio("sounds/wrong.mp3");
// audio.play();
// var check_pattern=0
$(document).keydown(function(event){
    console.log(event.key)
    if(game_state==0){
        game_state=1;
        rNumber=Math.floor(Math.random() * 10)%4;
        pattternnn=[]
        cur_index=0
        pattternnn.push(colorsID[rNumber])
        $("h1").text("level 1 "+pattternnn.length)
        console.log(pattternnn[pattternnn.length-1])
        $("#"+pattternnn[pattternnn.length-1]).addClass("pressed")
        setTimeout(function(){$("#"+pattternnn[pattternnn.length-1]).removeClass("pressed"); }, 300);
        
        audio= new Audio("sounds/"+pattternnn[pattternnn.length-1]+".mp3");
        audio.play();
        // check_pattern=1
    }
});

$(".btn").click(function(){
    // $("h1").slideToggle();
    // $("h1").slideUp().slideDown().animate({opacity: 0.5});
    // console.log(this.id)
    if(game_state==1){
        var cliced_id="#"+this.classList[1]
        console.log(cliced_id)
        
        
        audio= new Audio("sounds/"+this.classList[1]+".mp3");
        audio.play();
        if(this.classList[1]==pattternnn[cur_index]){
            cur_index++
            if(cur_index==pattternnn.length){
                cur_index=0
                rNumber=Math.floor(Math.random() * 10)%4;
                pattternnn.push(colorsID[rNumber])
                $("h1").text("level 1 "+pattternnn.length)
                console.log(pattternnn[pattternnn.length-1])
                var pattern_ID="#"+pattternnn[pattternnn.length-1]
                $(pattern_ID).addClass("pressed")
                setTimeout(function(){$(pattern_ID).removeClass("pressed"); }, 300);
            }
        }
        else{
            game_state=0;
            $("h1").text("Game Over, Press Any Key To Restart")
            $("body").addClass("game-over")
            setTimeout(function(){$("body").removeClass("game-over"); }, 100)
            audio= new Audio("sounds/wrong.mp3");
            audio.play();
        }
        
        $(cliced_id).addClass("pressed")
        setTimeout(function(){$(cliced_id).removeClass("pressed"); }, 100);
        
    }
});