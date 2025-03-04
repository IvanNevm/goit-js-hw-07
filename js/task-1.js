const liElements = document.querySelectorAll('.item');
let liElementsLength = liElements.length;
console.log(`Number of categories: ${liElementsLength}`);


liElements.forEach(liElement => {
    console.log(`Category: ${liElement.querySelector('h2').textContent}`);

    console.log(`Elements: ${liElement.querySelectorAll('li').length}`);

});

