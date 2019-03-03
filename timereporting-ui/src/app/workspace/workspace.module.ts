import { NgModule } from '@angular/core';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './pages/workspace/workspace.component';

@NgModule({
    imports: [
        WorkspaceRoutingModule
    ],
    declarations: [
        WorkspaceComponent
    ]
})
export class WorkspaceModule { }