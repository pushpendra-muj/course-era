window.document.onkeydown = function (e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode == 27) {
        lightbox_close();
    }
}
function lightbox_open(X) {
    window.scrollTo(0, 0);
    document.getElementById('light' + X).style.display = 'block';
    document.getElementById('fade' + X).style.display = 'block';
}
function lightbox_close(Y) {
    document.getElementById('light' + Y).style.display = 'none';
    document.getElementById('fade' + Y).style.display = 'none';
}

function CheckEmail(field) {
    var emailExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([com\co\.\in])+$/;
    var EmailId = field;
    if (EmailId != '') {
        if (!EmailId.match(emailExp)) {
            return false;
        }
    }
    return true;
}


function ShowPicture(id, Source) {
    if (Source == "1") {
        if (document.layers) document.layers['' + id + ''].visibility = "show"
        else if (document.all) document.all['' + id + ''].style.visibility = "visible"
        else if (document.getElementById) document.getElementById('' + id + '').style.visibility = "visible"
    }
    else
        if (Source == "0") {
            if (document.layers) document.layers['' + id + ''].visibility = "hide"
            else if (document.all) document.all['' + id + ''].style.visibility = "hidden"
            else if (document.getElementById) document.getElementById('' + id + '').style.visibility = "hidden"
        }
}

var slide = 0;

function CharCheckArch(field) {

    var valid = "0123456789./"
    var ok = "yes";
    var temp;
    for (var i = 0; i < field.value.length; i++) {
        temp = "" + field.value.substring(i, i + 1);
        if (valid.indexOf(temp) == "-1") ok = "no";
    }
    if (ok == "no") {
        $('#inputModal').modal({backdrop:'static', keyboard:'false', show:true});
        field.focus();
        field.select();
        field.value = "";
    }
}

$(document).ready(function () {
    //SETTING NAVIGATION FOR WINDOWS MOBILE BROWSERS 10 AND PRIOR VERSIONS
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
        document.querySelector('head').appendChild(msViewportStyle);
    }

    $(".rpscExp").click(function () {
        if ($(this).attr("src") == "Images/plus.png") {
            $(this).closest("tr").after("<tr class='visible-sm visible-xs'><td></td><td colspan = '999'>" + $(this).next().html() + "</td></tr>");
            $(this).attr("src", "Images/minus.png");
        }
        else {
            $(this).attr("src", "Images/plus.png");
            $(this).closest("tr").next().remove();
        }
    });

    $("#navAwards").click(function () { Alert.displayDialog(); });

    $(".Footer").click(function () {
        $(".rpscSlideFooter").slideToggle();

        if (slide === 0) {
            slide = 1;
            $("#spnContact").removeClass("glyphicon glyphicon-chevron-down");
            $("#spnContact").addClass("glyphicon glyphicon-chevron-up");
            $("html, body").animate({ scrollTop: $("#copyright").offset().top });

        }
        else {
            slide = 0;
            $("#spnContact").removeClass("glyphicon glyphicon-chevron-up");
            $("#spnContact").addClass("glyphicon glyphicon-chevron-down");
            $(".WrapperMaster").animate({ scrollTop: 300 });
        }
    });
});

function CharAlphaNumeric(field) {

    var valid = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789."
    var ok = "yes";
    var temp;
    for (var i = 0; i < field.value.length; i++) {
        temp = "" + field.value.substring(i, i + 1);
        if (valid.indexOf(temp) == "-1") ok = "no";
    }
    if (ok == "no") {
        alert("Special Symbols are not allowed here!");
        field.focus();
        field.select();
        field.value = "";
    }
}


function stopMarquee(mrq) {
    mrq.setAttribute('scrollamount', 0, 0);
    mrq.stop();
}
function startMarquee(mrq) {
    mrq.setAttribute('scrollamount', 2, 0);
    mrq.start();
}

function CustomizedCharFilter(object) {
    var a = object.val();
    var invalidchar = "~`!#$%^*={}[];'@+";
    for (i = 0; i < a.length; i++) {
        chr = a.charAt(i);
        if (invalidchar.indexOf(chr) != -1) {
            object.val("");
        }
    }
    
}

function hidePopover(val) { $('#' + val.id).popover('destroy'); }