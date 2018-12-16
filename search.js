        // var nextPageToken, prevPageToken;
        // var firstPage = true;
        // $(document).ready(function () {

        //     $('#searchbutton').click(function () {
        //         // Called automatically when JavaScript client library is loaded.
        //         //  alert('i am clicked');
        //         gapi.client.load('youtube', 'v3', onYouTubeApiLoad);

        //         // Called automatically when YouTube API interface is loaded .


        //         // Called automatically with the response of the YouTube API request.


        //         // $('#search').append("<div id=\"page\"><button type=\"button\" id=\"nextPageButton\">Next Page</button></div>");
        //         //  $('#search').append("<div id=\"page\"><button type=\"button\" id=\"nextPageButton\">Next Page"+nextPageToken+"</button></div>");

        //     });
        //     $('#search').append("<div id=\"page\"><button type=\"button\" id=\"prevPageButton\">Prev Page " + prevPageToken + "</button></div>");
        //     $('#search').append("<div id=\"page\"><button type=\"button\" id=\"nextPageButton\">Next Page " + nextPageToken + "</button></div>");

        //     $('#nextPageButton').click(function () {
        //         // alert('i am clicked');
        //         console.log(nextPageToken);
        //         searchYouTubeApi(nextPageToken);
        //     });

        //     $('#prevPageButton').click(function () {
        //         // alert('i am clicked');
        //         console.log(prevPageToken);
        //         searchYouTubeApi(prevPageToken);
        //     });

        // });

        // function onYouTubeApiLoad() {
        //     // See http://goo.gl/PdPA1 to get a key for your own applications.
        //     gapi.client.setApiKey('AIzaSyDr5q5ourA7gmd_wFog9atdII5hkC-tWI4');
        //     searchYouTubeApi();

        // }

        // function searchYouTubeApi(PageToken) {
        //     var searchText = $(song).val();
        //     //$('#response').append("<div id=\"searching\"><b>Searching for "+searchText+"</b></div>");
        //     $('#response').replaceWith("<div id=\"searching\"><b>Searching for " + searchText + "</b></div>");

        //     // Use the JavaScript client library to create a search.list() API call to Youtube's "Search" resource
        //     var request = gapi.client.youtube.search.list(
        //         {
        //             part: 'snippet',
        //             q: searchText,
        //             maxResults: 2,
        //             pageToken: PageToken
        //         });

        //     // Send the request to the API server,
        //     // and invoke onSearchRepsonse() with the response.
        //     request.execute(onSearchResponse);
        //     //  $('#response').append("<div id=\"page\"><button type=\"button\" id=\"nextPageButton\">Next Page return from request execute method is: "+nextPageToken+"</button></div>");
        // }

        // function onSearchResponse(response) {

        //     var responseString = JSON.stringify(response, '', 2);
        //     var resultCount = response.pageInfo.totalResults;
        //     nextPageToken = response.nextPageToken;
        //     prevPageToken = response.prevPageToken;
        //     // document.getElementById('response').innerHTML += responseString;
        //     //$('#response').append("<div id=count><b>Found "+resultCount+" Results.</b></div>");
        //     $('#count').replaceWith("<div id=count><b>Found " + resultCount + " Results.</b></div>");
        //     //$('#searching').append("<div id=length><b>Length "+response.items.length+" </b></div>");


        //     for (var i = 0; i < response.items.length; i++) {
        //         //store each JSON value in a variable
        //         var publishedAt = response.items[i].snippet.publishedAt;
        //         var channelId = response.items[i].snippet.channelId;
        //         var title = response.items[i].snippet.title;
        //         var description = response.items[i].snippet.description;
        //         var thumbnails_default = response.items[i].snippet.thumbnails.default.url;
        //         var thumbnails_medium = response.items[i].snippet.thumbnails.medium.url;
        //         var thumbnails_high = response.items[i].snippet.thumbnails.high.url;
        //         var channelTitle = response.items[i].snippet.channelTitle;
        //         var liveBroadcastContent = response.items[i].snippet.liveBroadcastContent;
        //         var videoID = response.items[i].id.videoId;
        //         //var firstPage=true;

        //         //  console.log(thumbnails_default);
        //         //A HTTP call to this URL with videoID will give all XML info of that video: 
        //         //http://gdata.youtube.com/feeds/api/videos?q=videoID
        //         //  console.log(videoID);

        //         //replace the first search button with a 'more' button
        //         //$('button').replaceWith("<button type='button' id=More"+i+">More...</button>");

        //         if (firstPage === true) {
        //             //print the stored variables in a div element
        //             $('#snipp').append("<div id=T><b>Title:</b> " + title + "</div><div id=C><b>Channel ID: </b>" + channelId + "</div><div id=D><b>Description </b>" + description + "</div><div id=P><b>Published on: </b>" + publishedAt + "</div><div id=CT><b>Channel Title: </b>" + channelTitle + "</div><a id=linktoVid href='http://www.youtube.com/watch?v=" + videoID + "'><img id=imgTD src=\"" + thumbnails_default + "\"/></a><br/><br/><a id=linktoVid1 href='http://www.youtube.com/watch?v=" + videoID + "'><video id=vidTD width=\"320\" height=\"240\" controls poster=" + thumbnails_default + "><source src='http://www.youtube.com/watch?v=" + videoID + ">Your browser does not support the video tag.</video></a><br/><br/>");

        //         }
        //         else {
        //             $('#T').replaceWith("<div id=T><b>Title:</b> " + title + "</div>");
        //             $('#C').replaceWith("<div id=C><b>Channel ID: </b>" + channelId + "</div>");
        //             $('#D').replaceWith("<div id=D><b>Description </b>" + description + "</div>");
        //             $('#P').replaceWith("<div id=P><b>Published on: </b>" + publishedAt + "</div>");
        //             $('#CT').replaceWith("<div id=CT><b>Channel Title: </b>" + channelTitle + "</div>");
        //             $('#linktoVid').replaceWith("<a id=linktoVid href='https://www.youtube.com/watch v=" + videoID + "'><img id=imgTD src=\"" + thumbnails_default + "\"/></a><br/><br/><a id=linktoVid1 href='http://www.youtube.com/watch?v=" + videoID + "'><video id=vidTD width=\"320\" height=\"240\" controls poster=" + thumbnails_default + "><source src='http://www.youtube.com/watch?v=" + videoID + ">Your browser does not support the video tag.</video></a><br/><br/>");
        //         }

        //         //  $('#snipp').append("<div id=C"+i+">Channle ID: "+channelId+"</div><br/>");

        //         //link rel='alternate' type='text/html' href='http://www.youtube.com/watch?v=76TlUlPZQfQ&amp;feature=youtube_gdata'/>


        //     }
        //     // $('#search').append("<div id=\"page\"><button type=\"button\" id=\"nextPageButton\" onclick=\"alert('Hello world!')\">Next Page "+nextPageToken+"</button></div>");
        //     // return nextPageToken;
        //     firstPage = false;
        // }

        function handleAPILoaded() {
          $('#search-button').attr('disabled', false);
        }
        
        // Search for a specified string.
        function search() {
          var q = $(song);
          var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet'
          });
        
          request.execute(function(response) {
            var str = JSON.stringify(response.result);
            $('#search-container').html('<pre>' + str + '</pre>');
          });
        }
            
        
        
        
            
               
            </script>
                   
        <script>
                
                      // 2. This code loads the IFrame Player API code asynchronously.
                      var tag = document.createElement('script');
                
                      tag.src = "//www.youtube.com/iframe_api";
                      var firstScriptTag = document.getElementsByTagName('script')[0];
                      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                
                      // 3. This function creates an <iframe> (and YouTube player)
                      //    after the API code downloads.
                      var player;
                      function onYouTubeIframeAPIReady() {
                        player = new YT.Player('player', {
                          height: '390',
                          width: '640',
                          videoId: 'M7lc1UVf-VE',
                          events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                          }
                        });
                      }
                
                      // 4. The API will call this function when the video player is ready.
                      function onPlayerReady(event) {
                        event.target.playVideo();
                      }
                
                      // 5. The API calls this function when the player's state changes.
                      //    The function indicates that when playing a video (state=1),
                      //    the player should play for six seconds and then stop.
                      var done = false;
                      function onPlayerStateChange(event) {
                        if (event.data == YT.PlayerState.PLAYING && !done) {
                          setTimeout(stopVideo, 6000);
                          done = true;
                        }
                      }
                      function stopVideo() {
                        player.stopVideo();
                      }
                    </script>
                  
                