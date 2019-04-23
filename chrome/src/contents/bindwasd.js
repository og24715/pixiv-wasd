const arrowDownKeyEvent = new KeyboardEvent('keydown', { code: 'ArrowDown', key: 'ArrowDown', keyCode: 40 });
const arrowUpKeyEvent = new KeyboardEvent('keydown', { code: 'ArrowUp', key: 'ArrowUp', keyCode: 38 });
const arrowLeftKeyEvent = new KeyboardEvent('keydown', { code: 'ArrowLeft', key: 'ArrowLeft', keyCode: 37 });
const arrowRightKeyEvent = new KeyboardEvent('keydown', { code: 'ArrowRight', key: 'ArrowRight', keyCode: 39 });

function handleKeydown(e) {
  switch (e.code) {
    case 'KeyS':
      document.dispatchEvent(arrowDownKeyEvent);
      break;
    case 'KeyW':
      document.dispatchEvent(arrowUpKeyEvent);
      break;
    case 'KeyA':
      document.dispatchEvent(arrowLeftKeyEvent);
      break;
    case 'KeyD':
      document.dispatchEvent(arrowRightKeyEvent);
      break;
    default:
      break;
  }
}

document.addEventListener('keydown', handleKeydown);
