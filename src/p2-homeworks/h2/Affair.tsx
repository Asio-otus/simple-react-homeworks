import React from "react";
import {AffairPriorityType, AffairType} from "./HW2";
import s from "./Affairs.module.scss";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType;
    priority: AffairPriorityType;
    deleteAffairCallback: (id: number) => void;
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    return (
        <div className={s.affair}>
            <span>{props.affair.name}</span>
            <div>
                <span className={s.priority}>{props.priority}</span>
                <button className={s.btnClose} onClick={deleteCallback}>
                    <svg className={s.closeIcon}
                         id="close"
                         xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 409.806 409.806">
                        <g>
                            <g>
                                <path d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42
			c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42
			c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132
			c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42
			c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"/>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Affair;
