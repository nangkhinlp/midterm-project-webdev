# Pinboard

## Authorship & Attribution

**Made by:** Nang Khin La Pyae

**Built with:**
HTML, CSS, JavaScript
Bootstrap 5.3
Images from picsum.com
Fonts from Google Fonts CDN

---

## Tagline

"Take a scroll here"

---

## User Story

As an **artist**, I want to **discover a variety of images**, so that **I can use them as art references for my next artwork**

---

## Links

- **Repo:** *(https://github.com/nangkhinlp/midterm-project-webdev)*
- **GitHub Pages:** *(https://nangkhinlp.github.io/midterm-project-webdev/)*
- **Wiki / Issue Design Evidence:** *(https://imgur.com/a/Cl3M44q)*

### Design Inspiration

**Pinterest**

(https://imgur.com/a/Cl3M44q)

The images are not fixed into a traditional row or column. They have varying card heights and the layout puts them into a nice dynamic grid. The rounded corners create a more appealing and welcoming UI appearance.
---

## Model / Inspiration Evidence

(https://imgur.com/a/Cl3M44q)

I copied the masonry grid layout style from Pinterest and the card style. 

---

## Code Block + Explanation

```javascript
function loadCards() {
  fetch("assets/cards.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load card data");
      }
      return response.json();
    })
    .then(data => {
      const grid = document.getElementById("grid");

      data.cards.forEach(card => {
        const cardEl = document.createElement("div");
        cardEl.className = "card";

        cardEl.innerHTML = `
          <img src="${card.image}" alt="${card.title}" />
          <div class="card-body">
            <p class="card-title">${card.title}</p>
            <span class="tag tag-${card.tag.toLowerCase()}">${card.tag}</span>
          </div>
        `;

        grid.appendChild(cardEl);
      });
    })
    .catch(error => {
      document.getElementById("grid").innerHTML = "<p>Unable to load cards.</p>";
    });
}
```
1. when the page loads, `loadCards()` is called
2. `fetch("assets/cards.json")` reads the local JSON file 
3. `data.cards.forEach(...)` goes through each card object in the array one by one
4. for each card, a new `<div>` is created with `document.createElement`, filled with text/content, and inserted into the `#grid` div using `grid.appendChild(cardEl)`

---

## Architecture / Infrastructure Note

**front end app fetching internal data**

Bootstrap 5.3
Images from picsum.com
Fonts from Google Fonts CDN

---

## Verification

**Tested on:**
- Desktop (Chrome)
- Android Mobile (Chrome)
- Ipad Tablet (Safari)

**Known issues:**
- Auth is simple frontend
- Header is cut off on Android Mobile but it's not a design issue on desktop or ipad.
- Image Data is hardcoded

