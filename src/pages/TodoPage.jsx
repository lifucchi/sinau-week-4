import { useRef, useState } from "react";
import { ItemNotesLayout } from "../layouts/ItemNotesLayout";

const TodoPage = () => {
  const [notes, setNote] = useState(["Ini catatan"]);
  const [editing, setEditing] = useState(null);
  const inputNote = useRef(null);

  const actionSubmit = () => {
    if (inputNote.current.value === "") {
      alert("Note tidak boleh kosong");
      return;
    }
    setNote([...notes, inputNote.current.value]);
    inputNote.current.value = "";
  };

  const hapusAction = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNote(newNotes);
  };

  const ubahAction = (index, ubahNote) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1, ubahNote);
    setNote(newNotes);
    setEditing(null);
  };

  return (
    <>
      <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div class="bg-white rounded shadow p-12 m-6 w-full lg:w-4/5 lg:max-w-lg">
          <div class="mb-4">
            <h2 class="text-grey-darkest text-4xl">Todo List</h2>
            <div class="flex mt-4">
              <input ref={inputNote} type="text" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Tambah Todo" />
              <button class="bg-blue-500 flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" onClick={actionSubmit}>
                Tambah
              </button>
            </div>
          </div>

          <div>
            {notes.map((note, index) => {
              return <ItemNotesLayout key={index} index={index} note={note} hapusAction={hapusAction} ubahAction={ubahAction} editing={editing} setEditing={setEditing} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
