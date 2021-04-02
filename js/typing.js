var captionLength = 0;
var caption = '';

$(document).ready(function() {
    captionEl = $('#caption');
    
    testTypingEffect();
});

function testTypingEffect() {
    caption = 'Front-End Web Developer';
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 80);
    } else {
        captionLength = 0;
        caption = '';
    }
}