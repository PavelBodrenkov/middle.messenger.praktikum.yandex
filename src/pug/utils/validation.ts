export class validation {

    dataErrorMessage:{[x:string]:string}
    name: string;
    value: string;
    error_span: HTMLElement | null;
    error: boolean;
    constructor(name:string, value:string) {
        this.name = name
        this.value = value
        this.error_span = document.getElementById(`input-${this.name}-error-validate`)
        this.error = false
        this.dataErrorMessage = {
            first_name:'Допустимы латиница и кирилица, без пробелов и цифр',
            second_name: 'Допустимы латиница и кирилица, без пробелов и цифр',
            login: 'От 3 до 20 символов, латиница, может содержать цифры',
            email:'Некорректный email',
            password:'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.',
            phone:'Некорректный номер телефона',
            message:'Поле не может быть пустым',
            oldPassword:'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
            newPassword:'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
            repeatPassword:'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
            empty:'Поле не может быть пустым'
        }
    }

    _showInputError(name?:string) {
        if(name !== undefined) {
            this.error_span!.classList.add('active-error')
            this.error_span!.textContent = this.dataErrorMessage[name]
        } else {
            this.error_span!.classList.add('active-error')
            this.error_span!.textContent = this.dataErrorMessage[this.name]
        }
    }

    _hideInputError() {
        this.error_span?.classList.remove('active-error')
        this.error_span!.textContent = ''
    }

    _change(data:boolean, name?:string) {
        if(!data) {
            this._showInputError(name)
            this.error = true
        } else {
            this._hideInputError()
            this.error = false
        }
    }

    _isValid () {
        if(this.value === '') {
            this._change(!!this.value, 'empty')
        } else if(this.name === 'first_name'|| this.name === 'second_name') {
            let isFirstLetterUppercase = /^[A-ZА-Я]/.test(this.value);
            this._change(isFirstLetterUppercase)
        } else if(this.name === 'login') {
            let isFirstLetterUppercase = /^[a-z0-9_-]{3,20}$/.test(this.value);
            this._change(isFirstLetterUppercase)
        } else if(this.name === 'email') {
            let isFirstLetterUppercase = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(this.value)
            this._change(isFirstLetterUppercase)
        } else if(
            this.name === 'password' 
        || this.name === 'repeatPassword' 
        || this.name === 'oldPassword' 
        || this.name === 'newPassword' ) {
            let isFirstLetterUppercase = /^.*(?=.{8,40})(?=.*[A-Z].*[A-Z])(?=.*\d).*$/.test(this.value)
            this._change(isFirstLetterUppercase)
        } else if(this.name === 'phone') {
            let isFirstLetterUppercase = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(this.value)
            this._change(isFirstLetterUppercase)
        } else if(this.name === 'message') {
            let isFirstLetterUppercase = this.value !== ''
            this._change(isFirstLetterUppercase)
        }
    }

    enableValidation () {
        this._isValid()
    }

    get Error() {
        return this.error
    }
}