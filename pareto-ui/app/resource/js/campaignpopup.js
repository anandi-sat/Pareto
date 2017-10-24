
function goBack()
 {
window.history.back()
 }




$(document).ready(function(){
    $('tr').click(function(){
        $(this).removeClass('actve').addClass('actve');
    });
});
