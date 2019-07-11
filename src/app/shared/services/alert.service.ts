import { Injectable } from '@angular/core';
import Swal, { SweetAlertType } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  dangerMsj(mensaje: string, titulo: string = 'Error', fnClickOk ?: () => void, fnClickCancel ?: () => void) {
    this.genericMsj('error', mensaje, titulo, fnClickOk, fnClickCancel);
  }

  warningMsj(mensaje: string, titulo: string = 'Alerta', fnClickOk ?: () => void, fnClickCancel ?: () => void) {
    this.genericMsj('warning', mensaje, titulo, fnClickOk, fnClickCancel);
  }

  successMsj(mensaje: string, titulo: string = '&Eacute;xito', fnClickOk ?: () => void, fnClickCancel ?: () => void) {
    this.genericMsj('success', mensaje, titulo, fnClickOk, fnClickCancel);
  }

  genericMsj(tipo: SweetAlertType, mensaje: string, titulo: string, fnClickOk ?: () => void, fnClickCancel ?: () => void) {
    Swal.fire(titulo, mensaje, tipo).then(result => {
      if ( result.value && fnClickOk) {
        fnClickOk();
      }
      if ( !result.value && fnClickCancel) {
        fnClickCancel();
      }
    });
  }

}
