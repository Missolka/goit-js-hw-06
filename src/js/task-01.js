const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.children.length}`);
categoriesList.querySelectorAll('li.item').forEach(category => {
  });
  const title = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${title}\nElements: ${elementsCount}`);
  const categoriesList = document.querySelector('#categories');
  console.log(`Number of categories: ${categoriesList.children.length}`);
  categoriesList.querySelectorAll('li.item').forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elementsCount = category.querySelectorAll('li').length;
    console.log(`Category: ${title}\nElements: ${elementsCount}`);
  });