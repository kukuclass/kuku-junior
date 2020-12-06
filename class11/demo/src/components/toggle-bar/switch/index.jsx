import React, {useState} from 'react';
import './index.css';

function Switch({onChange, checked, disable}) {

    const [open, setOpen] = useState(false);

    return (
        <div
            onClick={() => {
                if (disable) return;
                onChange(!open);
                setOpen(!open);
            }}
            className={
                open
                    ? `switch switch-open ${disable && 'switch-disable'}`
                    : `switch switch-close ${disable && 'switch-disable'}`
            }>
            <div className={
                open
                    ? `switch-oval switch-oval-open ${disable && 'switch-oval-disable'}`
                    : `switch-oval switch-oval-close ${disable && 'switch-oval-disable'}`
            }>
                {/* switch组件的圆圈⭕️ */}
            </div>
        </div>
    )
}

export default Switch;
