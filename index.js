function showMenu() {
    $(".menulist").slideToggle("slow");
}


function showmovieMenu() {
    $(".moviemenu").slideToggle("slow");
    $(".h1").slideUp("1000").slideDown("1000");
} 
function showhomeBody() {
    $(".homebody").slideDown("2000");
    $(".recentwatch").hide();
    $("#home").css("background-color", "var(--secondary-background-color)");
    $("#rw").css("background-color", "transparent");
}

function showrecentWatch() {
    $(".homebody").hide();
    $(".recentwatch").slideDown("3000");
     $("#home").css("background-color","transparent" );
    $("#rw").css("background-color", "var(--secondary-background-color)");
}
function darkTheme() {
    $(".menulist,.headbar,.moviemenu,.homebody,.recentcover").addClass("darkmode");
    $(".menulist,.headbar,.moviemenu,.homebody,.recentcover").removeClass("lightmode");
    $(".dark").css("display", "none");
    $(".light").css("display", "block");
}

function lightTheme() { 
    $(".menulist,.headbar,.moviemenu,.homebody,.recentcover").removeClass("darkmode");

    $(".menulist,.headbar,.moviemenu,.homebody,.recentcover").addClass("lightmode");
    $(".light").css("display","none"); 
    $(".dark").css("display","block");
}
let time = new Date().getHours();
switch (time) { 
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        document.getElementById("greeting").innerHTML= "Good Morning ";

        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        document.getElementById("greeting").innerHTML = "Good Afternoon ";
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
      document.getElementById("greeting").innerHTML= "Good Evening ";

        break;
    default: document.getElementById("greeting").innerHTML = "Have a nice day";
}


