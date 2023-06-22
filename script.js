var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];

var box = $('.ballBox');
$('.btn').click(function(e){
    console.log('clicked');
    box.append('<div class="ball" style="background-color: ' + colors[Math.floor(Math.random()*15)] + '"></div>');
});