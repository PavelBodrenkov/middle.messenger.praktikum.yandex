import Block from "../../utils/Block";
import template from './500.pug';

interface Page500Props {
    title: string;
  }

export class Page500 extends Block {
    constructor(props: Page500Props) {
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