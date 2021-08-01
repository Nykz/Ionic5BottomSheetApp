import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
})
export class OptionComponent implements OnInit {

  options = [
    { icon: 'settings-sharp', label: 'Settings', redirectTo: '' },
    { icon: 'archive-outline', label: 'Archive', redirectTo: '' },
    { icon: 'bar-chart-outline', label: 'Insights', redirectTo: '' },
    { icon: 'time-outline', label: 'Your activity', redirectTo: '' },
    { icon: 'qr-code-outline', label: 'QR Code', redirectTo: '' },
    { icon: 'bookmark-outline', label: 'Saved', redirectTo: '' },
    { icon: 'list-outline', label: 'Close friends', redirectTo: '' },
    { icon: 'person-add-outline', label: 'Discover people', redirectTo: '' },
    { icon: 'heart-circle-outline', label: 'COVID-19 Information Centre', redirectTo: '' },
  ];

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

}
