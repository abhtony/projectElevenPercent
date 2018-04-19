window.onload = function() {

// ================
// BASIC INIT
// ================
console.log("ver 0.80");

var currentState = "initial";
var formProgress = "initial";



// ================
// NAV BUTTONS
// ================

function navBtnInit() {

    $("#btnHowDoIKnow").click(function() {
        if (currentState == "initial") {
            $("#btnHowDoIKnow .primaryBtn").css({
                "background-color": "rgba(255, 255, 255, 0.9)", //almost white
                "color": "#F89521" //mainOrange
            });
            
            $("#learnPage").slideDown();
            $('html, body').animate({
                scrollTop: $("#learnPage").offset().top
            }, 700);
            currentState = "learnPage";
        }
        
        if (currentState == "actionPage") {
            $("#btnHowDoIKnow .primaryBtn").css({
                "background-color": "rgba(255, 255, 255, 0.9)", //almost white
                "color": "#F89521" //mainOrange
            });
            
            $("#btnWhatShouldIDo .primaryBtn").css({
                "background-color": "rgba(255, 255, 255, 0.3)", //transparent white
                "color": "#FFFFFF"
            });
            
            $("#actionPage").slideUp(600, function(){
                $("#learnPage").slideDown();
                $('html, body').animate({
                    scrollTop: $("#learnPage").offset().top
                }, 700);
                currentState = "learnPage";
            });
        }
    });
    
    
    $("#btnWhatShouldIDo").click(function() {
        if (currentState == "initial") {
            $("#btnWhatShouldIDo .primaryBtn").css({
                "background-color": "rgba(255, 255, 255, 0.9)", //almost white
                "color": "#F89521" //mainOrange
            });
            
            $("#actionPage").slideDown();
            $('html, body').animate({
                scrollTop: $("#actionPage").offset().top
            }, 700);
            currentState = "actionPage";
        }
        
        if (currentState == "learnPage") {
            $("#btnWhatShouldIDo .primaryBtn").css({
                "background-color": "rgba(255, 255, 255, 0.9)", //almost white
                "color": "#F89521" //mainOrange
            });
            
            $("#btnHowDoIKnow .primaryBtn").css({
                "background-color": "rgba(255, 255, 255, 0.3)", //transparent white
                "color": "#FFFFFF"
            });
            
            $("#learnPage").slideUp(600, function(){
                $("#actionPage").slideDown();
                $('html, body').animate({
                    scrollTop: $("#actionPage").offset().top
                }, 700);
                currentState = "actionPage";
            });
        }
    });
    
    
    
    $("#btnWhatNow").click(function() {
        console.log("btnWhatShouldIDo was clicked");
        if (currentState == "learnPage") {
            $("#btnWhatShouldIDo .primaryBtn").css({
                "background-color": "rgba(255, 255, 255, 0.9)", //almost white
                "color": "#F89521" //mainOrange
            });
            
            $("#btnHowDoIKnow .primaryBtn").css({
                "background-color": "rgba(255, 255, 255, 0.3)", //transparent white
                "color": "#FFFFFF"
            });
            
            $("#learnPage").slideUp(2000, function(){
                $("#actionPage").slideDown();
                $('html, body').animate({
                    scrollTop: $("#actionPage").offset().top
                }, 700);
                currentState = "actionPage";
            });
        } 
    });

}


function actionBtnInit () {
    actionBtnInitHelper(btnId, contentId, classToHide, backgroundColor);
    actionBtnInitHelper("#btnER", "#contentER", "setActionContent", "#EF6135");
    
$("#btnER").click(function() {
    $("#contentER").show();
    $("#contentER").siblings(".setActionContent").hide();
//    $(".optionsContainer img").not(this).css({
    $(this).css({
        "opacity": "1.0",
        "filter": "alpha(opacity=100)"
    });
    $(this).siblings().css({
        "opacity": "0.35",
        "filter": "alpha(opacity=35)"
    });
    $(this).find(".sceneImg").css({
        "width": "300px"
    });
    $(this).siblings().find(".sceneImg").css({
        "width": "200px"
    });
    $(".actionRow").css({
        "background-color": "#EF6135" //Red
    });
});

$("#btnAppointment").click(function() {
    $("#contentAppointment").show();
    $("#contentAppointment").siblings(".setActionContent").hide();
//    $(".optionsContainer img").not(this).css({
    $(this).css({
        "opacity": "1.0",
        "filter": "alpha(opacity=100)",
        "width": "300px"
    });
    $(this).siblings().css({
        "opacity": "0.35",
        "filter": "alpha(opacity=35)",
    });
    $(this).find(".sceneImg").css({
        "width": "300px"
    });
    $(this).siblings().find(".sceneImg").css({
        "width": "200px"
    });
    $(".actionRow").css({
        "background-color": "#13A871" // Green
        
    });
});

$("#btnMonitor").click(function() {
    $("#contentMonitor").show();
    $("#contentMonitor").siblings(".setActionContent").hide();
//    $(".optionsContainer img").not(this).css({
    $(this).css({
        "opacity": "1.0",
        "filter": "alpha(opacity=100)",
        "width": "300px"
    });
    $(this).siblings().css({
        "opacity": "0.35",
        "filter": "alpha(opacity=35)",
        "width": "200px"
    });
    $(this).find(".sceneImg").css({
        "width": "300px"
    });
    $(this).siblings().find(".sceneImg").css({
        "width": "200px"
    });
    $(".actionRow").css({
        "background-color": "#1C739D" // Blue
    });
});




function actionBtnInitHelper (btnId, contentId, classToHide, backgroundColor) {
    $(btnId).click(function() { 
        $(contentId).show();
        $(contentId).siblings(classToHide).hide();
        $(this).css({
            "opacity": "1.0",
            "filter": "alpha(opacity=100)"
        });
        $(this).siblings().css({
            "opacity": "0.35",
            "filter": "alpha(opacity=35)"
        });
        $(this).find(".sceneImg").css({
            "width": "300px"
        });
        $(this).siblings().find(".sceneImg").css({
            "width": "200px"
        });
        $(".actionRow").css({
            "background-color": backgroundColor
        });
    });
}
    
    
}


// ================
// FORM BUTTONS
// ================

function formBtnInit () {
    console.log("function 'formBtnInit' triggered");
    formBtnInitHelper("#qAlert", "initial", "#qpain", "qPain"); //qAlert
    formBtnInitHelper("#qPain", "initial", "#qpain", "qPain"); //qPain
    formBtnInitHelper("#qSevere", "initial", "#qpain", "qPain"); //qSevere
    formBtnInitHelper("#qSleep", "initial", "#qpain", "qPain"); //qSleep
    formBtnInitHelper("#qPills", "initial", "#qpain", "qPain"); //qPills
    formBtnInitHelper("#qFever", "initial", "#qpain", "qPain"); //qFever
    formBtnInitHelper("#q39", "initial", "#qpain", "qPain"); //q39
    formBtnInitHelper("#q48", "initial", "#qpain", "qPain"); //q48
    formBtnInitHelper("#qPillsFever", "initial", "#qpain", "qPain"); //qPillsFever
}

function formBtnInitHelper (btnId, isFormProgress, sectionToShow, setFormProgressTo) {
    $(btnId+"Yes").click(function() { //Yes Button
    $(btnId+"Yes"+" h3").removeClass("formBtnSmall");
    $(btnId+"Yes"+" h3").addClass("formBtnSmallSelected");
    $(btnId+"No"+" h3").removeClass("formBtnSmallSelected");
    $(btnId+"No"+" h3").addClass("formBtnSmall");
    if (formProgress == isFormProgress) {
            $(sectionToShow).slideDown();
            formProgress = setFormProgressTo;
        }
    });
    $(btnId+"No").click(function() { //No Button
    $(btnId+"No"+" h3").removeClass("formBtnSmall");
    $(btnId+"No"+" h3").addClass("formBtnSmallSelected");
    $(btnId+"Yes"+" h3").removeClass("formBtnSmallSelected");
    $(btnId+"Yes"+" h3").addClass("formBtnSmall");
        if (formProgress == isFormProgress) {
            $(sectionToShow).slideDown();
            formProgress = setFormProgressTo;
        }
    });
}



// ================
// MAIN
// ================

function main () {
    console.log("function 'main' triggered");
    navBtnInit();
    formBtnInit();
}


main();




}



