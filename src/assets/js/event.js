
  function selectMenuItem(item) {
    var menuItems = document.querySelectorAll('.menu-item');
    
    // Remove 'selected' class from all menu items
    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove('selected');
      menuItem.style.backgroundColor = ''; // Remove any custom background color
    });

    // Add 'selected' class to the clicked menu item
    item.classList.add('selected');
    item.style.backgroundColor = 'red'; // Set the background color to red
  }
