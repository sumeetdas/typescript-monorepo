import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-form-page')
class AppFormPage extends LitElement {
  @property({ type: String }) name: string = '';
  @property({ type: String }) email: string = '';

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }

  render() {
    return html`
      <h1>Form Page</h1>
      <form @submit=${this.handleSubmit}>
        <label>
          Name:
          <input type="text" @input=${(event: InputEvent) => (this.name = (event.target as HTMLInputElement).value)} />
        </label>
        <label>
          Email:
          <input type="email" @input=${(event: InputEvent) => (this.email = (event.target as HTMLInputElement).value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>
        Name: ${this.name}<br />
        Email: ${this.email}
      </p>
    `;
  }
}