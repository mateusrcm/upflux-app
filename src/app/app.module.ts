import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsModalContentComponent } from './details-modal-content/details-modal-content.component';
import { EditModalContentComponent } from './edit-modal-content/edit-modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    DetailsModalContentComponent,
    EditModalContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
