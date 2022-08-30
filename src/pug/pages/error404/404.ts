import Block from "../../utils/Block";
import template from './404.pug';

interface Page404Props {
    title: string;
  }

export class Page404 extends Block {
    constructor(props: Page404Props) {
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