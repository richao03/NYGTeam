$(document).ready(function() {

    var playerClicked = this.id

    console.log(playerClicked)
    var windowWidth = $(window).width()
    $(window).resize(function() {
            windowWidth = $(window).width()
            console.log(windowWidth)
        })
        //*************************************************************************************************
        //------------------------------------------START OF ELI-------------------------------------------
        //*************************************************************************************************
    $("#EliIcon").off().on('click', function() {
        $('.playerPicture').css("background-image", "")
            .animate({ opacity: "", left: "" }, "slow")
        $('.playerName').css("background-image", "")
            .animate({ top: "" })
        $('.playerName2').css("background-image", "")
            .animate({ right: "" })

        if (playerClicked == undefined || playerClicked !== "EliIcon") {
            $('.playerPicture').css("background-image", "url('./images/Eli.png')")
                .animate({ opacity: 1, left: '55vw' }, "slow")
            $('.playerName').css("background-image", "url('./images/name.png')")
                .animate({ top: 0 })
            $('.playerName2').css("background-image", "url('./images/EliName2.png')")
                .animate({ right: 0 })
            $("#headText").html("2004 1st Round 1st Pick <br/>College: Ole Miss <br/> Tied for all time 6th Highest QB Wonderlic Score")
            $("#armText").html("Total Yards: 46,171 </br> 10th overall passing yards of all time</br>Total Touchdowns:302</br> All time leader in </br>New York Giants</br> franchies hisotry")
            $("#bodyText").html("Super Bowl XLII Champion </br> Super Bowl XLVI Champion</br> 2x Super Bowl MVP")

            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "height": "100px", "width": "100px", "margin-left": "200px", "margin-top": "10px" })
                //what happens when u hover over red circle
            $('.headInfo').off().hover(

                //upon mouse enter
                function() {
                    $('.headTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#headText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })
                    $('.headInfo').next('div')
                        .css({ "margin-left": "200px", "margin-top": "30px", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "40px" })
                        console.log("hover ends")
                },
                //upon  mouse leave
                function() {
                    $("#headText").css({ "display": "", "left": "", "width": "" })
                    $(".headTextBox").css({ "display": "none" })
                    $('.headInfo').next("div").animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "height": "100px", "width": "100px", "margin-left": "-10px", "margin-top": "177px" })
            $('.armInfo').off().hover(
                function() {
                    $('.armTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#armText").css({ "display": "inline-block", "left": "-600px", "width": "200px" })
                    $('.armInfo').next('div').css({ "margin-left": "50px", "margin-top": "277px", "border-color": "red" })
                    $('.armInfo').next('div').animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    $("#armText").css("display", "none")
                    $(".armTextBox").css({ "display": "none" })
                    $('.armInfo').next('div').animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })

                });

            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "height": "100px", "width": "100px", "margin-left": "110px", "margin-top": "160px" })
            $('.bodyInfo').off().hover(
                function() {
                    $('.bodyTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#bodyText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })
                    $('.bodyInfo').next('div').css({ "margin-left": "130px", "margin-top": "180px", "z-index": "50", "border-color": "red" })
                    $('.bodyInfo').next('div').animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "40px" })
                },
                function() {
                    $("#bodyText").css("display", "none")
                    $(".bodyTextBox").css({ "display": "none" })
                    $('.bodyInfo').next("div").animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })
                });

            playerClicked = this.id
        } else {

            return
        }

    })

    //*************************************************************************************************
    //------------------------------------------START OF ODELL-------------------------------------------
    //*************************************************************************************************
    $("#OdellIcon").off().on('click', function() {
        $('.playerPicture').css("background-image", "")
            .animate({ opacity: "", left: "" }, "slow")
        $('.playerName').css("background-image", "")
            .animate({ top: "" })
        $('.playerName2').css("background-image", "")
            .animate({ right: "" })
        if (playerClicked == undefined || playerClicked !== "OdellIcon") {
            $('.playerPicture').css("background-image", "url('./images/Odell.png')")
                .animate({ opacity: 1, left: '55vw' }, "slow")
            $('.playerName').css("background-image", "url('./images/name.png')")
                .animate({ top: 0 })
            $('.playerName2').css("background-image", "url('./images/EliName2.png')")
                .animate({ right: 0 })
            $("#headText").html("ODEL SHIT")
            $("#armText").html("The GOLDEN CHILD")
            $("#bodyText").html("CHAMP OF FRIENDSHIP")

            //*******************Head Info STARTS*******************************
            $('.headInfo').css({ "height": "100px", "width": "100px", "margin-left": "200px", "margin-top": "10px" })
            $('.headInfo').off().hover(
                function() {
                    $('.headTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#headText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })

                    $('.headInfo').next('div').css({ "margin-left": "200px", "margin-top": "30px", "border-color": "red" })
                    $('.headInfo').next('div').animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "40px" })
                },
                function() {
                    $("#headText").css("display", "none")
                    $(".headTextBox").css({ "display": "none" })
                    $('.headInfo').next("div").animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "height": "100px", "width": "100px", "margin-left": "-10px", "margin-top": "177px" })
            $('.armInfo').off().hover(
                function() {
                    $('.armTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#armText").css({ "display": "inline-block", "left": "-600px", "width": "200px" })
                    $('.armInfo').next('div').css({ "margin-left": "50px", "margin-top": "277px", "border-color": "red" })
                    $('.armInfo').next('div').animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    $("#armText").css("display", "none")
                    $(".armTextBox").css({ "display": "none" })
                    $('.armInfo').next('div').animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })

                });

            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "height": "100px", "width": "100px", "margin-left": "110px", "margin-top": "160px" })
            $('.bodyInfo').off().hover(
                function() {
                    $('.bodyTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#bodyText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })
                    $('.bodyInfo').next('div').css({ "margin-left": "130px", "margin-top": "180px", "z-index": "50", "border-color": "red" })
                    $('.bodyInfo').next('div').animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "40px" })
                },
                function() {
                    $("#bodyText").css("display", "none")
                    $(".bodyTextBox").css({ "display": "none" })
                    $('.bodyInfo').next("div").animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })
                });

            playerClicked = this.id
        } else {
            return
        }

    })
















})
