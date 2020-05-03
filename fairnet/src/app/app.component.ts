import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title;
  text;
  url;

  constructor(private domSanitizer: DomSanitizer) {}

  elements = {
    'Stele1' : {
      title: 'Informationsstele',
      text: 'Vermitteln Sie schriftliche und bewegte Informationen an Ihren Informationsstelen! Durch dieses Feature ist eine gezielte Wissensvermittlung zu beispielsweise Produkten und Exponaten möglich. Diese erfolgt durch die Einbettung von schriftlichen Informationen auf Schaltflächen. Zusätzlich zu der schriftlichen Wissensvermittlung besteht außerdem die Möglichkeit Bildinhalte, wie Video-Content oder Diashows, auf virtuellen Monitoren einzubetten. Erweitern Sie die Darstellung Ihres Produktes und Nutzen Sie die Möglichkeit des virtuellen Raumes dieses im Einsatz Ihre Kunden / Besucher zu zeigen!',
      url: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ebqbR7qLhz0')
    },
    'Stele4' : {
      title: 'Animated Tour',
      text: 'Die Animated Tour bietet Ihnen die Möglichkeit, festgelegte Kamerafahrten für Ihren virtuellen Raum zu programmieren. Durch die festgelegten Kamerafahrten bekommt der Besucher einen allgemeinen Überblick über die, von Ihnen vorgegebenen, wichtigsten Bereiche des virtuellen Raums. Durch eigenständiges Erarbeiten ist diese Fokussierung möglicherweise für den Besucher nicht erkennbar. Zusätzlich zu einem allgemeinen fokussierten Überblick bietet das Feature die Möglichkeit abgegrenzte Bereiche auszulassen, ohne dass der unberechtigte Besucher davon Kenntnis erhält und sich dadurch eventuell benachteiligt fühlt. Lenken Sie Ihre Besucher gezielt durch Ihren virtuellen Raum und legen Sie Ihren Fokus fest!',
    },
    'AnimatedTour' : {
      title: 'Produktvorstellung',
      text: 'Your product – the hero! Stellen Sie Ihre Produkte / Dienstleistungen auch beim virtuellen Messestand in den Fokus! So kann etwa ein 3-D Nachbau auf einem Podest von allen Seiten betrachtet werden. Man kann heranzoomen, das Exponat öffnen und bestimmte Funktionen animieren. CAD Daten können hinterlegt und Informationen können eingeblendet werden. Ihr Produkt wird für den Kunden / Besucher erlebbar!',
      url: null
    },
    'InfoLogin' : {
      title: 'Login',
      text: 'Besuchermanagement auf Ihrem virtuellen Stand: Machen Sie einzelne Bereiche des Standes (oder den ganzen Stand) nur für bestimmte Besucher zugänglich! Mittels im Vorfeld zugesandten Zugangscode treten Besucher in eine eigens für sie reservierte VIP-Area oder in Besprechungsräume ein, wo sie auf spezifische Informationen Zugriff bekommen oder einen Chat starten können. Beim Login erfährt Ihr Besucher, zu welchen Bereichen er exklusiven Zutritt hat. Zeigen Sie ihm so, dass er Ihnen besonders wichtig ist!',
      url: null
    },
    'InfoChat' : {
      title: 'Chatfunktion',
      text: 'Der Besucher hat hier die Möglichkeit in einen Chat mit bestimmten Mitarbeitern Ihres Unternehmens einzutreten, er kann Fragen stellen und Informationen erhalten, die individuell auf ihn zugeschnitten sind. Hier entsteht persönlicher Kontakt und unmittelbare Response!',
      url: null
    },
    'LiveStream' : {
      title: 'LED-Wand',
      text: 'Sie möchten Ihren virtuellen Raum mit richtigem Leben füllen? Nutzen Sie die Einbindung eines Features für Live-Übertragungen! Hierdurch können Besucher an verschiedenen Präsentationen oder Diskussionen virtuell teilnehmen. Beispiele hierfür sind Produktpräsentationen aus Showrooms, Live-Streams aus Produktions- und Anwendungsstätten sowie Podiumsdiskussionen mit mehreren Teilnehmern. Durch die Einbettung einer Kommentarfunktion besteht zusätzlich die Möglichkeit für Besucher mit dem Moderator oder den Experten zu interagieren und Rückfragen zu stellen. Erweitern Sie den Kontaktzeitraum zu Ihren Kunden und lassen Sie sich live zu ihnen schalten!',
      url: null
    },
    'Ipad' : {
      title: 'Produktpräsentation',
      text: 'Auf diesen virtuellen Monitoren kann, zusätzlich zu den Informationsstelen, Video- oder Bild-Content eingebettet werden. Hierbei besteht die Möglichkeit den Content der Bewegtbilder nach Bedarf abzurufen. Dieses Vorgehen ist durch den Einbau einer Start- / Stopp-Funktion möglich. Nutzen Sie weitere Möglichkeiten virtuelle Produktpräsentationen wahrzunehmen!',
    }
  }

  updateModal(element: string) {
    this.title = this.elements[element].title;
    this.text = this.elements[element].text;
    this.url = this.elements[element].url;
  }
}
 