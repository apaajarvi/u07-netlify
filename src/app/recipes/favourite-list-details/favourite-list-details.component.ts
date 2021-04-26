import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouriteListService } from '../favourite-list/favourite-list.service';


@Component({
  selector: 'app-favourite-list-details',
  templateUrl: './favourite-list-details.component.html',
  styleUrls: ['./favourite-list-details.component.css']
})
export class FavouriteListDetailsComponent implements OnInit {

  favouriteList;

  constructor(private FavouriteListService: FavouriteListService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id')
      this.FavouriteListService.getFavoruiteListById(id).subscribe((data: any) => {
        this.favouriteList = data
        console.log(data)
      })
    })
  }

  onSubmit(form) {
    this.FavouriteListService.updateFavouriteList(this.favouriteList.id, form.value.title);
  }
}
