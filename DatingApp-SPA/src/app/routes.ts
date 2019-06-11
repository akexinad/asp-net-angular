import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';

import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { ListsResolver } from './_resolvers/lists.resolver';

export const appRoutes: Routes = [
    // Remember, the wild card goes last so angular first checks the valid routes before reaching the wild card route.
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'members',
                component: MemberListComponent,
                resolve: {users: MemberListResolver}
            },
            {
                path: 'members/:id',
                component: MemberDetailComponent,
                resolve: {user: MemberDetailResolver}
            },
            {
                path: 'member/edit',
                component: MemberEditComponent,
                resolve: {user: MemberEditResolver},
                canDeactivate: [PreventUnsavedChanges]
            },
            {
                path: 'messages',
                component: MessagesComponent
            },
            {
                path: 'lists',
                component: ListsComponent,
                resolve: {users: ListsResolver}
            },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
