import Block from '../../utils/Block';
import template from './link2.pug';

interface LinkProps {
    href:string, 
    text:string, 
    cls:string
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}