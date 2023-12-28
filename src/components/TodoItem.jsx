import {format} from 'date-fns';
import {motion} from 'framer-motion';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo, updateTodo} from '../slices/todoSlice';
import {getClasses} from '../utils/getClasses';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';

const child = {
    hidden:{
        y:20,
        opacity:0
    },
    visible:{
        y:0,
        opacity:1
    }
}

function TodoItem({todo}) {

    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);

    useEffect(() => {
        if(todo.status === 'complete'){
            setChecked(true);
        }
        else{
            setChecked(false);
        }
    },[todo.status]);

    const handleCheck = () => {
        setChecked(!checked);
        dispatch(
            updateTodo({
                ...todo,
                status: checked ? 'incomplete' : 'complete'
            })
        )
    }

    const handleDelete = () => {
        
    }

  return (
    <div>TodoItem</div>
  )
}

export default TodoItem