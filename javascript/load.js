// function includeHTML(file, elementId) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => document.getElementById(elementId).innerHTML = data);
// }
var nav_loaded = false
var  sidebar_loaded = false
var surror = false 
// function includeHTML(file, elementId) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(elementId).innerHTML = data;
//             // callback();
//             if (!nav_loaded || true){
//                 highlightCurrentPage()
//                 loaded = true
//             }
//             if (!sidebar_loaded || true){
//                 highlightSidebar()
//             }
//         });
// }


function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // callback();
            if (!nav_loaded || true){
                highlightCurrentPage()
                loaded = true
            }
            if (!sidebar_loaded || true){
                highlightSidebar()
            }
        });
}

function highlightCurrentPage() {
    var currentUrl = location.pathname;
    var links = document.querySelectorAll('.navbar a');
    links.forEach(function(link) {
        var linkUrl = link.pathname;
        if (linkUrl === currentUrl) {
            link.classList.add('current');
        }
    });
}

function highlightSidebar() {
    var currentUrl = location.pathname;
    if (currentUrl.endsWith('/')){
        currentUrl = currentUrl.slice(0,-1)
    }

    var links = document.querySelectorAll('.navbar a');
    links.forEach(function(link) {
        if (link.pathname != '/' && location.pathname.includes(link.pathname)) {
            link.classList.add('current');
        }
    });

    var sidebarLinks = document.querySelectorAll('.sidebar a');
    var activeLink = null;
    
    sidebarLinks.forEach(function(link) {
        var linkUrl = link.pathname;
        if (linkUrl === currentUrl) {
            link.classList.add('current');
            activeLink = link;
            // highlight parent items in nested lists
            var parentLi = link.parentNode;
            while (parentLi && parentLi.tagName === 'LI') {
                parentLi.classList.add('current-parent');
                parentLi = parentLi.parentNode.parentNode;
            }
        }
    });

    // Scroll the active link into view after a short delay
    if (activeLink) {
        setTimeout(() => {
            activeLink.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }, 100);
    }
}


// update start for adding copy button
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("pre").forEach(preBlock => {
        const button = document.createElement("button");
        // button.innerText = "cp";
        button.innerText = "📋";
        button.classList.add("copy-btn");
        preBlock.style.position = "relative"; // Ensure relative positioning
        preBlock.appendChild(button);

        button.addEventListener("click", function () {
            const code = preBlock.querySelector("code").innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerText = "Copied!";
                // setTimeout(() => button.innerText = "cp", 2000);
                setTimeout(() => button.innerText = "📋", 2000);
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        });
    });
});
// update ends for copy button



