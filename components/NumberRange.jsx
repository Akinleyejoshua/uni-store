import { useState } from "react"

export const NumberRange = ({value})  => {
    const [state, setState] = useState({
        value: 1,
    });

    return <div className="number-range">
        <button onClick={() => {
            setState({
                ...state,
                value: state.value+1,
            });
            value("add", state.value + 1);
        }}>+</button>
        <button className="value">{state.value}</button>
        <button onClick={() => {
            if (state.value >1){
                setState({
                    ...state,
                    value: state.value-1,
                });
                value("minus", state.value - 1);
            }
        }}>-</button>
    </div>
}