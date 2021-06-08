import React, {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import './App.css'
import { NavigateNextOutlined } from '@material-ui/icons';
import NoteList from './components/NoteList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: "3/5/2020"
    },
    {
        id: nanoid,
        text: 'This is my second note!',
        date: "1/7/2019"
    },
     {
        id: nanoid,
        text: 'This is my thirt note!',
        date: "4/9/2020"
     },
]);
  
const addNote = (text) => {

   const date = new Date();

   const newNote = {
       text: text,
       id: nanoid(),
       date: date.toLocaleDateString()
   }

   const newNotes = [...notes, newNote];
   setNotes(newNotes);

}

const DeleteNote = (id) => {
   const newNotes = notes.filter((note) => note.id !== id);
   setNotes(newNotes);
}

const [searchText, setSearchText] = useState('');

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data'));

      if (savedNotes) {
        setNotes(savedNotes);
      }
}, [])

useEffect(() => {
   localStorage.setItem('react-notes-app-data',
    JSON.stringify(notes));
}, [notes])

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
      <Header handleToggleMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NoteList notes={notes.filter((note) => 
      note.text.toLowerCase().includes(searchText)
      )} 
      handleAddNote={addNote}
      handleDelete={DeleteNote}
      />
    </div>
    </div>
  )
}

export default App;

