import Block from "../../utils/Block";
import template from './form.pug';
import Input from '../input/index';
import Button from '../button/index';
import Link from '../link/index'

export class Form extends Block {
    arr: {[x:string]:string};
    arr2: any[];
    constructor(props: any) {
        super('div', props);
        this.props = props
        this.arr = {}
        this.arr2 = []
        this.element!.classList.add(props.cls)   
    }

    // init() {
    //    let arr2:any = []
    //     this.props.data.forEach((item:any) => {
    //         arr2.push(new Input({
    //             placeholder:item.placeholder,
    //             type:item.type,
    //             name:item.name,
    //             events: {
    //                 change: (event:any) => {
    //                     this.arr[event.target.name] = event.target.value
    //                 }
    //             },
    //         })
    //         )
    //     })
    //     this.children.inputs = arr2

    //     this.children.button = new Button({
    //         label:this.props.name,
    //         type:'submit',
    //         cls:this.props.btn_cls,
    //         events: {
    //             click: (e) => {
    //                 e.preventDefault()
    //                 console.log('arr',this.arr);
    //             }
    //         },
    //     })
    // }

    render() {
        return this.compile(template, this.props);
      }
}