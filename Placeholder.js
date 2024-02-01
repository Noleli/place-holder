export class Placeholder extends HTMLElement {
	static _style() {
		const color = {
			r: Math.random() * 255 | 0,
			g: Math.random() * 255 | 0,
			b: Math.random() * 255 | 0
		};
		const colorInv = Object.fromEntries(Object.entries(color)
			.map(c => [c[0], (c[1] + 128) % 256]));
		const colorRGB = `rgb(${color.r} ${color.g} ${color.b})`;
		const colorInvRGB = `rgb(${colorInv.r} ${colorInv.g} ${colorInv.b})`;

		return `:host {
			display: block;

			--_color: var(--placeholder-color, ${colorRGB});
			background-color: var(--_color);

			--_line-color: var(--placeholder-line-color, ${colorInvRGB});
			--_line-width: var(--placeholder-line-width, 2px);
			border: var(--_line-width) solid var(--_line-color);
			background-image:
				linear-gradient(
					to bottom left,
					transparent calc(50% - var(--_line-width) / 2),
					var(--_line-color) calc(50% - var(--_line-width) / 2),
					var(--_line-color) calc(50% + var(--_line-width) / 2),
					transparent calc(50% + var(--_line-width) / 2)
				),
				linear-gradient(
					to bottom right,
					transparent calc(50% - var(--_line-width) / 2),
					var(--_line-color) calc(50% - var(--_line-width) / 2),
					var(--_line-color) calc(50% + var(--_line-width) / 2),
					transparent calc(50% + var(--_line-width) / 2)
				);
		}`;
	}

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		const sheet = new CSSStyleSheet();
		sheet.replaceSync(this.constructor._style());
		this.shadowRoot.adoptedStyleSheets = [sheet];
	}

	static {
		customElements.define("place-holder", this);
	}
}
