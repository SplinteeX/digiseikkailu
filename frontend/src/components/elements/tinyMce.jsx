import { Editor } from "@tinymce/tinymce-react";
import React from "react";

const TinyMCE = ({ text }) => {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  return (
    <Editor
      className="editor"
      apiKey="9fyz12w35innexu8lo4m92onoqawl4227b4bmbryjgbl8uy5"
      initialValue={text ? text : ""}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help",
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyMCE;
