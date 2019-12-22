import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  mj: number;
  g: number;
  n: number;
  p: number;
  bp: number;
  bc: number;
  pts: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Paris-SG', mj: 17, g: 14, n: 0, p: 3, bp: 37, bc: 9, pts: 42},
  {position: 2, name: 'Marseille', mj: 17, g: 14, n: 0, p: 3, bp: 37, bc: 9, pts: 42},
  {position: 3, name: 'Lille', mj: 17, g: 14, n: 0, p: 3, bp: 37, bc: 9, pts: 42},
  {position: 4, name: 'Rennes', mj: 17, g: 14, n: 0, p: 3, bp: 37, bc: 9, pts: 42},
  {position: 5, name: 'Nantes', mj: 17, g: 14, n: 0, p: 3, bp: 37, bc: 9, pts: 42},
  {position: 6, name: 'Reims', mj: 17, g: 14, n: 0, p: 3, bp: 37, bc: 9, pts: 42},
  {position: 7, name: 'Bordeaux', mj: 17, g: 14, n: 0, p: 3, bp: 37, bc: 9, pts: 42},
  {position: 8, name: 'Lyon', mj: 17, g: 14, n: 0, p: 3, bp: 37, bc: 9, pts: 42},
  {position: 9, name: 'Monaco', mj: 17, g: 14, n: 0, p: 3, bp: 37, bc: 9, pts: 42},
  {position: 10, name: 'Angers', mj: 17, g: 14, n: 0, p: 3, bp: 37, bc: 9, pts: 42},
];

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['name', 'mj', 'g', 'n', 'p', 'bp', 'bc', 'db', 'pts']//, '5 derniers'];
  dataSource = ELEMENT_DATA;

}
