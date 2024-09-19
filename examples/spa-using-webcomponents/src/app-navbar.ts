import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { router } from './router';

@customElement('app-navbar')
class AppNavbar extends LitElement {
  
  render() {
    return html`
      <nav>
        <a href="/" @click="${this.navigate}">Home</a>
        <a href="/form" @click="${this.navigate}">Form</a>
        <a href="/api" @click="${this.navigate}">API</a>
      </nav>
    `;
  }

  navigate(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    router.navigate(target.getAttribute('href')!);
  }
}