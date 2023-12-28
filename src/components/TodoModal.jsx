import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { addTodo, updateTodo } from "../slices/todoSlice";
import Button from "./Button";

const dropIn = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: "scale(0.9)",
    opacity: 0,
  },
};

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(toast.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("incomplete");
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      toast.error("Please enter a title");
      return;
    }
    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: format(new Date(), "p, MM/dd/yyyy"),
          })
        );
        toast.success("Task added successfully");
      }
      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          toast.success("Task added successfully");
        } else {
          toast.error("No changes made");
          return;
        }
      }
      setModalOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            variants={dropIn}
            initial="hiddem"
            animate="visible"
            exit="exit"
          >
            <motion.div
              onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role="button"
              tabIndex={0}
              // animation
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
            >
              close
            </motion.div>

            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>{type === 'add' ? 'Add' : 'Update'} Todo</h1>

                <label htmlFor="title">
                    Title
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                
                <label htmlFor="title">
                    Status
                    <select id="type" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value='incomplete'>Incomplete</option>
                        <option value='complete'>Complete</option>
                    </select>
                </label>

                <div>
                    <Button type='submit' variant="primary">
                        {type === 'add' ? 'Add Task' : 'Update Task'}
                    </Button>

                    <Button variant="secondary" onClick={() => setModalOpen(false)}>
                        Cancel
                    </Button>
                </div>
            </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TodoModal;
