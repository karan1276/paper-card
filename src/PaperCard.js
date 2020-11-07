/* eslint-disable wc/no-constructor-attributes */
const template = document.createElement("template")
template.innerHTML = `
  <style>
    .card-wrapper {
      height: 175px;
      width: 125px;
      background-size: contain;
      background-repeat: no-repeat;
      border-radius: 5px;
      position: relative;
    }
  </style>
  <div class="card-wrapper"/>
`;

export class PaperCard extends HTMLElement {
  constructor() {
    super();

    // Set up the dom structure
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.card = this.shadowRoot.querySelector(".card-wrapper");
    this.card.style.backgroundImage = `url(${  this.getAttribute("front")})`;

    this.active = false;
    this.currentX = 0;
    this.currentY = 0;
    this.initialX = 0;
    this.initialY = 0;
    this.xOffset = 0;
    this.yOffset = 0;
  }

  get front(){
    return this.getAttribute("front");
  }

  set front(newImage) {
    this.setAttribute("front", newImage);
  }

  /**
   * Lifecycle hook: Invoked when component is attached to DOM.
   * We can attach handlers here.
   */
  connectedCallback() {    
    // Add mouse down listener
    this.card.addEventListener('mousedown', this.onMouseDown.bind(this));
  }

  /**
   * Mouse down even handler.
   * @param {*} event - mouse down even
   */
  onMouseDown(event) {
    // Event handlers for move and mouse up.
    document.onmouseup = this.onMouseUp;
    document.onmousemove = this.onDragElement.bind(this);

    // Initialize positions
    this.initialX = event.clientX - this.xOffset;
    this.initialY = event.clientY - this.yOffset;

    this.active = true;
  }

  /**
   * stop moving when mouse button is released
   */
  onMouseUp() {
    document.onmouseup = null
    document.onmousemove = null

    this.active = false;
  }

  onDragElement(event) {
    // Calculate positions
    this.currentX = event.clientX - this.initialX;
    this.currentY = event.clientY - this.initialY;
    this.xOffset = this.currentX;
    this.yOffset = this.currentY;
 
    // Move the element
    PaperCard.setTranslate(this.currentX, this.currentY, this.card);
  }

  static setTranslate(xPos, yPos, el) {
    const elCopy = el;
    elCopy.style.transform = `translate3d(${  xPos  }px, ${  yPos  }px, 0)`;
  }
}