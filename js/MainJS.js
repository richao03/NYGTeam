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
        $('.headInfo, .armInfo, .bodyInfo').removeClass("hoverOver")
        $('.playerPicture').css("background-size", "")
            .animate({ opacity: "", left: "" }, "slow")
        $('.playerName').css("background-image", "")
            .animate({ top: "-100vh" }, "slow")
        $('.playerName2').css("background-image", "")
            .animate({ right: "-100vw" }, "slow")

        if (playerClicked == undefined || playerClicked !== "EliIcon") {
            setTimeout(function() {
                $('.playerPicture').css("background-image", "url('./images/Eli.png')")
                    .animate({ opacity: 1, left: '55vw' }, "slow")
                $('.playerName').css("background-image", "url('./images/name.png')")
                    .animate({ top: 0 }, "slow")
                $('.playerName2').css("background-image", "url('./images/EliName2.png')")
                    .animate({ right: 0 }, "slow")
            }, 400)
            $("#headText").html("2004 1st Round 1st Pick <br/>College: Ole Miss <br/> Tied for all time 6th Highest QB Wonderlic Score")
            $("#armText").html("Total Yards: 46,171 </br> 10th overall passing yards of all time</br>Total Touchdowns:302</br> All time leader in </br>New York Giants</br> franchies hisotry")
            $("#bodyText").html("Super Bowl XLII Champion </br> Super Bowl XLVI Champion</br> 2x Super Bowl MVP")

            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "height": "100px", "width": "100px", "margin-left": "200px", "margin-top": "10px" })
                .addClass("hoverOver")
                //what happens when u hover over red circle
            $('.headInfo').off().hover(

                //upon mouse enter
                function() {
                    $('.headTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#headText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })
                        //red line to text box
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
                .addClass("hoverOver")
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
                .addClass("hoverOver")
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
        $('.headInfo, .armInfo, .bodyInfo').removeClass("hoverOver")
        $('.playerPicture')
            .animate({ opacity: "", left: "" }, "slow")
        $('.playerName').css("background-image", "")
            .animate({ top: "-100vh" }, "slow")
        $('.playerName2').css("background-image", "")
            .animate({ right: "-100vw" }, "slow")
        if (playerClicked == undefined || playerClicked !== "OdellIcon") {
            setTimeout(function() {
                $('.playerPicture').css({ "background-image": "url('./images/Odell.png')", "background-size": "100% 100%" })
                    .animate({ opacity: 1, left: '50vw' }, "slow")
                $('.playerName').css("background-image", "url('./images/OdellName.png')")
                    .animate({ top: 0 })
                $('.playerName2').css("background-image", "url('./images/OdellName2.png')")
                    .animate({ right: 0 })
            }, 400)
            $("#headText").html("2014 1st Round 12th Pick <br/> College: LSU <br/> 2014 Offensive Rookie of <br/>the Year")
            $("#armText").html("Receptions: 227 <br/> Receiving Yards: 3,385<br/>Receiving Touchdowns: 28")
            $("#bodyText").html("40-yd Dash: 4.43<br/> Vertical: 38.5 inches <br/> Broad Jump: 9 ft 6 in")

            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "height": "100px", "width": "100px", "margin-left": "140px", "margin-top": "109px" })
                .addClass("hoverOver")
            $('.headInfo').off().hover(
                function() {
                    //location of text box
                    $('.headTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#headText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })
                        //beginning of Red line to text box
                    $('.headInfo').next('div').css({ "margin-left": "160px", "margin-top": "110px", "border-color": "red", "z-index": "1" })
                        //animation and legnth of line to text box
                    $('.headInfo').next('div').animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "40px" })
                },
                function() {
                    $("#headText").css("display", "none")
                    $(".headTextBox").css({ "display": "none" })
                    $('.headInfo').next("div").animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "height": "100px", "width": "100px", "margin-left": "10px", "margin-top": "7px" })
                .addClass("hoverOver")
            $('.armInfo').off().hover(
                function() {
                    //location of text box
                    $('.armTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#armText").css({ "display": "inline-block", "left": "-600px", "width": "200px" })
                        //starting position of red line to text box
                    $('.armInfo').next('div').css({ "margin-left": "50px", "margin-top": "77px", "border-color": "red" })
                    $('.armInfo').next('div').animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    $("#armText").css("display", "none")
                    $(".armTextBox").css({ "display": "none" })
                    $('.armInfo').next('div').animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })

                });

            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "height": "100px", "width": "100px", "margin-left": "210px", "margin-top": "430px" })
                .addClass("hoverOver")
            $('.bodyInfo').off().hover(
                function() {
                    $('.bodyTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#bodyText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })
                        //stsarting position of red line to text box
                    $('.bodyInfo').next('div').css({ "margin-left": "230px", "margin-top": "400px", "z-index": "50", "border-color": "red" })
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
    //------------------------------------------START OF Cruz-------------------------------------------
    //*************************************************************************************************
    $("#CruzIcon").off().on('click', function() {
        $('.headInfo, .armInfo, .bodyInfo').removeClass("hoverOver")
        $('.playerPicture').css("background-size", "")
            .animate({ opacity: "", left: "" }, "slow")
        $('.playerName').css("background-image", "")
            .animate({ top: "-100vh" }, "slow")
        $('.playerName2').css("background-image", "")
            .animate({ right: "-100vw" }, "slow")
        if (playerClicked == undefined || playerClicked !== "CruzIcon") {
            setTimeout(function() {
                $('.playerPicture').css({ "background-image": "url('./images/Cruz.png')" })
                    .animate({ opacity: 1, left: '55vw' }, "slow")
                $('.playerName').css("background-image", "url('./images/CruzName.png')")
                    .animate({ top: 0 })
                $('.playerName2').css("background-image", "url('./images/CruzName2.png')")
                    .animate({ right: 0 })
            }, 400)
            $("#headText").html("Undrafted Free Agent <br/> College: U Mass <br/> 2011 Super Bowl Champion ")
            $("#armText").html("Receptions: 280 <br/> Receiving Yards: 4,208 <br/>Receiving Touchdowns: 25")
            $("#bodyText").html("99 yard Touchdown <br/>Tied for NFL record  <br/> 40-yd Dash: 4.46s")

            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "height": "100px", "width": "100px", "margin-left": "10px", "margin-top": "37px"})
                .addClass("hoverOver")
            $('.headInfo').off().hover(
                function() {
                    //location of text box
                    $('.headTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#headText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })
                        //beginning of Red line to text box
                    $('.headInfo').next('div').css({ "margin-left": "50px", "margin-top": "137px", "border-color": "red","z-index":"1"  })
                    $('.headInfo').next('div').animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    $("#headText").css("display", "none")
                    $(".headTextBox").css({ "display": "none" })
                    $('.headInfo').next("div").animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "height": "100px", "width": "100px", "margin-left": "35px", "margin-top": "189px" })
                .addClass("hoverOver")
            $('.armInfo').off().hover(
                function() {
                    //location of text box
                    $('.armTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#armText").css({ "display": "inline-block", "left": "-600px", "width": "200px" })
                        //starting position of red line to text box
                    $('.armInfo').next('div').css({ "margin-left": "50px", "margin-top": "277px", "border-color": "red","z-index":"1" })
                    $('.armInfo').next('div').animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    $("#armText").css("display", "none")
                    $(".armTextBox").css({ "display": "none" })
                    $('.armInfo').next('div').animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })

                });

            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "height": "100px", "width": "100px", "margin-left": "110px", "margin-top": "430px" })
                .addClass("hoverOver")
            $('.bodyInfo').off().hover(
                function() {
                    $('.bodyTextBox').css({ "display": "block", "margin-left": "-200px" })
                    $("#bodyText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })
                        //starting position of red line to text box
                    $('.bodyInfo').next('div').css({ "margin-left": "130px", "margin-top": "450px", "z-index": "50", "border-color": "red" })
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
