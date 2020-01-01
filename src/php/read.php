<?php

$out = array();
foreach (glob('notes/*.txt') as $filename) {
    $p = pathinfo($filename);
    $filename = $p['filename'].".txt";
    $filecontent = file_get_contents("notes/".$filename);
    $out[] = $filecontent;
}

if (count($out)==0) {
	return "";
} else {
	echo json_encode($out);
}
?>
