function showCategory(category) {
    var items = document.querySelectorAll('.menu-item');
    items.forEach(function(item) {
        item.classList.remove('active');
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.add('active');
        }
    });
}
