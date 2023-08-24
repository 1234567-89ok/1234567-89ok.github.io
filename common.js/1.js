	 var docEl = document.documentElement;
     function setRemUnit () {
       var rem = docEl.clientWidth / 13.66; // 可根据不同电脑分辨率进行手动修改（如1920*1080 为19.2
       docEl.style.fontSize = rem + 'px'
     }

     setRemUnit()

     window.addEventListener('resize', setRemUnit)
     window.addEventListener('pageshow', function (e) {
       if (e.persisted) {
         setRemUnit()
       }
  })