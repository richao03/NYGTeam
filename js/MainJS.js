$(document).ready(function() {
    $("#EliIcon").on('click', function() {
        $('.playerPicture').css("background-image", "url('./images/Eli.png')")
        $('.playerPicture').animate({ opacity:1, left: '55vw' }, "slow")
        $('.playerName').css("background-image", "url('./images/name.png')")
        $('.playerName').animate({ top: 0 })
        $('.playerName2').css("background-image", "url('./images/EliName2.png')")
        $('.playerName2').animate({ right: 0 })
    });

})
