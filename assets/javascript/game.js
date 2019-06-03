$(document).ready(function() 
{   var randomNumber=0;
    var crystalNumber1=0;
    var crystalNumber2=0;
    var crystalNumber3=0;
    var crystalNumber4=0;
    var score=0;
    var wins=0;
    var losses=0;
    
    crystalNumber1 = Math.floor(Math.random() * 12)+1;
    console.log(crystalNumber1);
    crystalNumber2 = Math.floor(Math.random() * 12)+1;
    console.log(crystalNumber2);
    crystalNumber3 = Math.floor(Math.random() * 12)+1;
    console.log(crystalNumber3);
    crystalNumber4 = Math.floor(Math.random() * 12)+1;
    console.log(crystalNumber4);
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#number-to-match").text(randomNumber);
    function reset() 
    {
        crystalNumber1 = Math.floor(Math.random() * 12)+1;
        console.log(crystalNumber1);
        crystalNumber2 = Math.floor(Math.random() * 12)+1;
        console.log(crystalNumber2);
        crystalNumber3 = Math.floor(Math.random() * 12)+1;
        console.log(crystalNumber3);
        crystalNumber4 = Math.floor(Math.random() * 12)+1;
        console.log(crystalNumber4);
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#number-to-match").text(randomNumber);
        score=0;
        $("#target-number").text(score);
    };
    
    //$("#images").on("click", function() {
      
        $("#crystal-1").on("click", function() 
        {
        $("#crystal-1").val(crystalNumber1);
        score=score+crystalNumber1;
        $("#target-number").text(score);
        });

        $("#crystal-2").on("click", function() 
        {
            $("#crystal-2").val(crystalNumber2);
            score=score+crystalNumber2;
            $("#target-number").text(score);
        });
        
            $("#crystal-3").on("click", function() 
            {
                $("#crystal-3").val(crystalNumber3);
                score=score+crystalNumber3;
                $("#target-number").text(score);
            }); 

                $("#crystal-4").on("click", function() 
                {  
                    $("#crystal-4").val(crystalNumber4);
                    score=score+crystalNumber4;
                    $("#target-number").text(score);
                });
                if(score===randomNumber)
                {
                    wins++;
                    $("#win-count").text(wins);
                    reset();
                }
        
                if(score>=randomNumber) 
                {
                    losses++
                    $("loss-count").text(losses);
                    reset();
                }  
    //});
});
            