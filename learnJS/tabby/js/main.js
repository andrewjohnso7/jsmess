// Start writing JavaScript here!
// const tabs = [...document.querySelectorAll('.tab')];

// tabs.forEach(tab => {
// 	tab.addEventListener('click', () => {
// 		const previousTab = document.querySelector('.is-selected');
// 		const tabContents = document.querySelector('.tab-contents');
// 		const previousContent = tabContents.querySelector('.is-selected');
    
// 		previousTab.classList.remove('is-selected');
// 		previousContent.classList.remove('is-selected');
// 		tab.classList.toggle('is-selected');
    
// 		for (let content of tabContents.children) {
// 			const theme = content.getAttribute('data-theme');
// 			if (theme === tab.getAttribute('data-theme')) {
// 				content.classList.toggle('is-selected');
// 			}
// 		}
// 	});
// });


const tabby = document.querySelector('.tabby');
const tabsList = tabby.querySelector('.tabs');
const tabs = Array.from(tabby.querySelectorAll('.tab'));
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))
// Find the clicked tab

tabsList.addEventListener('click', event => {
	const tab = event.target
	const target = tab.dataset.target
	const tabContent = tabby.querySelector('#' + target)
	console.log(tab)
	console.log(target)
	console.log(tabContent)
	tabs.forEach(tab => tab.classList.remove('is-selected'));
	tab.classList.add('is-selected')
	tabContents.forEach(content => content.classList.remove('is-selected'));
	tabContent.classList.add('is-selected')
  });

/*
  clicking on a new tab removes the is-selected classes from 
  the tab button and the tab content sections currently displayed
  and adds them to the one I selected

  if the data-theme = the same value on both the tab and the content,
  add is selected to both the content and the tab;
*/