<?php

$host = "localhost"; // Database host
$username = "your_username"; // Database username
$password = "your_password"; // Database password
$dbname = "your_database"; // Database name

// Establish a connection
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "************************************************************************";
// Create a table
$tableName = "users"; // Table name
$sql = "CREATE TABLE $tableName (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    age INT(3)
)";


echo "************************************************************************";

// Execute query
if (mysqli_query($conn, $sql)) {
    echo "Table $tableName created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

echo "************************************************************************";

// Insert data into the table
$name = "John Doe";
$email = "john@example.com";
$age = 25;

$sql = "INSERT INTO $tableName (name, email, age)
        VALUES ('$name', '$email', $age)";

// Execute query
if (mysqli_query($conn, $sql)) {
    echo "Data inserted successfully";
} else {
    echo "Error inserting data: " . mysqli_error($conn);
}

echo "************************************************************************";


// Retrieve data from the table
$sql = "SELECT * FROM $tableName";
$result = mysqli_query($conn, $sql);

// Check if records exist
if (mysqli_num_rows($result) > 0) {
    // Output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . " - Age: " . $row["age"] . "<br>";
    }
} else {
    echo "No records found";
}



// Close the connection
mysqli_close($conn);

