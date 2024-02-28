/* if user scrolls down, the nav bar disappears. If user scrolls up OR if they are at the top of the page, the nav bar appears */

var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var CurrentScrollPos = 
            window.pageYOffset;
        
        if (prevScrollpos > CurrentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } 
        
        else if (CurrentScrollPos > prevScrollpos){
            document.getElementById("navbar").style.top = "-70px";
        }
        
        else {
            document.getElementById("navbar").style.top = "0";
        }
        
        prevScrollpos = CurrentScrollPos;
    }