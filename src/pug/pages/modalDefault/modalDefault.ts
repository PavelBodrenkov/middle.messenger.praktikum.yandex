import Block from "../../utils/Block";
import template from './modalDefault.pug';

interface ModalDefaultProps {
    title: string;
  }

export class ModalDefault extends Block {
    constructor(props: ModalDefaultProps) {
        super('div', props);
      }

    //   init() {
    //     this.children.button = new Button({
    //       label: 'Click me',
    //       events: {
    //         click: () => console.log('clicked'),
    //       },
    //     });
    //   }

      render() {
        return this.compile(template, this.props);
      }
}