import { AuthGuardService } from '../services/auth-guard.service';
import { NotFoundComponent } from '../exceptions/not-found/not-found.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from '../recipes/recipe-start.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from '../signin/signup/signup.component';
import {LoginComponent} from '../signin/login/login.component';

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
{path:'', redirectTo:'/login',pathMatch:'full'},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'recipes',component:RecipesComponent,children:RECIPE_ROUTES,canActivate:[AuthGuardService]},
{path:'shopping-list',component:ShoppingListComponent,canActivate:[AuthGuardService]},
{path:'**', component:NotFoundComponent,canActivate:[AuthGuardService]}
];
export const appRouting = RouterModule.forRoot(APP_ROUTES);
//MAIN ROUTES::::::::::::::::::::::::::


    