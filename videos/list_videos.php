<?php
$dir = dirname(__FILE__) . '/';
$videos = array_diff(scandir($dir), array('.', '..'));
echo json_encode(array_values($videos));
?>
