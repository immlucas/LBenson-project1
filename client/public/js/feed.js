document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        goToLocation('http://my.marist.edu');
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);

    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});