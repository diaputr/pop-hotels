// nav scroll
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("header").addClass("bar");
            $(".menu ul li a").addClass("scroll");
        } else {
            $("header").removeClass("bar");
            $(".menu ul li a").removeClass("scroll");
        }
    })
})

// bg overlay
var i = 0;
$(document).ready(function(){
	$('#slider img').hide();
	showNextImage();
	setInterval('showNextImage()', 3000);
})

function showNextImage() {
	i++;
	$('#sliderImage'+i).appendTo('#slider').fadeIn(1100).delay(1100).fadeOut(1100);
	if (i == 6) {
		i = 0;
	}
}

// validate
function validateForm() {
	let f = document.forms["myForm"];
	let user = f["username"].value;
	let pass = f["password"].value;

	if (user == "" || pass == "") {
		alert("Username dan Password harus diisi!");
		return false;
	} else if (pass.length < 8) {
		alert("Password minimal terdiri dari 8 karakter!");
		return false;
	}
}

// out
function logOut() {
	var yes = confirm("Are you sure to LOG OUT?");
	if (yes) {
		window.location = "login.html";
	} else {
		return false;
	}
}

// teks
$(document).ready(function(){
	$(".text").mouseover(function(){
		$("b").css("color", "#f1790a");
		$(".text p").css("color", "#74b404");
		$(".text p").css("font-weight", "bold");
	})
})

//check
// $(document).ready(function(){
// 	let floor = $("#floor").val();
// 	let type = $("#type").val();
// 	let day = $("#day").val();
// 	let discount = $("#discount").val();

// 	if(floor == "" || day == ""){
// 		alert 
// 	}
// })