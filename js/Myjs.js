// 相对简单的js模块
(function (){
    var msg = 'My renzikang'
    function doSo (){
       console.log(msg.toUpperCase());
       
     }

     function doOy (){
        console.log(msg.toLowerCase());
      }

      window.myjs={ //名字用来调用
          doSo:doSo,  //  myjs.doSo
          doOy:doOy
      }
})()
