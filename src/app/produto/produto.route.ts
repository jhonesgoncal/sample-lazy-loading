import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';


export const produtoRouterConfig: Routes = [
    {
        path: '',  component: ProdutoComponent,
        children: [
            {path: '', component: ListaProdutosComponent},
            {path: 'lista', component: ListaProdutosComponent}
        ]
    }
]