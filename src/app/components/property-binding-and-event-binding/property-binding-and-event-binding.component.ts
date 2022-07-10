import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-and-event-binding',
  templateUrl: './property-binding-and-event-binding.component.html',
  styleUrls: ['./property-binding-and-event-binding.component.css']
})
export class PropertyBindingAndEventBindingComponent implements OnInit {

urlImage: string = "https://source.unsplash.com/random/300x300"
alignImage: string = "center"
dataNascimento: string = "27/01/2000"

  constructor() { }

  ngOnInit(): void {
  }

  mostrarData(): void{
alert(`Lucas nasceu em ${this.dataNascimento}`)
  }

}
