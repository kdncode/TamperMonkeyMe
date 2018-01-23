// ==UserScript==
// @name         Click To Top
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Click the arrow-up on the bottom right to jump to the top of page.
// @author       KN
// @include      *
// @match        *
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function(){window.onload = function(){
    console.log('DOM already loaded.');
    if(window.top == window.self){
        var aNode = document.createElement('a');
        aNode.href = 'javascript:;';
        aNode.id = 'click-to-top';
        aNode.title = 'Click it to go to the top';
        var availHeight = window.screen.availHeight;
        var css = '#click-to-top{ display:none; position: fixed; right: 5%; bottom: 20%; opacity: 0.7; z-index: 9999; } #click-to-top:hover{ position: fixed; right: 5%; bottom: 20%; opacity: 1; z-index: 9999; }';


        window.onscroll = function(){
            var curPos = (document.documentElement.scrollTop == 0) ? document.body.scrollTop : document.documentElement.scrollTop;
            if(curPos > availHeight){
                aNode.style.display = 'block';
            }else {
                aNode.style.display = 'none';
            }
        };

        // Arrow icon
        var img = document.createElement('img');
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_Arrow_Up.png';
        img.style = 'width: 50px; height: 50px;';


        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }


        document.getElementsByTagName('head')[0].appendChild(style);
        aNode.append(img);
        aNode.addEventListener('click', function(){
            document.body.scrollIntoView();
        });
        var eBody = document.querySelector('body');
        eBody.append(aNode);
    }
};})();