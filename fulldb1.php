<?php
  include "database.php";

  $data = $graphs['fatturato'];

  $level = $_GET['level'];

  switch ($data['access']) {

    case 'guest':
    echo json_encode($data);
      break;

    case 'employee':
    if($level == 'employee' || $level == 'clevel')
    {
      echo json_encode($data);
    }
    else {
      echo json_encode('no permission');
    }
      break;

    case 'clevel':
    if($level == 'clevel')
    {
      echo json_encode($data);
    }
    else {
      echo json_encode('no permission');
    }
      break;
  }

?>
