import { Component } from '@angular/core';

@Component({
  selector: 'app-section-questions',
  templateUrl: './section-questions.component.html',
  styleUrls: ['./section-questions.component.css']
})
export class SectionQuestionsComponent {
activeIndex: number | null = null;

  preguntas = [
    {
      titulo: '¿Cómo calcular la cantidad de comida para un evento?',
      respuesta: `
        <ul>
          <li><strong>Tortas:</strong> 1 torta grande cada 10 personas.</li>
          <li><strong>Sándwiches de miga:</strong> 4 por persona si es lo único que se ofrece.</li>
          <li><strong>Cuadrados dulces:</strong> 1 cada 2 personas.</li>
          <li><strong>Masas finas:</strong> mínimo 1kg con 6 variedades. Rinde 42 unidades para 10 personas.</li>
        </ul>`
    },
    {
      titulo: '¿Pueden hacerme un presupuesto personalizado?',
      respuesta: `
        ¡Sí! Escribinos por WhatsApp e incluí:<br>
        - ¿Cuántas personas van a asistir?<br>
        - ¿Es un evento de día, tarde o noche?<br>
        - ¿Qué están buscando?<br>
        - ¿Cuánto dura el evento?`
    },
    {
      titulo: '¿Están abiertos los feriados?',
      respuesta: `Los feriados que caen lunes estamos cerrados. El resto de los feriados abrimos. <br>Chequeá nuestras historias de Instagram para confirmar.`
    },
    {
      titulo: '¿Qué métodos de pago aceptan?',
      respuesta: `¡Todos! Aceptamos todos los métodos de pago.`
    },
    {
      titulo: '¿Tienen envío a domicilio?',
      respuesta: `Por el momento no realizamos envíos. Todos los pedidos se retiran por el local, en el día y horario acordado.`
    }
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
