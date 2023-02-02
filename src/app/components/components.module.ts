import { SpinnerComponent } from "./spinner/spinner.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [SpinnerComponent, HeaderComponent, FooterComponent],
  exports: [SpinnerComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
