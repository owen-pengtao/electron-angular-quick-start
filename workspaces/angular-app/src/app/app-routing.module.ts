import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiplesComponent } from './components/multiples/multiples.component';
import { HelloComponent } from './components/hello/hello.component';

const routes: Routes = [
	{
		path: '',
		component: MultiplesComponent,
	},
	{
		path: 'hello',
		component: HelloComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
