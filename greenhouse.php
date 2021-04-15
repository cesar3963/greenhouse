<?php
$file_location = "/sys/bus/w1/devices/28-3c01d0753255/w1_slave";
$the_file = fopen($file_location,"r");
$file_contents = fread($the_file,200);
fclose($the_file);
echo($file_contents);
echo("<br/>");
echo(strlen($file_contents));
echo("<br/>");
echo(substr($file_contents,-6));
?>
