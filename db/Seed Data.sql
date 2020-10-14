
-- Seed Data
use [RuntimeTerror]

-- City
if not exists (
		select *
		from City
		)
begin
	set identity_insert [dbo].[City] on

	insert [dbo].[City] (
		[CityId]
		,[CityName]
		)
	values (
		1
		,N'Pune'
		)

	insert [dbo].[City] (
		[CityId]
		,[CityName]
		)
	values (
		2
		,N'Mumbai'
		)

	insert [dbo].[City] (
		[CityId]
		,[CityName]
		)
	values (
		3
		,N'Bangalore'
		)

	insert [dbo].[City] (
		[CityId]
		,[CityName]
		)
	values (
		4
		,N'Hyderabad'
		)

	insert [dbo].[City] (
		[CityId]
		,[CityName]
		)
	values (
		5
		,N'Chennai'
		)

	insert [dbo].[City] (
		[CityId]
		,[CityName]
		)
	values (
		6
		,N'Kolkata'
		)

	insert [dbo].[City] (
		[CityId]
		,[CityName]
		)
	values (
		7
		,N'Ahmedabad'
		)

	insert [dbo].[City] (
		[CityId]
		,[CityName]
		)
	values (
		8
		,N'Delhi'
		)

	set identity_insert [dbo].[City] off
end

-- Area Seed Data
if not exists (
		select *
		from Area
		)
begin
	set identity_insert [dbo].[Area] on

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		1
		,N'Pimple Saudagar'
		,1
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		2
		,N'Wakad'
		,1
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		3
		,N'Aundh'
		,1
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		4
		,N'Shivaji Nagar'
		,1
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		5
		,N'Camp'
		,1
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		6
		,N'FC Road'
		,1
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		7
		,N'MG Road'
		,1
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		8
		,N'JM Road'
		,1
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		9
		,N'Katraj'
		,1
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		10
		,N'Hinjewadi'
		,1
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		11
		,N'Viman Nagar'
		,1
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		12
		,N'Andheri'
		,2
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		13
		,N'Bandra'
		,2
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		14
		,N'Borivali'
		,2
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		15
		,N'Kurla'
		,2
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		16
		,N'Kalyan'
		,2
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		17
		,N'Dadar'
		,2
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		18
		,N'Colaba'
		,2
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		19
		,N'Byculla'
		,2
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		20
		,N'Koramangala'
		,3
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		21
		,N'Indira Nagar'
		,3
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		22
		,N'MG Road'
		,3
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		23
		,N'Richmond Town'
		,3
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		24
		,N'BTM Layout'
		,3
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		25
		,N'Charminar'
		,4
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		26
		,N'Kukatpally'
		,4
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		27
		,N'LB Nagar'
		,4
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		28
		,N'Serilingampally'
		,4
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		29
		,N'Secunderabad'
		,4
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		30
		,N'Khairatabad'
		,4
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		31
		,N'North Delhi'
		,8
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		32
		,N'South Delhi'
		,8
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		33
		,N'Central'
		,8
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		34
		,N'West'
		,8
		)

	insert [dbo].[Area] (
		[AreaId]
		,[AreaName]
		,[CityId]
		)
	values (
		35
		,N'Shahdara'
		,8
		)

	set identity_insert [dbo].[Area] off
end

-- Property Type
if not exists (
		select *
		from PropertyType
		)
begin
	set identity_insert [dbo].[PropertyType] on

	insert [dbo].[PropertyType] (
		[TypeId]
		,[TypeName]
		)
	values (
		1
		,N'Complex'
		)

	insert [dbo].[PropertyType] (
		[TypeId]
		,[TypeName]
		)
	values (
		2
		,N'Flat - 1 BHK'
		)

	insert [dbo].[PropertyType] (
		[TypeId]
		,[TypeName]
		)
	values (
		3
		,N'Flat - 2 BHK'
		)

	insert [dbo].[PropertyType] (
		[TypeId]
		,[TypeName]
		)
	values (
		4
		,N'Flat - 3 BHK'
		)

	insert [dbo].[PropertyType] (
		[TypeId]
		,[TypeName]
		)
	values (
		5
		,N'Row House - 2 BHK'
		)

	insert [dbo].[PropertyType] (
		[TypeId]
		,[TypeName]
		)
	values (
		6
		,N'Row House - 3 BHK'
		)

	insert [dbo].[PropertyType] (
		[TypeId]
		,[TypeName]
		)
	values (
		7
		,N'Row House - 4 BHK'
		)

	set identity_insert [dbo].[PropertyType] off
end
