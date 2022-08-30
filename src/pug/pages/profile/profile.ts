import Form from "../../components/form";
import Input from "../../components/input";
import Block from "../../utils/Block";
import { validation } from "../../utils/validation";
import template from './profile.pug';

interface ProfilePageProps {
    title: string;
    data:any[]
  }

export class ProfilePage extends Block {
    arr: {[x:string]:string};
    constructor(props: ProfilePageProps) {
        super('div', props);
        this.arr = {}
      }

      init() {
        let arr2:any = []
        this.props.data.forEach((item:any) => {
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
                  },
                  blur:(e:any) => {
                    let error = new validation(e.target.name, e.target.value)
                    error.enableValidation()
                  },
                  change: (e: any) => {
                    this.arr[e.target.name] = e.target.value;
                  },
                  keyup: (e: any) => {
                    let error = new validation(e.target.name, e.target.value)
                    error.enableValidation()
                    this.arr[e.target.name] = e.target.value;
                  },
                },
            })
            )
        })
        this.children.inputs = arr2
      }

      render() {
        return this.compile(template, this.props);
      }
}