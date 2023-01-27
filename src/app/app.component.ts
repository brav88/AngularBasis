import { Component, Input } from '@angular/core';
import {dogsData} from '../data/dogs.data';
import {Dog} from 'src/model/dog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourse';

  dogs = dogsData;
}

