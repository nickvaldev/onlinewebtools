const filter = document.querySelector('.searchinput');

filter.addEventListener('keydown', filterTasks);

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.entry-title').forEach(function(task){
		const item = task.firstChild.textContent;
		console.log( task.parentElement.parentElement.parentElement.parentElement.parentElement);
    if(item.toLowerCase().indexOf(text) != -1){
      task.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
    } else {
      task.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
    }
	});
	document.querySelector(".all").click();
}


appendCategoriesNav('filterCategories');
appendNavMenu('appendNavMenu');
appendSubMenu();
// navMenuHref();