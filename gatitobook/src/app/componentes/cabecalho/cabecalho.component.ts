import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
