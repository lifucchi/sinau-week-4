import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";

export const ItemNotesLayout = ({ index, note, hapusAction, ubahAction, editing, setEditing }) => {
  const [isDone, setDone] = useState(false);
  const [newTask, setNewTask] = useState(note);

  const handleUpdate = (e) => {
    e.preventDefault();
    ubahAction(index, newTask);
  };
  useEffect(() => {
    if (editing === index) {
      setNewTask(note);
    }
  }, [note, editing, index]);

  const doneAction = () => {
    setDone(true);
  };

  return (
    <div className="flex mb-4 items-center">
      {editing === index ? (
        <form onSubmit={handleUpdate}>
          <input class="w-full text-grey-darkest" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button class="bg-blue-500 flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" type="submit">
            Simpan
          </button>
          <button class=" bg-red-500 flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" type="button" onClick={() => setEditing(null)}>
            Batal
          </button>
        </form>
      ) : (
        <>
          <p key={index} class="w-full text-grey-darkest overflow-hidden" style={isDone ? { textDecoration: "line-through", wordWrap: "break-word" } : { wordWrap: "break-word" }}>
            {note}
          </p>
          <button hidden={isDone} class="bg-green-500 flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={() => doneAction()} style={{ margin: "5px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </button>
          <button class="bg-red-500 flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={() => hapusAction(index)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <button class="bg-blue-500 flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={() => setEditing(index)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

ItemNotesLayout.propTypes = {
  index: PropTypes.number.isRequired,
  note: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
  hapusAction: PropTypes.func.isRequired,
  editing: PropTypes.number,
  setEditing: PropTypes.func.isRequired,
};
