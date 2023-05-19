import listStyle from './option-list.module.css'
import { RxCrossCircled } from "react-icons/rx";
// RxCrossCircled

export default function NavMobile({closeFunction}){
    return(
        <div className={listStyle.wrapper}>
        <div className={listStyle.iconHolder}>
        <RxCrossCircled onClick = {closeFunction} 
        className={listStyle.closeIcon}/>
        </div>
        <div>
        <p>dsgd</p>
        <p>dsgd</p>
        <p>dsgd</p>
        </div>
       
        </div>
    )
}