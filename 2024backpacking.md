---
layout: page
title: 2024 Backpacking Season
main_exclude: false
---
<p> This is a brief log of all of the backpacking trips I went on in the 2024 season, in chronological order. I have more detailed reviews on <a href = "https://www.alltrails.com/members/karina-yap-1" target="_blank">AllTrails</a> but wanted to provide a quick overview of the 2024 season - it was a good one! </p>

<!--Desolation Wilderness-->
<h2>Desolation Wilderness - Lake of the Woods</h2>
<div class="row">
  <!-- Column 1: Carousel -->
  <div class="6u 12u$(small)">
    <div class="photo-carousel" id="carousel1">
      <div class="carousel-track">
        <div class="photo-slide">
          <img src="/assets/images/2024-backpacking/2024-06-Desolation-LotW/Desolation-3.jpg" alt="Lake of the Woods in Desolation Wilderness">
        </div>
        <div class="photo-slide">
          <img src="/assets/images/2024-backpacking/2024-06-Desolation-LotW/Desolation-1.JPG" alt="A truly glorious nap">
        </div>
        <div class="photo-slide">
          <img src="/assets/images/2024-backpacking/2024-06-Desolation-LotW/Desolation-2.JPG" alt="Our camp!">
        </div>
        <div class="photo-slide">
          <img src="/assets/images/2024-backpacking/2024-06-Desolation-LotW/Nature's Fridge.jpg" alt="Nature's fridge">
        </div>
      </div>
        <button class="carousel-button left" onclick="moveSlide(-1, this)">‹</button>
        <button class="carousel-button right" onclick="moveSlide(1, this)">›</button>
    </div>
  </div>

  <!-- Column 2: Table -->
  <div class="6u$ 12u$(small)">
    <div class="table-wrapper" style="display: flex; justify-content: left">
      <table class="alt" style="width: auto; border-collapse: collapse; font-size: 80%">
        <tbody>
          <tr><td><b>Distance</b></td><td>10.5 miles total (5.25 miles one-way)</td></tr>
          <tr><td><b>Type</b></td><td>Out-and-back</td></tr>
          <tr><td><b>Trip Length</b></td><td>2 days</td></tr>
          <tr><td><b>Season</b></td><td>Late spring/early summer</td></tr>
          <tr><td><b>Elevation Info</b></td><td>1,712 ft – starts at 7,414 feet and peaks at 8,401 feet</td></tr>
          <tr><td><b>Permit(s) needed</b></td><td>Desolation Wilderness Permit for Lake of the Woods<br>CalFire campfire permit to operate a stove (but no campfires allowed)</td></tr>
          <tr><td><b>Highlights</b></td><td>Alpine lakes, mountains</td></tr>
          <tr><td><b>Tips</b></td><td>The Echo Lake ferry hits diff on the way back.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<hr class="major" />

<!--San Bernardino National Forest - San Gorgonio Mountain-->
<h2>San Bernardino National Forest - Mt. San Gorgonio</h2>
<div class="row">
  <!-- Column 1: Carousel -->
  <div class="6u 12u$(small)">
    <div class="photo-carousel" id="carousel2">
      <div class="carousel-track">
        <div class="photo-slide">
          <img src="/assets/images/2024-backpacking/2024-07-SanGorgonio/SG-1.jpg" alt="Me at the summit">
        </div>
        <div class="photo-slide">
          <img src="/assets/images/2024-backpacking/2024-07-SanGorgonio/SG-2.jpg" alt="View up the mountain">
        </div>
        <div class="photo-slide">
          <img src="/assets/images/2024-backpacking/2024-07-SanGorgonio/SG-3.jpg" alt="Summit Pop-Tart hits HARD">
        </div>
      </div>
       <button class="carousel-button left" onclick="moveSlide(-1, this)">‹</button>
       <button class="carousel-button right" onclick="moveSlide(1, this)">›</button>
    </div>
  </div>

  <!-- Column 2: Table -->
  <div class="6u$ 12u$(small)">
    <div class="table-wrapper" style="display: flex; justify-content: left">
      <table class="alt" style="width: auto; border-collapse: collapse; font-size: 80%">
        <tbody>
          <tr><td><b>Distance</b></td><td>20.1 miles</td></tr>
          <tr><td><b>Type</b></td><td>Lollipop</td></tr>
          <tr><td><b>Trip Length</b></td><td>2 days</td></tr>
          <tr><td><b>Season</b></td><td>Summer</td></tr>
          <tr><td><b>Elevation Info</b></td><td>4,678 ft – starts at 6,900 feet and peaks at 11,500 feet</td></tr>
          <tr><td><b>Permit(s) needed</b></td><td>CalFire campfire permit to operate a stove (check if campfire restrictions are in place).</td></tr>
          <tr><td><b>Highlights</b></td><td>Summit views</td></tr>
          <tr><td><b>Tips</b></td><td>Bring lots of water. We filled up at Dry Lake before summitting and descending, and carried two liters each (not enough!).</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>



<!-- Script for Photo Carousel -->
<script>
function moveSlide(direction, button) {
const carousel = button.closest('.photo-carousel');
const track = carousel.querySelector('.carousel-track');
const slides = carousel.querySelectorAll('.photo-slide');
const slideWidth = slides[0].offsetWidth;

let currentIndex = parseInt(carousel.dataset.currentIndex || '0');
currentIndex += direction;

if (currentIndex < 0) currentIndex = 0;
if (currentIndex >= slides.length) currentIndex = slides.length - 1;

track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

carousel.dataset.currentIndex = currentIndex;
}

