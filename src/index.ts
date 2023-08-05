const item = document.querySelector('.item');

function handleDragStart(e: Event) {
  console.log(e);
}

item!.addEventListener('dragstart', handleDragStart);
