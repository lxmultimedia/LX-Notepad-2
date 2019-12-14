CKEDITOR.editorConfig = function( config ) {
  config.toolbarGroups = [
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    { name: 'colors', groups: [ 'colors' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    { name: 'paragraph', groups: [ 'align', 'paragraph' ] },
    { name: 'links', groups: [ 'links' ] },
  ];

  config.removeButtons = 'Source';
  config.height = 600;
};
