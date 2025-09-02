import { inject } from '@angular/core';
import {CanActivateFn, Router, UrlTree} from '@angular/router';

export const authGuard: CanActivateFn =
  async (rota, estado):
    Promise<boolean | UrlTree> => {
        const roteador = inject(Router) 
        const acessToken = localStorage.getItem('acess_token');
        if(!acessToken){
            localStorage.removeItem('acess_token');
            localStorage.removeItem('code_verifier');
            return roteador.parseUrl('/login')
        }
  return true;
}