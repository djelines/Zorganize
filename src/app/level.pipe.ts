import { Pipe, PipeTransform } from '@angular/core';
import { Level } from './model/level.model';

const LEVELS: Record<Level, string> = {
  J: "Junior",
  M: "Medium",
  S: "Senior",
}

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: Level): string {
    return LEVELS[value] || value ;
  }

}
