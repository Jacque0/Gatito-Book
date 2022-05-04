import { ActivatedRoute } from '@angular/router';
import { Animais } from './../animais';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //Com Resolver:
    this.activatedRoute.params.subscribe((param) => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    });
    // Com Observable:
    // this.animais$ = this.usuarioService.retornaUsuario().pipe(
    //   switchMap((usuario) => {
    //     const userName = usuario.name ?? '';
    //     return this.animaisService.listaDoUsuario(userName);
    //   })
    // );
    // Tradicional:
    // this.usuarioService.retornaUsuario().subscribe((usuario) => {
    //   const userName = usuario.name ?? '';
    //   this.animaisService.listaDoUsuario(userName).subscribe((animais) => {
    //     this.animais = animais;
    //   });
    // });
  }
}
