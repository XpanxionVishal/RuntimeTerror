create table UserType (
	UserTypeId int primary key identity(1, 1)
	,TypeName nvarchar(256)
	)

create table [User] (
	UserId int primary key identity(1, 1)
	,[Name] nvarchar(256)
	,Email nvarchar(256) unique
	,UserTypeId int foreign key references UserType(UserTypeId)
	)

create table City (
	CityId int primary key identity(1, 1)
	,CityName nvarchar(256)
	)

create table Area (
	AreaId int primary key identity(1, 1)
	,AreaName nvarchar(256)
	,CityId int foreign key references City(CityId)
	)

create table PropertyType (
	TypeId int primary key identity(1, 1)
	,TypeName nvarchar(256)
	)

create table Property (
	PropertyId int primary key identity(1, 1)
	,PropertyTypeId int foreign key references PropertyType(TypeId)
	,AreaId int foreign key references Area(AreaId)
	,PostedBy int foreign key references [User]([UserId])
	,[Address] nvarchar(512)
	,OwnerName nvarchar(256)
	,CostPerDay decimal(18, 6)
	,IsOccupied bit
	,OccupiedBy int null foreign key references [User]([UserId])
	)

create table PropertyPhotos (
	PropertyPhotoId int primary key identity(1, 1)
	,PropertyId int foreign key references Property(PropertyId)
	,[Photo] varbinary(max)
)