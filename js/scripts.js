$(document).ready(function(){
    $('#software_engineer').hover(function () {
        $('.category span').text('Software');
        $('.category span').css('color', '#DD7786');
    }, function() {
        $('.category span').text('');
    })

    $('#musician').hover(function () {
        $('.category span').text('Music');
        $('.category span').css('color', '#FF9C7A');
    }, function() {
        $('.category span').text('');
    })

    $('#connect').hover(function () {
        $('.category span').text('Contact');
        $('.category span').css('color', '#FFDD47');
    }, function() {
        $('.category span').text('');
    })

});

jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};
