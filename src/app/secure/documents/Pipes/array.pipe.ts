import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array'
})
export class ArrayPipe implements PipeTransform {

  transform(value: any, itmi: any, exp: any): any {
    return this.getData(value, itmi, exp);
  }
  getData(obj, itemId, isExpand) {
    const newObj = [];

    this.recursive(obj, newObj, 0, itemId, isExpand);
    return newObj;

  }
  recursive(obj, newObj, level, itemId, isExpand) {
    const self = this;
    obj.forEach(function (o, key) {
      if (o.childProjDocFolderTOs !== undefined && o.childProjDocFolderTOs.length > 0) {
        o.level = level;
        o.leaf = false;
        if (o.deleteFlag === undefined || !o.deleteFlag) {
          newObj.push(o);
          if (o.id === itemId) {
            o.expand = isExpand;
          }
          if (o.expand === true ) {
            self.recursive(o.childProjDocFolderTOs, newObj, o.level + 1, itemId, isExpand);
          }
        } else {
          debugger;
          obj.splice(obj.indexOf(o), 1);
          return true;
        }
      } else {
        o.level = level;
        if (o.proj) {
          o.leaf = true;
        } else {
          o.leaf = false;
        }
        if (!o.proj && (o.deleteFlag === undefined || !o.deleteFlag)) {
          newObj.push(o);
        } else if (!o.proj) {
          obj.splice(obj.indexOf(o), 1);
          return true;
        }
        return false;
      }

    });
  }
}
