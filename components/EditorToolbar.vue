<template>
    <div class="editor-toolbar">
      <button @click="toggleBold">Bold</button>
      <button @click="insertMathField">Insert Math Field</button>
      <button @click="getContent">Get Content</button>
    </div>
</template>
  
<script>
export default {
    props: {
        editor: {
        required: true,
        },
    },
    methods: {
        toggleBold() {
            this.editor.chain().focus().toggleBold().run();
        },
        insertMathField() {
            this.editor.chain().focus().insertContent({ type: 'mathField' }).run();
        },
        getContent() {
            console.log(this.editor.getHTML())
        }
    },
};
</script>

<style>
.editor-toolbar {
    border: 1px solid black;
    margin-bottom: 1rem;
}
</style>