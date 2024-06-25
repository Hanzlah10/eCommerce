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

  // Category: CategoryInterface = {
  //   __v: 0,
  //   _id: "649e792a64e7dba29b7265fc",
  //   createdAt: "2023-06-30T06:41:46.367Z",
  //   name: "sleek",
  //   owner: "649e792964e7dba29b72634a",
  //   updatedAt: "2023-06-30T06:41:46.367Z"
  // }

}
