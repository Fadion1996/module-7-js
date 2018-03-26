const createLayout = () => {
  const container = document.querySelector('.container');
//  Добавляемо "div" до "container" і присвоюєм до кожного "div" свій "class"
  for (let i = 0; i < 3; i++) {
    const rowDiv = document.createElement('div');
    container.appendChild(rowDiv);
    if (i === 0){
      addTopClass = rowDiv.classList.add("topRow");
    }else if (i === 1) {
      addMiddleClass = rowDiv.classList.add("middleRow");
    }else if (i === 2) {
      addBottomClass = rowDiv.classList.add("bottomRow");
    }
  }

  const selectTop = document.querySelector('.topRow');
  const selectMiddle = document.querySelector('.middleRow');
  const selectBottom = document.querySelector('.bottomRow');

  //  Створюєм масив клавіатурних букв і
  // створюєм елементи р під кожним класом "div"
  const str = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./';
  const arr = [];
  for (let i = 0; i < str.length; i++){
    arr.push(str.slice(i, i+1));
  }
  for (let i = 0; i < 12; i++) {
    selectTop.append(document.createElement('p'));
    if (i >= 1) selectMiddle.append(document.createElement('p'));
    if (i >= 2) selectBottom.append(document.createElement('p'));
  }
  // записуєм текст в кожну "р" за допомогою "textContent"
  const selectAllTop = selectTop.querySelectorAll('p');
  const selectAllMiddle = selectMiddle.querySelectorAll('p');
  const selectAllBottom = selectBottom.querySelectorAll('p');

  for (let i = 0; i < 12; i++){
    selectAllTop[i].textContent = arr[i];
  }
  for (let i = 0; i < 11; i++){
    selectAllMiddle[i].textContent = arr[i+12];
  }
  for (let i = 0; i < 10; i++){
    selectAllBottom[i].textContent = arr[i+23];
  }
  return;
}
createLayout();
