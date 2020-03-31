//---------------------------
//----------------SELECTALL CHECKBOX
//-------------------------
var select_all = document.getElementById("selectall");
var checkboxes = document.getElementsByClassName("sidebar__checkbox");
//select all checkboxes
select_all.addEventListener("change", function(e){
	for (i = 0; i < checkboxes.length; i++) {
		checkboxes[i].checked = select_all.checked;
	}
});

for (var i = 0; i < checkboxes.length; i++) {
	checkboxes[i].addEventListener('change', function(e){ //".checkbox" change
		//uncheck "select all", if one of the listed checkbox item is unchecked
		if(this.checked == false){
			select_all.checked = false;
		}
		//check "select all" if all checkbox items are checked
		if(document.querySelectorAll('.checkbox:checked').length == checkboxes.length){
			select_all.checked = true;
		}
	});
}

//-----------------------
//----------------SIDEBAR_TRANSITION
//-------------------------
$('.btnsvg-filters').click(function(){
	$('.sidebar').toggleClass('sidebar--show');
});
//-----------------------
//----------------SIDEBAR_CLOSE
//-------------------------
$('.sidebar__close').click(function(){
	$('.sidebar').toggleClass('sidebar--show');
});
