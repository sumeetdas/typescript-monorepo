import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-static-page')
class AppStaticPage extends LitElement {
  render() {
    return html`
      <h1>Static Page</h1>
      <p>This is a static page with some text.</p>
    `;
  }
}