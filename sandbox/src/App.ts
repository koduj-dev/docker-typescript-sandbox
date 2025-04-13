export default class App {

    public render(element: HTMLElement | null): void {
        if (element) {
            const heading: HTMLHeadElement = document.createElement('h1');
            heading.textContent = 'Hello, I am a TypeScript application!';

            const image: HTMLImageElement = document.createElement('img');
            image.src = 'assets/logo.png';
            image.alt = 'Course welcome mascot.';
            image.style.height = '400px';
            image.style.marginTop = '2rem';

            element.appendChild(heading);
            element.appendChild(image);
            element.style.textAlign = 'center';
        } else {
            console.debug("Hello, I am a TypeScript application!");
        }
    }
}
