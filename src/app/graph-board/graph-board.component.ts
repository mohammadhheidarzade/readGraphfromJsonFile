import { Component, OnInit } from '@angular/core';
import * as Ogma from '../../assets/lib/ogma.min.js';

@Component({
  selector: 'app-graph-board',
  templateUrl: './graph-board.component.html',
  styleUrls: ['./graph-board.component.scss']
})
export class GraphBoardComponent implements OnInit {
  constructor() {
  }


  ngOnInit(): void {
    var ogma = new Ogma({
      container: 'graph-container',
    });

    ogma.parse.jsonFromUrl('../../assets/sample/graph.json').then(function (rawGraph) {
      ogma.setGraph(rawGraph); 
    });

  }

}
