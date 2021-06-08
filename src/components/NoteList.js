import React from 'react'
import AddNote from './AddNote';
import Note from './Note';

const NoteList = ({notes, handleAddNote, handleDelete }) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => 
            <Note id={note.id} text={note.text} date={note.date}
            handleDelete={handleDelete}
            />
            )}
            <AddNote handleAddNote={handleAddNote}  />
        </div>
    )
}

export default NoteList;
