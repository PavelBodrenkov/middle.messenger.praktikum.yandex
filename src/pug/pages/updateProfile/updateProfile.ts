import Button from "../../components/button";
import Input from "../../components/input";
import Block from "../../utils/Block";
import { validation } from "../../utils/validation";
import template from './updateProfile.pug';

interface UpdateProfileProps {
    title: string;
    data:any[]
  }

export class UpdateProfile extends Block {
  arr: { [x: string]: string };
    constructor(props: UpdateProfileProps) {
        super('div', props);
        this.arr = {};
      }

      init() {
        let arr2:any = []
        this.props.data.forEach((item:any) => {
          console.log('item', item);
          
            arr2.push(new Input({
                id:item.id,
                placeholder:item.placeholder,
                type:item.type,
                name:item.name,
                cls:'inp inp-profile',
                events: {
                  focus:(e:any) => {
                    let error = new validation(e.target.name, e.target.value)
                    error.enableValidation()
                    console.log('focus',e.target.value);
                  },
                  blur:(e:any) => {
                    let error = new validation(e.target.name, e.target.value)
                    error.enableValidation()
                  },
                  change: (e: any) => {
                    let error = new validation(e.target.name, e.target.value)
                    error.enableValidation()
                    
                    this.arr[e.target.name] = e.target.value;
                  },
                  keyup: (e: any) => {
                    let error = new validation(e.target.name, e.target.value)
                    error.enableValidation()
                    console.log('value',e.target.value);
                    this.arr[e.target.name] = e.target.value;
                  },
                },
            })
            )
        })
        this.children.inputs = arr2

        this.children.button = new Button({
          label: 'Сохранить',
          type: "submit",
          cls: 'btn-profile',
          events: {
            click: (e) => {
              e.preventDefault();
              console.log("arr", this.arr);
            },
          },
        });
      }

      render() {
        return this.compile(template, this.props);
      }
}