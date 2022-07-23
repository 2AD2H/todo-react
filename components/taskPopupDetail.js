import Image from "next/image";
import { deleteTask, updateTask } from "../lib/api";
import { useTodoContext } from "./contexts/todoContext";
import { useState, useEffect } from "react";
import classNames from "classnames";

const TaskPopupDetail = (props) => {
  const ctx = useTodoContext();
  const { setTaskId } = ctx;
  const [tempNote, setTempNote] = useState(props?.task?.note);

  useEffect(() => {
    setTempNote(props?.task?.note);
  }, [props]);

  const starCss = classNames("", {
    ["invert"]: props?.task?.isImportant,
    ["invert-0"]: !props?.task?.isImportant,
  });

  const OnClickHandleClose = () => {
    setTaskId(null);
  };

  const OnClickHandleDelete = async () => {
    await deleteTask(props?.task?.id, ctx);
  };

  const handleNoteInput = (event) => {
    const el = event.currentTarget;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  const handleNoteInputCommit = async (event) => {
    if (!ctx) return;
    await updateTask({ id: props?.task?.id, note: tempNote }, ctx);
    setTaskId(null);
  };

  const handleChangeText = (event) => {
    setTempNote(event.currentTarget.value);
  };

  const OnHandleClickCheckbox = async (event) => {
    event.stopPropagation();
    await updateTask(
      { id: props?.task?.id, isCompleted: !props?.task?.isCompleted },
      ctx
    );
  };

  const handleToggerImportant = async (event) => {
    event.stopPropagation();
    await updateTask(
      { id: props?.task?.id, isImportant: !props?.task?.isImportant },
      ctx
    );
  };

  return (
    <div className="relative">
      <div className="bg-slate-900 w-full h-full max-w-[30rem] p-6">
        <div className="absolute top-0 left-0 right-0 h-12 flex justify-end px-2">
          <button onClick={OnClickHandleClose} className="">
            ▶️
          </button>
        </div>
        <div className="flex flex-col gap-5 pt-14">
          {/* task here */}
          <div className="bg-neutral-600 p-7 min-h-[4rem] w-full flex rounded-md gap-10">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="rounded-full"
                checked={props?.task?.isCompleted}
                onChange={OnHandleClickCheckbox}
              ></input>
            </div>
            <input
              type="text"
              className=" bg-neutral-600 border-0 cursor-text text-white"
              value={props?.task?.name}
            ></input>
            <div className="flex items-center">
              {/* <Image src="/star.svg" height={22} width={22}></Image> */}
              <div className="h-[22px] w-[22px]">
                <button onClick={handleToggerImportant}>
                  <img src="/star.svg" className={starCss}></img>
                </button>
              </div>
            </div>
          </div>
          {/* button to add task */}
          <div className="bg-neutral-600 p-7 min-h-[4rem] w-full flex rounded-md gap-10">
            <div className="flex items-center">✨</div>
            <div className="flex items-center text-white">Add To My Day</div>
          </div>
          {/* note area */}
          <textarea
            className="bg-slate-500 text-neutral-300 rounded-md resize-none border-none placeholder:text-slate-400"
            placeholder="Note for this task..."
            rows={4}
            onInput={handleNoteInput}
            onBlur={handleNoteInputCommit}
            value={tempNote}
            onChange={handleChangeText}
          ></textarea>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 flex justify-end px-2">
          <button className="" onClick={OnClickHandleDelete}>
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};
export default TaskPopupDetail;
