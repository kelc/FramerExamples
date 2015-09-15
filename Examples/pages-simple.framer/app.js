/* Made with Framer
by Benjamin den Boer
www.framerjs.com */

/* Sketch Import */
var amount, card, i, j, page, ref, sketch;

sketch = Framer.Importer.load("imported/page-simple");

/* Set-up PageComponent */

page = new PageComponent({
  width: Screen.width,
  height: Screen.height,
  y: 128,
  scrollVertical: false,
  contentInset: {
    top: 32,
    left: 32,
    right: 32
  }
});

/* Variable that adjusts the amount of cards */

amount = 4;

/* Create and style the cards within a loop */

for (i = j = 0, ref = amount; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
  card = new Layer({
    backgroundColor: "#fff",
    borderRadius: 8,
    width: page.width - 64,
    height: 1040,
    x: page.width * i,
    superLayer: page.content
  });
  card.style.boxShadow = "0 1px 6px rgba(0,0,0,0.2)";
}
