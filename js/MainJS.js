$(document).ready(function() {

setTimeout(function() {
$('.remove').css({"height":0})
},1300)


    var firstClick = function(id) {
        playerSelected = id.slice(0, id.length - 4)
        $('.headInfo, .armInfo, .bodyInfo').removeClass("hoverOver")
        $('.playerPicture').css({ "background-size": "", "margin-top": "" })
            .animate({ opacity: "", left: "" }, "slow")
        $('.playerName').css("background-image", "")
            .animate({ top: "-100vh" }, "slow")
        $('.playerName2').css("background-image", "")
            .animate({ right: "-100vw" }, "slow")
    }

    var armTextBoxFunc = function() {
        $('.armTextBox').css({ "display": "block", "margin-left": "-200px" })
        $("#armText").css({ "display": "inline-block", "left": "-600px", "width": "200px" })
    }

    var afterArmHover = function() {
        $("#armText").css("display", "none")
        $(".armTextBox").css({ "display": "none" })
        $('.armInfo').next('div').animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })
    }

    var headTextBoxFunc = function() {
        $('.headTextBox').css({ "display": "block", "margin-left": "-200px" })
        $("#headText").css({ "display": "inline-block", "left": "-300px", "width": "200px" })
    }
    var afterHeadHover = function() {
        $("#headText").css("display", "none")
        $(".headTextBox").css({ "display": "none" })
        $('.headInfo').next("div").animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })
    }

    var bodyTextBoxFunc = function() {
        $('.bodyTextBox').css({ "display": "block", "margin-left": "-200px", "margin-top": "-50px" })
        $("#bodyText").css({ "display": "inline-block", "right": "-10px", "width": "200px" })
    }

    var afterBodyHover = function() {
        $("#bodyText").css("display", "none")
        $(".bodyTextBox").css({ "display": "none" })
        $('.bodyInfo').next("div").animate({ "left": "0px", "border-width": "0px", "width": "0px", "height": "0px" })
    }

    var afterClick = function() {
        setTimeout(function() {
            if (playerSelected === "JPP") {
                $('.playerPicture').css({ "background-position": "0 150px", "background-size":"550px auto"})
            } else if (playerSelected === "Apple") {
                $('.playerPicture').css({ "background-position": "0 50px" })
            } else if (playerSelected === "Vernon") {
                $('.playerPicture').css({ "background-position": "0px 40px" })

            } else {
                $('.playerPicture').css({ "background-position": "" })
            }
            $('.playerPicture').css("background-image", "url('./images/" + playerSelected + ".png')")
                .animate({ opacity: 1, left: '55vw' }, "slow")

            if ($(window).width() <= 700) {
                $('.playerName2').css({ "display": "inline-block", "background-image": "url('./images/" + playerSelected + "Name2.png')" })
                    .animate({ left: "50vw" }, "slow")
                $('.playerName').css("background-image", "url('./images/" + playerSelected + "Name.png')")
                    .animate({ top: 0 }, "slow")

            } else {
                $('.playerName2').css({ "display": "inline-block", "background-image": "url('./images/" + playerSelected + "Name2.png')" })
                    .animate({ right: 0 }, "slow")
                $('.playerName').css("background-image", "url('./images/" + playerSelected + "Name.png')")
                    .animate({ top: 0 }, "slow")
            }
        }, 400)
    }

    var playerClicked = this.id

    var playerSelected = ""
        //*************************************************************************************************
        //------------------------------------------START OF ELI-------------------------------------------
        //*************************************************************************************************
    $("#EliIcon").off().on('touchstart mousedown', function() {
        firstClick(this.id)
        if (playerClicked == undefined || playerClicked !== playerSelected + "Icon") {
            afterClick()
            $("#headText").html("2004 1st Round 1st Pick <br/>College: Ole Miss <br/> Tied for all time 6th Highest QB Wonderlic Score")
            $("#armText").html("Total Yards: 46,171 </br> 10th overall passing yards of all time</br>Total Touchdowns:302</br> All time leader in </br>New York Giants</br> franchies hisotry")
            $("#bodyText").html("Super Bowl XLII Champion </br> Super Bowl XLVI Champion</br> 2x Super Bowl MVP")

            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "margin-left": "170px", "margin-top": "10px" })
                .addClass("hoverOver")
                //what happens when u hover over red circle
            $('.headInfo').off().hover(
                //upon mouse enter
                function() {
                    headTextBoxFunc();
                    //red line to text box
                    $('.headInfo').next('div')
                        .css({ "margin-left": "200px", "margin-top": "30px", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "420px", "height": "40px" })
                },
                //upon  mouse leave
                function() {
                    afterHeadHover();
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "margin-left": "-10px", "margin-top": "147px" })
                .addClass("hoverOver")
            $('.armInfo').off().hover(
                function() {
                    armTextBoxFunc();
                    $('.armInfo').next('div').css({ "margin-left": "50px", "margin-top": "237px", "border-color": "red" })
                        .animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    afterArmHover()
                });
            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "margin-left": "110px", "margin-top": "147px" })
                .addClass("hoverOver")
            $('.bodyInfo').off().hover(
                function() {
                    bodyTextBoxFunc();
                    $('.bodyInfo').next('div').css({ "margin-left": "130px", "margin-top": "100px", "z-index": "50", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "40px" })
                },
                function() {
                    afterBodyHover();
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
        firstClick(this.id)
        $('.playerPicture').css("background-size", "")
        if (playerClicked == undefined || playerClicked !== "OdellIcon") {
            afterClick()

            $("#headText").html("2014 1st Round 12th Pick <br/> College: LSU <br/> 2014 Offensive Rookie of <br/>the Year")
            $("#armText").html("Receptions: 227 <br/> Receiving Yards: 3,385<br/>Receiving Touchdowns: 28")
            $("#bodyText").html("40-yd Dash: 4.43<br/> Vertical: 38.5 inches <br/> Broad Jump: 9 ft 6 in")

            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "margin-left": "140px", "margin-top": "89px" })
                .addClass("hoverOver")
            $('.headInfo').off().hover(
                function() {
                    //location of text box
                    headTextBoxFunc();
                    //beginning of Red line to text box
                    $('.headInfo').next('div').css({ "margin-left": "160px", "margin-top": "110px", "border-color": "red", "z-index": "1" })
                        //animation and legnth of line to text box
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "40px" })
                },
                function() {
                    afterHeadHover();
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "margin-left": "10px", "margin-top": "7px" })
                .addClass("hoverOver")
            $('.armInfo').off().hover(
                function() {
                    //location of text box
                    armTextBoxFunc();
                    //starting position of red line to text box
                    $('.armInfo').next('div').css({ "margin-left": "50px", "margin-top": "77px", "border-color": "red" })
                        .animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    afterArmHover();

                });

            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "margin-left": "210px", "margin-top": "370px" })
                .addClass("hoverOver")
            $('.bodyInfo').off().hover(
                function() {
                    bodyTextBoxFunc();
                    //starting position of red line to text box
                    $('.bodyInfo').next('div').css({ "margin-left": "320px", "margin-top": "140px", "z-index": "50", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "250px", "height": "250px" })
                },
                function() {
                    afterBodyHover();
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
        firstClick(this.id)
        if (playerClicked == undefined || playerClicked !== "CruzIcon") {
            afterClick()
            $("#headText").html("Undrafted Free Agent <br/> College: U Mass <br/> 2011 Super Bowl Champion ")
            $("#armText").html("Receptions: 280 <br/> Receiving Yards: 4,208 <br/>Receiving Touchdowns: 25")
            $("#bodyText").html("99 yard Touchdown <br/>Tied for NFL record  <br/> 40-yd Dash: 4.46s")

            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "margin-left": "10px", "margin-top": "37px" })
                .addClass("hoverOver")
            $('.headInfo').off().hover(
                function() {
                    //location of text box
                    headTextBoxFunc();
                    //beginning of Red line to text box
                    $('.headInfo').next('div').css({ "margin-left": "50px", "margin-top": "137px", "border-color": "red", "z-index": "1" })
                        .animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    afterHeadHover();
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "margin-left": "30px", "margin-top": "169px" })
                .addClass("hoverOver")
            $('.armInfo').off().hover(
                function() {
                    //location of text box
                    armTextBoxFunc();
                    //starting position of red line to text box
                    $('.armInfo').next('div').css({ "margin-left": "50px", "margin-top": "277px", "border-color": "red", "z-index": "1" })
                        .animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    afterArmHover();

                });

            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "margin-left": "90px", "margin-top": "400px" })
                .addClass("hoverOver")
            $('.bodyInfo').off().hover(
                function() {
                    bodyTextBoxFunc();
                    //starting position of red line to text box
                    $('.bodyInfo').next('div').css({ "margin-left": "230px", "margin-top": "190px", "z-index": "50", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "250px", "height": "240px" })
                },
                function() {
                    afterBodyHover();
                });

            playerClicked = this.id
        } else {
            return
        }

    })


    //*************************************************************************************************
    //------------------------------------------START OF Shepard-------------------------------------------
    //*************************************************************************************************
    $("#ShepardIcon").off().on('click', function() {
        firstClick(this.id)
        if (playerClicked == undefined || playerClicked !== "ShepardIcon") {
            afterClick()
            $('.playerPicture').css({ "background-size": "auto 100%" })
            $("#headText").html("2016 2nd Round Draft Pick <br/> College: Oklahoma ")
            $("#armText").html("Receptions: 26 <br/> Receiving Yards: 302 <br/>Receiving Touchdowns: 2")
            $("#bodyText").html("Vertical: 41 inches  <br/> 40-yd Dash: 4.48s")

            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "margin-left": "140px", "margin-top": "20px" })
                .addClass("hoverOver")
            $('.headInfo').off().hover(
                function() {
                    //location of text box
                    headTextBoxFunc();
                    //beginning of Red line to text box
                    $('.headInfo').next('div').css({ "margin-left": "180px", "margin-top": "87px", "border-color": "red", "z-index": "1" })
                        .animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    afterHeadHover();
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "margin-left": "55px", "margin-top": "219px" })
                .addClass("hoverOver")
            $('.armInfo').off().hover(
                function() {
                    //location of text box
                    armTextBoxFunc();
                    //starting position of red line to text box
                    $('.armInfo').next('div').css({ "margin-left": "100px", "margin-top": "277px", "border-color": "red", "z-index": "1" })
                        .animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    afterArmHover();

                });

            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "margin-left": "160px", "margin-top": "380px" })
                .addClass("hoverOver")
            $('.bodyInfo').off().hover(
                function() {
                    bodyTextBoxFunc();
                    //starting position of red line to text box
                    $('.bodyInfo').next('div').css({ "margin-left": "130px", "margin-top": "250px", "z-index": "50", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "140px" })
                },
                function() {
                    afterBodyHover();
                });

            playerClicked = this.id
        } else {
            return
        }

    })




    //*************************************************************************************************
    //------------------------------------------START OF DRC-------------------------------------------
    //*************************************************************************************************
    $("#DRCIcon").off().on('click', function() {
        firstClick(this.id)
        if (playerClicked == undefined || playerClicked !== playerSelected + "Icon") {
            afterClick()
            $("#headText").html("2008 1st Round Draft Pick <br/>College: Tennessee State")
            $("#armText").html("26 Career Interceptions</br> 132 Career Pass Deflections</br> 7 Defensive Touchdowns")
            $("#bodyText").html("Vertical: 38.5 inches</br> 40-yd Dash: 4.29s")

            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "margin-left": "190px", "margin-top": "30px" })
                .addClass("hoverOver")
                //what happens when u hover over red circle
            $('.headInfo').off().hover(
                //upon mouse enter
                function() {
                    headTextBoxFunc();
                    //red line to text box
                    $('.headInfo').next('div')
                        .css({ "margin-left": "200px", "margin-top": "30px", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "40px" })
                },
                //upon  mouse leave
                function() {
                    afterHeadHover();
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "margin-left": "250px", "margin-top": "190px" })
                .addClass("hoverOver")
            $('.armInfo').off().hover(
                function() {
                    armTextBoxFunc();
                    $('.armInfo').next('div').css({ "margin-left": "215px", "margin-top": "277px", "border-color": "red", "z-index": "1" })
                        .animate({ "left": "-375px", "border-width": "2px", "width": "430px", "height": "40px" })
                },
                function() {
                    afterArmHover()
                });
            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "margin-left": "80px", "margin-top": "400px" })
                .addClass("hoverOver")
            $('.bodyInfo').off().hover(
                function() {
                    bodyTextBoxFunc();
                    $('.bodyInfo').next('div').css({ "margin-left": "160px", "margin-top": "270px", "z-index": "50", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "350px", "height": "140px" })
                },
                function() {
                    afterBodyHover();
                });
            playerClicked = this.id
        } else {
            return
        }
    })

    //*************************************************************************************************
    //------------------------------------------START OF COLLINS-------------------------------------------
    //*************************************************************************************************
    $("#CollinsIcon").off().on('click', function() {
        firstClick(this.id)
        if (playerClicked == undefined || playerClicked !== playerSelected + "Icon") {
            afterClick()
            $("#headText").html("2015 2nd Round Draft Pick <br/>College: Tennessee State")
            $("#armText").html("3 Career Interceptions</br> 14 Career Pass Deflections</br> 1 Defensive Touchdowns")
            $("#bodyText").html("Vertical: 35 inches</br> 40-yd Dash: 4.33s")


            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "margin-left": "0px", "margin-top": "10px" })
                .addClass("hoverOver")
                //what happens when u hover over red circle
            $('.headInfo').off().hover(
                //upon mouse enter
                function() {
                    headTextBoxFunc();
                    //red line to text box
                    $('.headInfo').next('div')
                        .css({ "margin-left": "200px", "margin-top": "30px", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "250px", "height": "40px" })
                },
                //upon  mouse leave
                function() {
                    afterHeadHover();
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "margin-left": "-10px", "margin-top": "177px" })
                .addClass("hoverOver")
            $('.armInfo').off().hover(
                function() {
                    armTextBoxFunc();
                    $('.armInfo').next('div').css({ "margin-left": "50px", "margin-top": "277px", "border-color": "red" })
                        .animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "40px" })
                },
                function() {
                    afterArmHover()
                });
            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "margin-left": "0px", "margin-top": "360px" })
                .addClass("hoverOver")
            $('.bodyInfo').off().hover(
                function() {
                    bodyTextBoxFunc();
                    $('.bodyInfo').next('div').css({ "margin-left": "120px", "margin-top": "180px", "z-index": "50", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "300px", "height": "160px" })
                },
                function() {
                    afterBodyHover();
                });
            playerClicked = this.id
        } else {
            return
        }
    })

    //*************************************************************************************************
    //------------------------------------------START OF APPLE-------------------------------------------
    //*************************************************************************************************
    $("#AppleIcon").off().on('click', function() {
        firstClick(this.id)
        if (playerClicked == undefined || playerClicked !== playerSelected + "Icon") {
            afterClick()

            $("#headText").html("2016 1st Round Draft Pick <br/>College: Ohio State")
            $("#armText").html("1 Career forced fumbles</br> 3 Career Pass Deflections</br> 15 Tackles")
            $("#bodyText").html("40-yd Dash: 4.40s</br>Vertical: 35 inches")

            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "margin-top": "150px", "margin-left": "210px" })
                .addClass("hoverOver")
                //what happens when u hover over red circle
            $('.headInfo').off().hover(
                //upon mouse enter
                function() {
                    headTextBoxFunc();
                    //red line to text box
                    $('.headInfo').next('div')
                        .css({ "margin-left": "200px", "margin-top": "140px", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "40px" })
                },
                //upon  mouse leave
                function() {
                    afterHeadHover();
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "margin-left": "-30px", "margin-top": "280px" })
                .addClass("hoverOver")
            $('.armInfo').off().hover(
                function() {
                    armTextBoxFunc();
                    $('.armInfo').next('div').css({ "margin-left": "50px", "margin-top": "377px", "border-color": "red" })
                        .animate({ "left": "-375px", "border-width": "2px", "width": "350px", "height": "20px" })
                },
                function() {
                    afterArmHover()
                });
            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "margin-left": "100px", "margin-top": "500px" })
                .addClass("hoverOver")
            $('.bodyInfo').off().hover(
                function() {
                    bodyTextBoxFunc();
                    $('.bodyInfo').next('div').css({ "margin-left": "200px", "margin-top": "180px", "z-index": "50", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "220px", "height": "340px" })
                },
                function() {
                    afterBodyHover();
                });
            playerClicked = this.id
        } else {
            return
        }
    })


    //*************************************************************************************************
    //------------------------------------------START OF JPP-------------------------------------------
    //*************************************************************************************************
    $("#JPPIcon").off().on('click', function() {
        firstClick(this.id)
        if (playerClicked == undefined || playerClicked !== playerSelected + "Icon") {
            afterClick()
            $('.playerPicture').css({ "background-size": "100% auto", "margin-top": "50px" })
            $("#headText").html("2010 1st Round Draft Pick <br/>College: South Florida<br/>Super Bowl XLVI Champion")
            $("#armText").html("44.5 Career Sacks</br> 9 Career Forced Fumbles</br> 340 Tackles")
            $("#bodyText").html("40-yd Dash: 4.78s</br>Vertical: 31.5 inches")

            //*******************Head Info STARTS*******************************
            //spinning red circle
            $('.headInfo').css({ "margin-left": "20px", "margin-top": "160px" })
                .addClass("hoverOver")
                //what happens when u hover over red circle
            $('.headInfo').off().hover(
                //upon mouse enter
                function() {
                    headTextBoxFunc();
                    //red line to text box
                    $('.headInfo').next('div')
                        .css({ "margin-left": "200px", "margin-top": "180px", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "250px", "height": "40px" })
                },
                //upon  mouse leave
                function() {
                    afterHeadHover();
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "margin-left": "400px", "margin-top": "257px" })
                .addClass("hoverOver")
            $('.armInfo').off().hover(
                function() {
                    armTextBoxFunc();
                    $('.armInfo').next('div').css({ "margin-left": "250px", "margin-top": "327px", "border-color": "red", "z-index": "1" })
                        .animate({ "left": "-375px", "border-width": "2px", "width": "550px", "height": "40px" })
                },
                function() {
                    $('.armInfo').next('div').css({ "z-index": "" })
                    afterArmHover()
                });
            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "margin-left": "70px", "margin-top": "410px" })
                .addClass("hoverOver")
            $('.bodyInfo').off().hover(
                function() {
                    bodyTextBoxFunc();
                    $('.bodyInfo').next('div').css({ "margin-left": "120px", "margin-top": "180px", "z-index": "50", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "350px", "height": "230px" })
                },
                function() {
                    afterBodyHover();
                });
            playerClicked = this.id
        } else {
            return
        }
    })

    //*************************************************************************************************
    //------------------------------------------START OF Vernon-------------------------------------------
    //*************************************************************************************************
    $("#VernonIcon").off().on('click', function() {
        firstClick(this.id)
        if (playerClicked == undefined || playerClicked !== playerSelected + "Icon") {
            afterClick()

            $("#headText").html("2012 3rd Round Draft Pick <br/>College: Miami")
            $("#armText").html("30 Career Sacks</br> 4 Career Forced Fumbles</br> 213 Tackles")
            $("#bodyText").html("40-yd Dash: 4.64s</br>Vertical: 34.5 inches")
                //*******************Head Info STARTS*******************************
                //spinning red circle
            $('.headInfo').css({ "margin-left": "180px", "margin-top": "110px" })
                .addClass("hoverOver")
                //what happens when u hover over red circle
            $('.headInfo').off().hover(
                //upon mouse enter
                function() {
                    headTextBoxFunc();
                    //red line to text box
                    $('.headInfo').next('div')
                        .css({ "margin-left": "100px", "margin-top": "80px", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "40px" })
                },
                //upon  mouse leave
                function() {
                    afterHeadHover();
                });
            //******************* ARM Info STARTS*******************************
            $('.armInfo').css({ "margin-left": "60px", "margin-top": "210px" })
                .addClass("hoverOver")
            $('.armInfo').off().hover(
                function() {
                    armTextBoxFunc();
                    $('.armInfo').next('div').css({ "margin-left": "120px", "margin-top": "277px", "border-color": "red" })
                        .animate({ "left": "-375px", "border-width": "2px", "width": "320px", "height": "40px" })
                },
                function() {
                    afterArmHover()
                });
            //*******************body Info STARTS*******************************
            $('.bodyInfo').css({ "margin-left": "270px", "margin-top": "397px" })
                .addClass("hoverOver")
            $('.bodyInfo').off().hover(
                function() {
                    bodyTextBoxFunc();
                    $('.bodyInfo').next('div').css({ "margin-left": "330px", "margin-top": "380px", "z-index": "50", "border-color": "red" })
                        .animate({ "left": "-450px", "top": "50px", "border-width": "2px", "width": "450px", "height": "40px" })
                },
                function() {
                    afterBodyHover();
                });
            playerClicked = this.id
        } else {
            return
        }
    })





})
