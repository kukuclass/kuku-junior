import React from 'react';
import propTypes from 'prop-types';

import './index.scss';

function TodoItem() {

    return (
        <div className="todo-item">
        </div>
    )
}

TodoItem.propTypes = {
    /**
     * @description 一个todo项目的标题
     */
    title: propTypes.string.isRequired,
    /**
     * @description 一个todo项目的具体内容
     */
    content: propTypes.string.isRequired,
    /**
     * @description 当前todo的时间点
     */
    date: propTypes.string.isRequired,
    /**
     * @description 一个todo是否被完成
     */
    done: propTypes.bool.isRequired,
    /**
     * @description 是否已经被删除
     */
    removed: propTypes.bool.isRequired,
}

export default TodoItem