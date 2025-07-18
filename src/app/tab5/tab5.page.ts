import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Country {
  code: string;
  name: string;
}

interface Question {
  correct: number;
  countries: Country[];
  correctCountry: Country;
}

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: false,
})
export class Tab5Page implements OnInit {

  // Array de países con códigos ISO
  countries: Country[] = [
    { code: 'ad', name: 'Andorra' },
    { code: 'ae', name: 'Emiratos Árabes Unidos' },
    { code: 'af', name: 'Afganistán' },
    { code: 'ag', name: 'Antigua y Barbuda' },
    { code: 'ai', name: 'Anguila' },
    { code: 'al', name: 'Albania' },
    { code: 'am', name: 'Armenia' },
    { code: 'ao', name: 'Angola' },
    { code: 'ar', name: 'Argentina' },
    { code: 'at', name: 'Austria' },
    { code: 'au', name: 'Australia' },
    { code: 'az', name: 'Azerbaiyán' },
    { code: 'ba', name: 'Bosnia y Herzegovina' },
    { code: 'bb', name: 'Barbados' },
    { code: 'bd', name: 'Bangladés' },
    { code: 'be', name: 'Bélgica' },
    { code: 'bf', name: 'Burkina Faso' },
    { code: 'bg', name: 'Bulgaria' },
    { code: 'bh', name: 'Baréin' },
    { code: 'bi', name: 'Burundi' },
    { code: 'bj', name: 'Benín' },
    { code: 'bn', name: 'Brunéi' },
    { code: 'bo', name: 'Bolivia' },
    { code: 'br', name: 'Brasil' },
    { code: 'bs', name: 'Bahamas' },
    { code: 'bt', name: 'Bután' },
    { code: 'bw', name: 'Botsuana' },
    { code: 'by', name: 'Bielorrusia' },
    { code: 'bz', name: 'Belice' },
    { code: 'ca', name: 'Canadá' },
    { code: 'cd', name: 'República Democrática del Congo' },
    { code: 'cf', name: 'República Centroafricana' },
    { code: 'cg', name: 'República del Congo' },
    { code: 'ch', name: 'Suiza' },
    { code: 'ci', name: 'Costa de Marfil' },
    { code: 'cl', name: 'Chile' },
    { code: 'cm', name: 'Camerún' },
    { code: 'cn', name: 'China' },
    { code: 'co', name: 'Colombia' },
    { code: 'cr', name: 'Costa Rica' },
    { code: 'cu', name: 'Cuba' },
    { code: 'cv', name: 'Cabo Verde' },
    { code: 'cy', name: 'Chipre' },
    { code: 'cz', name: 'República Checa' },
    { code: 'de', name: 'Alemania' },
    { code: 'dj', name: 'Yibuti' },
    { code: 'dk', name: 'Dinamarca' },
    { code: 'dm', name: 'Dominica' },
    { code: 'do', name: 'República Dominicana' },
    { code: 'dz', name: 'Argelia' },
    { code: 'ec', name: 'Ecuador' },
    { code: 'ee', name: 'Estonia' },
    { code: 'eg', name: 'Egipto' },
    { code: 'er', name: 'Eritrea' },
    { code: 'es', name: 'España' },
    { code: 'et', name: 'Etiopía' },
    { code: 'fi', name: 'Finlandia' },
    { code: 'fj', name: 'Fiyi' },
    { code: 'fr', name: 'Francia' },
    { code: 'ga', name: 'Gabón' },
    { code: 'gb', name: 'Reino Unido' },
    { code: 'gd', name: 'Granada' },
    { code: 'ge', name: 'Georgia' },
    { code: 'gh', name: 'Ghana' },
    { code: 'gl', name: 'Groenlandia' },
    { code: 'gm', name: 'Gambia' },
    { code: 'gn', name: 'Guinea' },
    { code: 'gq', name: 'Guinea Ecuatorial' },
    { code: 'gr', name: 'Grecia' },
    { code: 'gt', name: 'Guatemala' },
    { code: 'gw', name: 'Guinea-Bisáu' },
    { code: 'gy', name: 'Guyana' },
    { code: 'hn', name: 'Honduras' },
    { code: 'hr', name: 'Croacia' },
    { code: 'ht', name: 'Haití' },
    { code: 'hu', name: 'Hungría' },
    { code: 'id', name: 'Indonesia' },
    { code: 'ie', name: 'Irlanda' },
    { code: 'il', name: 'Israel' },
    { code: 'in', name: 'India' },
    { code: 'iq', name: 'Irak' },
    { code: 'ir', name: 'Irán' },
    { code: 'is', name: 'Islandia' },
    { code: 'it', name: 'Italia' },
    { code: 'jm', name: 'Jamaica' },
    { code: 'jo', name: 'Jordania' },
    { code: 'jp', name: 'Japón' },
    { code: 'ke', name: 'Kenia' },
    { code: 'kg', name: 'Kirguistán' },
    { code: 'kh', name: 'Camboya' },
    { code: 'ki', name: 'Kiribati' },
    { code: 'km', name: 'Comoras' },
    { code: 'kn', name: 'San Cristóbal y Nieves' },
    { code: 'kp', name: 'Corea del Norte' },
    { code: 'kr', name: 'Corea del Sur' },
    { code: 'kw', name: 'Kuwait' },
    { code: 'kz', name: 'Kazajistán' },
    { code: 'la', name: 'Laos' },
    { code: 'lb', name: 'Líbano' },
    { code: 'lc', name: 'Santa Lucía' },
    { code: 'li', name: 'Liechtenstein' },
    { code: 'lk', name: 'Sri Lanka' },
    { code: 'lr', name: 'Liberia' },
    { code: 'ls', name: 'Lesoto' },
    { code: 'lt', name: 'Lituania' },
    { code: 'lu', name: 'Luxemburgo' },
    { code: 'lv', name: 'Letonia' },
    { code: 'ly', name: 'Libia' },
    { code: 'ma', name: 'Marruecos' },
    { code: 'mc', name: 'Mónaco' },
    { code: 'md', name: 'Moldavia' },
    { code: 'me', name: 'Montenegro' },
    { code: 'mg', name: 'Madagascar' },
    { code: 'mk', name: 'Macedonia del Norte' },
    { code: 'ml', name: 'Mali' },
    { code: 'mm', name: 'Myanmar' },
    { code: 'mn', name: 'Mongolia' },
    { code: 'mr', name: 'Mauritania' },
    { code: 'mt', name: 'Malta' },
    { code: 'mu', name: 'Mauricio' },
    { code: 'mv', name: 'Maldivas' },
    { code: 'mw', name: 'Malaui' },
    { code: 'mx', name: 'México' },
    { code: 'my', name: 'Malasia' },
    { code: 'mz', name: 'Mozambique' },
    { code: 'na', name: 'Namibia' },
    { code: 'ne', name: 'Níger' },
    { code: 'ng', name: 'Nigeria' },
    { code: 'ni', name: 'Nicaragua' },
    { code: 'nl', name: 'Países Bajos' },
    { code: 'no', name: 'Noruega' },
    { code: 'np', name: 'Nepal' },
    { code: 'nr', name: 'Nauru' },
    { code: 'nz', name: 'Nueva Zelanda' },
    { code: 'om', name: 'Omán' },
    { code: 'pa', name: 'Panamá' },
    { code: 'pe', name: 'Perú' },
    { code: 'pg', name: 'Papúa Nueva Guinea' },
    { code: 'ph', name: 'Filipinas' },
    { code: 'pk', name: 'Pakistán' },
    { code: 'pl', name: 'Polonia' },
    { code: 'pt', name: 'Portugal' },
    { code: 'py', name: 'Paraguay' },
    { code: 'qa', name: 'Catar' },
    { code: 'ro', name: 'Rumania' },
    { code: 'rs', name: 'Serbia' },
    { code: 'ru', name: 'Rusia' },
    { code: 'rw', name: 'Ruanda' },
    { code: 'sa', name: 'Arabia Saudí' },
    { code: 'sb', name: 'Islas Salomón' },
    { code: 'sc', name: 'Seychelles' },
    { code: 'sd', name: 'Sudán' },
    { code: 'se', name: 'Suecia' },
    { code: 'sg', name: 'Singapur' },
    { code: 'si', name: 'Eslovenia' },
    { code: 'sk', name: 'Eslovaquia' },
    { code: 'sl', name: 'Sierra Leona' },
    { code: 'sm', name: 'San Marino' },
    { code: 'sn', name: 'Senegal' },
    { code: 'so', name: 'Somalia' },
    { code: 'sr', name: 'Surinam' },
    { code: 'ss', name: 'Sudán del Sur' },
    { code: 'st', name: 'Santo Tomé y Príncipe' },
    { code: 'sv', name: 'El Salvador' },
    { code: 'sy', name: 'Siria' },
    { code: 'sz', name: 'Esuatini' },
    { code: 'td', name: 'Chad' },
    { code: 'tg', name: 'Togo' },
    { code: 'th', name: 'Tailandia' },
    { code: 'tj', name: 'Tayikistán' },
    { code: 'tl', name: 'Timor Oriental' },
    { code: 'tm', name: 'Turkmenistán' },
    { code: 'tn', name: 'Túnez' },
    { code: 'to', name: 'Tonga' },
    { code: 'tr', name: 'Turquía' },
    { code: 'tt', name: 'Trinidad y Tobago' },
    { code: 'tv', name: 'Tuvalu' },
    { code: 'tw', name: 'Taiwán' },
    { code: 'tz', name: 'Tanzania' },
    { code: 'ua', name: 'Ucrania' },
    { code: 'ug', name: 'Uganda' },
    { code: 'us', name: 'Estados Unidos' },
    { code: 'uy', name: 'Uruguay' },
    { code: 'uz', name: 'Uzbekistán' },
    { code: 'va', name: 'Ciudad del Vaticano' },
    { code: 'vc', name: 'San Vicente y las Granadinas' },
    { code: 've', name: 'Venezuela' },
    { code: 'vn', name: 'Vietnam' },
    { code: 'vu', name: 'Vanuatu' },
    { code: 'ws', name: 'Samoa' },
    { code: 'ye', name: 'Yemen' },
    { code: 'za', name: 'Sudáfrica' },
    { code: 'zm', name: 'Zambia' },
    { code: 'zw', name: 'Zimbabue' }
  ];

