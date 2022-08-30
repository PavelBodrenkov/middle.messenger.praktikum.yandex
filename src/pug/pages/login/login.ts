import Block from "../../utils/Block";
import template from './login.pug';
import Input from "../../components/input";
import Button from "../../components/button";
import { validation } from "../../utils/validation";

interface LoginPageProps {
    title: string;
    data:any[]
}

export class LoginPage extends Block {
  arr: { [x: string]: string };
    constructor(props: LoginPageProps) {
        super('div', props);
        this.arr = {};
      }

      init() {
        let arr2: any = [];
        this.props.data.forEach((item: any) => {
          arr2.push(
            new Input({
              id:item.id,
              placeholder: item.placeholder,
              type: item.type,
              name: item.name,
              cls: "inp inp-register",
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
          );
        });
        this.children.inputs = arr2;
    
        this.children.button = new Button({
          label: 'Войти',
          type: "submit",
          cls: 'btn-login',
          events: {
            click: (e) => {
              e.preventDefault();
              Object.entries(this.arr).forEach(([key, item]) => {
                let error = new validation(key, item)
                error.enableValidation()
                  console.log("arr", this.arr)
              })
            },
          },
        });
      }

      render() {
        return this.compile(template, this.props);
      }
}