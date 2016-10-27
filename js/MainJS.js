$(document).ready(function() {
    var windowWidth = $(window).width()
    $(window).resize(function() {
        windowWidth = $(window).width()
        console.log(windowWidth)
    })




    $("#EliIcon").on('click', function() {
        $('.playerPicture').css("background-image", "url('./images/Eli.png')")
        $('.playerPicture').animate({ opacity: 1, left: '55vw' }, "slow")
        $('.playerName').css("background-image", "url('./images/name.png')")
        $('.playerName').animate({ top: 0 })
        $('.playerName2').css("background-image", "url('./images/EliName2.png')")
        $('.playerName2').animate({ right: 0 })

        //*******************Head Info STARTS*******************************
        // $('.headInfo').css({ "height": "100px", "width": "100px", "margin-left": "200px", "margin-top": "10px" })
        // $('.headInfo').hover(
        //     function() {
        //         $(".headTextBox").css({ "display": "block", "margin-left": "-200px" })
        //         $("#headText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })
        //         $('.headInfo').next().css({ "margin-left": "270px", "margin-top": "30px", "border-color": "red" })
        //         $('.headInfo').next().animate({ "border-width": "12px", "width": windowWidth / 3 + "px", "right": "300px", "height": "40px" })
        //     },
        //     function() {
        //         $("#headText").css("display", "none")
        //         $(".headTextBox").css({ "display": "none" })
        //         $('.headInfo').next().animate("opacity","1")
        //         $('#lineInfo').css({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })
        //     });

        $('.headInfo').css({ "height": "100px", "width": "100px", "margin-left": "200px", "margin-top": "10px" })
        $('.headInfo').hover(
            function() {
                var headOffset = $('.headInfo').offset()
                console.log(headOffset.left)
                $('.headTextBox').css({ "display": "block", "margin-left": "-200px" })
                $("#headText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })
                $('.headInfo').next('div').css({ "margin-left": "200px", "margin-top": "30px", "border-color": "red"})
                $('.headInfo').next('div').animate({ "left": "-450px","top":"50px", "border-width": "2px", "width": "450px", "height": "40px" })
            },
            function() {
                $("#headText").css("display", "none")
                $(".headTextBox").css({ "display": "none" })
                $('.headInfo').next("div").animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })
            });
        //******************* ARM Info STARTS*******************************
        $('.armInfo').css({ "height": "100px", "width": "100px", "margin-left": "-10px", "margin-top": "177px" })
        $('.armInfo').hover(
            function() {
                $('.armTextBox').css({ "display": "block", "margin-left": "-200px" })
                $("#armText").css({ "display": "inline-block", "left": "-900px", "width": "200px" })
                $('.armInfo').next('div').css({ "margin-left": "250px", "margin-top": "277px", "border-color": "red" })
                $('.armInfo').next('div').animate({ "left": "-600px", "border-width": "2px", "width": "350px", "height": "40px" })
            },
            function() {
                $("#armText").css("display", "none")
                $(".armTextBox").css({ "display": "none" })
                $('.armInfo').next('div').animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })

            });


    })

})
