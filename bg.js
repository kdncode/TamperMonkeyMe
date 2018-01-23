// ==UserScript==
// @name         Change background image
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       KN
// @match        http://www.berkeley.edu/
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        $('.container').css('background-color', '#FD8E2C');
    });

    $(document).ready(function() {
        $('.card-color').css('background-image', 'url("https://pbs.twimg.com/media/DKv1XH6UIAAwgMz.jpg")');
    });

})();

