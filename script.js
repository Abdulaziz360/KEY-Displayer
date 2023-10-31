const insert=document.querySelector('.main')

window.addEventListener('keyup',function(e){
     insert.innerHTML=`
     <div class="color">
     <table>
     <tr >
         <th>Key</th>
         <th>KeyCode</th>
         <th>Code</th>
     </tr>
     <tr>
         <td >${e.key===' '? 'Space' : e.key}</td>
         <td>${e.keyCode}</td>
         <td>${e.code}</td>
     </tr>
 </table>
 </div>
 `
 console.log('key:',e.key)
})