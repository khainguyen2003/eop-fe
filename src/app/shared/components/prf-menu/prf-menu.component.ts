import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TuiActiveZone, TuiObscured } from '@taiga-ui/cdk';
import { TuiDropdown, TuiFallbackSrcPipe } from '@taiga-ui/core';
import {TuiBadgedContent, TuiBadgeNotification, TuiAvatar} from '@taiga-ui/kit';

@Component({
  selector: 'app-prf-menu',
  imports: [TuiDropdown, TuiBadgedContent, TuiAvatar, TuiFallbackSrcPipe, TuiBadgeNotification, TuiDropdown, TuiObscured, TuiActiveZone, AsyncPipe],
  templateUrl: './prf-menu.component.html',
  styleUrl: './prf-menu.component.css',
  // Cần có changeDetection nếu không dùng signal
  changeDetection: ChangeDetectionStrategy.OnPush, // Thực hiện các code xử lý thay đổi khi thay đổi tham chiếu vào phần tử con. Ví dụ ở đây là open của dropdown
})
export class PrfMenuComponent {
  protected open = false;
  protected avatarSize: "s" | "m" | "l" | "xs" | "xl" | "xxl" = "m";
 
    protected onClick(): void {
      this.open = !this.open;
    }
 
    protected onObscured(obscured: boolean): void {
      if (obscured) {
        this.open = false;
      }
    }
 
    protected onActiveZone(active: boolean): void {
      this.open = active && this.open ;
    }
}
