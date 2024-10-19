//DO NOT TOUCH//

//function to start the script after DOM is fully loaded
window.onload = function () {
    
    // Navigation Bar Scroll and mouseover Script
    ScrollingEffects();
    
}


///FUNCTIONS AREA
// Navigation Bar Scroll and mouseover Script

function ScrollingEffects() {window.addEventListener('scroll', function () {
    var overme = document.getElementById('upper');
    var upperElement = document.getElementById('upper');
    var scrollPosition = window.scrollY;
    //if user scrolled
    if (scrollPosition > 0) {
        upperElement.style.backgroundColor = `rgb(0, 0, 0, 0.705)`;

        //if mouse came away from the navigation while was scrolling
        overme.addEventListener('mouseout', function () {
            upperElement.style.backgroundColor = `rgb(0, 0, 0, 0.705)`
        })

        //if mouse came on the navigation while was scrolling
        overme.addEventListener('mouseover', function () {
            upperElement.style.backgroundColor = `rgb(0, 0, 0)`
        });

        //ensure the navigation stays black even if the user did mouse out at the top page.
    } else {
        upperElement.style.backgroundColor = `rgb(0, 0, 0)`;
        overme.addEventListener('mouseout', function () {
            upperElement.style.backgroundColor = `rgb(0, 0, 0)`
        })
    };
}
)
}