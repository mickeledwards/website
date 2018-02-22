---
title: Hydrotherm Heater
header:
  overlay_image: assets/images/hydrotherm/cover.jpg
  overlay_filter: rgba(0, 0, 0, 0.3)
preview: assets/images/hydrotherm/preview.png
excerpt: Home Goods Design
ribbon: false
---

<section id="intro" class="row" markdown="block">
<div class="col-md-12" markdown="block">

## What is a Hydrothermal Vent?

> A hot spring, on the foor of the ocean, mostly along the central axes of the mid-ocean ridges, where heated fuids emerge from fissures in the Earth’s crust.


</div>
<div class="col-md-6" markdown="block">
    {% include gallery img='assets/images/hydrotherm/hydro1.jpg' title="Hydrothermal Vent Example" alt = 'vent1' %}
    
</div>
<div class="col-md-6" markdown="block">
    {% include gallery img='assets/images/hydrotherm/hydro2.jpg' title="Hydrothermal Vent Example" alt = 'vent2' %}
    
</div>
</section>

<section id="form" class="row" markdown="block">
<div class="col-md-12" markdown="block">

## Form Development


</div>
<div class="col-md-6" markdown="block">
    {% include gallery img='assets/images/hydrotherm/grasshopper.png' alt = 'Grasshopper 3D' %}
    
</div>
<div class="col-md-6" markdown="block">
    {% include gallery img='assets/images/hydrotherm/hydro2.jpg' alt = 'vent2' %}
    
</div>
</section>

<section id="isometric" class="row" markdown="block">
<div class="col-md-12" markdown="block">
    {% include gallery img='assets/images/hydrotherm/isom.png' alt = 'Isometric Views' %}
    
</div>
</section>


<section id="desk" class="padding-topbottom-null">
    {% include gallery img='assets/images/hydrotherm/cover.jpg' alt = 'Example image 1' %}
</section>

<style>
#set-height {
  display: block;
}
#v0 {
  position: absolute;
  top: 0;
  left: 0;
  height: 75vh;
}	 
.videoscroll{
position: relative;		
}
</style>


<div class="videoscroll">  
<div id="set-height"></div>
<p id="time"></p>
<video id="v0" tabindex="0" autobuffer="autobuffer" preload="preload"><source type="video/webm; codecs=&quot;vp8, vorbis&quot;" src="assets/images/hydrotherm/hydrotherm.webm"></source>
<source type="video/ogg; codecs=&quot;theora, vorbis&quot;" src="assets/images/hydrotherm/hydrotherm.ogv"></source>
<source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="assets/images/hydrotherm/hydrotherm.mp4"></source>
  <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
</video>
</div>
<script>
var frameNumber = 0, // start video at frame 0
// lower numbers = faster playback
playbackConst = 200, 
// get page height from video duration
setHeight = document.getElementById("set-height"), 
// select video element         
vid = document.getElementById('v0'); 
// var vid = $('#v0')[0]; // jquery option
// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});
// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}
window.requestAnimationFrame(scrollPlay);
</script>