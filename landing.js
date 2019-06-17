var fadeOutInput = function()
    {
        var inputText = $("input").val();
        $(".header").fadeOut("slow");
        $(".image-template-content-cnn").css("opacity","0.3");
        $(".image-template-content-image").css("background-image","url(images/preloader.gif)");
        setTimeout(function(){        
            $(".footer").fadeIn();
            $(".image-template-content-cnn").css("opacity","1");
            $(".image-template-content-image").css("background-image","");
            $(".input-text").text('');
            $(".yourDomain").append(inputText+"<br>");
            $(".black-loader").css("display","block");
            $(".third-title").css("top","123%")
            ;},2000);

        
        
    };



var fadeInInput =function(){
    {
        $(".header").fadeIn(1000);
        $(".black-loader").fadeOut();
        $(".footer").css("display","none");
        $(".third-title").css("top","102%")
        $(".image-template-content-image").css("display","block");
        $(".input-text").text('');
        $(".input-text").append("Your headline displayed here");
    };
}