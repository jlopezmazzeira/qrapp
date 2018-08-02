import { Component } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';
//plugins
import { HistorialProvider } from '../../providers/historial/historial';


@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {
	
	historial:ScanData[] = [];

  constructor(private _historialProvider: HistorialProvider) {}

  ionViewDidLoad() {
    this.historial = this._historialProvider.cargar_historial();
  }

  abrir_scan(index:number){
  	this._historialProvider.abrir_scan(index);
  }

}
