$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

//Dropdown on click shows//
$(".dropbtn").on("click",function(){
    var showMe = $(this).siblings(".dropdown-content")
    $(showMe).slideToggle()
     var visible_drop = $(this).parents('tr').siblings().find('.dropdown-content').filter(":visible")
     $(visible_drop).slideUp()
})