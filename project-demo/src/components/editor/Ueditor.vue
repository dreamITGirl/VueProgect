<template>
    <div class="ueditor-content">
        <div type="text/plain" :id="ueditOr"></div>
    </div>
</template>
<script>
import '../../static/UE/ueditor.config';
import '../../static/UE/ueditor.all.js';
import '../../static/UE/lang/zh-cn/zh-cn.js';
// import '../../static/UE/ueditor.parse.js';
export default {
    name: "UE",
    data() {
        return {
            editor: null,
            allowDivTransToP: false, //阻止div标签自动转换为p标签
            ueditOr: this.id || "ueditor-" + Math.random() //设置Id
        };
    },
    props: {
        defaultMsg: {
            type: String,
            default: '',
        },
        config: {
            type: Object,
            default () {
                return {
                    initialFrameWidth: null,
                    initialFrameHeight: 150,
                    toolbars: [
                        [
                            'fullscreen', 
                            'undo', 
                            'redo', 
                            '|', 
                            'bold', 
                            'italic', 
                            'underline', 
                            'fontborder',
                            'strikethrough', 
                            '|', 
                            'simpleupload', 
                            'insertimage',
                            '|', 
                            'superscript', 
                            'subscript', 
                            '|', 
                            'forecolor', 
                            'backcolor', 
                            '|', 
                            'removeformat',
                            // 'formatmatch',
                            '|', 
                            'insertorderedlist', 
                            'insertunorderedlist',
                            '|', 
                            'selectall', 
                            'cleardoc', 
                            'fontfamily', 
                            'fontsize', 
                            'justifyleft',
                            'justifyright', 
                            'justifycenter', 
                            'justifyjustify', 
                            '|',
                            'link', 
                            'unlink'
                        ]
                    ],
                }
            }
        },
        id: {
            type: String,
        },
        value: {
            type: String,
            default: ''
        }
    },
    computed: {
        ueContent: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit("input", val);
            }
        }
    },
    mounted() {
        this.editor = UE.getEditor(this.ueditOr || this.id, this.config); // 初始化UE
        this.editor.addListener("ready", () => {
            this.editor.setContent(this.defaultMsg || this.ueContent);    // UE加载完成后，放入内容。
        });
        this.editor.addListener("contentChange", () => {                  // 编辑区内容change事件
            this.ueContent = this.editor.getContent();
            this.$emit('changeFnUe', this.editor.getContentTxt())
        });
        this.editor.addListener('blur',() => {                            //失去焦点事件
            this.$emit('uptAnsOpt' )
        });
    },
    methods: {
        // 获取内容方法html
        getUEContent() {
            return this.editor.getContent();
        },
        // 获取纯文本内容方法
        getUEContentTxt() {
            return this.editor.getContentTxt();
        },
        // 设置内容
        setUEContent(value) {
            return this.editor.setContent(value);
        },
        // 设置当前编辑区域不可编辑
        setDisable() {
            return this.editor.setDisabled();
        },
        //清空doc
        clearContent() {
            return this.editor.execCommand("cleardoc");
        },
        //焦点事件
        getFocus(cont) {
            this.editor.focus();
            this.editor.execCommand('inserthtml', cont);
        }
    },
    destroyed() {
        this.editor.destroy();
    }
}
</script>
<style lang="scss" scoped>
    // .ueditor-content {
    //     .edui-default .edui-editor-bottomContainer {
    //         display: none !important;
    //     }
    // }
</style>
