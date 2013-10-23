$(document).ready(function () {
        // declare variables..
        var CurCssClass = "";
        var LastFocused = "";
        var CurVal = "";
        var inputType = "";
        // apply the styles for the vboard..
        $('.vboard-buttons').css('margin', '5px');
        $('.vboard-buttons div').css('max-width', '100%');
        $('.vboard-buttons').css('padding', '5px');
        $('.vboard-buttons div').css('margin', '5px;');
        $('#ins').append(LastFocused + '<br />');
        $('#vboard').css('min-width', '830px');
        $('#vboard').css('display', 'none');
        $('#vboard').draggable();
        $('#vboard').css('background-color', 'rgba(0, 0, 0, 0.10)');
        $('#vboard').css('max-width', '830px');
        $('#vboard').css('margin', '0 auto');
        $('#vboard').css('padding', '0 0 20px 0');
        $('#vboard').css('box-shadow', '1px 1px 5px #000');
        $('#vboard').css('border-radius', '20px');
        $('#vboard').css('min-height', '260px');
        $('#vboard').css('max-height', '260px');
        $('#vboard').css('position', 'absolute');
        $('#vboard').css('bottom', '0');
        $('#vboard').css('margin', '20px');
        $('#vboard').css('border', '1px solid #000');
        $('#vboard').css('line-height', '35px');
        $('#vboard a').css({ 'text-decoration': 'none', 'background-color': 'none' });
        $('#vboard a').hover(function () {
            $(this).css({
                'text-decoration': 'none',
                'background-color': 'transparent'
            });
        });
        $('#vboard ul li').css('display', 'inline');
        $('#vboard ul li').css('background-color', '#999');
        $('#vboard ul li').css('border-radius', '4px');
        $('#vboard ul li').css('padding', '7px 15px');
        $('#vboard ul li').css('margin', '2px 2px');
        $('#vboard ul li').css('border', '1px solid #cecece');
        $('#vboard ul').css('list-stye', 'none');
        $('#vboard ul li').css('cursor', 'pointer');
        $('.spcbr').css('padding', ' 10px 200px');
        $('.spcbr').css('margin', '0 auto');
        $('#spcbr').css('margin', '0 auto');
        $('#spcbr').css('max-width', '600px');
        $('#spcbr').css('min-width', '600px');
        /* all the click events are here..
         * from each one, input fields and textarea are seperately sorted..as per their api!
         */
         // below are the input events and the value to be added to input fields..
        $('input').focus(function () {
            $('#vboard').fadeIn(100);
            LastFocused = 'input[name="' + $(this).attr('name') + '"]';
            inputType = "input";
            $('#ins').append($(this).attr('name') + '<br />');
            CurCssClass = $(this).attr('class');
        });
        $('input').blur(function () {
            $('#vboard').fadeOut(100);
        });
        // events for textarea..
        $('textarea').focus(function () {
            $('#vboard').fadeIn(100);
            LastFocused = 'textarea[name="' + $(this).attr('name') + '"]';
            inputType = "textarea";
            $('#ins').append($(this).attr('name') + '<br />');
        });
        $('textarea').blur(function () {
            $('#vboard').fadeOut(100);
        });
        // click events on the buttons of the vboard. 
        $('#vboard li').click(function () {
            CurVal = $(LastFocused).val();
            if ($(this).attr('id') == "shift") {
                $('.vbrd').toggle();
                $('.vbrd2').toggle();
            } else if ($(this).attr('id') == "bkspc") {
                $(LastFocused).val(CurVal.substring(0, CurVal.length - 1));
            } else {
                $(LastFocused).val(CurVal + $(this).attr('id'));
                $(LastFocused).focus();
            }
        });
    });
