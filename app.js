const CONFIG = {
    titleWeb: "Gửi em iu",
    
    background: "background.jpg",

    min1: "EKhanh2.jpg",
    min2: "EKhanh8.jpg",
    min3: "EKhanh6.jpg",
    min4: "EKhanh6.jpg",
    min5: "EKhanh11.jpg",
    min6: "EKhanh12.jpg",

    max1: "EKhanh9.jpg",
    max2: "EKhanh1.jpg",
    max3: "EKhanh7.jpg",
    max4: "EKhanh4.jpg",
    max5: "EKhanh3.jpg",
    max6: "EKhanh10.jpg",
}

$(document).ready(function() {
    $('#titleWeb').text(CONFIG.titleWeb)
    $('body').css('background-image', 'url(image/' + CONFIG.background + ')')

    for (let i = 1; i <= 6; i++)
        $('#min' + i).css('background-image', 'url(image/' + CONFIG['min' + i] + ')')

    for (let i = 1; i <= 6; i++)
        $('#max' + i).css('background-image', 'url(image/' + CONFIG['max' + i] + ')')
})