import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';
Router

export const studentGuard: CanActivateFn = (route, state) => {
   let service=inject(LoginserviceService) 
  let routes = inject(Router)
  let user=service.token
  console.log(user);
  
  if (!user) {
    routes.navigate(['/home'])
  }
  else{
    // routes.navigate(['/home'])

  }
  return true;
};
