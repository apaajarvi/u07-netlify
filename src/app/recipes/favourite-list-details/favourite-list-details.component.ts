import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouriteListService } from '../favourite-list/favourite-list.service';


@Component({
  selector: 'app-favourite-list-details',
  templateUrl: './favourite-list-details.component.html',
  styleUrls: ['./favourite-list-details.component.css']
})
export class FavouriteListDetailsComponent implements OnInit {

  data;

  constructor(private FavouriteListService: FavouriteListService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id')
      this.FavouriteListService.getFavouriteListById(id).subscribe((data: any) => {
        this.data = data
      })
    })
  }

  onSubmit(form) {
    this.FavouriteListService.updateFavouriteList(this.data.favouriteList.id, form.value.title);
  }
}
