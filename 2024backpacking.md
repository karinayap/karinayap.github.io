---
layout: page
title: 2024 Backpacking Season
main_exclude: false
---

<p> This is a brief log of all of the backpacking trips I went on in the 2024 season, in chronological order. I have more detailed reviews on <a href = "https://www.alltrails.com/members/karina-yap-1" target="_blank">AllTrails</a> but wanted to provide a quick overview of the 2024 season - it was a good one! </p>

<h2 id="content">Desolation Wilderness - Lake of the Woods</h2>
<div class="row">
	<div class="6u 12u$(small)">
		<div class="photo-carousel" id="carousel1">
            <div class="carousel-track">
            <div class="photo-slide"><img src="\assets\images\2024-backpacking\2024-06-Desolation-LotW\Desolation-3.jpg" alt="Lake of the Woods in Desolation Wilderness"></div>
            <div class="photo-slide"><img src="\assets\images\2024-backpacking\2024-06-Desolation-LotW\Desolation-1.JPG" alt="A truly glorious nap"></div>
            <div class="photo-slide"><img src="assets\images\2024-backpacking\2024-06-Desolation-LotW\Desolation-2.JPG" alt="Our camp!"></div>
            <div class="photo-slide"><img src="assets\images\2024-backpacking\2024-06-Desolation-LotW\Nature's Fridge.jpg" alt="Nature's fridge"></div>
        </div>
        <button class="carousel-button left" onclick="moveSlide(-1)">‹</button>
        <button class="carousel-button right" onclick="moveSlide(1)">›</button>
    </div>

<!--
    <div class="6u$ 12u$(small)">
		<div class="table-wrapper" style="display: flex; justify-content: left">
        <table class="alt" style="width: auto; border-collapse: collapse; font-size: 80%">
        <tbody>
            <tr>
                <td><b>Distance</b></td>
                <td>10.5 miles total (5.25 miles one-way)</td>
            </tr>
            <tr>
                <td><b>Type</b></td>
                <td>Out-and-back</td>
            </tr>
            <tr>
                <td><b>Trip Length</b></td>
                <td>2 days</td>
            </tr>
            <tr>
                <td><b>Season</b></td>
                <td>Late spring/early summer</td>
            </tr>
            <tr>
                <td><b>Elevation Info</b></td>
                <td>1,712 ft - starts at 7,414 feet and peaks at 8,401 feet</td>
            </tr>
            <tr>
                <td><b>Permit(s) needed</b></td>
                <td>Desolation Wilderness Permit, for Lake of the Woods - reserved through Recreation.gov<br>CalFire campfire permit to operate a camp stove (no campfires allowed!)</td>
            </tr>
            <tr>
                <td><b>Highlights</b></td>
                <td>Alpine lakes</td>
            </tr>
            <tr>
                <td><b>Tips</b></td>
                <td>On the way in, get in early enough so the hike around Echo Lake isn't too sunny/exposed. On the way out, the ferry is worth!</td>
            </tr>
        </tbody>
        </table>
        </div>
	</div>
</div>
-->

<script>
  let currentIndex = 0;

  function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.photo-slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
</script>
