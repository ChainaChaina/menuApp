import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
/**
 * Represents the root component of the application.
 */
export class AppComponent {
  guarn1 = 'Arroz Branco';
  guarn2 = 'Feijão preto caldo';
  guarn3 = 'Farofa';
  guarn4 = '';
  guarn5 = '';

  protein1 = 'File de Frango Grelhado';
  protein2 = 'Peixe frito';
  protein3 = 'Linguiça Calabresa';
  protein4 = 'Carne Ensopada';

  salad1 = 'Alface';
  salad2 = 'Maionese';
  salad3 = 'Repolho';
  salad4 = 'Vagem com ovos';

  menuReady: boolean = false;

  /**
   * Lifecycle hook that is called after the component's view has been fully initialized.
   */
  ngAfterViewInit() {

  }

  makeMenu(){
    this.menuReady = true;
    setTimeout(() => {
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');

      const image = new Image();
      image.src = './assets/imgs/card.jpg';
      image.onload = () => {
        console.log(ctx);
        if (ctx) {
          ctx.drawImage(image, 0, 0);
            ctx.font = '48px Arial';
            ctx.fillStyle = 'white';
          ctx.fillText(this.guarn1, 100, 700);
          ctx.fillText(this.guarn2, 100, 760);
          ctx.fillText(this.guarn3, 100, 820);
          ctx.fillText(this.guarn4, 100, 880);
          ctx.fillText(this.guarn5, 100, 940);
        }
      };
    }, 300);
  }

  // emptyInput(model: keyof AppComponent){
  //   this[model] = '';
  // }

}
