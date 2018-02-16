import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(tareas: any[], filter: string): any {
        if (!tareas || !filter) {
            return tareas;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return tareas.filter(item => item.id.indexOf(filter) !== -1 || item.title.indexOf(filter) !== -1 ||
            item.completed === Boolean(filter));
    }
}