<?php 

	require_once 'config.inc.php';

	$query = 'SELECT * FROM users';
	$result = mysqli_query($mysqli, $query);
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Home</title>
		<link rel="stylesheet" href="main.css">
	</head>
	<body>
		<div class="block">
			<div class="block__title">
				Users
			</div>
			<div class="block__info-holder">
				<div class="block__info--titles">
					<div class="block__data block__data--title">
						First name
					</div>
					<div class="block__data block__data--title">
						Last name
					</div>
					<div class="block__data block__data--title">
						City
					</div>
					<div class="block__data block__data--title">
						Gender
					</div>
					<div class="block__data block__data--title">
						Rules
					</div>
					<div class="block__data block__data--title">
						
					</div>
				</div>
				<?php while ($row = mysqli_fetch_array($result)) {?>
					<div class="block__info">
						<div class="block__data">
							<?php echo $row['first_name']; ?>
						</div>
						<div class="block__data">
							<?php echo $row['last_name']; ?>
						</div>
						<div class="block__data">
							<?php echo $row['city']; ?>
						</div>
						<div class="block__data">
							<?php echo $row['gender']; ?>
						</div>
						<div class="block__data">
							<?php echo $row['rules']; ?>
						</div>
						<div class="block__data">
							<a href="/delete.php?id=<?php echo $row['id']; ?>">Delete</a>
						</div>
					</div>
				<?php } ?>
			</div>
			<hr>
			<form action="/send.php" method="POST">
				<div class="block__form">
					<div class="block__input-holder--title">
						<div class="block__input-title"> 
							First name
						</div>
						<div class="block__input-title"> 
							Last name
						</div>
						<div class="block__input-title"> 
							City
						</div>
					</div>
					<div class="block__input-holder">
						<input type="text" name="first_name" required>
						<input type="text" name="last_name" required>
						<input type="text" name="city" required>
					</div>
					<div class="block__input-holder--title">
						<div class="block__input-title"> 
							Gender
						</div>
						<div class="block__input-title"> 
							Rules
						</div>
					</div>
					<div class="block__input-holder--small">
						<select name="gender" required>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="dinosaur">Dinosaur</option>
							<option value="other">Other</option>
						</select>
						<div><input type="checkbox" name="rules" value="Yes"> I agree</div>
					</div>
					<input type="submit" value="Send" class="block__input-button">
				</div>
			</form>
		</div>
	</body>
</html>
