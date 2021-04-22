import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuMakerService {

  constructor(private http: HttpClient) {}

  sendUpdate(newItem) {

    this.http.post<{ message: string }>('http://localhost:3000/api/menus', newItem)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
    //console.log(typeof data.orderData[0].options);
    //console.log(data);
  }

  saveMenu(newMenu) {
    this.http.post<{ message: string }>('http://localhost:3000/api/menumaker/menus', newMenu)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
  }

  getMenus() {
    return this.http.get<{message: string, data: [{}]}>('http://localhost:3000/api/menumaker/menus');
  }


  saveCategory(newCategory) {
    this.http.post<{ message: string }>('http://localhost:3000/api/menumaker/categories', newCategory)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
  }

  getCategories() {
    return this.http.get<{message: string, data: [{}]}>('http://localhost:3000/api/menumaker/categories');
  }





}
