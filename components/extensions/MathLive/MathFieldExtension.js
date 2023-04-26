// MathFieldExtension.js
import { Node } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import MathFieldComponent from '@/components/extensions/MathLive/MathFieldComponent.vue'

export default Node.create({
  name: 'mathField',
  group: 'inline',
  inline: true,
  content: null,
  atom: true,

  addAttributes() {
    return {
      latex: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-katex].latex',
        getAttrs: (dom) => {
          try {
            return {
              latex: dom.innerHTML,
            };
          } catch (error) {
            console.error('Error in parseHTML:', error);
            return null;
          }
        },
      },
    ];
  },

  renderHTML({ node }) {
    return [
      'span',
      {
        'data-katex': 'true',
        class: 'latex',
      },
      node.attrs.latex
    ]
  },

  addNodeView() {
    return VueNodeViewRenderer(MathFieldComponent);
  },
})
