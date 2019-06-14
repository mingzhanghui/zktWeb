<?php

// touch /tmp/gatsby.log
// chmod a+w /tmp/gatsby.log
// php -S 0.0.0.0:8088
// curl -i http://172.16.0.224:8088/trigger.php

header("Content-Type:", "application/json; charset=UTF-8");
header("Access-Control-Allow-Origin", "*");
header("Access-Control-Allow-Credentials", "true");

ini_set("max_execution_time", 300);

$cmd = "cd ../ && npm run build";
$ret = shell_exec($cmd);

// file_put_contents("/tmp/gatsby-" . date("YmdHis", time()) . ".log", $ret);
file_put_contents("/tmp/gatsby.log", $ret);

echo json_encode(array(
    "code" => 0,
    "data" => null,
    "message" => sprintf("Executed %s...", $cmd),
));
