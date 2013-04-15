$(document).ready(function() {

$('[style*="width"]').each(function() {
    var style = $(this).attr('style');
    var pattern = /width: 10..px;/g
    var match = pattern.exec(style);
    if (match) {        
			$(this).hide();
    }
});

$('img[src="/media/images/design/default-massage-board.png"]').hide();

});
