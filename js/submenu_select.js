var selURL = window.location.href;

var mainmenu = document.querySelectorAll(".nav-item a");
var ddlmenu = document.querySelectorAll(".dropdown-menu a");


// ADDING ACTIVE MENU MENU
for (var i = 0, l = mainmenu.length; i < l; i++) {
    var elmnt = mainmenu[i];
    if (elmnt.href === selURL) {
        elmnt.classList.add("active");
        var parent = elmnt.closest(".main-nav");
        parent.classList.add("active");
        elmnt.closest(".nav-item").classList.add("active");
    }
}

// ADDING ACTIVE MENU MENU
for (var i = 0, l = ddlmenu.length; i < l; i++) {
    var elmnt = ddlmenu[i];
    if (elmnt.href === selURL) {
        elmnt.classList.add("active");
        var parent = elmnt.closest(".main-nav");
        parent.classList.add("active");
        elmnt.closest(".nav-item").classList.add("active");
    }
}



