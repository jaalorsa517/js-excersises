import {build, eventReturn} from '../../commons';
import excersiseTmpt from './excersise.tmpt';
import excersise from './excersise';

export default function buildExcercise() {
  excersise()
  build(excersiseTmpt)
  eventReturn()
}
