import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit {

  // Propiedades del formulario
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  fechaNacimiento: string = '';

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    // Cargar datos guardados si existen
    this.cargarDatos();
  }

  /**
   * Guarda el perfil del usuario
   */
  async guardarPerfil() {
    // Validar que los campos requeridos estén completos
    if (!this.nombre || !this.email) {
      await this.mostrarAlerta('Error', 'Por favor completa al menos el nombre y el email.');
      return;
    }

    // Validar formato de email
    if (!this.validarEmail(this.email)) {
      await this.mostrarAlerta('Error', 'Por favor ingresa un email válido.');
      return;
    }

    // Guardar datos en localStorage
    const perfil = {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono,
      fechaNacimiento: this.fechaNacimiento
    };

    localStorage.setItem('perfil', JSON.stringify(perfil));
    
    await this.mostrarToast('Perfil guardado exitosamente', 'success');
  }

  /**
   * Limpia todos los campos del formulario
   */
  async limpiarFormulario() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que quieres limpiar todos los campos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Sí, limpiar',
          handler: () => {
            this.nombre = '';
            this.email = '';
            this.telefono = '';
            this.fechaNacimiento = '';
            this.mostrarToast('Formulario limpiado', 'medium');
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * Carga los datos guardados desde localStorage
   */
  private cargarDatos() {
    const perfilGuardado = localStorage.getItem('perfil');
    if (perfilGuardado) {
      const perfil = JSON.parse(perfilGuardado);
      this.nombre = perfil.nombre || '';
      this.email = perfil.email || '';
      this.telefono = perfil.telefono || '';
      this.fechaNacimiento = perfil.fechaNacimiento || '';
    }
  }

  /**
   * Valida el formato del email
   */
  private validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  /**
   * Muestra una alerta
   */
  private async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  /**
   * Muestra un toast
   */
  private async mostrarToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();
  }

}
