import Block from "../../utils/Block";
import template from './button2.pug';

interface ButtonProps {
    label:string,
    type:string,
    buttons?:any[]
    cls:string,
    events:  {
        click:(e:any) => void
    }
}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super('div', props);
        
        this.element!.classList.add('btn')
        this.element!.classList.add(props.cls)
    }

    render() {
        return this.compile(template, this.props);
      }
}