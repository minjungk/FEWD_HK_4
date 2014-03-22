function log(obj){
	console.log(obj);
}

$('input[type="submit"]').on('click',function(){})
$('#container').on('click','input[type="submit"]',function(e){
	log(this);
	log($(this));
	log(e);
	$('#tasklist').append('<li>' + $('.userTask').val() + '<span class="edit"> Edit</span>'+ '<span class="delete"> Delete'+'</span></li>');
	$('.message').html('You have ' + $('#tasklist li').length + ' task/s.');
})//>> use input field in for list and change the code accordingly (note to myself) 
$("#tasklist").on('click', '.delete', function(){
	$(this).parent().remove();
	$('.message').html('You have ' + $('#tasklist li').length + ' task/s.');
})

$("#tasklist").on('click', '.edit', function(){
	// $(this).parent().empty();
	$(this).closest('div').siblings().find('.userTask').empty();
	// $('.message').html('You have ' + $('#tasklist li').length + ' task/s.');
})

$('#clear').on('click', function(){
	$('#tasklist li').remove();
	$('.message').remove();
})