---
layout: page
main_exclude: true
---

<ul>
  {% for post in site.posts %}
    <li>{{ post.title }} — {{ post.date }} — layout: {{ post.layout }}</li>
  {% endfor %}
</ul>
