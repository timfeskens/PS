<?php

    require_once 'config.inc.php';

    $id = $_GET['id'];

    $query = "DELETE FROM users WHERE id = '$id'";
    $result = mysqli_query($mysqli, $query);

    if ($result) {
        header('location: index.php');
        exit;
    } else {
        echo 'Please retry' . mysqli_error();
    }
?>