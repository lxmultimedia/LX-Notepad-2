<?php

  $id = $_POST['id'];
  $title = $_POST['title'];
  $text = $_POST['text'];
  $fname = $id . ".txt";

  $file = fopen("notes/".$fname, 'w');
  fwrite($file, $id."|||".$title."|||".$text);
  fclose($file);

?>
