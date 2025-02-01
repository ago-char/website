window.addEventListener('load', function() {
    const posts = document.querySelectorAll('.blog-post');

    // Function to adjust the height of all blog posts
    function setEqualHeight() {
        let maxHeight = 0;

        // Reset height to auto before calculating the max height
        posts.forEach(post => {
            post.style.height = 'auto';
        });

        // Find the maximum height
        posts.forEach(post => {
            maxHeight = Math.max(maxHeight, post.offsetHeight);
        });

        // Set the height of all posts to the maximum height
        posts.forEach(post => {
            post.style.height = `${maxHeight}px`;
        });
    }

    // Set equal height on page load
    setEqualHeight();

    // Also set equal height when the window is resized
    window.addEventListener('resize', setEqualHeight);
});
