function showAlert12() {
  alert("Hello teque7");
}
function showAlertexp() {
  alert("Hello expense category");
}
function selectMenuItem(item) {
  // Remove 'selected' class from all menu items
  document.querySelectorAll('.menu-item').forEach(function (menuItem) {
    menuItem.classList.remove('selected');
  });

  // Add 'selected' class to the clicked menu item
  item.classList.add('selected');
}
