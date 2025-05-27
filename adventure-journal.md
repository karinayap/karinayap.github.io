---
layout: page
title: My Adventure Journal
sidebar_order: 3
---
<div class="row">
	<p> One of my favorite things about living in the Bay Area is how accessible the outdoors is. I do a lot of backpacking, hiking, and other outdoor adventures in the summer. I love being able to experience the solitutde and beauty of the wilderness, recreate responsibly (leave no trace!), and disconnect from the hustle and bustle of everyday life. For hikes and backpacking trips, I try to review the trails that I have done with up-to-date information on trail conditions, weather, bugs, camping tips, and anything else I think is useful - catch me on <a href = "https://www.alltrails.com/members/karina-yap-1" target="_blank">AllTrails</a>!</p>
</div>

<!--Recent Posts-->
<h2>My 2025 Adventures</h2>
<p>I started this website as way to document and share my outdoor adventures. Check out my journal entries about my most recent trips!</p>

<!-- Recent Blog Posts Grid -->
<div class="photo-grid">
  {% assign recent_posts = site.posts | where: "layout", "outdoors" | limit: 4 %}
  {% if recent_posts.size > 0 %}
    {% for post in recent_posts %}
      <div class="photo-tile">
        <a href="{{ post.url | relative_url }}">
          {% if post.thumbnail %}
            <img src="{{ post.thumbnail }}" alt="{{ post.title }}">
          {% else %}
            <div class="no-thumbnail">No thumbnail available</div>
          {% endif %}
          <div class="post-content">
            <h3 class="post-title">{{ post.short_title | default: post.title }}</h3>
            {% if post.tagline %}
              <p class="post-tagline">{{ post.tagline }}</p>
            {% endif %}
          </div>
        </a>
      </div>
    {% endfor %}
  {% else %}
    <p>No recent outdoors posts found.</p>
  {% endif %}
</div>


<section>
<hr class="major" />

<h2 id="content">Packing for Backpacking Trips</h2>
<p>(For myself more than anything), this is the list of stuff that I typically bring on backpacking trips.</p>

<div class="row">
	<div class="4u 12u$(medium)">
	<h3>Camp</h3>
		<ul>
            <li>Tent, rainfly, and footprint OR hammock</li>
            <li>Sleeping pad OR hammock underquilt</li>
            <li>Sleeping bag</li>
            <li>(Optional) Pillow</li>
            <li>Camp shoes (Crocs!) - honestly a must for me</li>
            <li>Head lamp</li>
            <li>Tyvek sheet - I use it to sit on, lay out as a floor mat to my tent, and wrap and protect my sleeping pad. Best piece of trash ever!</li>
        </ul>
	</div>
	<div class="4u 12u$(medium)">
	<h3>Protection from the Elements</h3>
		<ul>
            <li>Extra layers - I always bring a fleece to keep cozy at camp, and if it's extra cold I'll also bring my puffy</li>
            <li>Rain stuff - one should always bring a rain jacket (sometimes I don't, but do as I say, not as I do)</li>
            <li>Base layers</li>
            <li>Bug net</li>
            <li>Bug spray or bug wipes</li>
            <li>Sunscreen (I bring face sunscreen, and wear long pants/long sleeves)</li>
            <li>Baseball cap</li>
            <li>Beanie</li>
         </ul>
	</div>
	<div class="4u 12u$(medium)">
	<h3>Food and Drinks</h3>
		<ul>
            <li>Coffee for breakfast</li>
            <li>Camp cup</li>
            <li>Snacks for lunch</li>
            <li>Snacks on the trail</li>
            <li>Pocket rocket, fuel canister, and cooking cup</li>
            <li>Dinner</li>
            <li>Spork</li>
            <li>Liquid IV (just in case)</li>
            <li>Water filter and reservoirs for collecting and catching the effluent</li>
            <li>Smart water bottles</li>
            <li>Proper food storage if needed (bear can, usually)</li>
        </ul>
	</div>
</div>
<div class="row">
	<div class="4u 12u$(medium)">
	<h3>Health and Hygiene</h3>
		<ul>
            <li>Poop kit - wet wipes, toilet paper, period products, and extra bags to pack out trash</li>
            <li>Poop shovel</li>
            <li>Toothbrush</li>
            <li>Toothpaste tabs</li>
            <li>Hand sanitizer</li>
            <li>First aid kit</li>
            <li>Meds - ibuprofen and allergy meds</li>
        </ul>
	</div>
	<div class="4u 12u$(medium)">
	<h3>My Non-Negotiables</h3>
		<ul>
            <li>Extra bag to pack out trash</li>
            <li>Bandana</li>
            <li>Pack towel</li>
            <li>Small multitool</li>
            <li>Permit</li>
            <li>Trail map</li>
            <li>Boots</li>
            <li>Trekking poles (slightly neotiable given trail conditions)</li>
         </ul>
	</div>
	<div class="4u$ 12u$(medium)">
	<h3>My Luxury Items</h3>
		<ul>
            <li>Clean underwear and socks</li>
            <li>Field guide for bird identification</li>
            <li>Binoculars</li>
            <li><a href="https://gamesofberkeley.com/products/pass-the-pigs" target="_blank">Pass the Pigs</a></li>
        </ul>
	</div>
</div>
</section>


<!--JavaScript for Photo Carousel-->

<script>
function moveBlogCarousel(direction, button) {
  const carousel = button.closest('.photo-strip-carousel');
  const track = carousel.querySelector('.carousel-strip-track');
  const items = carousel.querySelectorAll('.carousel-strip-item');
  const visibleCount = Math.floor(carousel.offsetWidth / items[0].offsetWidth);

  let index = parseInt(carousel.dataset.currentIndex || '0');
  const total = items.length;

  // Loop around
  index = (index + direction + total) % total;

  const itemWidth = items[0].offsetWidth + parseFloat(getComputedStyle(track).gap) || 0;
  track.style.transform = `translateX(-${index * itemWidth}px)`;

  carousel.dataset.currentIndex = index;
}
</script>

