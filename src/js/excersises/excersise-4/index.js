import {build, eventReturn} from '../../commons';
import excersiseTmpt from './excersise.tmpt';
import excersise from './excersise';

export default function () {
  excersise()
  build(excersiseTmpt)
  eventReturn()
}
