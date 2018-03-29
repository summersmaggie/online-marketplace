import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService] //registering a provider, i.e. when MarketplaceComponent is created, a fresh instance of AlbumService is also created.
})

export class MarketplaceComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;

  constructor(private router: Router, private albumService: AlbumService) {}


  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  goToDetailPage(clickedAlbum) {
      this.router.navigate(['albums', clickedAlbum.$key]);
    };
}
