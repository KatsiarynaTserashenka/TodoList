import React, { FC, useState } from 'react';
import TodoItem from 'components/TodoItem';
import Input from 'components/Input';
import Button from 'components/Button';

const TodoList: FC = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Array<{}>>([]);

  const handleChange = (newTask: string) => {
    setNewTask(newTask);
  };

  const addTask = () => {
    if (!newTask) {
      alert('Enter new task!');
      return;
    }

    const task = {
      id: Math.floor(Math.random() * 1000),
      title: newTask,
    };

    setTasks((oldList) => [...oldList, task]);
    setNewTask('');
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={handleChange}
      />
      <Button text="Add task" onClick={addTask} />
      <div>
        {tasks.map((task: any) => {
          return <TodoItem key={task.id} title={task.title} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
