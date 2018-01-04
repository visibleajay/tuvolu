
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
    @Input() searchKeyword: String = "";
    @Output() searchClick = new EventEmitter();
}