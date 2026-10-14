import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'My Angular App';
  count = signal(0);

  increment(): void {
    this.count.update((c) => c + 1);
  }
}
