`pin: true` **locks (pins) the element in place while the scroll animation runs**.

Normally, when you scroll, the page keeps moving. But if `pin` is enabled, the selected element stays fixed on the screen for the duration of the ScrollTrigger, and the rest of the page scrolls behind it.

### In simple words:

`pin: true` = **freeze the element at its position during the scroll trigger**.

### Why use it?

* To highlight or focus on a section
* To create cool scroll-based storytelling effects
* To keep an element in view while it animates

Without `pin`, the box would animate while moving out of the screen.
With `pin`, it stays stuck for the animation duration, then releases once done.