  currentQuestion: Question = { correct: 0, countries: [], correctCountry: { code: '', name: '' } };
  score: number = 0;
  totalQuestions: number = 0;
  flagUrl: string = '';
  options: Country[] = [];
  buttonsDisabled: boolean = false;
  isAnswered: boolean = false;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.generateQuestion();
  }

  getRandomCountries(count: number): Country[] {
    const shuffled = [...this.countries].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  generateQuestion() {
    const selectedCountries = this.getRandomCountries(3);
    const correctAnswer = Math.floor(Math.random() * 3);
    const correctCountry = selectedCountries[correctAnswer];

    this.currentQuestion = {
      correct: correctAnswer,
      countries: selectedCountries,
      correctCountry: correctCountry
    };

    this.options = selectedCountries;
    this.flagUrl = `https://flagcdn.com/w160/${correctCountry.code}.png`;
    this.buttonsDisabled = false;
    this.isAnswered = false;
  }

  async checkAnswer(selectedIndex: number) {
    if (this.buttonsDisabled) return;

    this.buttonsDisabled = true;
    this.isAnswered = true;
    this.totalQuestions++;

    let isCorrect = selectedIndex === this.currentQuestion.correct;
    
    if (isCorrect) {
      this.score++;
    }

    // Mostrar resultado con Ionic Alert
    const alert = await this.alertController.create({
      header: isCorrect ? '¡Correcto! 🎉' : '¡Incorrecto! ❌',
      message: isCorrect 
        ? `¡Excelente! La bandera corresponde a ${this.currentQuestion.correctCountry.name}.`
        : `La respuesta correcta era ${this.currentQuestion.correctCountry.name}.`,
      buttons: [
        {
          text: 'Siguiente',
          handler: () => {
            this.nextQuestion();
          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

  nextQuestion() {
    this.generateQuestion();
  }

  getButtonColor(index: number): string {
    if (!this.isAnswered) return 'primary';
    
    if (index === this.currentQuestion.correct) {
      return 'success';
    }
    
    return 'danger';
  }

  resetGame() {
    this.score = 0;
    this.totalQuestions = 0;
    this.generateQuestion();
  }

  getScorePercentage(): number {
    if (this.totalQuestions === 0) return 0;
    return Math.round((this.score / this.totalQuestions) * 100);
  }
}
