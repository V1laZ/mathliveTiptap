<template>
    <node-view-wrapper>
        <math-field style="width: 350px;" ref="mathfield">
            {{ node.attrs.latex }}
        </math-field>
    </node-view-wrapper>
</template>
  
<script>
import { NodeViewWrapper, nodeViewProps } from "@tiptap/vue-3";
import 'mathlive'

export default {
    name: 'MathFieldComponent',
    props: nodeViewProps,
    components: {
        NodeViewWrapper,
    },
    mounted() {
        this.$refs.mathfield.addEventListener("input", (ev) => {
            this.updateAttributes({ latex: ev.target.value })
        })

        this.$refs.mathfield.macros = {...this.$refs.mathfield.macros,
            minutes: '\\,{}^\\prime\\;',
            seconds: '\\,\\doubleprime\\;'
        }

        this.$refs.mathfield.inlineShortcuts = {...this.$refs.mathfield.inlineShortcuts,
            minutes: '\\minutes',
            seconds: '\\seconds'
        }

        mathVirtualKeyboard.layouts = [
            {
                label: 'Basic',
                rows: [
                    [
                        '[7]', '[8]', '[9]', '[+]', { label: '[separator]', width: 0.5 },
                        { class: 'small', latex: '\\frac{#@}{#0}' },
                        '\\varnothing', '\\infty', '\\in', '\\notin',
                        '[separator]',
                    ],
                    [
                        '[4]', '[5]', '[6]', '[-]', { label: '[separator]', width: 0.5 },
                        '[(]', '[)]', '\\lt', '\\le', '\\hat{=}', '[separator]',
                    ],
                    [
                        '[1]', '[2]', '[3]', '\\cdot', { label: '[separator]', width: 0.5 },
                        '[', ']', '\\gt', '\\ge',
    
                        { label: '[backspace]', width: 2 },
                    ],
                    [
                        { label: '[0]', width: 2 },
                        '[.]', '\\colon', { label: '[separator]', width: 0.5 },
                        '\\lbrace', '\\rbrace', '=', '\\ne', '[left]', '[right]',
                    ],
                ]
            },
            "alphabetic"
        ]
    }
}
</script>

<style>
.ProseMirror [contenteditable="false"] [contenteditable="true"] {
    white-space: normal !important;
}
</style>