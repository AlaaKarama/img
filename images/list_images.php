<?php
$dir = 'images/';
$images = array_diff(scandir($dir), array('.', '..'));
echo json_encode(array_values($images));
?>
