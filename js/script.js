// $(document).ready(function(){
//     $(".home-button").click(function(){
//         $(".home-button").animate({
//             width: "+=100px" 
//         }, 500);
//     })
// })


$(document).ready(function () {
    $(".home-button").mouseenter(function () {
        $(".home-button").stop().animate({ width: "200px" }, 500);
        $(".home-button").html('<button class="contact-btn">Contact Us</button>');
    });

    $(".home-button").mouseleave(function () {
        $(".home-button").stop().animate({ width: "115px" }, 300);
        $(".home-button").html('<img src="./asset/icons/logoicon.svg" alt="" />');
    });
});


$(document).ready(function () {
    let originalContent = $(".bg-1").html(); 

    $(".bg-1").mouseenter(function () {
        $(this).stop().animate({ width: "200px" }, 500);
        $(this).html('<div class="animation-div"></div>');
    });

    $(".bg-1").mouseleave(function () {
        $(this).stop().animate({ width: "115px" }, 300, function () {
            $(this).html(originalContent); 
        });
    });
});



  