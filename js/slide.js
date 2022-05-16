let imgArray = [
      'pictures/skov/store/uvand/5.jpg',
      'pictures/rally11/uvand/14.jpg',
      'pictures/skov/store/uvand/12.jpg',
      'pictures/portrætter/store/uvand/14.jpg'
  ];
  let curIndex = 0;
  let imgDuration = 5000;

  function slideShow() {
      document.getElementById('gf1-pic').src = imgArray[curIndex];
      curIndex++;
      if (curIndex == imgArray.length) { curIndex = 0; }
      setTimeout("slideShow()", imgDuration);
  }
  slideShow();
