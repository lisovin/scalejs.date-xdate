param($installPath, $toolsPath, $package, $project)

$project |
	Add-Paths "{
		'scalejs.date-xdate' : 'Scripts/scalejs.date-xdate-$($package.Version)',
		'xdate'			: 'Scripts/xdate.dev'
	}" |
	Add-Shims "{ 
		xdate			: {
			exports : 'XDate'
		}
	}" |
	Add-ScalejsExtension 'scalejs.date-xdate' |
	Out-Null