$(document).ready(function() {        
    $('li img').on('click', function () {
        var src = $(this).attr('src');
        
        var img = '<center><img src="' + src + '" class="img img-responsive"/></center>';
        img += '<br/><center><span style="font-weight:bold;font-size:20px;">' + $(this).parent().find('span').text() + '</span></center>';
        $("#photoDialog").html(img).dialog("open");
    });

    $("#photoDialog").dialog({
        open: function (event, ui) { $(".ui-dialog-titlebar-close").hide(); },
        modal: true,
        buttons: [{ text: "Close", click: function () { $(this).dialog("close"); }, class: "btn btn-default" }],
        autoOpen: false,
        show: { effect: "scale", duration: 500 },
        hide: { effect: "fade", duration: 500 },
        width: "50%",
    });
})