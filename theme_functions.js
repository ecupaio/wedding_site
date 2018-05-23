---
layout: 
---

{% capture scripts %}
    {% include js/social_links.js %}
    {% include js/functions.js %}
    //Include additional scripts below
{% endcapture %}
{{ scripts | uglify | strip }}
