<table cellspacing="2" cellpadding="4" bgcolor="#ffffff">
	<tr>
		<td align="left" bgcolor="#add8e6">
			<a href="./index.html"><font color="#ffffff" size="3">Top Menu</font></a>
		</td>
	</tr>
	<tr>
		<td align="left" bgcolor="#add8e6">
			<a href="./performers.html"><font color="#ffffff" size="3">Profile</font></a>
		</td>
	</tr>
	<tr>
		<td align="left" bgcolor="#add8e6">
			<a href="./arrange.html"><font color="#ffffff" size="3">Music(Classic)</font></a>
		</td>
	</tr>
	<tr>
		<td align="left" bgcolor="#add8e6">
			<a href="./vocaloid.html"><font color="#ffffff" size="3">Music(Vocaloid)</font></a>
		</td>
	</tr>
	<tr>
		<td align="left" bgcolor="#add8e6">
			<a href="./music.html"><font color="#ffffff" size="3">Music(Inst)</font></a>
		</td>
	</tr>
	<tr>
		<td align="left" bgcolor="#add8e6">
			<a href="./rules.html"><font color="#ffffff" size="3">Rules of Use</font></a>
		</td>
	</tr>
	<tr>
		<td align="left" bgcolor="#add8e6">
			<a href="./application.html"><font color="#ffffff" size="3">Application</font></a>
		</td>
	</tr>
	<tr>
		<td align="left" bgcolor="#add8e6">
			<a href="./bbs.php"><font color="#ffffff" size="3">BBS</font></a>
		</td>
	</tr>
	<tr>
		<td align="left" bgcolor="#add8e6">
			<a href="./backstage.html"><font color="#ffffff" size="3">Tweet Log</font></a>
		</td>
	</tr>
	<tr>
		<td align="left" bgcolor="#add8e6">
			<a href="./link.html"><font color="#ffffff" size="3">Links</font></a>
		</td>
	</tr>
	<tr>
		<td align="left" bgcolor="#add8e6">
			<font color="#ffffff" size="3">
				<?php
					$counter_file = 'count.txt';
					$counter_lenght = 8;
					$fp = fopen($counter_file, 'r+');
					if ($fp) {
					    if (flock($fp, LOCK_EX)) {
					        $counter = fgets($fp, $counter_lenght);
					        $counter++;
					        rewind($fp);
					        if (fwrite($fp,  $counter) === FALSE) {
					            echo ('<p>'.'ÉtÉ@ÉCÉãèëÇ´çûÇ›Ç…é∏îsÇµÇ‹ÇµÇΩ'.'</p>');
					        }
					        flock ($fp, LOCK_UN);
					    }
					}
					fclose ($fp);

					echo ('Counter : '.$counter);
				?>
			</font>
		</td>
	</tr>
</table>
