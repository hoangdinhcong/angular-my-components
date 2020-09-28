import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appTitle = 'My Components';

  dark = false;
  isNotificationsMenuOpen = false;
  isProfileMenuOpen = false;
  isSideMenuOpen = false;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.closeProfileMenu();
    this.closeNotificationsMenu();
    this.closeSideMenu();
  }

  constructor(private renderer: Renderer2) {
    this.updateTheme();
  }

  // Theme
  toggleTheme(): void {
    this.dark = !this.dark;
    this.updateTheme();
  }

  updateTheme(): void {
    if (this.dark) {
      this.renderer.addClass(document.body, 'theme-dark');
    } else {
      this.renderer.removeClass(document.body, 'theme-dark');
    }
  }


  // Notification Menu
  toggleNotificationsMenu(): void {
    this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen;
  }


  closeNotificationsMenu(): void {
    this.isNotificationsMenuOpen = false;
  }

  // Profile Menu
  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeProfileMenu(): void {
    this.isProfileMenuOpen = false;
  }

  // Side Menu
  toggleSideMenu(): void {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  closeSideMenu(): void {
    this.isSideMenuOpen = false;
  }
}
