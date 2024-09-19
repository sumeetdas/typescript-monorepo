import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-api-page')
class AppApiPage extends LitElement {
  @property({ type: Array }) data = [];

  async fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    this.data = data;
  }

  render() {
    return html`
      <h1>API Page</h1>
      <button @click=${this.fetchData}>Fetch Data</button>
      <ul>
        ${this.data.map((item: any) => html`<li>${item.title}</li>`)}
      </ul>
    `;
  }
}