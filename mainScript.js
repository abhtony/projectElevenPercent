window.onload = function() {

// ================
// BASIC INIT
// ================
console.log("ver 0.85");

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
    
    //That button at the bottom of the page.
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
    
    $("#backToTop").click(function() {
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    });
}


function actionBtnInit () {
    actionBtnInitHelper("#btnER", "#contentER", ".setActionContent", "#F05227"); //Red
    actionBtnInitHelper("#btnAppointment", "#contentAppointment", ".setActionContent", "#F89522"); //Orange
    actionBtnInitHelper("#btnMonitor", "#contentMonitor", ".setActionContent", "#20AFA1"); //Green
}

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
        $(this).find(".sceneImg").removeClass("notSelected").addClass("selected");
        $(this).siblings().find(".sceneImg").removeClass("selected").addClass("notSelected");
        $(".actionRow").css({
            "background-color": backgroundColor
        });
    });
}


function scrollDownInit () {
    console.log("scrollDownInit");
    
    $("#scrollDown").fadeIn(800).delay(1600).fadeOut(800);
    // $("#scrollDown").fadeIn(800, function () {
    //     $("#scrollDown").fadeOut(800)});
}


function overlayBtnInit () {
    init_liability_button();
    init_overlay_close_button();
}

function init_liability_button(){
    $("#liability-statement-btn").click(function(){
       console.log("liability button was clicked");
       $("#liability-overlay").fadeIn();
       $("body").addClass("scroll-locked");
    });
}

function init_overlay_close_button () {
    $(".overlay-close-btn").click(function(){
       console.log("overlay close button was clicked");
       $("#liability-overlay").hide();
       $("body").removeClass("scroll-locked");
       $("#liability-statement-btn").get(0).scrollIntoView();
    });
}



// ================
// MAIN
// ================

function main () {
    console.log("function 'main' triggered");
    navBtnInit();
    //formBtnInit();
    actionBtnInit();
    // scrollDownInit();
    // setTimeout(scrollDownInit() ,4000);
    overlayBtnInit();
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 450) {
        $("#downIcon").removeClass("infinite");
    }
});

main();




}



