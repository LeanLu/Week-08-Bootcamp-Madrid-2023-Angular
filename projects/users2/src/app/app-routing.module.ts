import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Array de rutas que queremos crear:
const routes: Routes = [
  // Ruta por Default.
  // Queda el path vacío y se coloca el pathMatch: "full"
  // Luego se coloca el redirect a donde envía:
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },

  {
    path: 'tasks',
    loadChildren: () =>
      import('./tasks/tasks.module').then((m) => m.TasksModule),
  },

  // Ruta de errores:
  // En este caso lo redirigimos a Home, pero cargaríamos la página de Error:
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
