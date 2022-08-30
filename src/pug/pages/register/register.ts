import Block from "../../utils/Block";
import template from "./register.pug";
import Form from "../../components/form/index";
import Input from "../../components/input";
import Button from "../../components/button";
import { validation } from "../../utils/validation";

interface RegisterPageProps {
  title: string;
  data: any[];
}

export class RegisterPage extends Block {
  arr: { [x: string]: string };
  constructor(props: RegisterPageProps) {
    super("div", props);
    this.arr = {};
  }
  init() {
    let arr2: any = [];
    this.props.data.forEach((item: any) => {
      arr2.push(
        new Input({
          id:item.id,
          required:true,
          placeholder: item.placeholder,
          type: item.type,
          name: item.name,
          cls: "inp inp-register",
          events: {
            focus:(e:any) => {
              let error = new validation(e.target.name, e.target.value)
              error.enableValidation()
            },
            blur:(e:any) => {
              let error = new validation(e.target.name, e.target.value)
              error.enableValidation()
            },
            change: (event: any) => {
              this.arr[event.target.name] = event.target.value;
            },
            keyup: (e: any) => {
              let error = new validation(e.target.name, e.target.value)
              error.enableValidation()
              this.arr[e.target.name] = e.target.value;
            },
          },
        })
      );
    });
    this.children.inputs = arr2;

    this.children.button = new Button({
      label: 'Зарегистрироваться',
      type: "submit",
      cls: 'btn-register',
      events: {
        click: (e) => {
          e.preventDefault();
          Object.entries(this.arr).forEach(([key, item]) => {
            let error = new validation(key, item)
            error.enableValidation()
          })
          console.log("arr", this.arr);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
