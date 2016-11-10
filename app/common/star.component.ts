import { Component, OnChanges, Input, 
        Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'ai-star',
    templateUrl: 'app/common/star.component.html',
    styleUrls: ['app/common/star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>()

    ngOnChanges(): void {
        this.starWidth = this.rating * 100 / 5;
    }

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}