-- Seed Data
use [RuntimeTerror]

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
