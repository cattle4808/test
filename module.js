(() => {
  const d = document;
  let el = d.createElement('div');
  el.textContent = 'Модуль импортирован!';
  Object.assign(el.style, {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    padding: '6px 12px',
    background: 'green',
    color: 'white',
    fontSize: '14px',
    borderRadius: '6px',
    zIndex: 2147483647
  });
  d.body.appendChild(el);
})();
