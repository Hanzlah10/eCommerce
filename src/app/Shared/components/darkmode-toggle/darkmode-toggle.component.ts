import { Component } from '@angular/core';
import { PersistenceService } from '../../services/persistence.service';

@Component({
  selector: 'app-darkmode-toggle',
  standalone: true,
  imports: [],
  templateUrl: './darkmode-toggle.component.html',
  styleUrl: './darkmode-toggle.component.css'
})
export class DarkmodeToggleComponent {

  constructor(private persistence: PersistenceService) { }

  ngOnInit(): void {
    // Check the initial state
    if (this.persistence.get('theme') === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

  }

  toggleDarkMode(): void {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      this.persistence.set('theme', 'dark');
    } else {
      this.persistence.set('theme', 'light');
    }
  }
}
