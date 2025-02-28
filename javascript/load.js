// function includeHTML(file, elementId) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => document.getElementById(elementId).innerHTML = data);
// }
var nav_loaded = false
var  sidebar_loaded = false
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
    // tutorial_link = document.querySelector('a[href="/tutorials/"]')
    // if (currentUrl.includes(tutorial_link.pathname)){
    //     tutorial_link.classList.add('current')
    // }

    var links = document.querySelectorAll('.navbar a');
    links.forEach(function(link) {
        if (link.pathname != '/' && location.pathname.includes(link.pathname)) {
            link.classList.add('current');
        }
    });

    var sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(function(link) {
        var linkUrl = link.pathname;
        if (linkUrl === currentUrl) {
            link.classList.add('current');
            // highlight parent items in nested lists
            var parentLi = link.parentNode;
            while (parentLi.tagName === 'LI') {
                parentLi.classList.add('current-parent');
                parentLi = parentLi.parentNode;
            }
        }

    });
}


// update start for adding copy button
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("pre").forEach(preBlock => {
        const button = document.createElement("button");
        button.innerText = "cp";
        button.classList.add("copy-btn");
        preBlock.style.position = "relative"; // Ensure relative positioning
        preBlock.appendChild(button);

        button.addEventListener("click", function () {
            const code = preBlock.querySelector("code").innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerText = "Copied!";
                setTimeout(() => button.innerText = "cp", 2000);
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        });
    });
});
// update ends for copy button