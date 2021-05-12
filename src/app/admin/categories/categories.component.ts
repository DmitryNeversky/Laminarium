import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {NgForm} from "@angular/forms";
import {ImageLoader} from "../../shared/ImageLoader";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];
  public imageLoader = new ImageLoader();

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(){
    this.service.getAll().subscribe((response: Category[]) => {
      this.categories = response;
    }, error => { console.log(error.message) });
  }

  addCategory(addForm: NgForm){
    if(this.categories.find(x => x.name === addForm.value.name))
      return;

    let formData = new FormData();
    formData.append('name', addForm.value.name);
    // formData.append('preview', this.imageLoader.dataTransfer.files[0]);

    this.service.add(formData).subscribe((response: Category) => {
      this.categories.push(response);
    }, error => { console.log(error) });
  }
}
