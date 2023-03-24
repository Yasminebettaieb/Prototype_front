import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'app/_services/patient/patient.service';
import { IDicomConfig, ITool, IViewerProvider, ToolModeEnum } from '../../../ngx-dicom-lib/src/lib/models';
@Component({
  selector: 'app-dicom-viewer',
  templateUrl: './dicom-viewer.component.html',
  styleUrls: ['./dicom-viewer.component.scss']
})
export class DicomViewerComponent implements OnInit {
  public image: any = {};
  constructor(public patientService: PatientService,
    private route: ActivatedRoute) { }
  public config: IDicomConfig;
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id)
    this.patientService.getImageById(id).subscribe(data => {
      console.log(data)
      this.config = {
        fileUrl: `${data.imageUrl}`,
        tools: [
          {
            name: 'DragProbe',
            options: { mouseButtonMask: 1 },
            mode: ToolModeEnum.Passive
          },
          {
            name: 'Eraser',
            options: { mouseButtonMask: 1 },
            mode: ToolModeEnum.Passive
          },
          {
            name: 'Magnify',
            options: { mouseButtonMask: 1 },
            mode: ToolModeEnum.Passive
          },
          {
            name: 'StackScrollMouseWheel',
            options: { mouseButtonMask: 1 },
            mode: ToolModeEnum.Active
          },
          {
            name: 'Rotate',
            options: { mouseButtonMask: 1 },
            mode: ToolModeEnum.Passive
          },
          {
            name: 'Pan',
            options: { mouseButtonMask: 1 },
            mode: ToolModeEnum.Passive
          },
          {
            name: 'ZoomMouseWheel',
            options: { mouseButtonMask: 1 },
            mode: ToolModeEnum.Passive
          },
          {
            name: 'Length',
            options: { mouseButtonMask: 1 },
            mode: ToolModeEnum.Passive
          },
          {
            name: 'Angle',
            options: { mouseButtonMask: 1 },
            mode: ToolModeEnum.Passive
          },
          {
            name: 'FreehandRoi',
            options: { mouseButtonMask: 1 },
            mode: ToolModeEnum.Passive
          },
          {
            name: 'Wwwc',
            options: { mouseButtonMask: 1 },
            mode: ToolModeEnum.Passive
          }
        ],
        classList: 'canvas-container'
      };
    })
  }


  viewerProvider: IViewerProvider | undefined;

  exportStateToJson(): void {
    this.download(
      JSON.stringify(this.viewerProvider?.cornerstoneTools.globalImageIdSpecificToolStateManager.saveToolState()),
      'toolsState.json',
      'application/json'
    )
  }

  saveAs(): void {
    this.viewerProvider?.cornerstoneTools.SaveAs(this.viewerProvider?.element, 'screenshot.png');
  }

  activateTool(name: string): void {
    const foundTool = this.config.tools?.find((tool) => tool.name === name);
    if (foundTool && this.viewerProvider) {
      this.viewerProvider.cornerstoneTools['setToolActive'](name, foundTool.options)
    }
  }

  isActive(tool: ITool): boolean {
    return this.viewerProvider?.cornerstoneTools.isToolActiveForElement(this.viewerProvider?.element, tool.name);
  }

  private download(content: any, fileName: string, contentType: string) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

}
