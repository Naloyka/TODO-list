import {loadTaskState} from "./loadStateTask";
import {loadRemoteTasks} from "./loadRemoteTasks";
import {getTaskHTML} from "./getTaskHTML";
import { deleteTask } from "./deleteTask";
import { checked } from "./checked";
import { load } from "./load";
import { changeIconOptions, filterStateTasks, hideSelect } from "./option";
import { closePopup } from "./closePopup";
import { addTask } from "./addTask";

addTask()
loadTaskState()
deleteTask()
loadRemoteTasks();
filterStateTasks()
changeIconOptions()
hideSelect()
closePopup()
addTask()