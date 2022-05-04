import { DeclarationListEmitMode } from "@angular/compiler";

export class TodoItem {
    Id: number=0;
    Name: string="";
    IsComplite: boolean=false;
    Description: string="";
    DueDate: Date = new Date();
    CreationDate: Date = new Date();
}