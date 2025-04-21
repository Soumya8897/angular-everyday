import { Component } from '@angular/core';

@Component({
  selector: 'app-style-rules',
  imports: [],
  templateUrl: './style-rules.component.html',
  // styleUrl: './style-rules.component.css'
  // StyleUrls array is used to include multiple css files
  styles:['h1{background-color :white}']
})
export class StyleRulesComponent {


}
