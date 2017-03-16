import { NotFoundComponent } from '../exceptions/not-found/not-found.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from '../recipes/recipe-start.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RouterModule, Routes } from '@angular/router';

//RECIPE ROUTES::::::::::::::::::::
const RECIPE_ROUTES: Routes =[
    {path:'', component:RecipeStartComponent},
    {path:'new',component:RecipeEditComponent},
    {path:':id', component:RecipeDetailComponent},
    {path:':id/edit',component:RecipeEditComponent}
];
//RECIPE ROUTES::::::::::::::::::::

//MAIN ROUTES::::::::::::::::::::::::::
const APP_ROUTES: Routes = [
{path:'', redirectTo:'/recipes',pathMatch:'full'},
{path:'recipes',component:RecipesComponent,children:RECIPE_ROUTES},
{path:'shopping-list',component:ShoppingListComponent},
{path:'**', component:NotFoundComponent}
];
export const appRouting = RouterModule.forRoot(APP_ROUTES);
//MAIN ROUTES::::::::::::::::::::::::::

