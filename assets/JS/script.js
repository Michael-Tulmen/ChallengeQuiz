var count = 0;
var time = 30;
var grade = 0;
var choice = [];
var timer;

//main function that hides finish button and grades until appropriate time 

$(document).ready(function(){
    $('#endquiz').hide();
    $("#grade").hide();

    button_manager();

    //button managing function shows/hides buttons around quiz based on question count
    function button_manager(){
        if(count > 0){
            $("#previous").show();
            if(count == 20){
                $("#next").hide();
                $("#endquiz").show();
            }
            else{
                $("#next").show();
            }

        }
        else{
            $("#previous").hide();
        }
    }

    // question creation function
    function add_question(data,i){
    $("#question").text(data[i.Quiz])
    $("#answer-choice-1").text(data[i].answer1)
    $("#answer-choice-2").text(data[i].answer2)
    $("#answer-choice-3").text(data[i].answer3)
    $("#answer-choice-4").text(data[i].answer4)
    $("#question-number").text(Number(i+1));
    }

    //answer selection, answer choice selected by user

    function answer_choice() {
        for(var i=0 ; i<20; i++){
            var a = document.getElementById('choices').children;
            if(a[i].innerHTML == answer[count]){
                $("#choices").children('button')[i].classlist.add("active");
            }
            else{
                $('#choices').children('button')[i].classlist.remove("active");
            }
        }
    }
})