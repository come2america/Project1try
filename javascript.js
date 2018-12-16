function keyWordsearch(){
  gapi.client.setApiKey('AIzaSyDr5q5ourA7gmd_wFog9atdII5hkC-tWI4');
  gapi.client.load('youtube', 'v3', function() {
          makeRequest();
  });
}

function makeRequest(){
  var q = $(song);
  var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet'                        
  });
  request.execute(function(response){
      var str = JSON.stringify(response.result,'',4);
      $('#search-container').val( str);
      makeControl(response);
  });
}

function makeControl(resp){
  var stList = '<table id="res1" border="1" cellspacing="1" width="100%"><tbody>'; 
  for (var i=0; i<resp.items.length;i++){
      var vid = resp.items[i].id.videoId; 
      var tit = resp.items[i].snippet.title;
      if(typeof vid != 'undefined'){    
          stList += '<tr><td style="width:80px;vertical-align:top">'+
            '<a class="show" href="#" title="'+ vid + '" onclick="playVid(this);'+
            ' return false">'+
            '<img  width="80" height="60" src="http://img.youtube.com/vi/'+ 
            vid +'/default.jpg"></a></td>'+
            '<td><b>'+i+'</b>-'+ tit +'</td></tr>';
      }
  }
  document.getElementById('list1').innerHTML = stList + '</tbody></table>';
  //HTML: <div id="list1" 
  //style="width:853px;height:400px;overflow:auto;background-color:#EEEEEE">
  //</div>
}

function playVid(thi){
  var st = 'https://www.youtube.com/embed/'+thi.title+'?autoplay=1';
  document.getElementById('player').src = st; }