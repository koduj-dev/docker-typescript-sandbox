import App from 'src/App';

const rootElement: HTMLElement | null = document.getElementById('app');

const app = new App();
app.render(rootElement);
