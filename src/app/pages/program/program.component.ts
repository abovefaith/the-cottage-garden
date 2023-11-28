import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { StaffService } from 'src/app/services/staff.service';

export interface PeriodicElement {
  name: string;
  position: number;
  // weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Arrival • 8:00', symbol:'Children and parents are greeted and welcomed through the porch door, which will be open at 8:00am. When you arrive, please help your child hang up his or her coat and put on indoor shoes. We will be there to help with the transition into our playroom.',},
  {position: 2, name: 'Inside play-time/craft activity • until 9:00', symbol: 'Play is the most important time of our morning. This is the children’s real “work”, where they learn to be together, socialize, learn about sharing, take risks and resolve conflict. These are all worked out and explored during free play under the watchful guidance of their teachers. Occasionally we will bake a birthday cake or bread, craft, crayon or wet felt.', },
  {position: 3, name: 'Tidy up time • 9:00 – 9:15', symbol: 'Every toy, cloth, soft animal or doll has a place in the room and the children soon learn that tidying up is just as pleasant a part of the day as any other. We sing all the toys back into their baskets, and sing the dollies to sleep, and then we sing ourselves to the bathroom for hand-washing.', },
  {position: 4, name: 'Snack • by 9:15', symbol: 'We eat organic, vegetarian foods in our program. For morning snack, we have oat or rice porridge with applesauce. Milk is served at each meal and filtered water is always available. We will clean up all together, with the children participating as much as they are able.', },
  {position: 5, name: 'Story time • 9:45 – 10:00', symbol: 'We sing and have our story each day after snack, either at the table or sitting in the playroom. The foundations for literacy are laid through singing songs together and through storytelling. Stories are told in the oral tradition, using simple handmade, felted or silk puppets. Both singing, and storytelling develop vocabulary, memory and creative imagination.',},
  {position: 6, name: 'Toileting • 10 – 10:15', symbol: 'Changing diapers and potty time before we go out.',},
  {position: 7, name: 'Outside Playtime • until noonish', symbol: 'Our lovely, fenced in backyard has a sandbox, cut logs for climbing and balance, two small climbing structures, a fabric tunnel that comes out occasionally and a hill slide. We  try to go outside in most weather: the children find joy in the vibrant colors and windy days of fall, the snow and ice in winter, the blustery breezes of March and the lovely colors of spring. We now have a wonderful 12x14 Gazebo to play in when the weather is not cooperating.',},
  {position: 8, name: 'Toileting •', symbol: 'when we come in, we wash hands and change diapers or use the potty',},
  {position: 9, name: 'Lunch • 12:00 – 12:30', symbol: 'We eat organic, vegetarian foods in our program. Lunches are a variety of hearty blended vegetable soups with a different grain each day. Milk and filtered water is offered at each meal. We clean-up together, with the children participating as much as they are able.', },
  {position: 10, name: 'Nap • 12:30ish – 3:00', symbol: 'Each child will have a cozy down quilt and a mat or a playpen to curl up on while the teachers sing lullabies and give comfort when needed.',},
  {position: 10, name: 'Toileting & Afternoon snack • 3:00…', symbol: 'We play quietly until all the children are awake and changed, then we have snack together. Snack is fresh fruit and bread or crackers, water is served. We end the day with quiet activity around the table or weather permitting, we go outside to play.',},
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProgramComponent {
  constructor(private service:StaffService){}



  displayedColumns: string[] = ['position', 'name', 'symbol',];
  dataSource = ELEMENT_DATA;




  staffData:any;
  ngOnInit(): void {
    this.staffData = this.service.staffDetails;
  }



}


