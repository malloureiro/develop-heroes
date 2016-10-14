import {Component} from '@angular/core';

@Component({
	//moduleId: module.id,
	selector: 'heroes-app',
	templateUrl: './src/app/app.component.html'
})
export class AppComponent {

	test = module.id;
}
