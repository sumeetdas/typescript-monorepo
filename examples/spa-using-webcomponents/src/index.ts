import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import './app-navbar';
import './app-static-page';
import './app-form-page';
import './app-api-page';
import { router } from './router';

@customElement('app-root')
class AppRoot extends LitElement {

  private pageContent = html``;

  connectedCallback() {
    super.connectedCallback();
    router.addRoute('/', () => this.renderStaticPage());
    router.addRoute('/form', () => this.renderFormPage());
    router.addRoute('/api', () => this.renderApiPage());
    router.handleLocationChange();
  }

  renderStaticPage() {
    this.pageContent = html`<app-static-page></app-static-page>`;
    // to ensure the page is updated when the route changes
    this.requestUpdate();
  }

  renderFormPage() {
    this.pageContent = html`<app-form-page></app-form-page>`;
    this.requestUpdate();
  }

  renderApiPage() {
    this.pageContent = html`<app-api-page></app-api-page>`;
    this.requestUpdate();
  }
  
  render() {
    return html`
      <app-navbar></app-navbar>
      <main>${this.pageContent}</main>
    `;
  }
}
