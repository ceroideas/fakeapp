import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes = [
  { path: 'albums', loadChildren: './albums/albums.module#AlbumsPageModule' },
  { path: 'photo-book', loadChildren: './photo-book/photo-book.module#PhotoBookPageModule' },
  { path: 'cards', loadChildren: './cards/cards.module#CardsPageModule' },
  { path: 'custom-prints', loadChildren: './custom-prints/custom-prints.module#CustomPrintsPageModule' },
  { path: 'minis', loadChildren: './minis/minis.module#MinisPageModule' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AlbumsRoutingModule { }
