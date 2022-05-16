let imgArray = [
      'pictures/jarlen/4.jpg',
      'pictures/mig/1.jpg',
      'pictures/mig/3.jpg',
      'pictures/jarlen/4.jpg'
  ];
  let curIndex = 0;
  let imgDuration = 5000;

  function slideShowEmil() {
      document.getElementById('gf1-pic-1').src = imgArray[curIndex];
      curIndex++;
      if (curIndex == imgArray.length) { curIndex = 0; }
      setTimeout("slideShowEmil()", imgDuration);
  }
  slideShowEmil();
