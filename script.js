//your code here!

// ✅ Select the list element
const list = document.getElementById('infi-list');

// ✅ Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(listItem);
  }
}

// ✅ Initial 10 list items on page load
addItems(10);

// ✅ Function to check if the user scrolled to the bottom
function handleScroll() {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // ✅ Add 2 more items when reaching the end
  }
}

// ✅ Add event listener for scroll on the list
list.addEventListener('scroll', handleScroll);