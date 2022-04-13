let map, popup, Popup;
function initMap() {
    const uluru = { lat: 41.836539, lng: -87.625647};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });

    const contentString =
      `<div id="content"><div id="siteNotice"></div><h1 id="firstHeading"
       class="firstHeading">IIT Chicago </h1><div id="bodyContent"><p>In 1890 <b>Illinois Institute 
       of Technology</b> was founded to lift up people from all backgrounds with education that would 
       help them meet the needs of the age. Rankings based on the United States Department of Education 
       College Scorecard, which offers the public access to years of federal government data on U.S. 
       colleges and universities, show that more than 130 years later, Illinois Tech is still fulfilling 
       its mission.</p><p>Attribution: <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
       https://www.iit.edu/about</a> </div></div>`;

    const infoString = `<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" 
    class="firstHeading">My spots at IIT </h1><p>This traingle shows where I spend the most of my time at IIT.</p></div></div>`;


    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    const infowwindow2 = new google.maps.InfoWindow({
        content: infoString,
    });
    const marker = new google.maps.Marker({
      position: uluru,  animation: google.maps.Animation.DROP,
      map,
      title: "Chicago IIT",
    });
    const marker2 = new google.maps.Marker({
        position: { lat: 41.835630, lng: -87.628642 },
        map,animation: google.maps.Animation.DROP,
        title: "Info Trinagle",
      });
      const marker3 = new google.maps.Marker({
        position: { lat: 41.83434, lng: -87.62912 },
        map,animation: google.maps.Animation.DROP,
        title: "Info Trinagle",
      });
      const marker4 = new google.maps.Marker({
        position: { lat: 41.8344755750581, lng: -87.62733954431688 },
        map,animation: google.maps.Animation.DROP,
        title: "Info Trinagle",
      });
  
    marker.addListener("click",() => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
    
    marker2.addListener("click",()=>{
        infowwindow2.open({
            anchor:marker2,marker3,
            map,
            shouldFocus: false,
        });
    });


    const triangleCoords = [
        { lat: 41.835630, lng: -87.628642 }, 
        { lat: 41.83434, lng: -87.62912 },
        { lat: 41.8344755750581, lng: -87.62733954431688 },
        { lat: 41.835630, lng: -87.628642 },
      ];
      // Construct the polygon.
      const triangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      });
    
      triangle.setMap(map);

  }
  


//const uluru = { lat: 41.836539, lng: -87.625647};