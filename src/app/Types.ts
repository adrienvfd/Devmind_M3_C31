export type Note = NoteInfo & {
    id: number
}

export type NoteInfo = {
    title: string,
    description: string
}