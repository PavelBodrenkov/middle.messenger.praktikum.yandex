import Block from '../../utils/Block';
import template from './input2.pug';

interface InputProps {
  id?:string;
  required?:boolean;
  placeholder:string;
  type:string;
  name:string;
  cls:string;
  events: {
    focus?:(e:any) => void
    blur?:(e:any) => void;
    change: (event:any) => void;
    keyup?: (event:any) => void;
  };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}