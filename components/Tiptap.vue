<template>
    <editor-toolbar :editor="editor" />
    <editor-content class="editor-content" :editor="editor" />
  </template>
  
<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import MathFieldExtension from './extensions/MathLive/MathFieldExtension'


export default {
    components: {
        EditorContent,
    },

    data() {
        return {
            editor: null,
        }
    },

    mounted() {
        this.editor = new Editor({
            content: '<p>I am running Tiptap with Vue.js. 🎉</p>',
            extensions: [
                StarterKit,
                MathFieldExtension
            ],
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>

<style>
.editor-content {
    border: 1px dotted grey;
}
</style>