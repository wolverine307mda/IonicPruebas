import { Component, OnInit } from '@angular/core';

interface Note {
  title: string;
  content: string;
  date: Date;
  editing?: boolean;
  originalTitle?: string;
  originalContent?: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  notes: Note[] = [];
  newNoteTitle: string = '';
  newNoteContent: string = '';
  private readonly STORAGE_KEY = 'user_notes';

  constructor() {}

  ngOnInit() {
    this.loadNotes();
  }

  addNote() {
    if (this.newNoteTitle.trim() && this.newNoteContent.trim()) {
      const newNote: Note = {
        title: this.newNoteTitle.trim(),
        content: this.newNoteContent.trim(),
        date: new Date(),
        editing: false
      };

      this.notes.unshift(newNote);
      this.saveNotes();
      
      // Limpiar el formulario
      this.newNoteTitle = '';
      this.newNoteContent = '';
    }
  }

  editNote(index: number) {
    const note = this.notes[index];
    note.originalTitle = note.title;
    note.originalContent = note.content;
    note.editing = true;
  }

  saveNote(index: number) {
    const note = this.notes[index];
    note.editing = false;
    note.date = new Date(); // Actualizar fecha de modificación
    delete note.originalTitle;
    delete note.originalContent;
    this.saveNotes();
  }

  cancelEdit(index: number) {
    const note = this.notes[index];
    if (note.originalTitle !== undefined) {
      note.title = note.originalTitle;
    }
    if (note.originalContent !== undefined) {
      note.content = note.originalContent;
    }
    note.editing = false;
    delete note.originalTitle;
    delete note.originalContent;
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.saveNotes();
  }

  getFormattedDate(date: Date): string {
    const now = new Date();
    const noteDate = new Date(date);
    const diffTime = Math.abs(now.getTime() - noteDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return 'Hoy';
    } else if (diffDays === 2) {
      return 'Ayer';
    } else if (diffDays <= 7) {
      return `Hace ${diffDays - 1} días`;
    } else {
      return noteDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  }

  private saveNotes() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.notes));
    } catch (error) {
      console.error('Error saving notes:', error);
    }
  }

  private loadNotes() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.notes = JSON.parse(stored).map((note: any) => ({
          ...note,
          date: new Date(note.date),
          editing: false
        }));
      }
    } catch (error) {
      console.error('Error loading notes:', error);
      this.notes = [];
    }
  }
}
