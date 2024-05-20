import { $ } from "..";

export default class $option extends $ {
    constructor(text:string,attributes: object = {}){
        super('option', attributes);
        this.setText(text)
    }
}