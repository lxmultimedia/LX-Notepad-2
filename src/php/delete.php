<?php
  $id = $_POST['id'];
  $fname = "notes/".$id.".txt";
  unlink ($fname);
?>
