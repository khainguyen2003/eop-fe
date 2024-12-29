import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrfMenuComponent } from '../../shared/components/prf-menu/prf-menu.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrfMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

}
