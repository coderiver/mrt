head.ready(function() {

	// $(document).on("click", function(){
	//  $(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
	// dropdown
	$(document).click(function() {
		$(".js-select").removeClass("is-active");
		$(".js-select-list").slideUp(100);
	});

	// select list
	$("body").on("click", ".js-select", function(event) {
		event.stopPropagation();
	});
	$("body").on("click", ".js-select-text", function(event) {
		var select = $(this).parents(".js-select");
		if (select.hasClass("is-active")) {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
		} else {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
			select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
		}

	});
	$("body").on("click", ".js-select-list li", function() {
		var val = $(this).attr("data-val");
		var text = $(this).text();
		var select = $(this).parents(".js-select");
		var selectList = $(this).parents(".js-select-list");
		select.find(".js-select-text").text(text);
		select.find("option").removeAttr("selected");
		select.find('option[value="' + val + '"]').attr("selected", "selected");
		selectList.find("li").removeClass("is-active");
		$(this).addClass("is-active");
		select.removeClass("is-active");
		selectList.slideUp(100);
		return false;
	});

	function sort() {
		$('.js-sort').tablesorter({
			cssHeader: false,
			headers: {
				0: {
					sorter: false
				},
				1: {
					sorter: false
				}
			}
		});
	}
	if ($('.js-sort').length) {
		sort();
	}

	$('.js-nav a').on('click', function() {
		var section = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(section).offset().top - 10
		}, 500);
		return false;
	});

	function tabsLoad() {
	   $(".js-tabs-simple").each(function(){
		 if ($(this).find(".is-active").length) {
			var index = $(this).find(".is-active").index();
			$(this).next().find(".js-tabs-simple-content").eq(index).show();
		 }
		 else {
		   $(this).find("li").eq(0).addClass("is-active");
		   $(this).next().find(".js-tabs-simple-content").eq(0).show();
		 }
	   });
   }

   tabsLoad();
	$('.js-tabs-simple a').on("click",function () {
			var tabs = $(this).parents(".js-tabs-simple");
			var tabsCont = tabs.next().find(".js-tabs-simple-content");
			var index = $(this).parent().index();
			tabs.find("li").removeClass("is-active");
		$(this).parent().addClass("is-active");
			tabsCont.hide();
			tabsCont.eq(index).show();
			return false;
	});
	$(".js-custom-scroll").mCustomScrollbar({
		theme: "light-thick",
		scrollInertia: 200,
		mouseWheel:{
		preventDefault: true,
		scrollAmount: 150 }
	});
	$(".js-popup").on("click", function(){
		$(".popup-wrap").toggleClass("is-active");
	});
	$(".js-close").on("click", function(){
		$(".popup-wrap").removeClass("is-active");
	});
	
	$("#datepicker").datepicker({
		dateFormat: "dd.mm",
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель','Май', 'Июнь', 'Июль', 'Август', 'Сентябрь','Октябрь', 'Ноябрь', 'Декабрь'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		firstDay: 1,
	});

	$('.js-calendar').click(function() {
		$("#datepicker").datepicker("show");
	});
});
