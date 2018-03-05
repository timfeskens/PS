<?php

    require_once 'config.inc.php';

    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $city = $_POST['city'];
    $gender = $_POST['gender'];
    $rules = $_POST['rules'];

    if (strlen($first_name) > 0 && strlen($last_name) > 0 && strlen($city) > 0 && strlen($gender) > 0) {
        $query = "INSERT INTO users (first_name, last_name, city, gender, rules) VALUES ('$first_name', '$last_name', '$city', '$gender', '$rules')";
        $result = mysqli_query($mysqli, $query);

        if ($result) {
            // echo 'Yay';
            header('location: index.php');
            exit;
        } else {
            echo 'Please retry <br>' . $rules . $gender;
        }
    }
?>