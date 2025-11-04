## 📌 GSAP + ScrollTrigger Practice Project

This project is a simple playground to learn **GSAP animations**, **timelines**, and **ScrollTrigger**. It includes examples of element animations, stagger effects, repeat & yoyo, and scroll-based animations with pinning.

---

## 🚀 What You’ll Learn

### ✅ GSAP Basics

* **`.to()`** → Moves an element **from current state to a new final state**
* **`.from()`** → Animates **from a starting state to its original state**
* Supports properties like:

  * `x`, `y` (movement)
  * `scale` (size of element; `1 = original size`, `0.5 = half`, `2 = double`)
  * `rotate`
  * `opacity`
  * `backgroundColor`
  * `borderRadius`

---

### 🎯 Text Animation Features

* Fade-in
* Slide from up/down
* Stagger animation
  → Adds small delay between elements for smooth sequencing

Example:

```js
timeline.from("h1", {
  opacity: 0,
  y: 50,
  duration: 2,
  stagger: 0.3
});
```

---

### 🧩 GSAP Timeline

Used to chain multiple animations without manual delays.

```js
var timeline = gsap.timeline();

timeline.from("h2", { y: -20, opacity: 0, duration: 1 });
timeline.from("h1", { y: 20, opacity: 0, duration: 0.5, scale: 0.2 });
```

Benefits:

* Controlled sequence
* Cleaner code
* No delay conflicts

---

### 🛝 ScrollTrigger (Scroll-Based Animations)

Two ways to use it:

#### 🟢 Short form:

```js
gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  scrollTrigger: "#page2 #box"
});
```

#### ⭐ Detailed form:

```js
gsap.from("#page2 #box", {
  scale: 0,
  opacity: 0,
  rotate: 360,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
    pin: true
  }
});
```

**Key Options Explained:**

| Option        | Meaning                                                   |
| ------------- | --------------------------------------------------------- |
| `trigger`     | Element that activates animation on scroll                |
| `scroller`    | Defines scrolling container (usually `"body"`)            |
| `markers`     | Shows start & end scroll points on screen (for debugging) |
| `start`/`end` | Where animation begins & stops on scroll                  |
| `scrub`       | Sync animation with scroll speed                          |
| `pin: true`   | **Freezes the element in place during scroll**            |

---

### 🧱 CSS Setup Highlights

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**`box-sizing: border-box`** ensures width includes padding + border, making layouts easier.

Pages created for scroll testing:

| Page   | Color      |
| ------ | ---------- |
| Page 1 | Light Blue |
| Page 2 | Teal Blue  |
| Page 3 | Dark Blue  |

---

## 📁 File Structure

```
project/
│ index.html
│ style.css
│ index.js
```

---

## 📍 How to Run

1. Download all files
2. Open `index.html` in a browser
3. Scroll to see animations triggered on Page 2 and Page 3

> Make sure you have internet for GSAP CDN links to work.

---

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
