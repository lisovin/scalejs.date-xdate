param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.date-xdate, xdate' |
	Remove-ScalejsExtension 'scalejs.date-xdate' |
	Out-Null
