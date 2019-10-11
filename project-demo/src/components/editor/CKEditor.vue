<template>
    <div class="container">
        <textarea name="content" id="editor">This is some sample content.</textarea>
    </div>
</template>
<script>
import ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
export default {
    name:'ckeditor',
    data(){
        return {
           
        }
    },
    created(){
         ClassicEditor.create( document.querySelector( '#editor' ),{
           plugins:[Autoformat],
           toolbar:['heading','bold','italic','link'],
            heading: {
                options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                ]
            }
         } )
                                .then( editor => {
                                        console.log( editor );
                                } )
                                .catch( error => {
                                        console.error( error );
                                } );
    }
}
</script>