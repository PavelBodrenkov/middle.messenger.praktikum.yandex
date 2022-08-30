import Block from "./utils/Block";
import template from './index.pug';

interface RootPageProps {
    title: string;
  }

export class RootPage extends Block {
    constructor(props: RootPageProps) {
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