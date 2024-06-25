import { Component, Input } from '@angular/core';
import { PrimengModule } from '../../../Modules/primeng.module';
import { CategoryInterface } from '../../types/category.interface';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {

  @Input() Category !: CategoryInterface



}
