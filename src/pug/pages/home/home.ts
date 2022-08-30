import Block from "../../utils/Block";
import template from '../home/home.pug'
import Input from './../../components/input/index'

interface HomePageProps {
    title: string;
    data:any[]
  }
1
export class HomePage extends Block {
    constructor(props: HomePageProps) {
        super('div', props);
      }

      init() {
        this.children.input = new Input({
          placeholder:'Введите сообщение...',
          type:'text',
          name:'message',
          cls:'',
          events: {
            change: (event:any) => console.log(event.target.value)
          },
        });
        this.children.input2 = new Input({
          placeholder:'Поиск',
          type:'text',
          name:'search',
          cls:'',
          events: {
            change: (event:any) => console.log(event.target.value)
          },
        });
      }

      render() {
        return this.compile(template, this.props);
      }
}