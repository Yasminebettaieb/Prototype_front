import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DocumentEditorComponent, EditorService, SelectionService, TextExportService, ToolbarService, WordExportService } from '@syncfusion/ej2-angular-documenteditor';
;


@Component({
  selector: 'app-wordviewer',
  templateUrl: './wordviewer.component.html',
  styleUrls: ['./wordviewer.component.scss'],
  providers: [ToolbarService,WordExportService,EditorService, SelectionService, TextExportService],

})
export class WordviewerComponent implements OnInit {
  @ViewChild('htmlData')
  htmlData!: ElementRef;
  @ViewChild('document_editor')
  public documentEditor: DocumentEditorComponent;

  public saveAsDocx(): void {
      //Downlod the document as txt file.
      this.documentEditor.save('sample', 'Docx');
  
  }


  

  ngOnInit(): void {
  }

}
