import React from 'react';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';

import css from './TasksColumn.module.css';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';

export const TasksColumn = ({ title, tasks }) => {
  return (
    <div className={css.task_column}>
      <ColumnHeadBar title={title} tasks={tasks} />
      {tasks ? <ColumnTasksList tasks={tasks} /> : <p>No tasks available.</p>}
      <AddTaskBtn tasks={tasks} />
    </div>
  );
};
