import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectspipe'
})
export class ProjectspipePipe implements PipeTransform {
  recursive(obj, newObj, level, itemId, isExpand) {
    const self = this;
    obj.forEach(function (o) {
      if (o.childProjs && o.childProjs.length != 0) {
        o.level = level;
        o.leaf = false;
        newObj.push(o);
        if (o.projId == itemId) {
          o.expand = isExpand;
        }
        if (o.expand == true) {
          self.recursive(o.childProjs, newObj, o.level + 1, itemId, isExpand);
        }
      } else {
        o.level = level;
        if (o.proj) {
          newObj.push(o);
          o.leaf = true;
        } else {
          // obj.splice(obj.indexOf(o), 1);
        }
        return false;
      }
    });
  }
  transform(obj, itemId, isExpand): any {
    const newObj = [];
    this.recursive(obj, newObj, 0, itemId, isExpand);
    return newObj;
  }

}
