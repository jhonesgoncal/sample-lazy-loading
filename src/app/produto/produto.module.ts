import { NgModule } from '@angular/core';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { RouterModule } from '@angular/router';
import { produtoRouterConfig } from './produto.route';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(produtoRouterConfig)
    ],
    declarations:[
        ProdutoComponent,
        ListaProdutosComponent
    ],
    exports: [RouterModule]
})

export class ProdutoModule{}